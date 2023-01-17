import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import eslint from '@rbnlffl/rollup-plugin-eslint'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  external: [
    'sortablejs',
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
    typescript(),
  ],
})