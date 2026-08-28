<script setup>
import { computed } from 'vue';
import { INGREDIENT_IMAGES, FOOD_IMAGES } from '../data/regions';

const props = defineProps({
  name: { type: String, default: null },
});
const emit = defineEmits(['close']);

const src = computed(() => (props.name ? INGREDIENT_IMAGES[props.name] || FOOD_IMAGES[props.name] : null));
</script>

<template>
  <div
    v-if="name && src"
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,0,25,0.85)] p-8"
    @click.self="emit('close')"
  >
    <div class="relative w-[90vw] max-w-[420px] border border-cf-carbon bg-cf-white">
      <button
        type="button"
        class="absolute top-4 right-4 flex h-7 w-7 items-center justify-center border border-cf-carbon bg-cf-white p-0 font-bold"
        aria-label="Close"
        @click="emit('close')"
      >
        ✕
      </button>
      <img :src="src" :alt="name" class="block max-h-[60vh] w-full border-b border-cf-carbon object-cover" />
      <div class="px-6 py-4 text-center font-display text-base font-bold">{{ name }}</div>
    </div>
  </div>
</template>
