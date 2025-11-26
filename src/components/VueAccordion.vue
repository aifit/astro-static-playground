<template>
  <div class="cursor-pointer w-full">
    <div class="rounded transition-all border border-slate-500">

      <!-- Header -->
      <div
        class="flex items-center justify-between px-4 py-3 select-none bg-white shadow rounded text-center hover:bg-sky-100"
        :class="isExpanded ? 'rounded-b-none bg-sky-100 hover:bg-sky-200' : undefined"
        tabindex="0"
        @click.stop="handleClick"
        @keydown.enter.stop="handleClick"
      >
        <div class="flex items-center grow">
          <div class="text-base font-bold">
            <slot name="title" />
          </div>
        </div>

        <div class="text-xl leading-none">
          <span>{{ isExpanded ? '&minus;' : '&plus;' }}</span>
        </div>
      </div>

      <!-- Body -->
      <div
        v-show="isExpanded"
        class="px-4 py-4 text-sm text-gray-700 bg-white cursor-[initial]"
        :class="isExpanded ? 'rounded-b' : undefined"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    id?: number | string
    isActive?: boolean
  }>(),
  {
    id: 0,
    isActive: false,
  }
)

const isExpanded = ref(false)

watch(
  () => props.isActive,
  value => {
    isExpanded.value = !!value
  },
  {
    immediate: true,
  }
)

const emit = defineEmits<{
  (e: 'click', id: number | string, value: object): void
}>()

const handleClick = () => {
  isExpanded.value = !isExpanded.value
  console.log(props.id)
  emit('click', props.id, isExpanded)
}

defineExpose({ isExpanded, handleClick })
</script>
