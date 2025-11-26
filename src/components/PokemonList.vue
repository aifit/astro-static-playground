<template>
  <div class="p-4 bg-white shadow rounded">
    <div class="mb-3">
      <input
        v-model="query"
        placeholder="Search Pokémon..."
        class="w-full px-3 py-2 border rounded border-sky-600"
      />
    </div>

    <ul class="space-y-2">
      <li v-for="p in filtered" :key="p.name" class="flex items-center justify-between">
        <a :href="`/pokemon/${p.name}`" class="text-blue-700 hover:text-blue-800 hover:underline">{{ p.name }}</a>
        <small class="text-sm text-gray-500">{{ shortUrl(p.url) }}</small>
      </li>
    </ul>

    <div v-if="filtered.length === 0" class="mt-4 text-sm text-gray-500">
      No results
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(defineProps<{
  pokemons: { name: string; url: string }[]
}>(), {
  pokemons: () => []
})


const query = ref('')

const filtered = computed(() => {
  if (!query.value) return props.pokemons
  const q = query.value.toLowerCase()
  return props.pokemons.filter(p => p.name.toLowerCase().includes(q))
})

function shortUrl(url = '') {
  try {
    const parts = url.split('/').filter(Boolean)
    return parts.at(-1) || url
  } catch {
    return url
  }
}
</script>
