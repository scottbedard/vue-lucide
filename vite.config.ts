import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'vue-lucide',
      formats: ['es'],
      name: 'index',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
    },
  },
  plugins: [
    dts(),
    vue(),
  ],
})