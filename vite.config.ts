import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { MarkdownTransform } from './utils/markdown-transform';

export default defineConfig(async ({ mode }) => {
  return {
    plugins: [vueJsx(), MarkdownTransform()],
    server: {
      host: true,
    },
    ssr: { noExternal: ['element-plus', 'el-plus-powerful-table-ts'] },
    build: {
      chunkSizeWarningLimit: 1024,
    },
  };
});
