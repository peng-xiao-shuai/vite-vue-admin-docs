import Theme from 'vitepress/theme'
import './custom.css'

export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.directive('href', {
      mounted(el, binding) {
        el.href = binding.value;
      }
    })
  }
}
