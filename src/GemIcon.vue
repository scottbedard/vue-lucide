<template>
  <svg
    data-lucide="GemIcon"
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
    <polygon points="6 3 18 3 22 9 12 22 2 9" />
    <path d="m12 22 4-13-3-6" />
    <path d="M12 22 8 9l3-6" />
    <path d="M2 9h20" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
