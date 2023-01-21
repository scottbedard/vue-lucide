<template>
  <svg
    data-lucide="MoveDiagonalIcon"
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
    <polyline points="13 5 19 5 19 11" />
    <polyline points="11 19 5 19 5 13" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
