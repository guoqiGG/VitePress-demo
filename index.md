---
layout: home

hero:  
  name: "かく郭琦" 
 
  tagline: 一站式前端内容网站，个人博客
  image:
    src: /home.png
    alt: かく郭琦
  actions:
    - theme: brand
      text: 开始阅读
      link: /src/study-circle/vitepress
    - theme: alt
      text: 学习圈子
      link: /src/study-circle/algolia
    - theme: alt
      text: 洞见
      link: /src/insight/essay/home

features:
  - icon: 
      src: /vue.svg
    title: Vue
    details: 易学易用，性能出色，适用场景丰富的 Web 前端框架
    link: https://v3.cn.vuejs.org
    linkText: Vue 3 官网

  - icon: 
      src: /vite.svg
    title: Vite
    details: 下一代前端开发与构建工具
    link: https://vitejs.cn
    linkText: Vite 官网

  - icon: 
      src: /vitePress.svg
    title: VitePress
    details: 静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计
    link: https://vitepress.dev
    linkText: VitePress 官网
---

 <VPTeamPageTitle>
    <!-- <template #title>
     核心成员和贡献者
    </template> -->
    <template #lead>
    核心成员
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
    size="small"
  />
  
<script setup>

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
  } from 'vitepress/theme'

const members = [
  {
    avatar: 'logo.jpg',
    name: 'かく郭琦',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/guoqiGG' },
      {  icon: {
          svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#036ffc" d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0m.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.198 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25m-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25m7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25"/></svg>'
        }, link: "https://space.bilibili.com/66681587?spm_id_from=333.1007.0.0" }
    ],
    desc: '前端开发，技术分享',
    org: '个人',
    orgLink:'https://github.com/guoqiGG',
  },
  {
    avatar: 'logo.jpg',
    name: 'かく郭琦',
    title: '创作者',
    links: [
      { icon: 'github', link: 'https://github.com/guoqiGG' },
      {  icon: {
          svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#036ffc" d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0m.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.198 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25m-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25m7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25"/></svg>'
        }, link: "https://space.bilibili.com/66681587?spm_id_from=333.1007.0.0" }
    ],
    desc: '前端开发，技术分享',
    org: '个人',
    orgLink:'https://github.com/guoqiGG'
  },
]
</script>
