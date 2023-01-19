import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueLucide',
      fileName: 'vue-lucide',
    },
  },
  plugins: [
    vue(),
  ],
})