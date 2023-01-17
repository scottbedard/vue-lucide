<template>
  <svg
    data-icon="DnaIcon"
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
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <path d="m17 6-2.5-2.5" />
    <path d="m14 8-1-1" />
    <path d="m7 18 2.5 2.5" />
    <path d="m3.5 14.5.5.5" />
    <path d="m20 9 .5.5" />
    <path d="m6.5 12.5 1 1" />
    <path d="m16.5 10.5 1 1" />
    <path d="m10 16 1.5 1.5" />
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
