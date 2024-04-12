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
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    outlineTitle: '页面导航',
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
          { text: "VitePress", link: "/vitepress" },
          { text: "VitePress 使用 Algolia Search", link: "/algolia" },
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
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
      }
    }
  },
    editLink: {
      text:'在github上编辑此页面',
      pattern: 'https://github.com/guoqiGG/VitePress-demo/blob/main/:path'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    sidebarMenuLabel:'菜单',
    returnToTopLabel:'返回顶部'
  },
});
