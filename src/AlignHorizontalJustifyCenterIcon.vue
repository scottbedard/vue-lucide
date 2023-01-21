<template>
  <svg
    data-lucide="AlignHorizontalJustifyCenterIcon"
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
    <rect x="2" y="5" width="6" height="14" rx="2" />
    <rect x="16" y="7" width="6" height="10" rx="2" />
    <path d="M12 2v20" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
