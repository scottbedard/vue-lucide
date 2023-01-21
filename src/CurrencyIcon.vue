<template>
  <svg
    data-lucide="CurrencyIcon"
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
    <circle cx="12" cy="12" r="8" />
    <line x1="3" y1="3" x2="6" y2="6" />
    <line x1="21" y1="3" x2="18" y2="6" />
    <line x1="3" y1="21" x2="6" y2="18" />
    <line x1="21" y1="21" x2="18" y2="18" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
