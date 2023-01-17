
<template>
  <svg
    data-icon="CigaretteOffIcon"
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
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M12 12H2v4h14" />
    <path d="M22 12v4" />
    <path d="M18 12h-.5" />
    <path d="M7 12v4" />
    <path d="M18 8c0-2.5-2-2.5-2-5" />
    <path d="M22 8c0-2.5-2-2.5-2-5" />
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

