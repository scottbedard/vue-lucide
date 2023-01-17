
<template>
  <svg
    data-icon="ArrowUpDownIcon"
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
    <polyline points="11 17 7 21 3 17" />
    <line x1="7" y1="21" x2="7" y2="9" />
    <polyline points="21 7 17 3 13 7" />
    <line x1="17" y1="15" x2="17" y2="3" />
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

