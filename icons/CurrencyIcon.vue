
<template>
  <svg
    data-icon="CurrencyIcon"
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
    <circle cx="12" cy="12" r="8" />
    <line x1="3" y1="3" x2="6" y2="6" />
    <line x1="21" y1="3" x2="18" y2="6" />
    <line x1="3" y1="21" x2="6" y2="18" />
    <line x1="21" y1="21" x2="18" y2="18" />
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

