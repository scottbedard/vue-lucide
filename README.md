# `@bedard/vue-lucide`

[![Build status](https://img.shields.io/github/actions/workflow/status/scottbedard/vue-lucide/build.yml?branch=main)](https://github.com/scottbedard/vue-lucide/actions)
[![NPM](https://img.shields.io/npm/v/@bedard/vue-lucide)](https://www.npmjs.com/package/@bedard/vue-lucide)
[![License](https://img.shields.io/github/license/scottbedard/vue-sortablejs?color=blue)](https://github.com/scottbedard/vue-lucide/blob/main/LICENSE)

Tree-shakeable Vue components for [Lucide icons](https://lucide.dev/)

[View live sandbox →](https://vue-lucide.scottbedard.net)

## Installation

Install via NPM

```
npm install @bedard/vue-lucide
```

Install via cdn

```html
<script src="https://unpkg.com/@bedard/vue-lucide"></script>
```

The cdn bundle is very big, do not use it for anything serious.

## Basic use

All components are suffixed with `Icon`. For cdn use, access icons via `window.VueLucide`.

```vue
<template>
  <ShareIcon size="24" />
</template>

<script setup>
import { ShareIcon } from '@bedard/lucide-vue'
</script>
```

Use `size` to set the height and width together. If no `stroke` is defined, icons will use the current text color.

## Updating

When this library falls out of sync with Lucide, run the following commands.

```
npm install

npm run build
```

## License

[MIT](https://github.com/scottbedard/vue-lucide/blob/master/LICENSE)

Copyright (c) 2023-present, Scott Bedard
