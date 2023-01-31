import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { MarkdownTransform } from './utils/markdown-transform';

export default defineConfig(async ({ mode }) => {
  return {
    server: {
      host: true,
    },
    plugins: [
      MarkdownTransform(),
    ]
  }
})
