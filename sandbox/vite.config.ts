import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@bedard/vue-lucide',
        replacement: path.resolve(__dirname, '..'),
      },
    ],
  },
})
