<template>
  <div class="p-4 bg-white shadow rounded text-center border border-slate-500">
    <div class="text-base mb-2 font-bold">{{ label }}</div>
    <div class="text-2xl font-bold mb-2">{{ count }}</div>
    <div class="flex items-center justify-center gap-2 mt-4">
      <button
        class="p-2 bg-sky-800 text-white cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
        @click="decrement"
      >
        &minus;
      </button>
      <button
        class="p-2 bg-red-600 text-white cursor-pointer flex h-[30px] items-center justify-center"
        @click="reset"
      >
        reset
      </button>
      <button
        class="p-2 bg-sky-800 text-white cursor-pointer w-[30px] h-[30px] flex items-center justify-center"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  initial: { type: Number, default: 0 },
  label: { type: String, default: 'Clicks' }
})

const count = ref(props.initial)

function increment() {
  count.value++
}

function reset() {
  count.value = props.initial
}

function decrement() {
  count.value--
}
</script>
