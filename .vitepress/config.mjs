import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "かく郭琦",
  description: "A VitePress Site",
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "案列", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "案列",
        items: [
          { text: "Markdown 案列", link: "/markdown-examples" },
          { text: "运行 API 案列", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/guoqiGG/VitePress-demo" },
    ],
    // algolia: {
    //   appId: "KM9NFXCSIQ",
    //   apiKey: "304298ae0579ca1480b39bdc0eb62aa1",
    //   indexName: "index",
    //   placeholder: "请输入关键词",
    //   buttonText: "搜索",
    // },
    search: {
      provider: 'algolia',
      options: {
        appId: 'KM9NFXCSIQ',
        apiKey: '304298ae0579ca1480b39bdc0eb62aa1',
        indexName: 'index',
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          }
        }
      }
    }
  },
});
