import { camelCase, upperFirst } from 'lodash'
import { cyan, green, sleep } from './utils'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { rimraf } from 'rimraf'
import unzipper from 'unzipper'

const name = (file: string) => upperFirst(camelCase(file.replace('.svg', ''))) + 'Icon'

async function generate () {
  console.log(cyan('Generating icons...'))
  console.log()

  //
  // step 1: download icons
  //
  const tempDir = path.resolve(__dirname, 'temp')

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

  const zipPath = path.resolve(__dirname, 'temp/lucide.zip')

  if (fs.existsSync(zipPath)) {
    await rimraf(zipPath)
  }

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
  const srcDir = path.resolve(__dirname, '../src')

  if (fs.existsSync(srcDir)) {
    await rimraf(srcDir)
  }

  fs.mkdirSync(srcDir)

  const files = fs.readdirSync(path.resolve(__dirname, 'temp/lucide-main/icons'))
    .filter(file => file.endsWith('.svg'))

  files.forEach(file => {
    const icon = name(file)

    const svg = fs.readFileSync(path.resolve(__dirname, 'temp/lucide-main/icons', file))
      .toString()
      .split('\n')
      .map(line => `  ${line}`)
      .join('\n')
      .replace(/<svg/, `<svg\n    data-lucide="${icon}"`)
      .replace(/\swidth="\d+"/, ' :width="width ?? size ?? 24"')
      .replace(/\sheight="\d+"/, ' :height="height ?? size ?? 24"')
      .trim()

    const component = `<template>
  ${svg}
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
`
  
      fs.writeFileSync(path.resolve(__dirname, '../src', icon + '.vue'), component)
    })

  //
  // step 4: write index file
  //
  console.log('  - Writing index...')

  let index = ''

  const indexPath = path.resolve(__dirname, '../src', 'index.ts')

  if (fs.existsSync(indexPath)) {
    await rimraf(indexPath)
  }

  files.forEach(file => {
    const icon = name(file)

    index += `export { default as ${icon} } from './${icon}.vue'\n`
  })

  fs.writeFileSync(indexPath, index)

  //
  // step 5: cleanup
  //
  console.log('  - Cleanup...')

  await sleep(50)

  if (fs.existsSync(tempDir)) {
    await rimraf(tempDir)
  }

  console.log()
  console.log(green('Done'))
  console.log()
}

generate()
