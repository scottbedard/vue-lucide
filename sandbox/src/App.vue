<template>
  <div class="py-6">
    <Margin class="gap-1 grid">
      <h1 class="font-bold font-mono text-2xl">
        <a href="https://github.com/scottbedard/vue-lucide">
          @bedard/vue-lucide
        </a>
      </h1>

      <div class="text-gray-800 tracking-wide">
        Tree shakeable Vue components for <a href="https://lucide.dev/" target="_blank">Lucide icons</a>
      </div>
    </Margin>

    <div
      class="sticky top-0"
      ref="searchContainer">
      <div class="bg-gray-100 pt-6">
        <Margin>
          <input
            v-model="search"
            autofocus
            class="border border-gray-200 h-12 rounded-md px-4 shadow-md w-full"
            placeholder="Search icons (press any key to focus)" />
        </Margin>
      </div>

      <div class="bg-gradient-to-b from-gray-100 to-transparent h-6" />
    </div>

    <Margin>
      <div class="gap-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 sm:gap-4 md:gap-6">
        <div
          v-for="[name, icon] in Object.entries(VueLucide)"
          class="aspect-square bg-white flex flex-col gap-4 items-center justify-center overflow-hidden text-ellipsis p-4 rounded-lg shadow-md"
          :key="name">
          <div>
            <Component
              :is="icon"
              class="h-8 w-8" />
          </div>

          <div
            v-text="name.substring(0, name.length - 4)"
            class="overflow-hidden text-center text-ellipsis text-xs tracking-wide w-full md:text-sm" />
        </div>
      </div>
    </Margin>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import * as VueLucide from '@bedard/vue-lucide'
import Margin from '@/components/Margin.vue'

const search = ref('')

const searchContainer = ref<HTMLElement>()

useEventListener('keypress', e => {
  e.preventDefault()

  searchContainer.value?.querySelector('input')?.focus()
})
</script>
