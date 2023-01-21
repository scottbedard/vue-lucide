<template>
  <svg
    data-lucide="PlugZapIcon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width ?? size ?? 24"
    :height="height ?? size ?? 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="m13 2-2 2.5h3L12 7" />
    <path d="M12 22v-3" />
    <path d="M10 13v-2.5" />
    <path d="M10 12.5v-2" />
    <path d="M14 12.5v-2" />
    <path d="M16 15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2z" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
