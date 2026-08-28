<script setup>
import { onMounted, ref, watch } from 'vue';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { REGIONS, countryToRegion } from '../data/regions';

const props = defineProps({
  selectedKey: { type: String, default: null },
});
const emit = defineEmits(['select']);

const svgRef = ref(null);
const width = 960;
const height = 500;

function updateSelection() {
  if (!svgRef.value) return;
  d3.select(svgRef.value)
    .selectAll('path.country')
    .each(function (d) {
      const el = d3.select(this);
      const region = countryToRegion[d.properties.name];
      const isMatch = !!region && region === props.selectedKey;
      el.classed('dimmed', !!region && !!props.selectedKey && !isMatch);
      el.classed('selected', isMatch);
    });
}

watch(() => props.selectedKey, updateSelection);

onMounted(async () => {
  const svg = d3.select(svgRef.value).attr('viewBox', `0 0 ${width} ${height}`);
  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);

  const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json');
  const topology = await res.json();
  let countries = topojson.feature(topology, topology.objects.countries).features;

  // The 110m France geometry bundles French Guiana (South America) into the
  // same MultiPolygon as mainland France/Corsica, so it renders as one path
  // and gets painted with France's Northern Europe colour in the wrong place.
  // Split it out into its own untagged (grey) feature so only mainland
  // France/Corsica carry the Northern Europe region colour.
  countries = countries.flatMap((d) => {
    if (d.properties.name !== 'France' || d.geometry.type !== 'MultiPolygon') return [d];
    const european = [];
    const overseas = [];
    d.geometry.coordinates.forEach((poly) => {
      const lons = poly.flat(2).filter((_, i) => i % 2 === 0);
      (Math.max(...lons) < -20 ? overseas : european).push(poly);
    });
    const split = [{ ...d, geometry: { type: 'MultiPolygon', coordinates: european } }];
    if (overseas.length) {
      split.push({ ...d, properties: { name: 'French Guiana' }, geometry: { type: 'MultiPolygon', coordinates: overseas } });
    }
    return split;
  });

  projection.fitSize([width, height], { type: 'FeatureCollection', features: countries });

  svg
    .selectAll('path.country')
    .data(countries)
    .join('path')
    .attr('class', (d) => 'country ' + (countryToRegion[d.properties.name] ? 'mapped' : 'unmapped'))
    .attr('data-region', (d) => countryToRegion[d.properties.name] || '')
    .attr('fill', (d) => (countryToRegion[d.properties.name] ? REGIONS[countryToRegion[d.properties.name]].color : '#D7D2C8'))
    .attr('d', path)
    .on('click', (event, d) => {
      const key = countryToRegion[d.properties.name];
      if (key) emit('select', key);
    });

  updateSelection();
});
</script>

<template>
  <div class="relative border border-cf-carbon bg-[#EAF3EF]">
    <svg ref="svgRef" viewBox="0 0 960 500" class="block h-auto w-full"></svg>
  </div>
</template>

<style scoped>
:deep(.country) {
  stroke: var(--cf-white);
  stroke-width: 0.6;
  transition:
    opacity 200ms ease-in-out,
    filter 200ms ease-in-out;
}
:deep(.country.unmapped) {
  fill: #d7d2c8;
  cursor: default;
}
:deep(.country.mapped) {
  cursor: pointer;
}
:deep(.country.mapped:hover) {
  filter: brightness(1.12);
}
:deep(.country.dimmed) {
  opacity: 0.35;
}
:deep(.country.selected) {
  stroke: var(--cf-carbon);
  stroke-width: 1.6;
}
</style>
