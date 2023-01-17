const { camelCase, upperFirst } = require('lodash')
const { cyan, exists, green, mkdir, read, readDir, rm, resolve, write } = require('./utils')
const axios = require('axios')
const dedent = require('dedent')
const fs = require('fs')
const unzipper = require('unzipper')

const name = file => upperFirst(camelCase(file.replace('.svg', ''))) + 'Icon'

module.exports = async function () {
  console.log(cyan('Building icons...'))
  console.log()

  //
  // step 1: download icons
  //
  const downloadDir = resolve('temp')

  if (!exists(downloadDir)) {
    mkdir(downloadDir)
  }

  console.log('  - Downloading icons')

  const res = await axios.get('https://github.com/lucide-icons/lucide/archive/refs/heads/main.zip', {
    responseType: 'stream',
  })

  //
  // step 2: unzip contents
  //
  console.log('  - Unzipping icons')

  const zipPath = resolve('temp/lucide.zip')

  await new Promise(resolve => {
    const writer = fs.createWriteStream(zipPath)

    res.data.pipe(writer)

    writer.on('finish', resolve)
  })

  await new Promise(res => {
    const reader = fs.createReadStream(zipPath)

    reader.pipe(unzipper.Extract({ path: downloadDir }))

    reader.on('close', res)
  })

  //
  // step 3: generate icon components
  //
  console.log('  - Generating components')

  const iconsDir = resolve('icons')

  if (exists(iconsDir)) {
    await rm(iconsDir)
  }

  mkdir(iconsDir)

  const files = readDir(downloadDir, 'lucide-main/icons')
    .filter(file => file.endsWith('.svg'))

    files.forEach(file => {
      const icon = name(file)
  
      const svg = read(downloadDir, 'lucide-main/icons', file)
        .toString()
        .split('\n')
        .map(line => `  ${line}`)
        .join('\n')
        .replace(/<svg/, `<svg\n    data-icon="${icon}"`)
        .replace(/\swidth="\d+"/, ' :width="width || size"')
        .replace(/\sheight="\d+"/, ' :height="height || size"')
        .replace(/\sstroke-width="\d+"/, ' :stroke-width="strokeWidth"')
        .trim()
  
      const component = `
<template>
  ${svg}
</template>

<script setup>
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
</script>
` + '\n'
  
      write(resolve(iconsDir, icon + '.vue'), component)
    })
}