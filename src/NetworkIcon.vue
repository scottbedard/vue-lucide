<template>
  <svg
    data-icon="NetworkIcon"
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
    <rect x="9" y="2" width="6" height="6" />
    <rect x="16" y="16" width="6" height="6" />
    <rect x="2" y="16" width="6" height="6" />
    <path d="M5 16v-4h14v4" />
    <path d="M12 12V8" />
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
