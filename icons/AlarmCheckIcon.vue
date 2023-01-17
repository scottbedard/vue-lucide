
<template>
  <svg
    data-icon="AlarmCheckIcon"
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
    <path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
    <path d="M5 3 2 6" />
    <path d="m22 6-3-3" />
    <path d="m6 19-2 2" />
    <path d="m18 19 2 2" />
    <path d="m9 13 2 2 4-4" />
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

