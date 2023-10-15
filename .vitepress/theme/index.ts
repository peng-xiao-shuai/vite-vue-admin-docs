import DefaultTheme from 'vitepress/theme';
import 'element-plus/theme-chalk/src/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'el-plus-powerful-table-ts/es/style.css';
import './styles/index.scss';
import { VPDemo, VPLayout, VPApiTyping, VPTag } from '../components/index';
export default {
  ...DefaultTheme,
  Layout: VPLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', VPDemo);
    app.component('Tag', VPTag);
    app.component('ApiTyping', VPApiTyping);
    if (typeof window !== 'undefined') {
      import('element-plus').then((module) => {
        app.use(module);
      });
      import('el-plus-powerful-table-ts/es').then((module) => {
        import('el-plus-powerful-table-ts/es/locale/packages').then(
          ({ LangKey }) => {
            app.use(module.default, {
              locale: {
                en: {
                  [LangKey.NoData]: '空',
                  [LangKey.PackUp]: '收起',
                  [LangKey.ReadFullText]: '展开阅读全文',
                },
                'zh-cn': {
                  [LangKey.NoData]: '空',
                  [LangKey.PackUp]: '收起',
                  [LangKey.ReadFullText]: '展开阅读全文',
                },
              },
            });
          }
        );
      });
    }
  },
};
