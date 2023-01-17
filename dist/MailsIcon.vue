<template>
  <svg
    data-icon="MailsIcon"
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
    <rect x="6" y="4" width="16" height="13" rx="2" />
    <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
    <path d="M2 8v11c0 1.1.9 2 2 2h14" />
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
