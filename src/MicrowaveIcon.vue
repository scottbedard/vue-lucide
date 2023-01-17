<template>
  <svg
    data-icon="MicrowaveIcon"
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
    <rect x="2" y="4" width="20" height="15" rx="2" />
    <rect x="6" y="8" width="8" height="7" rx="1" />
    <path d="M18 8v7" />
    <path d="M6 19v2" />
    <path d="M18 19v2" />
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
