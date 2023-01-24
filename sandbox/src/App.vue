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
      class="bg-gray-100 sticky py-6 top-0 md:gap-6 xl:gap-8"
      ref="searchContainer">
      <Margin>
        <Input
          v-model="search"
          autofocus
          class="text-sm w-full"
          placeholder="Search icons (Press &quot;/&quot; to focus)" />
      </Margin>
    </div>

    <Margin>
      <div class="gap-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 sm:gap-4 md:gap-6">
        <div
          v-for="[name, icon] in Object.entries(VueLucide)"
          class="aspect-square bg-white flex flex-col gap-4 items-center justify-center overflow-hidden text-ellipsis p-4 rounded shadow-md"
          :key="name">
          <div>
            <Component
              :is="icon"
              class="h-8 w-8" />
          </div>

          <div
            v-text="name"
            class="overflow-hidden text-center text-ellipsis text-xs tracking-wide w-full md:text-sm" />
        </div>
      </div>
    </Margin>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import * as VueLucide from '@bedard/vue-lucide'
import Icon from '@/components/Icon.vue'
import Input from '@/components/Input.vue'
import Margin from '@/components/Margin.vue'

const search = ref('')

const searchContainer = ref<HTMLElement>()

const entries = computed(() => Object.entries(VueLucide))

useEventListener('keypress', e => {
  if (e.key === '/') {
    e.preventDefault()

    searchContainer.value?.querySelector('input')?.focus()
  }
})
</script>
