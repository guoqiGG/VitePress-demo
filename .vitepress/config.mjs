import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/VitePress-demo/",
  title: "かく郭琦",
  head: [
    ["link", { rel: "icon", href: "/VitePress-demo/favicon.ico" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-V28FP6TH6F",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-V28FP6TH6F');`,
    ],
  ],
  description: "一个 VitePress 网站",
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  appearance: "dark",
  themeConfig: {
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    outlineTitle: "页面导航",
    logo: "/logo.jpg",
    siteTitle: "かく郭琦",
    nav: [
      { text: "首页", link: "/" },
      { text: "学习圈子", link: "/src/study-circle/vitepress" },
      {
        text: "洞见",
        items: [
          { text: "随笔", link: "/src/insight/essay/home" },
          { text: "青葱岁月", link: "/src/insight/green-years/home" },
        ],
      },
    ],

    sidebar: {
      "/src/study-circle/": [
        {
          text: "学习圈子",
          items: [
            { text: "VitePress", link: "/src/study-circle/vitepress" },
            {
              text: "VitePress 使用 Algolia Search",
              link: "/src/study-circle/algolia",
            },
          ],
        },
      ],
      "/src/insight/essay/": [
        {
          text: "随笔",
          items: [{ text: "简介", link: "/src/insight/essay/home" }],
        },
      ],
      "/src/insight/green-years/": [
        {
          text: "青葱岁月",
          items: [{ text: "简介", link: "/src/insight/green-years/home" }],
        },
      ],
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#036ffc" fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2" clip-rule="evenodd"/></svg>',
        },
        link: "https://github.com/guoqiGG/VitePress-demo",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#036ffc" d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0m.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.198 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25m-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25m7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25"/></svg>',
        },
        link: "https://space.bilibili.com/66681587?spm_id_from=333.1007.0.0",
      },
    ],
    footer: {
      message: `用心去做高质量的专业前端内容网站，欢迎&nbsp;<a style='color:#3e63dd;' href="https://github.com/guoqiGG/VitePress-demo">star ⭐</a>&nbsp;让更多人发现`,
      copyright: "Copyright © 2024-present かく郭琦",
    },
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "WIXSYLTY7D",
    //     apiKey: "95e65003c8bc888022850ef322495f2f",
    //     indexName: "test-guoqizz",
    //     placeholder: "搜索文档",
    //     translations: {
    //       button: {
    //         buttonText: "搜索文档",
    //         buttonAriaLabel: "搜索文档",
    //       },
    //       modal: {
    //         searchBox: {
    //           resetButtonTitle: "清除查询条件",
    //           resetButtonAriaLabel: "清除查询条件",
    //           cancelButtonText: "取消",
    //           cancelButtonAriaLabel: "取消",
    //         },
    //         startScreen: {
    //           recentSearchesTitle: "搜索历史",
    //           noRecentSearchesText: "没有搜索历史",
    //           saveRecentSearchButtonTitle: "保存至搜索历史",
    //           removeRecentSearchButtonTitle: "从搜索历史中移除",
    //           favoriteSearchesTitle: "收藏",
    //           removeFavoriteSearchButtonTitle: "从收藏中移除",
    //         },
    //         errorScreen: {
    //           titleText: "无法获取结果",
    //           helpText: "你可能需要检查你的网络连接",
    //         },
    //         footer: {
    //           selectText: "选择",
    //           navigateText: "切换",
    //           closeText: "关闭",
    //           searchByText: "搜索提供者",
    //         },
    //         noResultsScreen: {
    //           noResultsText: "无法找到相关结果",
    //           suggestedQueryText: "你可以尝试查询",
    //           reportMissingResultsText: "你认为该查询应该有结果？",
    //           reportMissingResultsLinkText: "点击反馈",
    //         },
    //       },
    //     },
    //   },
    // },
    search: {
      provider: "local",
      options: {
        // 本地搜索插件的选项
        // 例如：
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
          },
        },
      },
    },
    editLink: {
      text: "在github上编辑此页面",
      pattern: "https://github.com/guoqiGG/VitePress-demo/blob/main/:path",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
