import { camelCase, upperFirst } from 'lodash'
import { cyan, green, read, readDir } from './utils'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { rimrafSync } from 'rimraf'
import unzipper from 'unzipper'

const name = (file: string) => upperFirst(camelCase(file.replace('.svg', ''))) + 'Icon'

export default async function () {
  console.log(cyan('Building icons...'))
  console.log()

  //
  // step 1: download icons
  //
  const tempDir = path.resolve(__filename, '../temp')

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir)
  }

  console.log('  - Downloading...')

  const lucide = await axios.get('https://github.com/lucide-icons/lucide/archive/refs/heads/main.zip', {
    responseType: 'stream',
  })

  //
  // step 2: unzip contents
  //
  console.log('  - Unzipping...')

  const zipPath = path.resolve(__filename, '../temp/lucide.zip')

  await new Promise(res => {
    const writer = fs.createWriteStream(zipPath)

    lucide.data.pipe(writer)

    writer.on('finish', res)
  })

  await new Promise(res => {
    const reader = fs.createReadStream(zipPath)

    reader.pipe(unzipper.Extract({ path: tempDir }))

    reader.on('close', res)
  })

  //
  // step 3: generate icon components
  //
  console.log('  - Writing components...')

  let names = []
  const srcDir = path.resolve(__filename, '../../src')

  if (fs.existsSync(srcDir)) {
    rimrafSync(srcDir)
  }

  fs.mkdirSync(srcDir)

  const files = readDir(tempDir, 'lucide-main/icons')
    .filter(file => file.endsWith('.svg'))

  files.forEach(file => {
    const icon = name(file)

    const svg = read(tempDir, 'lucide-main/icons', file)
      .toString()
      .split('\n')
      .map(line => `  ${line}`)
      .join('\n')
      .replace(/<svg/, `<svg\n    data-icon="${icon}"`)
      .replace(/\swidth="\d+"/, ' :width="width || size"')
      .replace(/\sheight="\d+"/, ' :height="height || size"')
      .replace(/\sstroke-width="\d+"/, ' :stroke-width="strokeWidth"')
      .trim()

    const component = `<template>
  ${svg}
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  height?: number | string
  size?: number | string
  strokeWidth?: number | string
  width?: number | string
}>(), {
  height: 0,
  size: 24,
  strokeWidth: 2,
  width: 0,
})
</script>\n`
  
      fs.writeFileSync(path.resolve(__filename, '../../src', icon + '.vue'), component)
    })

  //
  // step 4: write index file
  //
  console.log('  - Writing index...')

  let index = ''

  const indexPath = path.resolve(__filename, '../../src', 'index.ts')

  if (fs.existsSync(indexPath)) {
    rimrafSync(indexPath)
  }

  files.forEach(file => {
    const icon = name(file)

    index += `export { default as ${icon} } from './${icon}.vue'\n`
  })

  fs.writeFileSync(indexPath, index)

  //
  // cleanup
  //
  console.log('  - Cleanup...')

  rimrafSync(tempDir)

  console.log()
  console.log(green('Done'))
}
