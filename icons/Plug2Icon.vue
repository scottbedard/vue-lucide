
<template>
  <svg
    data-icon="Plug2Icon"
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
    <path d="M9 2v6" />
    <path d="M15 2v6" />
    <path d="M12 17v5" />
    <path d="M5 8h14" />
    <path d="M6 11V8h12v3a6 6 0 1 1-12 0v0Z" />
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

