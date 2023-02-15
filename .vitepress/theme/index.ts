import DefaultTheme from 'vitepress/theme';
import 'element-plus/theme-chalk/src/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';
// import 'el-plus-powerful-table-ts/es/style.css';
import './styles/index.scss';
import { VPDemo, VPLayout, VPApiTyping } from '../components/index';
export default {
  ...DefaultTheme,
  Layout: VPLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Demo', VPDemo);
    app.component('ApiTyping', VPApiTyping);
    import('element-plus').then((module) => {
      app.use('ElementPlus', module);
    });
    if (typeof window !== 'undefined') {
      import('el-plus-powerful-table-ts/lib').then((module) => {
        console.log(module);

        app.use('PowerfulTable', module);
      });
    }
  },
};
