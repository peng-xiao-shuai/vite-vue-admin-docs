// @ts-check

const pkg = require('../package.json')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Vite-Vue-Admin',
  lang: 'zh-CN',
  description: '基于Vite.js & Vue.js的管理网站',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    repo: pkg.repository,
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      }
    },

    carbonAds: {
      carbon: 'CEBIEK3N',
      placement: 'vitejsdev'
    },

    nav: [
      { text: '指引', link: '/guide/' },
      {
        text: '组件 & 功能',
        items: [
          { 
            text: '组件-表格',
            // ariaLabel: 'Language Menu',
            link: '/component-nav/powerful-table'
          }
        ]
      },
      {
        text: '相关链接',
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
          }
        ]
      }
    ],

    sidebar: {
      // '/config/': 'auto',
      // '/plugins': 'auto',
      // catch-all fallback,
      '/': [
        {
          text: '指引',
          children: [
            {
              text: '介绍',
              link: '/guide/'
            },
            {
              text: '功能',
              link: '/guide/features'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            }
          ]
        },
        {
          text: 'API',
          children: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: '配置参考',
              link: '/config/'
            }
          ]
        }
      ]
    }
  }
}
