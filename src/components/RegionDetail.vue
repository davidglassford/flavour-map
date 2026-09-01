<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  region: { type: Object, default: null },
});
const emit = defineEmits(['open-ingredient']);

const openIndexes = ref(new Set());
watch(
  () => props.region,
  () => {
    openIndexes.value = new Set();
  },
);

function toggle(i) {
  const next = new Set(openIndexes.value);
  if (next.has(i)) next.delete(i);
  else next.add(i);
  openIndexes.value = next;
}
</script>

<template>
  <div
    v-if="!region"
    class="mt-12 flex min-h-55 flex-col items-center justify-center border border-cf-carbon p-6 text-center text-cf-muted-grey sm:p-12"
  >
    <div class="font-display text-2xl font-bold text-cf-carbon">Select a region on the map</div>
    <p class="mt-2 max-w-md">Its flavour profile, common ingredients and describing words will appear here.</p>
  </div>

  <div v-else class="mt-12 min-h-55 border border-cf-carbon p-6 sm:p-12" :style="{ borderLeft: `6px solid ${region.color}` }">
    <div class="text-xs uppercase tracking-[0.03em] text-cf-carbon">Flavour region</div>
    <h3 class="mt-2 text-4xl">{{ region.name }}</h3>
    <p class="mt-6 max-w-3xl text-[17px] font-light leading-[1.8]">{{ region.description }}</p>

    <div class="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
      <div>
        <div class="mb-2 text-xs uppercase tracking-[0.03em] text-cf-muted-grey">Common ingredients</div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="ingredient in region.ingredients"
            :key="ingredient"
            type="button"
            class="border border-cf-carbon bg-cf-white px-3 py-1.5 text-sm font-medium transition hover:-translate-y-px hover:bg-cf-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cf-midnight"
            @click="emit('open-ingredient', ingredient)"
          >
            {{ ingredient }}
          </button>
        </div>
      </div>
      <div>
        <div class="mb-2 text-xs uppercase tracking-[0.03em] text-cf-muted-grey">Describing words</div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="adj in region.adjectives"
            :key="adj"
            class="border border-cf-carbon bg-cf-carbon px-3 py-1.5 text-sm font-medium text-cf-white"
          >
            {{ adj }}
          </span>
        </div>
      </div>
    </div>

    <div v-if="region.countryProfiles?.length" class="mt-12">
      <div class="mb-2 text-xs uppercase tracking-[0.03em] text-cf-muted-grey">Countries in this region</div>
      <div class="mt-2 flex flex-col gap-2">
        <div v-for="(country, i) in region.countryProfiles" :key="country.name" class="border border-cf-carbon bg-cf-white">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 border-0 bg-cf-white px-4 py-3.5 text-left font-display text-[17px] font-bold text-cf-carbon hover:bg-cf-cloud sm:px-6"
            @click="toggle(i)"
          >
            {{ country.name }}
            <span class="flex-none font-body text-xl font-bold">{{ openIndexes.has(i) ? '−' : '+' }}</span>
          </button>
          <div v-show="openIndexes.has(i)" class="border-t border-cf-carbon">
            <div v-for="item in country.items" :key="item.food" class="border-b border-cf-divider p-4 last:border-b-0 sm:p-6">
              <button
                type="button"
                class="mb-1.5 border-0 bg-transparent p-0 font-display text-[15px] font-bold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cf-midnight"
                @click="emit('open-ingredient', item.food)"
              >
                {{ item.food }}
              </button>
              <div class="mt-1 text-sm">
                <span class="mr-2 text-[11px] font-bold uppercase tracking-[0.03em] text-cf-muted-grey">Flavour</span
                >{{ item.flavour }}
              </div>
              <div class="mt-1 text-sm">
                <span class="mr-2 text-[11px] font-bold uppercase tracking-[0.03em] text-cf-muted-grey">Texture</span
                >{{ item.texture }}
              </div>
              <div v-if="item.key" class="mt-1 text-sm">
                <span class="mr-2 text-[11px] font-bold uppercase tracking-[0.03em] text-cf-muted-grey">Key ingredients</span
                >{{ item.key }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
