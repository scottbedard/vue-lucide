
<template>
  <svg
    data-icon="AlignVerticalDistributeCenterIcon"
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
    <rect x="5" y="14" width="14" height="6" rx="2" />
    <rect x="7" y="4" width="10" height="6" rx="2" />
    <path d="M22 7h-5" />
    <path d="M7 7H1" />
    <path d="M22 17h-3" />
    <path d="M5 17H2" />
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

