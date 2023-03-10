<template>
  <div class="py-6">
    <Margin class="flex items-center justify-between gap-6 flex-wrap">
      <div>
        <h1 class="font-mono text-2xl">
          <a href="https://github.com/scottbedard/vue-lucide">
            @bedard/vue-lucide
          </a>
        </h1>

        <div class="text-gray-800 tracking-wide">
          Tree shakeable Vue components for <a href="https://lucide.dev/" target="_blank">Lucide icons</a>
        </div>
      </div>

      <div class="flex gap-x-12 w-full sm:w-auto">
        <a
          :class="['flex items-center gap-x-2', {
            'pointer-events-none text-gray-400': !selected.length,
          }]"
          @click="onClearClick">
          Clear selected <VueLucide.SlashIcon size="20" />
        </a>

        <a
          :class="['flex items-center gap-x-2', {
            'pointer-events-none text-gray-400': !selected.length,
          }]"
          @click="onCopyClick">
          Copy to clipboard <Component :is="copyIcon  ? VueLucide.CheckIcon : VueLucide.ClipboardIcon" size="20" />
        </a>
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
            ref="inputEl"
            :placeholder="
              selected.length > 0
                ? 'Press escape to clear selected'
                : 'Search icons (press any key to focus)'
            " />
        </Margin>
      </div>

      <div class="bg-gradient-to-b from-gray-100 to-transparent h-12 -mt-6" />
    </div>

    <Margin>
      <div class="gap-3 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 sm:gap-4 md:gap-6">
        <button
          v-for="icon in icons"
          :title="isSelected(icon.name) ? `Deselect ${icon.name}` : `Select ${icon.name}`"
          :class="['aspect-square bg-white duration-150 flex flex-col gap-4 group items-center justify-center overflow-hidden text-ellipsis p-4 rounded-lg shadow-md transition-shadow hover:shadow-lg hover:text-blue-500', {
            'bg-blue-300/20 text-blue-500': isSelected(icon.name),
          }]"
          :key="icon.name"
          @click="toggleSelected(icon.name)">
          <div>
            <Component
              :is="icon.component"
              class="h-8 w-8" />
          </div>

          <div
            v-text="icon.name"
            class="font-bold overflow-hidden text-center text-ellipsis text-xs tracking-wider w-full md:text-sm" />
        </button>
      </div>
    </Margin>
  </div>
</template>

<script lang="ts" setup>
import { camelCase, upperFirst } from 'lodash'
import { computed, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useFocus } from '@vueuse/core'
import { useClipboard, useStorage } from '@vueuse/core'
import * as VueLucide from '@bedard/vue-lucide'
import json from './icons.json'
import Margin from '@/components/Margin.vue'

const inputEl = ref<HTMLElement>()

const { focused } = useFocus(inputEl)

const clipboard = useClipboard()

const normalize = (str: string) => str.toLowerCase().replace(/\W/g, '')

const icons = computed(() => {
  const normalizedSearch = normalize(search.value)

  return Object.entries<{ categories: string[], tags: string[] }>(json.icons)
    .map(([name, obj]) => {
      const properName = upperFirst(camelCase(name))

      return {
        component: (VueLucide as any)[properName + 'Icon'],
        name,
        obj,
        properName,
      }
    })
    .filter(icon => {
      if (icon.properName.toLowerCase().includes(normalizedSearch)) {
        return true
      }

      for (let tags of icon.obj.tags) {
        if (normalize(tags).includes(normalizedSearch)) {
          return true
        }
      }

      return false
    })
})

const selected = useStorage<string[]>('selected', [])

const search = ref('')

const searchContainer = ref<HTMLElement>()

const isSelected = (name: string) => selected.value.includes(name)

const toggleSelected = (name: string) => {
  if (isSelected(name)) {
    selected.value = selected.value.filter(n => n !== name)
  } else {
    selected.value.push(name)
  }
}

useEventListener('keypress', e => {
  if (!focused.value) {
    inputEl.value?.focus()
  }
})

useEventListener('keydown', e => {
  if (e.key === 'Escape' && selected.value.length) {
    selected.value = []

    return
  }
})

const copyIcon  = ref(false)

const onClearClick = () => {
  selected.value = []
}

const onCopyClick = () => {
  clipboard.copy(selected.value.join(', '))

  copyIcon.value = true
  
  setTimeout(() => {
    copyIcon.value = false
  }, 2000)
}
</script>
