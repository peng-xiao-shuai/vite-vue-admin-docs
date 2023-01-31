import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import PowerfulTable from 'el-plus-powerful-table-ts';
import 'element-plus/dist/index.css';
import 'el-plus-powerful-table-ts/lib/es/style.css';
import './styles/index.scss';
import { VPDemo, VPLayout, VPApiTyping } from '../components/index';
export default {
  ...DefaultTheme,
  Layout: VPLayout,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.component('Demo', VPDemo);
    app.component('ApiTyping', VPApiTyping);
    app.use(ElementPlus);
    app.use(PowerfulTable);
    console.log(app);
  },
};
