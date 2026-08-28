export interface CountryProfileItem {
  food: string;
  flavour: string;
  texture: string;
  key?: string;
}

export interface CountryProfile {
  name: string;
  items: CountryProfileItem[];
}

export interface Region {
  name: string;
  color: string;
  countries: string[];
  description: string;
  ingredients: string[];
  adjectives: string[];
  countryProfiles?: CountryProfile[];
}

export type RegionKey =
  | 'east_asia'
  | 'south_asia'
  | 'middle_east'
  | 'north_africa'
  | 'west_africa'
  | 'horn_africa'
  | 'med_europe'
  | 'north_europe'
  | 'latam_caribbean'
  | 'north_america';

export const REGIONS: Record<RegionKey, Region> = {
  east_asia: {
    name: 'East Asia',
    color: 'oklch(0.82 0.19 0deg)',
    countries: ['China', 'Japan', 'North Korea', 'South Korea', 'Mongolia', 'Taiwan', 'Thailand'],
    description:
      "East Asian cooking builds flavour in layers, balancing salty, sour, sweet and umami in the same dish. Fermentation and quick, high-heat cooking are both central to the region's cuisines.",
    ingredients: ['Soy sauce', 'Ginger', 'Garlic', 'Sesame oil', 'Rice vinegar', 'Miso', 'Star anise', 'Chilli'],
    adjectives: ['Umami', 'Savoury', 'Fermented', 'Smoky', 'Pungent', 'Delicate', 'Tangy', 'Aromatic'],
    countryProfiles: [
      {
        name: 'China',
        items: [
          { food: 'Black Vinegar', flavour: 'Mellow, deeply acidic, smoky, malty', texture: 'Thin, free-flowing, watery' },
          {
            food: 'Szechuan Peppercorn & Star Anise',
            flavour: 'Numbing, tingly, electric (Szechuan Peppercorn); licorice-like, sweetly aromatic (Star Anise)',
            texture: 'Gritty, granular (peppercorns); woody, tough, fibrous (star-shaped pods)',
          },
        ],
      },
      {
        name: 'Japan',
        items: [
          { food: 'Miso', flavour: 'Savoury, rich, umami-dense, salty', texture: 'Thick, pasty, smooth, spreadable' },
          {
            food: 'Wasabi & Shiso',
            flavour: 'Pungent, sharp, sinus-clearing, fiery (Wasabi); herbaceous, refreshing, anise-like (Shiso)',
            texture: 'Pasty, smooth, grated (Wasabi); crisp, delicate, paper-thin leaf (Shiso)',
          },
          {
            food: 'Shichimi Togarashi',
            flavour: 'Zesty, fiery, nutty, complex, sharp',
            texture: 'Flaky, coarse-ground, gritty, seed-flecked',
            key: 'Chilies, ginger, sesame seeds, nori, mustard powder',
          },
        ],
      },
      {
        name: 'Korea',
        items: [{ food: 'Kimchi', flavour: 'Pungent, spicy, fermented, sour', texture: 'Crisp, fibrous, crunchy' }],
      },
      {
        name: 'Thailand',
        items: [
          { food: 'Sriracha', flavour: 'Fiery, sweet-and-sour, garlicky', texture: 'Smooth, pourable, emulsified' },
          {
            food: 'Lemongrass & Galangal',
            flavour: 'Brightly citrusy, herbal, lemony (Lemongrass); earthy, sharp, peppery (Galangal)',
            texture: 'Fibrous, woody, tough, stringy (Lemongrass); hard, dense, fibrous root (Galangal)',
          },
        ],
      },
    ],
  },
  south_asia: {
    name: 'South Asia',
    color: 'oklch(0.82 0.19 36deg)',
    countries: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan'],
    description:
      'Spice blends, not single spices, define South Asian cooking. Whole and ground spices are toasted and layered through a dish to build depth over the course of cooking.',
    ingredients: ['Cumin', 'Coriander', 'Turmeric', 'Cardamom', 'Mustard seed', 'Curry leaves', 'Garam masala', 'Chilli'],
    adjectives: ['Fragrant', 'Warming', 'Fiery', 'Earthy', 'Aromatic', 'Tangy', 'Rich', 'Layered'],
    countryProfiles: [
      {
        name: 'India',
        items: [
          { food: 'Paneer', flavour: 'Mild, lactic, delicate, neutral', texture: 'Firm, spongy, bouncy, rubbery' },
          {
            food: 'Ginger & Cardamom',
            flavour: 'Zesty, sharp, warming, peppery (Ginger); sweet-spicy, citrus-forward, herbal (Cardamom)',
            texture: 'Fibrous, wet, juicy, grated (Ginger); papery pods, sticky, hard inner seeds (Cardamom)',
          },
          {
            food: 'Garam Masala',
            flavour: 'Deeply warming, sweet-spiced, pungent, robust',
            texture: 'Powdery, dry, finely-ground, free-flowing',
            key: 'Cardamom, cinnamon, cloves, cumin, black pepper',
          },
          {
            food: 'Panch Phoron',
            flavour: 'Earthy, bittersweet, licorice-like, nutty',
            texture: 'Whole-seed, hard, crunchy, gritty',
            key: 'Whole seeds of cumin, anise, fennel, fenugreek, and mustard',
          },
        ],
      },
    ],
  },
  middle_east: {
    name: 'Middle East',
    color: 'oklch(0.82 0.19 72deg)',
    countries: [
      'Saudi Arabia',
      'Iran',
      'Iraq',
      'Israel',
      'Jordan',
      'Lebanon',
      'Syria',
      'United Arab Emirates',
      'Yemen',
      'Oman',
      'Qatar',
      'Kuwait',
      'Turkey',
    ],
    description:
      'Middle Eastern flavours bring together warm spice, fresh herbs and bright acidity from citrus and pomegranate, often finished with nuts or seeds for texture.',
    ingredients: ['Sumac', "Za'atar", 'Cumin', 'Saffron', 'Mint', 'Pomegranate molasses', 'Tahini', 'Rosewater'],
    adjectives: ['Fragrant', 'Tangy', 'Floral', 'Nutty', 'Warming', 'Bright', 'Herbaceous'],
    countryProfiles: [
      {
        name: 'Iran',
        items: [
          { food: 'Barberries', flavour: 'Sharply acidic, tart, fruity, sour', texture: 'Chewy, leathery, wrinkled' },
          { food: 'Sumac', flavour: 'Citrusy, lemony, astringent, tart', texture: 'Powdery, granular, dry' },
          {
            food: 'Saffron & Dried Lime',
            flavour: 'Floral, earthy, honey-like, metallic-sweet (Saffron); musky, citrusy, intensely sour (Dried Lime)',
            texture: 'Delicate threads, brittle, dry, leathery, wrinkled',
          },
          {
            food: 'Advieh',
            flavour: 'Highly perfumed, floral, warm, citrus-flecked, sweet-sour',
            texture: 'Granular, dry, delicate, finely-milled',
            key: 'Saffron, cumin, cardamom, rose, dried lime',
          },
        ],
      },
    ],
  },
  north_africa: {
    name: 'North Africa',
    color: 'oklch(0.82 0.19 108deg)',
    countries: ['Morocco', 'Algeria', 'Tunisia', 'Libya', 'Egypt', 'Western Sahara', 'Sudan'],
    description:
      'North African cooking pairs warm spice mixes with preserved and sweet ingredients, often slow-cooked so the flavours have time to combine.',
    ingredients: ['Preserved lemon', 'Ras el hanout', 'Cumin', 'Harissa', 'Saffron', 'Mint', 'Dates', 'Cinnamon'],
    adjectives: ['Warming', 'Citrusy', 'Smoky', 'Fiery', 'Sweet-savoury', 'Aromatic'],
    countryProfiles: [
      {
        name: 'North Africa',
        items: [
          { food: 'Preserved Lemon', flavour: 'Intensely sour, citrusy, salty, briny', texture: 'Soft, pliable, tender, skin-like' },
          { food: 'Harissa', flavour: 'Fiery, smoky, intensely warm', texture: 'Thick, oily, wet paste' },
          {
            food: 'Ras el Hanout',
            flavour: 'Exotically fragrant, complex, earthy, sweet-spiced',
            texture: 'Finely-ground, dry, powdery',
            key: 'Saffron, cinnamon, cumin, coriander',
          },
          {
            food: 'Dukkah',
            flavour: 'Savoury-sweet, deeply nutty, toasted, earthy',
            texture: 'Chunky, coarse, crumbly, gravelly, crunchy',
            key: 'Cumin, coriander, toasted sesame seeds, crushed nuts',
          },
        ],
      },
    ],
  },
  west_africa: {
    name: 'West Africa',
    color: 'oklch(0.82 0.19 144deg)',
    countries: [
      'Nigeria',
      'Ghana',
      'Senegal',
      'Mali',
      "Côte d'Ivoire",
      'Guinea',
      'Benin',
      'Togo',
      'Sierra Leone',
      'Liberia',
      'Burkina Faso',
      'Niger',
      'Gambia',
      'Guinea-Bissau',
      'Mauritania',
    ],
    description:
      'West African dishes are built on bold, fiery bases, often a blended pepper and tomato sauce, with peanuts and dried fish adding richness.',
    ingredients: ['Scotch bonnet chilli', 'Ginger', 'Peanuts', 'Palm oil', 'Tamarind', 'Dried fish', 'Cloves', 'Tomato'],
    adjectives: ['Fiery', 'Earthy', 'Pungent', 'Rich', 'Smoky', 'Tangy'],
  },
  horn_africa: {
    name: 'Horn of Africa',
    color: 'oklch(0.82 0.19 180deg)',
    countries: ['Somalia', 'Ethiopia', 'Eritrea', 'Djibouti'],
    description:
      'Horn of Africa cooking is built around fermented, spongy flatbreads and fiery, complex spice blends toasted and ground in-house.',
    ingredients: ['Berbere spice', 'Teff', 'Chilli', 'Ginger', 'Niter kibbeh (spiced butter)', 'Cardamom'],
    adjectives: ['Fiery', 'Sour', 'Fermented', 'Robust', 'Pungent', 'Warming'],
    countryProfiles: [
      {
        name: 'Horn of Africa',
        items: [
          { food: 'Injera', flavour: 'Yeast-forward, sour, fermented, tangy', texture: 'Spongy, springy, aerated, light' },
          {
            food: 'Berbere Spices',
            flavour: 'Intensely fiery, robust, smoky, pungent, highly warming',
            texture: 'Dry, powdery, finely-ground, staining',
            key: 'Chili pepper, ginger, and warming spices',
          },
        ],
      },
    ],
  },
  med_europe: {
    name: 'Southern Europe / Mediterranean',
    color: 'oklch(0.82 0.19 216deg)',
    countries: ['Spain', 'Italy', 'Greece', 'Portugal', 'Croatia', 'Albania', 'Cyprus'],
    description:
      'Mediterranean cooking relies on a small number of very good ingredients, letting olive oil, garlic and fresh herbs carry the dish rather than heavy spicing.',
    ingredients: ['Olive oil', 'Garlic', 'Basil', 'Oregano', 'Tomato', 'Lemon', 'Anchovy', 'Capers'],
    adjectives: ['Bright', 'Herbaceous', 'Fresh', 'Tangy', 'Savoury', 'Fragrant'],
    countryProfiles: [
      {
        name: 'Greece & Cyprus',
        items: [{ food: 'Feta Cheese', flavour: 'Briny, sharp, salty, tangy', texture: 'Crumbly, grainy, chalky' }],
      },
      {
        name: 'Greece',
        items: [
          {
            food: 'Oregano & Mint',
            flavour: 'Pungent, peppery, cooling, earthy, refreshing',
            texture: 'Flaky, dry, crumbled (dried herbs); tender, soft, leafy (fresh herbs)',
          },
        ],
      },
      {
        name: 'Italy',
        items: [
          { food: 'Balsamic Vinegar', flavour: 'Savoury-sweet, mellow, complex, woody', texture: 'Syrupy, viscous, smooth' },
          { food: 'Parmesan (Parmigiano)', flavour: 'Umami-rich, sharp, nutty, salty', texture: 'Granular, hard, crystalline' },
        ],
      },
      {
        name: 'Mediterranean',
        items: [
          { food: 'Labneh', flavour: 'Tart, tangy, sour, lactic', texture: 'Thick, spreadable, dense, creamy' },
          {
            food: "Za'atar",
            flavour: 'Herbal, tangy, nutty, acidic-sharp (due to sumac)',
            texture: 'Flecked, leafy, coarse, crunchy (due to whole sesame seeds)',
            key: 'Sumac, oregano, thyme, marjoram, sesame',
          },
          {
            food: 'Baharat',
            flavour: 'Warm, sweet-spiced, pungent, savoury',
            texture: 'Fine, dry, powdery',
            key: 'Cumin, black pepper, and warm spices',
          },
        ],
      },
    ],
  },
  north_europe: {
    name: 'Northern Europe',
    color: 'oklch(0.82 0.19 252deg)',
    countries: [
      'United Kingdom',
      'Ireland',
      'France',
      'Germany',
      'Netherlands',
      'Belgium',
      'Norway',
      'Sweden',
      'Denmark',
      'Finland',
      'Poland',
      'Lithuania',
      'Latvia',
      'Estonia',
      'Luxembourg',
      'Switzerland',
      'Austria',
      'Czechia',
    ],
    description:
      'Northern European flavours tend to be milder and comforting, built around butter, cured meats and fish, with sharp mustard or vinegar for contrast.',
    ingredients: ['Dill', 'Butter', 'Mustard', 'Caraway', 'Bay leaf', 'Black pepper', 'Smoked fish', 'Parsley'],
    adjectives: ['Earthy', 'Savoury', 'Mild', 'Herbaceous', 'Tangy', 'Comforting'],
    countryProfiles: [
      {
        name: 'Scandinavia',
        items: [{ food: 'Skyr', flavour: 'Tart, lactic, mild, slightly sour', texture: 'Velvety, thick, smooth, dense' }],
      },
      {
        name: 'Germany',
        items: [{ food: 'Sauerkraut', flavour: 'Acidic, sour, pungent, fermented', texture: 'Crunchy, fibrous, crisp' }],
      },
      {
        name: 'France',
        items: [
          { food: 'Dijon Mustard', flavour: 'Pungent, fiery, sharp, sinus-clearing', texture: 'Smooth, pasty, thick' },
          { food: 'Herbes de Provence', flavour: 'Perfumed, pine-like, herbaceous, floral', texture: 'Dry, leafy, brittle' },
          {
            food: 'Quatre-épices',
            flavour: 'Warming, sweet-spiced, aromatic, delicate',
            texture: 'Powdery, dry, finely-milled, dusty',
            key: 'Warm wood-spices (pepper, nutmeg, cloves, ginger)',
          },
        ],
      },
      {
        name: 'United Kingdom',
        items: [{ food: 'Cheddar & Stilton', flavour: 'Mature, earthy, robust, sharp', texture: 'Firm (Cheddar), crumbly (Stilton)' }],
      },
    ],
  },
  latam_caribbean: {
    name: 'Latin America / Caribbean',
    color: 'oklch(0.82 0.19 288deg)',
    countries: [
      'Mexico',
      'Guatemala',
      'Belize',
      'Honduras',
      'El Salvador',
      'Nicaragua',
      'Costa Rica',
      'Panama',
      'Cuba',
      'Jamaica',
      'Dominican Rep.',
      'Haiti',
      'Brazil',
      'Argentina',
      'Chile',
      'Peru',
      'Colombia',
      'Venezuela',
      'Ecuador',
      'Bolivia',
      'Paraguay',
      'Uruguay',
      'Guyana',
      'Suriname',
    ],
    description:
      'Latin American and Caribbean cooking pairs sharp citrus and chilli heat with slow-cooked, smoky depth, often finished with fresh herbs.',
    ingredients: ['Lime', 'Chilli', 'Coriander', 'Cumin', 'Allspice', 'Cacao', 'Achiote', 'Epazote'],
    adjectives: ['Zesty', 'Fiery', 'Smoky', 'Tangy', 'Fruity', 'Bold'],
    countryProfiles: [
      {
        name: 'Mexico',
        items: [
          { food: 'Sour Cream (Crema)', flavour: 'Tangy, lactic, rich, buttery', texture: 'Silky, luscious, thick, smooth' },
          {
            food: 'Dried Chilies',
            flavour: 'Smoky, leathery, deeply warm, fruity, bittersweet',
            texture: 'Wrinkled, tough, pliable, crisp (when toasted)',
          },
        ],
      },
      {
        name: 'Central America',
        items: [{ food: 'Tamarind', flavour: 'Tart, astringent, sweet-sour, zesty', texture: 'Sticky, pulpy, dense, fibrous' }],
      },
      {
        name: 'Caribbean',
        items: [
          { food: 'Pikliz (Spicy Slaw)', flavour: 'Fiery, zesty, vinegar-forward, hot', texture: 'Crisp, crunchy, snappy' },
          {
            food: 'Jerk Spices',
            flavour: 'Pungent, fiery, intensely sweet-and-savoury',
            texture: 'Coarse, granular, flecked (rubbed herbs), sticky (if used as a wet paste)',
            key: 'Allspice, hot peppers, ginger, oregano, cumin',
          },
        ],
      },
    ],
  },
  north_america: {
    name: 'North America',
    color: 'oklch(0.82 0.19 324deg)',
    countries: ['United States of America', 'Canada'],
    description:
      "North American flavours draw on the continent's many immigrant cuisines, but a shared thread is smoky, sweet-savoury barbecue seasoning and bold mustard-based tang.",
    ingredients: ['Smoked paprika', 'Maple syrup', 'Mustard', 'Black pepper', 'Dill', 'Cayenne pepper', 'Brown sugar'],
    adjectives: ['Smoky', 'Sweet-savoury', 'Tangy', 'Bold', 'Warming'],
  },
};

export const INGREDIENT_IMAGES: Record<string, string> = {
  'Soy sauce': '/sources/ingredients/soy-sauce.jpg',
  Ginger: '/sources/ingredients/ginger.jpg',
  Garlic: '/sources/ingredients/garlic.jpg',
  'Sesame oil': '/sources/ingredients/sesame-oil.png',
  'Rice vinegar': '/sources/ingredients/rice-vinegar.jpg',
  Miso: '/sources/ingredients/miso.jpg',
  'Star anise': '/sources/ingredients/star-anise.jpg',
  Chilli: '/sources/ingredients/chilli.jpg',
  Cumin: '/sources/ingredients/cumin.jpg',
  Coriander: '/sources/ingredients/coriander.jpg',
  Turmeric: '/sources/ingredients/turmeric.jpg',
  Cardamom: '/sources/ingredients/cardamom.jpg',
  'Mustard seed': '/sources/ingredients/mustard-seed.png',
  'Curry leaves': '/sources/ingredients/curry-leaves.jpg',
  'Garam masala': '/sources/ingredients/garam-masala.jpg',
  Sumac: '/sources/ingredients/sumac.JPG',
  "Za'atar": '/sources/ingredients/zaatar.jpg',
  Saffron: '/sources/ingredients/saffron.jpg',
  Mint: '/sources/ingredients/mint.jpg',
  'Pomegranate molasses': '/sources/ingredients/pomegranate-molasses.jpg',
  Tahini: '/sources/ingredients/tahini.JPG',
  Rosewater: '/sources/ingredients/rosewater.jpg',
  'Preserved lemon': '/sources/ingredients/preserved-lemon.jpg',
  'Ras el hanout': '/sources/ingredients/ras-el-hanout.jpg',
  Harissa: '/sources/ingredients/harissa.JPG',
  Dates: '/sources/ingredients/dates.jpg',
  Cinnamon: '/sources/ingredients/cinnamon.jpg',
  'Scotch bonnet chilli': '/sources/ingredients/scotch-bonnet-chilli.jpg',
  Peanuts: '/sources/ingredients/peanuts.jpg',
  'Palm oil': '/sources/ingredients/palm-oil.jpg',
  Tamarind: '/sources/ingredients/tamarind.JPG',
  'Dried fish': '/sources/ingredients/dried-fish.jpg',
  Cloves: '/sources/ingredients/cloves.jpg',
  Tomato: '/sources/ingredients/tomato.jpg',
  'Berbere spice': '/sources/ingredients/berbere-spice.jpg',
  Teff: '/sources/ingredients/teff.jpg',
  'Niter kibbeh (spiced butter)': '/sources/ingredients/niter-kibbeh-spiced-butter.JPG',
  'Olive oil': '/sources/ingredients/olive-oil.jpg',
  Basil: '/sources/ingredients/basil.jpg',
  Oregano: '/sources/ingredients/oregano.jpg',
  Lemon: '/sources/ingredients/lemon.JPG',
  Anchovy: '/sources/ingredients/anchovy.jpg',
  Capers: '/sources/ingredients/capers.jpg',
  Dill: '/sources/ingredients/dill.jpg',
  Butter: '/sources/ingredients/butter.JPG',
  Mustard: '/sources/ingredients/mustard.JPG',
  Caraway: '/sources/ingredients/caraway.jpg',
  'Bay leaf': '/sources/ingredients/bay-leaf.JPG',
  'Black pepper': '/sources/ingredients/black-pepper.jpg',
  'Smoked fish': '/sources/ingredients/smoked-fish.JPG',
  Parsley: '/sources/ingredients/parsley.jpg',
  Lime: '/sources/ingredients/lime.jpg',
  Allspice: '/sources/ingredients/allspice.jpg',
  Cacao: '/sources/ingredients/cacao.JPG',
  Achiote: '/sources/ingredients/achiote.JPG',
  Epazote: '/sources/ingredients/epazote.jpg',
  'Smoked paprika': '/sources/ingredients/smoked-paprika.jpg',
  'Maple syrup': '/sources/ingredients/maple-syrup.jpg',
  'Cayenne pepper': '/sources/ingredients/cayenne-pepper.jpg',
  'Brown sugar': '/sources/ingredients/brown-sugar.jpg',
};

export const FOOD_IMAGES: Record<string, string> = {
  'Black Vinegar': '/sources/foods/black-vinegar.jpg',
  'Szechuan Peppercorn & Star Anise': '/sources/foods/szechuan-peppercorn-star-anise.jpg',
  Miso: '/sources/foods/miso.jpg',
  'Wasabi & Shiso': '/sources/foods/wasabi-shiso.JPG',
  'Shichimi Togarashi': '/sources/foods/shichimi-togarashi.jpg',
  Kimchi: '/sources/foods/kimchi.jpg',
  Sriracha: '/sources/foods/sriracha.jpg',
  'Lemongrass & Galangal': '/sources/foods/lemongrass-galangal.JPG',
  Paneer: '/sources/foods/paneer.jpg',
  'Ginger & Cardamom': '/sources/foods/ginger-cardamom.jpg',
  'Garam Masala': '/sources/foods/garam-masala.jpg',
  'Panch Phoron': '/sources/foods/panch-phoron.jpg',
  Barberries: '/sources/foods/barberries.jpg',
  Sumac: '/sources/foods/sumac.JPG',
  'Saffron & Dried Lime': '/sources/foods/saffron-dried-lime.JPG',
  Advieh: '/sources/foods/advieh.jpg',
  'Preserved Lemon': '/sources/foods/preserved-lemon.jpg',
  Harissa: '/sources/foods/harissa.JPG',
  'Ras el Hanout': '/sources/foods/ras-el-hanout.jpg',
  Dukkah: '/sources/foods/dukkah.JPG',
  Injera: '/sources/foods/injera.jpg',
  'Berbere Spices': '/sources/foods/berbere-spices.jpg',
  'Feta Cheese': '/sources/foods/feta-cheese.jpg',
  'Oregano & Mint': '/sources/foods/oregano-mint.jpg',
  'Balsamic Vinegar': '/sources/foods/balsamic-vinegar.jpg',
  'Parmesan (Parmigiano)': '/sources/foods/parmesan-parmigiano.jpg',
  Labneh: '/sources/foods/labneh.jpg',
  "Za'atar": '/sources/foods/zaatar.jpg',
  Baharat: '/sources/foods/baharat.png',
  Skyr: '/sources/foods/skyr.jpg',
  Sauerkraut: '/sources/foods/sauerkraut.jpg',
  'Dijon Mustard': '/sources/foods/dijon-mustard.jpg',
  'Herbes de Provence': '/sources/foods/herbes-de-provence.jpg',
  'Quatre-épices': '/sources/foods/quatre-pices.jpg',
  'Cheddar & Stilton': '/sources/foods/cheddar-stilton.jpg',
  'Sour Cream (Crema)': '/sources/foods/sour-cream-crema.jpg',
  'Dried Chilies': '/sources/foods/dried-chilies.jpg',
  Tamarind: '/sources/foods/tamarind.JPG',
  'Pikliz (Spicy Slaw)': '/sources/foods/pikliz-spicy-slaw.jpg',
  'Jerk Spices': '/sources/foods/jerk-spices.jpg',
};

export const countryToRegion: Record<string, RegionKey> = {};
(Object.entries(REGIONS) as [RegionKey, Region][]).forEach(([key, region]) => {
  region.countries.forEach((country) => {
    countryToRegion[country] = key;
  });
});
