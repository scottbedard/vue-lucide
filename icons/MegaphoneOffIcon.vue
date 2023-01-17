
<template>
  <svg
    data-icon="MegaphoneOffIcon"
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
    <path d="M9.26 9.26 3 11v3l14.14 3.14" />
    <path d="M21 15.34V6l-7.31 2.03" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    <line x1="2" x2="22" y1="2" y2="22" />
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

