<template>
  <svg
    data-icon="ArrowLeftRightIcon"
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
    <polyline points="17 11 21 7 17 3" />
    <line x1="21" y1="7" x2="9" y2="7" />
    <polyline points="7 21 3 17 7 13" />
    <line x1="15" y1="17" x2="3" y2="17" />
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
