<template>
  <div class="p-4 bg-white shadow rounded text-center">
    <div class="text-sm text-gray-500 mb-2">{{ label }}</div>
    <div class="text-2xl font-bold mb-2">{{ count }}</div>
    <div class="text-sm text-gray-400 mb-4">Double: {{ double }}</div>
    <button @click="increment" class="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
      Increment
    </button>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  initial: { type: Number, default: 0 },
  label: { type: String, default: 'Clicks' }
})

const count = ref(props.initial)
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>
