<template>
  <svg
    data-lucide="PoundSterlingIcon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width ?? size ?? 24"
    :height="height ?? size ?? 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 7c0-5.333-8-5.333-8 0" />
    <path d="M10 7v14" />
    <path d="M6 21h12" />
    <path d="M6 13h10" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
