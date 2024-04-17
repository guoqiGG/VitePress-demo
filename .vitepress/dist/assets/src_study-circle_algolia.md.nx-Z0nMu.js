import{_ as s,c as i,o as a,a4 as n,a5 as l,a6 as h}from"./chunks/framework.BUBVuFN_.js";const F=JSON.parse('{"title":"Algolia Search","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-circle/algolia.md","filePath":"src/study-circle/algolia.md","lastUpdated":1713320162000}'),p={name:"src/study-circle/algolia.md"},t=n(`<h1 id="algolia-search" tabindex="-1">Algolia Search <a class="header-anchor" href="#algolia-search" aria-label="Permalink to &quot;Algolia Search&quot;">​</a></h1><p>VitePress 支持使用 <a href="https://docsearch.algolia.com/docs/what-is-docsearch/" target="_blank" rel="noreferrer">Algolia DocSearch</a> 搜索文档站点。请参阅他们的入门指南。在你的 <code>.vitepress/config.ts</code> 中，你至少需要提供以下内容才能使其正常工作：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      provider: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;algolia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        appId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        apiKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        indexName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="algolia-docsearch-申请" tabindex="-1">Algolia DocSearch 申请 <a class="header-anchor" href="#algolia-docsearch-申请" aria-label="Permalink to &quot;Algolia DocSearch 申请&quot;">​</a></h2><ol><li>填写申请信息</li></ol><p><img src="`+l+'" alt="" loading="lazy"></p><ol start="2"><li>填完成后，大概等1-2天，会发邮件提示申请通过，邮箱里复带 <code>algolia docsearch</code> appId、apiKey、indexName 相关信息，添加到项目中即可正常使用</li></ol><p><img src="'+h+`" alt="" loading="lazy"></p><h2 id="转中文" tabindex="-1">转中文 <a class="header-anchor" href="#转中文" aria-label="Permalink to &quot;转中文&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      provider: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;algolia&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        appId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        apiKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        indexName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        locales: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          zh: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            placeholder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;搜索文档&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            translations: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              button: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                buttonText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;搜索文档&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                buttonAriaLabel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              modal: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                searchBox: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  resetButtonTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  resetButtonAriaLabel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  cancelButtonText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;取消&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  cancelButtonAriaLabel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;取消&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                startScreen: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  recentSearchesTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;搜索历史&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  noRecentSearchesText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;没有搜索历史&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  saveRecentSearchButtonTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;保存至搜索历史&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  removeRecentSearchButtonTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;从搜索历史中移除&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  favoriteSearchesTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;收藏&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  removeFavoriteSearchButtonTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                errorScreen: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  titleText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;无法获取结果&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  helpText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  selectText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;选择&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  navigateText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;切换&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  closeText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;关闭&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  searchByText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                noResultsScreen: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  noResultsText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  suggestedQueryText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你可以尝试查询&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  reportMissingResultsText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你认为该查询应该有结果？&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  reportMissingResultsLinkText: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,10),e=[t];function k(E,r,d,g,c,y){return a(),i("div",null,e)}const C=s(p,[["render",k]]);export{F as __pageData,C as default};
