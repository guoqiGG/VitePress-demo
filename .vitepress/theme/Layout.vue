<!-- .vitepress/theme/Layout.vue -->

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

const { isDark } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
html.dark {
  color-scheme: dark;
}
.dark .VPContent {
  background-color: rgb(10, 10, 11);
  background-image: url("/grid.svg");
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

.vp-doc h2 {
  border-top: 0px;
  margin-top: 10px;
}

.VPMenuLink .link {
  line-height: 28px !important;
}

.VPSidebarGroup .link {
  padding: 3px 0 !important;
}


.medium-zoom-overlay {
  z-index: 20;
}

.medium-zoom-image {
  z-index: 21;
}

/**
 * Colors
 * -------------------------------------------------------------------------- */

 :root {
  --vp-c-accent: #35495e;
  --vp-c-brand: #06f;
  --vp-c-brand-dark: #3385ff;
  --vp-c-text-code: #5d6f5d;
  /* --vp-code-block-bg: rgba(125, 125, 125, 0.04); */
  --vp-c-disabled-bg: rgba(125, 125, 125, 0.2);
  /* fix contrast on gray cards: used by --vp-c-text-2 */
  --vp-c-brand-light: #4a8dea;
  --vp-c-text-light-2: rgba(56 56 56 / 70%);
  --cho-code-block-bg: rgba(125, 125, 125, 0.04);
}

.dark {
  --vp-code-block-bg: rgba(0, 0, 0, 0.2);
  --vp-c-text-code: #c0cec0;
  /* fix contrast on gray cards: check the same above (this is the default) */
  --vp-c-text-dark-2: rgba(235, 235, 235, 0.6);
  --vp-c-bg: rgb(10, 10, 11);
}

/**
 * Component: Code
 * -------------------------------------------------------------------------- */

:root {
  --vp-code-line-highlight-color: rgba(125, 125, 125, 0.2);
}

.dark {
  --vp-code-line-highlight-color: rgba(0, 0, 0, 0.5);
}

/**
 * Component: Button
 * -------------------------------------------------------------------------- */

:root {
  --vp-button-brand-border: var(--vp-c-brand-light);
  --vp-button-brand-bg: var(--vp-c-brand);
  --vp-button-brand-hover-border: var(--vp-c-brand-light);
  --vp-button-brand-hover-bg: var(--vp-c-brand-light);
  --vp-button-brand-active-border: var(--vp-c-brand-light);
  --vp-button-brand-active-bg: var(--vp-button-brand-bg);
}

/**
 * Component: Home
 * -------------------------------------------------------------------------- */

:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(
    120deg,
    #35495e -80%,
    #4a8dea
  );
  --vp-home-hero-image-background-image: linear-gradient(
    -45deg,
    #4a8dea 30%,
    #35495e80
  );
  --vp-home-hero-image-filter: blur(30px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

</style>