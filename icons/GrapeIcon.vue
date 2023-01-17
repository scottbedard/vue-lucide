
<template>
  <svg
    data-icon="GrapeIcon"
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
    <path d="M22 5V2l-5.89 5.89" />
    <circle cx="16.6" cy="15.89" r="3" />
    <circle cx="8.11" cy="7.4" r="3" />
    <circle cx="12.35" cy="11.65" r="3" />
    <circle cx="13.91" cy="5.85" r="3" />
    <circle cx="18.15" cy="10.09" r="3" />
    <circle cx="6.56" cy="13.2" r="3" />
    <circle cx="10.8" cy="17.44" r="3" />
    <circle cx="5" cy="19" r="3" />
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

