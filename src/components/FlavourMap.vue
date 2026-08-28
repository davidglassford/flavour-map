<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import WorldMap from './WorldMap.vue';
import RegionDetail from './RegionDetail.vue';
import IngredientModal from './IngredientModal.vue';
import { REGIONS } from '../data/regions';

const selectedKey = ref(null);
const openIngredient = ref(null);

const selectedRegion = computed(() => (selectedKey.value ? REGIONS[selectedKey.value] : null));

function handleSelect(key) {
  selectedKey.value = key;
}
function handleOpenIngredient(name) {
  openIngredient.value = name;
}
function handleClose() {
  openIngredient.value = null;
}
function onKeydown(e) {
  if (e.key === 'Escape') handleClose();
}

onMounted(() => document.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown));
</script>

<template>
  <div>
    <WorldMap :selected-key="selectedKey" @select="handleSelect" />
    <RegionDetail :region="selectedRegion" @open-ingredient="handleOpenIngredient" />
    <IngredientModal :name="openIngredient" @close="handleClose" />
  </div>
</template>
