<template>
  <input
    class="border border-gray-300 h-10 rounded-md px-4"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as any).value)" />
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

defineProps<{
  modelValue: string
}>()
</script>