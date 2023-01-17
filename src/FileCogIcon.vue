<template>
  <svg
    data-icon="FileCogIcon"
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
    <path d="M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="6" cy="14" r="3" />
    <path d="M6 10v1" />
    <path d="M6 17v1" />
    <path d="M10 14H9" />
    <path d="M3 14H2" />
    <path d="m9 11-.88.88" />
    <path d="M3.88 16.12 3 17" />
    <path d="m9 17-.88-.88" />
    <path d="M3.88 11.88 3 11" />
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
