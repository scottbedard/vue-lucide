<template>
  <svg
    data-lucide="RussianRubleIcon"
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
    <path d="M14 11c5.333 0 5.333-8 0-8" />
    <path d="M6 11h8" />
    <path d="M6 15h8" />
    <path d="M9 21V3" />
    <path d="M9 3h5" />
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  height?: number | string
  size?: number | string
  width?: number | string
}>()
</script>
