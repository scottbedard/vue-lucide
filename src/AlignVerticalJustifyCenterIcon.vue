<template>
  <svg
    data-lucide="AlignVerticalJustifyCenterIcon"
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
    <rect x="5" y="16" width="14" height="6" rx="2" />
    <rect x="7" y="2" width="10" height="6" rx="2" />
    <path d="M2 12h20" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
