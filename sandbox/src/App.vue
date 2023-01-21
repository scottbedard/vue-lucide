<template>
  <div class="gap-6 grid">
    <div class="gap-1 grid">
      <h1 class="font-bold font-mono text-2xl">
        <a href="https://github.com/scottbedard/vue-lucide">
          @bedard/vue-lucide
        </a>
      </h1>

      <div class="text-gray-800 tracking-wide">
        Tree shakeable Vue components for <a href="https://lucide.dev/" target="_blank">Lucide icons</a>
      </div>
    </div>

    <div class="border-t border-gray-400" />

    <div>
      A proper sandbox is coming soon, give it time <ThumbsUpIcon class="inline ml-1 -translate-y-1" size="20" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ThumbsUpIcon } from '@bedard/vue-lucide'
</script>
