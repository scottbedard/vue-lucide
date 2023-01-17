<template>
  <svg
    data-icon="LayoutListIcon"
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
    <rect x="3" y="14" width="7" height="7" />
    <rect x="3" y="3" width="7" height="7" />
    <line x1="14" y1="4" x2="21" y2="4" />
    <line x1="14" y1="9" x2="21" y2="9" />
    <line x1="14" y1="15" x2="21" y2="15" />
    <line x1="14" y1="20" x2="21" y2="20" />
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
