
<template>
  <svg
    data-icon="SplineIcon"
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
    <path d="M21 6V4c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z" />
    <path d="M7 20v-2c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z" />
    <path d="M5 17A12 12 0 0 1 17 5" />
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

