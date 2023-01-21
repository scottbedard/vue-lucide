<template>
  <svg
    data-lucide="FrameIcon"
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
    <line x1="22" y1="6" x2="2" y2="6" />
    <line x1="22" y1="18" x2="2" y2="18" />
    <line x1="6" y1="2" x2="6" y2="22" />
    <line x1="18" y1="2" x2="18" y2="22" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
