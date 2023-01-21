<template>
  <svg
    data-lucide="ArchiveRestoreIcon"
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
    <rect x="2" y="4" width="20" height="5" rx="2" />
    <path d="M12 13v7" />
    <path d="m9 16 3-3 3 3" />
    <path d="M4 9v9a2 2 0 0 0 2 2h2" />
    <path d="M20 9v9a2 2 0 0 1-2 2h-2" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
