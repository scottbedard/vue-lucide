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

    <div>
      <div class="border-t border-gray-400" />

      <div class="relative">
        <div
          class="bg-gray-100 sticky py-6 top-0"
          ref="searchContainer">
          <Input
            v-model="search"
            autofocus
            class="text-sm w-full"
            placeholder="Search icons (Press &quot;/&quot; to focus)" />
        </div>

        <div>
          <pre>{{ Object.keys(VueLucide) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import * as VueLucide from '@bedard/vue-lucide'
import Input from '@/components/Input.vue'

const search = ref('')

const searchContainer = ref<HTMLElement>()

useEventListener('keypress', e => {
  if (e.key === '/') {
    e.preventDefault()

    searchContainer.value?.querySelector('input')?.focus()
  }
})
</script>
