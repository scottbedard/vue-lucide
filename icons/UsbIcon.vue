
<template>
  <svg
    data-icon="UsbIcon"
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
    <circle cx="4" cy="20" r="1" />
    <circle cx="10" cy="7" r="1" />
    <path d="M4 20 19 5" />
    <path d="m21 3-3 1 2 2 1-3Z" />
    <path d="m10 7-5 5 2 5" />
    <path d="m10 14 5 2 4-4" />
    <path d="m18 12 1-1 1 1-1 1-1-1Z" />
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

