
<template>
  <svg
    data-icon="HazeIcon"
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
    <path d="m5.2 6.2 1.4 1.4" />
    <path d="M2 13h2" />
    <path d="M20 13h2" />
    <path d="m17.4 7.6 1.4-1.4" />
    <path d="M22 17H2" />
    <path d="M22 21H2" />
    <path d="M16 13a4 4 0 0 0-8 0" />
    <path d="M12 5V2.5" />
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

