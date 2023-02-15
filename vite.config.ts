import path from 'path';
import { defineConfig } from 'vite';
import { MarkdownTransform } from './utils/markdown-transform';

export default defineConfig(async ({ mode }) => {
  return {
    plugins: [MarkdownTransform()],
    server: {
      host: true,
    },
    build: {
      chunkSizeWarningLimit: 1024,
    },
  };
});
