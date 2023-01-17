<template>
  <svg
    data-icon="AlignHorizontalSpaceBetweenIcon"
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
    <rect x="3" y="5" width="6" height="14" rx="2" />
    <rect x="15" y="7" width="6" height="10" rx="2" />
    <path d="M3 2v20" />
    <path d="M21 2v20" />
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
