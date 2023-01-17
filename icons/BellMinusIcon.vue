
<template>
  <svg
    data-icon="BellMinusIcon"
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
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    <path d="M21 5h-6" />
    <path d="M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916" />
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

