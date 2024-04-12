---
layout: home

hero:  
  name: "かく郭琦" 
  text: "Front-end learning & Personal Blog "
  tagline: 一站式前端内容网站，个人博客
  image:
    src: /home.png
    alt: VitePress
  actions:
    - theme: brand
      text: 开始阅读
      link: /vitepress
    - theme: alt
      text: 学习圈子
      link: /algolia

features:
  - icon: 
      src: /vue.svg
    title: Vue
    details: 易学易用，性能出色，适用场景丰富的 Web 前端框架
  - icon: 
      src: /vite.svg
    title: Vite
    details: 下一代前端开发与构建工具
  - icon: 
      src: /vitePress.svg
    title: VitePress
    details: 静态站点生成器 (SSG)，专为构建快速、以内容为中心的站点而设计
---



<script setup>

import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/logo.jpg',
    name: 'かく郭琦',
    title: 'Creator By',
    links: [
      { icon: 'github', link: 'https://github.com/guoqiGG' },
      { icon: "instagram", link: "https://www.instagram.com/o" }
    ]
  },
 {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' },
    ]
  },
]
</script>

<div style="text-align:center;"><h3>核心成员</h3></div>

<VPTeamMembers class="member" size="small" :members="members" />
