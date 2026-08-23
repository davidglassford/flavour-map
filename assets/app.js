const REGIONS = {
  east_asia: {
    name: "East Asia",
    color: "oklch(0.82 0.19 0deg)",
    countries: ["China","Japan","North Korea","South Korea","Mongolia","Taiwan","Thailand"],
    description: "East Asian cooking builds flavour in layers, balancing salty, sour, sweet and umami in the same dish. Fermentation and quick, high-heat cooking are both central to the region's cuisines.",
    ingredients: ["Soy sauce","Ginger","Garlic","Sesame oil","Rice vinegar","Miso","Star anise","Chilli"],
    adjectives: ["Umami","Savoury","Fermented","Smoky","Pungent","Delicate","Tangy","Aromatic"],
    countryProfiles: [
      { name: "China", items: [
        { food: "Black Vinegar", flavour: "Mellow, deeply acidic, smoky, malty", texture: "Thin, free-flowing, watery" },
        { food: "Szechuan Peppercorn & Star Anise", flavour: "Numbing, tingly, electric (Szechuan Peppercorn); licorice-like, sweetly aromatic (Star Anise)", texture: "Gritty, granular (peppercorns); woody, tough, fibrous (star-shaped pods)" }
      ]},
      { name: "Japan", items: [
        { food: "Miso", flavour: "Savoury, rich, umami-dense, salty", texture: "Thick, pasty, smooth, spreadable" },
        { food: "Wasabi & Shiso", flavour: "Pungent, sharp, sinus-clearing, fiery (Wasabi); herbaceous, refreshing, anise-like (Shiso)", texture: "Pasty, smooth, grated (Wasabi); crisp, delicate, paper-thin leaf (Shiso)" },
        { food: "Shichimi Togarashi", flavour: "Zesty, fiery, nutty, complex, sharp", texture: "Flaky, coarse-ground, gritty, seed-flecked", key: "Chilies, ginger, sesame seeds, nori, mustard powder" }
      ]},
      { name: "Korea", items: [
        { food: "Kimchi", flavour: "Pungent, spicy, fermented, sour", texture: "Crisp, fibrous, crunchy" }
      ]},
      { name: "Thailand", items: [
        { food: "Sriracha", flavour: "Fiery, sweet-and-sour, garlicky", texture: "Smooth, pourable, emulsified" },
        { food: "Lemongrass & Galangal", flavour: "Brightly citrusy, herbal, lemony (Lemongrass); earthy, sharp, peppery (Galangal)", texture: "Fibrous, woody, tough, stringy (Lemongrass); hard, dense, fibrous root (Galangal)" }
      ]}
    ]
  },
  south_asia: {
    name: "South Asia",
    color: "oklch(0.82 0.19 36deg)",
    countries: ["India","Pakistan","Bangladesh","Sri Lanka","Nepal","Bhutan"],
    description: "Spice blends, not single spices, define South Asian cooking. Whole and ground spices are toasted and layered through a dish to build depth over the course of cooking.",
    ingredients: ["Cumin","Coriander","Turmeric","Cardamom","Mustard seed","Curry leaves","Garam masala","Chilli"],
    adjectives: ["Fragrant","Warming","Fiery","Earthy","Aromatic","Tangy","Rich","Layered"],
    countryProfiles: [
      { name: "India", items: [
        { food: "Paneer", flavour: "Mild, lactic, delicate, neutral", texture: "Firm, spongy, bouncy, rubbery" },
        { food: "Ginger & Cardamom", flavour: "Zesty, sharp, warming, peppery (Ginger); sweet-spicy, citrus-forward, herbal (Cardamom)", texture: "Fibrous, wet, juicy, grated (Ginger); papery pods, sticky, hard inner seeds (Cardamom)" },
        { food: "Garam Masala", flavour: "Deeply warming, sweet-spiced, pungent, robust", texture: "Powdery, dry, finely-ground, free-flowing", key: "Cardamom, cinnamon, cloves, cumin, black pepper" },
        { food: "Panch Phoron", flavour: "Earthy, bittersweet, licorice-like, nutty", texture: "Whole-seed, hard, crunchy, gritty", key: "Whole seeds of cumin, anise, fennel, fenugreek, and mustard" }
      ]}
    ]
  },
  middle_east: {
    name: "Middle East",
    color: "oklch(0.82 0.19 72deg)",
    countries: ["Saudi Arabia","Iran","Iraq","Israel","Jordan","Lebanon","Syria","United Arab Emirates","Yemen","Oman","Qatar","Kuwait","Turkey"],
    description: "Middle Eastern flavours bring together warm spice, fresh herbs and bright acidity from citrus and pomegranate, often finished with nuts or seeds for texture.",
    ingredients: ["Sumac","Za'atar","Cumin","Saffron","Mint","Pomegranate molasses","Tahini","Rosewater"],
    adjectives: ["Fragrant","Tangy","Floral","Nutty","Warming","Bright","Herbaceous"],
    countryProfiles: [
      { name: "Iran", items: [
        { food: "Barberries", flavour: "Sharply acidic, tart, fruity, sour", texture: "Chewy, leathery, wrinkled" },
        { food: "Sumac", flavour: "Citrusy, lemony, astringent, tart", texture: "Powdery, granular, dry" },
        { food: "Saffron & Dried Lime", flavour: "Floral, earthy, honey-like, metallic-sweet (Saffron); musky, citrusy, intensely sour (Dried Lime)", texture: "Delicate threads, brittle, dry, leathery, wrinkled" },
        { food: "Advieh", flavour: "Highly perfumed, floral, warm, citrus-flecked, sweet-sour", texture: "Granular, dry, delicate, finely-milled", key: "Saffron, cumin, cardamom, rose, dried lime" }
      ]}
    ]
  },
  north_africa: {
    name: "North Africa",
    color: "oklch(0.82 0.19 108deg)",
    countries: ["Morocco","Algeria","Tunisia","Libya","Egypt","Western Sahara","Sudan"],
    description: "North African cooking pairs warm spice mixes with preserved and sweet ingredients, often slow-cooked so the flavours have time to combine.",
    ingredients: ["Preserved lemon","Ras el hanout","Cumin","Harissa","Saffron","Mint","Dates","Cinnamon"],
    adjectives: ["Warming","Citrusy","Smoky","Fiery","Sweet-savoury","Aromatic"],
    countryProfiles: [
      { name: "North Africa", items: [
        { food: "Preserved Lemon", flavour: "Intensely sour, citrusy, salty, briny", texture: "Soft, pliable, tender, skin-like" },
        { food: "Harissa", flavour: "Fiery, smoky, intensely warm", texture: "Thick, oily, wet paste" },
        { food: "Ras el Hanout", flavour: "Exotically fragrant, complex, earthy, sweet-spiced", texture: "Finely-ground, dry, powdery", key: "Saffron, cinnamon, cumin, coriander" },
        { food: "Dukkah", flavour: "Savoury-sweet, deeply nutty, toasted, earthy", texture: "Chunky, coarse, crumbly, gravelly, crunchy", key: "Cumin, coriander, toasted sesame seeds, crushed nuts" }
      ]}
    ]
  },
  west_africa: {
    name: "West Africa",
    color: "oklch(0.82 0.19 144deg)",
    countries: ["Nigeria","Ghana","Senegal","Mali","Côte d'Ivoire","Guinea","Benin","Togo","Sierra Leone","Liberia","Burkina Faso","Niger","Gambia","Guinea-Bissau","Mauritania"],
    description: "West African dishes are built on bold, fiery bases, often a blended pepper and tomato sauce, with peanuts and dried fish adding richness.",
    ingredients: ["Scotch bonnet chilli","Ginger","Peanuts","Palm oil","Tamarind","Dried fish","Cloves","Tomato"],
    adjectives: ["Fiery","Earthy","Pungent","Rich","Smoky","Tangy"]
  },
  horn_africa: {
    name: "Horn of Africa",
    color: "oklch(0.82 0.19 180deg)",
    countries: ["Somalia","Ethiopia","Eritrea","Djibouti"],
    description: "Horn of Africa cooking is built around fermented, spongy flatbreads and fiery, complex spice blends toasted and ground in-house.",
    ingredients: ["Berbere spice","Teff","Chilli","Ginger","Niter kibbeh (spiced butter)","Cardamom"],
    adjectives: ["Fiery","Sour","Fermented","Robust","Pungent","Warming"],
    countryProfiles: [
      { name: "Horn of Africa", items: [
        { food: "Injera", flavour: "Yeast-forward, sour, fermented, tangy", texture: "Spongy, springy, aerated, light" },
        { food: "Berbere Spices", flavour: "Intensely fiery, robust, smoky, pungent, highly warming", texture: "Dry, powdery, finely-ground, staining", key: "Chili pepper, ginger, and warming spices" }
      ]}
    ]
  },
  med_europe: {
    name: "Southern Europe / Mediterranean",
    color: "oklch(0.82 0.19 216deg)",
    countries: ["Spain","Italy","Greece","Portugal","Croatia","Albania","Cyprus"],
    description: "Mediterranean cooking relies on a small number of very good ingredients, letting olive oil, garlic and fresh herbs carry the dish rather than heavy spicing.",
    ingredients: ["Olive oil","Garlic","Basil","Oregano","Tomato","Lemon","Anchovy","Capers"],
    adjectives: ["Bright","Herbaceous","Fresh","Tangy","Savoury","Fragrant"],
    countryProfiles: [
      { name: "Greece & Cyprus", items: [
        { food: "Feta Cheese", flavour: "Briny, sharp, salty, tangy", texture: "Crumbly, grainy, chalky" }
      ]},
      { name: "Greece", items: [
        { food: "Oregano & Mint", flavour: "Pungent, peppery, cooling, earthy, refreshing", texture: "Flaky, dry, crumbled (dried herbs); tender, soft, leafy (fresh herbs)" }
      ]},
      { name: "Italy", items: [
        { food: "Balsamic Vinegar", flavour: "Savoury-sweet, mellow, complex, woody", texture: "Syrupy, viscous, smooth" },
        { food: "Parmesan (Parmigiano)", flavour: "Umami-rich, sharp, nutty, salty", texture: "Granular, hard, crystalline" }
      ]},
      { name: "Mediterranean", items: [
        { food: "Labneh", flavour: "Tart, tangy, sour, lactic", texture: "Thick, spreadable, dense, creamy" },
        { food: "Za'atar", flavour: "Herbal, tangy, nutty, acidic-sharp (due to sumac)", texture: "Flecked, leafy, coarse, crunchy (due to whole sesame seeds)", key: "Sumac, oregano, thyme, marjoram, sesame" },
        { food: "Baharat", flavour: "Warm, sweet-spiced, pungent, savoury", texture: "Fine, dry, powdery", key: "Cumin, black pepper, and warm spices" }
      ]}
    ]
  },
  north_europe: {
    name: "Northern Europe",
    color: "oklch(0.82 0.19 252deg)",
    countries: ["United Kingdom","Ireland","France","Germany","Netherlands","Belgium","Norway","Sweden","Denmark","Finland","Poland","Lithuania","Latvia","Estonia","Luxembourg","Switzerland","Austria","Czechia"],
    description: "Northern European flavours tend to be milder and comforting, built around butter, cured meats and fish, with sharp mustard or vinegar for contrast.",
    ingredients: ["Dill","Butter","Mustard","Caraway","Bay leaf","Black pepper","Smoked fish","Parsley"],
    adjectives: ["Earthy","Savoury","Mild","Herbaceous","Tangy","Comforting"],
    countryProfiles: [
      { name: "Scandinavia", items: [
        { food: "Skyr", flavour: "Tart, lactic, mild, slightly sour", texture: "Velvety, thick, smooth, dense" }
      ]},
      { name: "Germany", items: [
        { food: "Sauerkraut", flavour: "Acidic, sour, pungent, fermented", texture: "Crunchy, fibrous, crisp" }
      ]},
      { name: "France", items: [
        { food: "Dijon Mustard", flavour: "Pungent, fiery, sharp, sinus-clearing", texture: "Smooth, pasty, thick" },
        { food: "Herbes de Provence", flavour: "Perfumed, pine-like, herbaceous, floral", texture: "Dry, leafy, brittle" },
        { food: "Quatre-épices", flavour: "Warming, sweet-spiced, aromatic, delicate", texture: "Powdery, dry, finely-milled, dusty", key: "Warm wood-spices (pepper, nutmeg, cloves, ginger)" }
      ]},
      { name: "United Kingdom", items: [
        { food: "Cheddar & Stilton", flavour: "Mature, earthy, robust, sharp", texture: "Firm (Cheddar), crumbly (Stilton)" }
      ]}
    ]
  },
  latam_caribbean: {
    name: "Latin America / Caribbean",
    color: "oklch(0.82 0.19 288deg)",
    countries: ["Mexico","Guatemala","Belize","Honduras","El Salvador","Nicaragua","Costa Rica","Panama","Cuba","Jamaica","Dominican Rep.","Haiti","Brazil","Argentina","Chile","Peru","Colombia","Venezuela","Ecuador","Bolivia","Paraguay","Uruguay","Guyana","Suriname"],
    description: "Latin American and Caribbean cooking pairs sharp citrus and chilli heat with slow-cooked, smoky depth, often finished with fresh herbs.",
    ingredients: ["Lime","Chilli","Coriander","Cumin","Allspice","Cacao","Achiote","Epazote"],
    adjectives: ["Zesty","Fiery","Smoky","Tangy","Fruity","Bold"],
    countryProfiles: [
      { name: "Mexico", items: [
        { food: "Sour Cream (Crema)", flavour: "Tangy, lactic, rich, buttery", texture: "Silky, luscious, thick, smooth" },
        { food: "Dried Chilies", flavour: "Smoky, leathery, deeply warm, fruity, bittersweet", texture: "Wrinkled, tough, pliable, crisp (when toasted)" }
      ]},
      { name: "Central America", items: [
        { food: "Tamarind", flavour: "Tart, astringent, sweet-sour, zesty", texture: "Sticky, pulpy, dense, fibrous" }
      ]},
      { name: "Caribbean", items: [
        { food: "Pikliz (Spicy Slaw)", flavour: "Fiery, zesty, vinegar-forward, hot", texture: "Crisp, crunchy, snappy" },
        { food: "Jerk Spices", flavour: "Pungent, fiery, intensely sweet-and-savoury", texture: "Coarse, granular, flecked (rubbed herbs), sticky (if used as a wet paste)", key: "Allspice, hot peppers, ginger, oregano, cumin" }
      ]}
    ]
  },
  north_america: {
    name: "North America",
    color: "oklch(0.82 0.19 324deg)",
    countries: ["United States of America","Canada"],
    description: "North American flavours draw on the continent's many immigrant cuisines, but a shared thread is smoky, sweet-savoury barbecue seasoning and bold mustard-based tang.",
    ingredients: ["Smoked paprika","Maple syrup","Mustard","Black pepper","Dill","Cayenne pepper","Brown sugar"],
    adjectives: ["Smoky","Sweet-savoury","Tangy","Bold","Warming"]
  }
};

const INGREDIENT_IMAGES = {
  "Soy sauce": "assets/ingredients/soy-sauce.jpg",
  "Ginger": "assets/ingredients/ginger.jpg",
  "Garlic": "assets/ingredients/garlic.jpg",
  "Sesame oil": "assets/ingredients/sesame-oil.png",
  "Rice vinegar": "assets/ingredients/rice-vinegar.jpg",
  "Miso": "assets/ingredients/miso.jpg",
  "Star anise": "assets/ingredients/star-anise.jpg",
  "Chilli": "assets/ingredients/chilli.jpg",
  "Cumin": "assets/ingredients/cumin.jpg",
  "Coriander": "assets/ingredients/coriander.jpg",
  "Turmeric": "assets/ingredients/turmeric.jpg",
  "Cardamom": "assets/ingredients/cardamom.jpg",
  "Mustard seed": "assets/ingredients/mustard-seed.png",
  "Curry leaves": "assets/ingredients/curry-leaves.jpg",
  "Garam masala": "assets/ingredients/garam-masala.jpg",
  "Sumac": "assets/ingredients/sumac.JPG",
  "Za'atar": "assets/ingredients/zaatar.jpg",
  "Saffron": "assets/ingredients/saffron.jpg",
  "Mint": "assets/ingredients/mint.jpg",
  "Pomegranate molasses": "assets/ingredients/pomegranate-molasses.jpg",
  "Tahini": "assets/ingredients/tahini.JPG",
  "Rosewater": "assets/ingredients/rosewater.jpg",
  "Preserved lemon": "assets/ingredients/preserved-lemon.jpg",
  "Ras el hanout": "assets/ingredients/ras-el-hanout.jpg",
  "Harissa": "assets/ingredients/harissa.JPG",
  "Dates": "assets/ingredients/dates.jpg",
  "Cinnamon": "assets/ingredients/cinnamon.jpg",
  "Scotch bonnet chilli": "assets/ingredients/scotch-bonnet-chilli.jpg",
  "Peanuts": "assets/ingredients/peanuts.jpg",
  "Palm oil": "assets/ingredients/palm-oil.jpg",
  "Tamarind": "assets/ingredients/tamarind.JPG",
  "Dried fish": "assets/ingredients/dried-fish.jpg",
  "Cloves": "assets/ingredients/cloves.jpg",
  "Tomato": "assets/ingredients/tomato.jpg",
  "Berbere spice": "assets/ingredients/berbere-spice.jpg",
  "Teff": "assets/ingredients/teff.jpg",
  "Niter kibbeh (spiced butter)": "assets/ingredients/niter-kibbeh-spiced-butter.JPG",
  "Olive oil": "assets/ingredients/olive-oil.jpg",
  "Basil": "assets/ingredients/basil.jpg",
  "Oregano": "assets/ingredients/oregano.jpg",
  "Lemon": "assets/ingredients/lemon.JPG",
  "Anchovy": "assets/ingredients/anchovy.jpg",
  "Capers": "assets/ingredients/capers.jpg",
  "Dill": "assets/ingredients/dill.jpg",
  "Butter": "assets/ingredients/butter.JPG",
  "Mustard": "assets/ingredients/mustard.JPG",
  "Caraway": "assets/ingredients/caraway.jpg",
  "Bay leaf": "assets/ingredients/bay-leaf.JPG",
  "Black pepper": "assets/ingredients/black-pepper.jpg",
  "Smoked fish": "assets/ingredients/smoked-fish.JPG",
  "Parsley": "assets/ingredients/parsley.jpg",
  "Lime": "assets/ingredients/lime.jpg",
  "Allspice": "assets/ingredients/allspice.jpg",
  "Cacao": "assets/ingredients/cacao.JPG",
  "Achiote": "assets/ingredients/achiote.JPG",
  "Epazote": "assets/ingredients/epazote.jpg",
  "Smoked paprika": "assets/ingredients/smoked-paprika.jpg",
  "Maple syrup": "assets/ingredients/maple-syrup.jpg",
  "Cayenne pepper": "assets/ingredients/cayenne-pepper.jpg",
  "Brown sugar": "assets/ingredients/brown-sugar.jpg"
};

const FOOD_IMAGES = {
  "Black Vinegar": "assets/foods/black-vinegar.jpg",
  "Szechuan Peppercorn & Star Anise": "assets/foods/szechuan-peppercorn-star-anise.jpg",
  "Miso": "assets/foods/miso.jpg",
  "Wasabi & Shiso": "assets/foods/wasabi-shiso.JPG",
  "Shichimi Togarashi": "assets/foods/shichimi-togarashi.jpg",
  "Kimchi": "assets/foods/kimchi.jpg",
  "Sriracha": "assets/foods/sriracha.jpg",
  "Lemongrass & Galangal": "assets/foods/lemongrass-galangal.JPG",
  "Paneer": "assets/foods/paneer.jpg",
  "Ginger & Cardamom": "assets/foods/ginger-cardamom.jpg",
  "Garam Masala": "assets/foods/garam-masala.jpg",
  "Panch Phoron": "assets/foods/panch-phoron.jpg",
  "Barberries": "assets/foods/barberries.jpg",
  "Sumac": "assets/foods/sumac.JPG",
  "Saffron & Dried Lime": "assets/foods/saffron-dried-lime.JPG",
  "Advieh": "assets/foods/advieh.jpg",
  "Preserved Lemon": "assets/foods/preserved-lemon.jpg",
  "Harissa": "assets/foods/harissa.JPG",
  "Ras el Hanout": "assets/foods/ras-el-hanout.jpg",
  "Dukkah": "assets/foods/dukkah.JPG",
  "Injera": "assets/foods/injera.jpg",
  "Berbere Spices": "assets/foods/berbere-spices.jpg",
  "Feta Cheese": "assets/foods/feta-cheese.jpg",
  "Oregano & Mint": "assets/foods/oregano-mint.jpg",
  "Balsamic Vinegar": "assets/foods/balsamic-vinegar.jpg",
  "Parmesan (Parmigiano)": "assets/foods/parmesan-parmigiano.jpg",
  "Labneh": "assets/foods/labneh.jpg",
  "Za'atar": "assets/foods/zaatar.jpg",
  "Baharat": "assets/foods/baharat.png",
  "Skyr": "assets/foods/skyr.jpg",
  "Sauerkraut": "assets/foods/sauerkraut.jpg",
  "Dijon Mustard": "assets/foods/dijon-mustard.jpg",
  "Herbes de Provence": "assets/foods/herbes-de-provence.jpg",
  "Quatre-épices": "assets/foods/quatre-pices.jpg",
  "Cheddar & Stilton": "assets/foods/cheddar-stilton.jpg",
  "Sour Cream (Crema)": "assets/foods/sour-cream-crema.jpg",
  "Dried Chilies": "assets/foods/dried-chilies.jpg",
  "Tamarind": "assets/foods/tamarind.JPG",
  "Pikliz (Spicy Slaw)": "assets/foods/pikliz-spicy-slaw.jpg",
  "Jerk Spices": "assets/foods/jerk-spices.jpg"
};

const countryToRegion = {};
Object.entries(REGIONS).forEach(([key, r]) => r.countries.forEach(c => countryToRegion[c] = key));

const width = 960, height = 500;
const svg = d3.select('#map-svg').attr('viewBox', `0 0 ${width} ${height}`);
const projection = d3.geoNaturalEarth1();
const path = d3.geoPath(projection);

let selectedRegion = null;

fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json')
  .then(res => res.json())
  .then(topology => {
    let countries = topojson.feature(topology, topology.objects.countries).features;

    // The 110m France geometry bundles French Guiana (South America) into the
    // same MultiPolygon as mainland France/Corsica, so it renders as one path
    // and gets painted with France's Northern Europe colour in the wrong place.
    // Split it out into its own untagged (grey) feature so only mainland
    // France/Corsica carry the Northern Europe region colour.
    countries = countries.flatMap(d => {
      if (d.properties.name !== 'France' || d.geometry.type !== 'MultiPolygon') return [d];
      const european = [], overseas = [];
      d.geometry.coordinates.forEach(poly => {
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

    svg.selectAll('path.country')
      .data(countries)
      .join('path')
      .attr('class', d => 'country ' + (countryToRegion[d.properties.name] ? 'mapped' : 'unmapped'))
      .attr('data-region', d => countryToRegion[d.properties.name] || '')
      .attr('fill', d => countryToRegion[d.properties.name] ? REGIONS[countryToRegion[d.properties.name]].color : '#D7D2C8')
      .attr('d', path)
      .on('click', (event, d) => {
        const key = countryToRegion[d.properties.name];
        if (key) selectRegion(key);
      });
  });

function selectRegion(key) {
  selectedRegion = key;
  const r = REGIONS[key];

  document.querySelectorAll('.country').forEach(el => {
    const isMatch = el.dataset.region === key;
    el.classList.toggle('dimmed', el.classList.contains('mapped') && !isMatch);
    el.classList.toggle('selected', isMatch);
  });

  const detail = document.getElementById('detail');
  detail.classList.remove('empty');
  detail.style.borderLeft = `6px solid ${r.color}`;
  detail.innerHTML = `
    <div class="detail-region-eyebrow" style="color:var(--cf-carbon)">Flavour region</div>
    <h3>${r.name}</h3>
    <p class="desc">${r.description}</p>
    <div class="detail-cols">
      <div>
        <div class="chip-group-label">Common ingredients</div>
        <div class="chips">${r.ingredients.map(i => `<span class="chip ingredient" data-ingredient="${i}" tabindex="0" role="button">${i}</span>`).join('')}</div>
      </div>
      <div>
        <div class="chip-group-label">Describing words</div>
        <div class="chips">${r.adjectives.map(a => `<span class="chip adj">${a}</span>`).join('')}</div>
      </div>
    </div>
    ${r.countryProfiles && r.countryProfiles.length ? `
    <div class="accordion-section">
      <div class="chip-group-label">Countries in this region</div>
      <div class="accordion">
        ${r.countryProfiles.map((c, i) => `
        <div class="accordion-item">
          <button class="accordion-header" data-idx="${i}">${c.name}<span class="accordion-icon">+</span></button>
          <div class="accordion-panel"><div class="accordion-panel-inner">
            ${c.items.map(it => `
            <div class="profile-item">
              <div class="profile-food" data-food="${it.food}" tabindex="0" role="button">${it.food}</div>
              <div class="profile-row"><span class="profile-label">Flavour</span>${it.flavour}</div>
              <div class="profile-row"><span class="profile-label">Texture</span>${it.texture}</div>
              ${it.key ? `<div class="profile-row"><span class="profile-label">Key ingredients</span>${it.key}</div>` : ''}
            </div>`).join('')}
          </div></div>
        </div>`).join('')}
      </div>
    </div>` : ''}
  `;

  detail.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
      item.classList.toggle('open');
      btn.querySelector('.accordion-icon').textContent = wasOpen ? '+' : '\u2212';
    });
  });
}

const ingredientModal = document.getElementById('ingredient-modal');
const ingredientModalImg = document.getElementById('ingredient-modal-img');
const ingredientModalCaption = document.getElementById('ingredient-modal-caption');

function openIngredientModal(name) {
  const src = INGREDIENT_IMAGES[name] || FOOD_IMAGES[name];
  if (!src) return;
  ingredientModalImg.src = src;
  ingredientModalImg.alt = name;
  ingredientModalCaption.textContent = name;
  ingredientModal.classList.add('open');
}
function closeIngredientModal() {
  ingredientModal.classList.remove('open');
  ingredientModalImg.src = '';
}

document.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip.ingredient');
  if (chip) { openIngredientModal(chip.dataset.ingredient); return; }
  const food = e.target.closest('.profile-food');
  if (food) openIngredientModal(food.dataset.food);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') { if (e.key === 'Escape') closeIngredientModal(); return; }
  if (e.target.classList.contains('chip') && e.target.classList.contains('ingredient')) {
    e.preventDefault();
    openIngredientModal(e.target.dataset.ingredient);
  } else if (e.target.classList.contains('profile-food')) {
    e.preventDefault();
    openIngredientModal(e.target.dataset.food);
  }
});
document.getElementById('ingredient-modal-close').addEventListener('click', closeIngredientModal);
ingredientModal.addEventListener('click', (e) => { if (e.target === ingredientModal) closeIngredientModal(); });
