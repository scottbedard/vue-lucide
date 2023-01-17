<template>
  <svg
    data-icon="IceCreamIcon"
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
    <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
    <path d="M17 7A5 5 0 0 0 7 7" />
    <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
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
