// // @ts-check
import { defineConfig } from 'vitepress';
import fs from 'fs';
import path from 'path';
import markdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import tableWrapper from '../utils/table-wrapper';
import tooltip from '../utils/tooltip';
import { highlight } from '../utils/highlight';
import pkg from '../package.json';

const md = markdownIt();
const docRoot = path.resolve(process.cwd() + '/');

/**
 * @type {import('vitepress').UserConfig}
 */
export default defineConfig({
  title: 'Vite-Vue-Admin',
  lang: 'zh-CN',
  description: '基于Vite.js & Vue.js的管理网站',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  // 最近更新时间
  lastUpdated: true,
  themeConfig: {
    // repo: pkg.repository,
    logo: '/logo.svg',
    // docsBranch: 'main',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '帮助我们改善此页面！',
    },
    lastUpdatedText: '最后更新时间',
    // 社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
    },
    //     algolia: {
    //       apiKey: 'b573aa848fd57fb47d693b531297403c',
    //       indexName: 'vitejs',
    //       searchParameters: {
    //         facetFilters: ['tags:cn']
    //       }
    //     },

    // carbonAds: {
    //   carbon: 'CEBIEK3N',
    //   placement: 'vitejsdev'
    // },

    nav: [
      { text: '指引', link: '/zh-CN/guide/' },
      {
        text: '组件 & 指令',
        link: '/zh-CN/component/',
      },
      {
        text: '相关链接',
        items: [
          {
            text: '更新日志',
            link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md',
          },
        ],
      },
    ],

    sidebar: {
      // '/config/': 'auto',
      // '/plugins': 'auto',
      // catch-all fallback,
      '/zh-CN/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '介绍',
              link: '/guide/',
            },
            {
              text: '为什么使用 Vite',
              link: '/guide/why',
            },
            {
              text: '开始',
              link: '/guide/start',
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin',
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr',
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript',
            },
            {
              text: '配置参考',
              link: '/config/',
            },
          ],
        },
      ],

      '/zh-CN/component/': [
        {
          text: '组件',
          items: [
            {
              text: '表格-文档',
              link: '/zh-CN/component/powerful-table-doc',
            },
            {
              text: '表格-示例',
              link: '/zh-CN/component/powerful-table-demo',
            },
          ],
        },
        {
          text: '指令',
          items: [],
        },
      ],
    },
  },
  markdown: {
    theme: { light: 'dark-plus', dark: 'dark-plus' },
    config: (md) => {
      md.use(tableWrapper);
      md.use(tooltip);
      // https://www.npmjs.com/package/markdown-it-container 自定义块级元素渲染
      md.use(mdContainer, 'demo', {
        // 验证器
        validate: function (params) {
          return !!params.trim().match(/^demo\s*(.*)$/);
        },
        render: function (tokens, idx) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          // https://markdown-it.github.io/markdown-it/#Token.prototype.nesting
          // 标签打开时 opening tag
          if (tokens[idx].nesting === 1) {
            // 获取demo后面的描述
            const description = m && m.length > 1 ? m[1] : '';

            // 拿到demo块中的tokens数据
            const sourceFileToken = tokens[idx + 2];
            /*到tokens中的content (也就是xxx/xxx格式内容)
            // 前提得是 如下格式
            :::demo

            xxx/xxx

            :::
            */
            const sourceFile = sourceFileToken.children?.[0].content ?? '';
            // 匹配上的文件中所有内容
            let source = '';
            if (sourceFileToken.type === 'inline') {
              // 读取文件内容
              source = fs.readFileSync(
                path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
                'utf-8'
              );
            }

            if (!source)
              throw new Error(`Incorrect source file: ${sourceFile}`);

            return `<Demo :demos="demos" source="${encodeURIComponent(
              highlight(source, 'vue')
            )}" path="${sourceFile}" raw-source="${encodeURIComponent(
              source
            )}" description="${encodeURIComponent(md.render(description))}">`;
          } else {
            // 关闭标签返回
            // closing tag
            return '</Demo>';
          }
        },
      });
    },
  },
});
