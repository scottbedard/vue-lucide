import { defineConfig } from 'rollup'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import vue from 'rollup-plugin-vue'

export default defineConfig({
  external: [
    'vue',
  ],
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    vue(),
    typescript(),
  ],
})