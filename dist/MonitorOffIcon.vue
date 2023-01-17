<template>
  <svg
    data-icon="MonitorOffIcon"
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
    <path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
    <path d="M22 15V5a2 2 0 0 0-2-2H9" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="m2 2 20 20" />
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
