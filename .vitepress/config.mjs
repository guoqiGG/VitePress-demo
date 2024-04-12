import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "かく郭琦",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  description: "一个 VitePress 网站",
  markdown: {
    math: true,
  },
  themeConfig: {
    // logo: "/logo.jpg",
    siteTitle: "かく郭琦",
    nav: [
      { text: "首页", link: "/" },
      { text: "学习圈子", link: "/vitepress" },
    ],

    sidebar: [
      {
        text: "学习圈子",
        collapsed: true,
        items: [
          { text: "vitePress", link: "/vitepress" },
          { text: "运行 API 案列", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/guoqiGG/VitePress-demo" }
    ],
    footer: {
      message: "用心去做高质量的专业前端内容网站，欢迎 star ⭐ 让更多人发现",
      copyright: "Copyright © 2024-present かく郭琦",
    },
    search: {
      provider: "algolia",
      options: {
        appId: "WIXSYLTY7D",
        apiKey: "8b328c573bbb02f7d79ddc5cafa02c9b",
        indexName: "test-guoqizz",
      },
    },
    editLink: {
      pattern: 'https://github.com/guoqiGG/VitePress-demo:path'
    }
  },
});
