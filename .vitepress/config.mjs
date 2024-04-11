import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "かく郭琦",
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  description: "一个 VitePress 网站",
  markdown: {
    math: true,
  },
  themeConfig: {
    logo: "/logo.jpg",
    siteTitle: "かく郭琦",
    nav: [
      { text: "首页", link: "/" },
      { text: "案列", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "案列",
        collapsed: true,
        items: [
          { text: "Markdown 案列", link: "/markdown-examples" },
          { text: "运行 API 案列", link: "/api-examples" },
        ],
      },
    ],
    

    socialLinks: [
      { icon: "github", link: "https://github.com/guoqiGG/VitePress-demo" },
      { icon: "facebook", link: "https://github.com/guoqiGG/VitePress-demo" },
      { icon: "youtube", link: "https://github.com/guoqiGG/VitePress-demo" },
      { icon: "discord", link: "https://github.com/guoqiGG/VitePress-demo" },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present かく郭琦'
    },
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  },
  
});
