
<template>
  <svg
    data-icon="BinaryIcon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width || size"
    :height="height || size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 20h4" />
    <path d="M14 10h4" />
    <path d="M6 14h2v6" />
    <path d="M14 4h2v6" />
    <rect x="6" y="4" width="4" height="6" />
    <rect x="14" y="14" width="4" height="6" />
  </svg>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  height?: number | string
  size?: number | string
  strokeWidth?: number | string
  width?: number | string
}>(), {
  height: 0,
  size: 24,
  strokeWidth: 2,
  width: 0,
})
</script>

