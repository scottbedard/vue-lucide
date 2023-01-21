<template>
  <svg
    data-lucide="Scale3DIcon"
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
    <path d="M5 7v12h12" />
    <path d="m5 19 6-6" />
    <rect x="3" y="3" width="4" height="4" rx="1" />
    <rect x="17" y="17" width="4" height="4" rx="1" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
