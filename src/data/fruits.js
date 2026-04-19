// Fruit catalog. SVG paths are authored at viewBox 0 0 300 300.
// Each "path" describes the body. "stem" and "leaf" are optional decorative
// paths layered on the body in <FruitShape />.

export const fruits = [
  {
    id: 'apple',
    name: 'Apple',
    tagline: 'The archetype',
    scientificName: 'Malus domestica',
    family: 'Rosaceae',
    origin: 'Central Asia — the wild forests of Kazakhstan',
    category: 'pome',
    colors: {
      primary: '#E63946',
      secondary: '#F9E5C4',
      accent: '#6A9A2E',
      bgFrom: '#FFE5E8',
      bgTo: '#FFF4E4',
    },
    path:
      'M 150 72 C 115 68 82 92 80 138 C 78 198 108 238 150 240 C 192 238 222 198 220 138 C 218 92 185 68 150 72 Z',
    stem: 'M 148 72 Q 150 56 156 48',
    leaf:
      'M 156 50 Q 176 40 186 56 Q 172 66 156 60 Z',
    description:
      'The quiet genius. A balanced sweetness set against clean acidity — the reference point against which every other fruit is measured.',
    story: [
      'Long before it was a grocery aisle staple, the apple was a wild thing of the mountain forests of Kazakhstan. Traders carried it west along the Silk Road, and in every orchard it crossed, a new flavor emerged.',
      'Today there are more than 7,500 cultivars — from the archival Russet to the ubiquitous Gala — each a record of a specific hillside, a specific century, a specific hand.',
      'We chose the apple to open this index not because it is the most interesting fruit, but because it is the most complete one: structure, skin, scent, story. A fruit that has quietly taught us how to think about all the others.',
    ],
    nutrition: {
      calories: 52,
      carbs: 14,
      fiber: 2.4,
      sugar: 10,
      vitaminC: 8,
    },
    season: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    funFact: 'Apples float because 25% of their volume is air.',
  },
  {
    id: 'pear',
    name: 'Pear',
    tagline: 'Quiet grace',
    scientificName: 'Pyrus communis',
    family: 'Rosaceae',
    origin: 'The foothills of the Caucasus and Western China',
    category: 'pome',
    colors: {
      primary: '#9DC23A',
      secondary: '#EFE8C6',
      accent: '#5C7B21',
      bgFrom: '#EEF5D5',
      bgTo: '#FBF7E4',
    },
    path:
      'M 150 48 C 138 48 132 62 138 82 C 108 100 86 138 92 182 C 98 230 138 256 172 248 C 216 238 232 192 220 152 C 210 118 184 92 172 78 C 168 62 164 46 150 48 Z',
    stem: 'M 150 52 Q 150 38 156 28',
    leaf: 'M 156 30 Q 180 20 190 40 Q 172 52 156 42 Z',
    description:
      'A fruit that listens more than it speaks. The ripeness window is narrow; the reward is a melting, perfumed flesh.',
    story: [
      'The pear has an aristocratic patience. Unlike the apple, it does not ripen on the branch — it must be picked early and coaxed into softness off the tree, as if the fruit prefers to finish its life indoors.',
      'Varieties like the Comice and the Bartlett were engineered by 18th-century French monks and English horticulturists obsessed with texture; they measured pears not by sweetness but by the moment at which a spoon met no resistance.',
      'To eat a perfectly ripe pear is to taste a very specific window of time — a kind of agricultural haiku.',
    ],
    nutrition: {
      calories: 57,
      carbs: 15,
      fiber: 3.1,
      sugar: 10,
      vitaminC: 4,
    },
    season: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    funFact: 'Ancient Greeks called the pear "a gift of the gods."',
  },
  {
    id: 'banana',
    name: 'Banana',
    tagline: 'Pure curve',
    scientificName: 'Musa acuminata',
    family: 'Musaceae',
    origin: 'Southeast Asia — Papua New Guinea, 8000 BCE',
    category: 'tropical',
    colors: {
      primary: '#F3CE3A',
      secondary: '#4A3B10',
      accent: '#2F6E3A',
      bgFrom: '#FFF4C4',
      bgTo: '#FFE9B8',
    },
    path:
      'M 62 132 C 50 104 70 82 100 92 C 162 108 222 140 250 182 C 256 194 246 200 234 196 C 200 170 140 156 100 162 C 82 166 66 152 62 132 Z',
    stem: 'M 80 100 L 66 86',
    leaf: '',
    description:
      'A fruit disguised as punctuation. Botanically a berry, practically the world\'s most successful portable meal.',
    story: [
      'The modern banana is a clone. Every Cavendish you\'ve ever eaten is genetically identical to every other — a single organism propagated for 70 years across the entire planet.',
      'This is why the previous banana, the Gros Michel, effectively went extinct from a single fungal disease in the 1950s, and it is why the Cavendish is in the same fragile position today.',
      'It is also why the banana tastes precisely the same everywhere. A fruit that has traded genetic variety for global consistency — a strangely modern deal.',
    ],
    nutrition: {
      calories: 89,
      carbs: 23,
      fiber: 2.6,
      sugar: 12,
      vitaminC: 9,
    },
    season: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    funFact: 'Bananas grow pointing upward, not hanging down.',
  },
  {
    id: 'orange',
    name: 'Orange',
    tagline: 'Concentrated sun',
    scientificName: 'Citrus × sinensis',
    family: 'Rutaceae',
    origin: 'Southern China, first hybridized ~2500 BCE',
    category: 'citrus',
    colors: {
      primary: '#FF8A3A',
      secondary: '#5B2B0C',
      accent: '#2F6E3A',
      bgFrom: '#FFE0C2',
      bgTo: '#FFF2DE',
    },
    path:
      'M 150 72 C 100 72 72 110 72 158 C 72 208 110 238 150 238 C 190 238 228 208 228 158 C 228 110 200 72 150 72 Z',
    stem: 'M 150 72 Q 148 60 142 54',
    leaf: 'M 142 54 Q 122 42 114 56 Q 128 72 146 66 Z',
    description:
      'The simplest name for the most complicated smell. An aroma assembled from hundreds of distinct molecules.',
    story: [
      'The orange was invented. It does not exist in the wild. It is a hybrid of the pomelo and the mandarin, bred somewhere in Southern China several thousand years ago, then carried across continents as a luxury object before becoming a breakfast default.',
      'Its color is younger than its fruit: in tropical climates oranges ripen while staying green. The vivid orange we expect is a consequence of cool nights, not ripeness.',
      'A commercial dye called "Citrus Red 2" was used for decades to make Florida oranges orange. A cosmetic fix for a botanical accuracy.',
    ],
    nutrition: {
      calories: 47,
      carbs: 12,
      fiber: 2.4,
      sugar: 9,
      vitaminC: 53,
    },
    season: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    funFact: 'An orange tree can bear fruit for over 100 years.',
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tagline: 'Wearable seeds',
    scientificName: 'Fragaria × ananassa',
    family: 'Rosaceae',
    origin: 'Brittany, France, 1750 — a French–Chilean hybrid',
    category: 'berry',
    colors: {
      primary: '#E6305A',
      secondary: '#FFE5C8',
      accent: '#2F6E3A',
      bgFrom: '#FFD6DE',
      bgTo: '#FFF0E3',
    },
    path:
      'M 150 82 C 110 74 84 104 94 144 C 104 188 136 230 150 244 C 164 230 196 188 206 144 C 216 104 190 74 150 82 Z',
    stem: '',
    leaf:
      'M 120 78 L 150 58 L 180 78 L 168 92 L 150 78 L 132 92 Z',
    description:
      'Not a berry — a false fruit. The red flesh is a swollen flower base, and the seeds on the outside are the true fruits.',
    story: [
      'The strawberry as we know it is an accident of empire. A French lieutenant brought a small Chilean variety home in 1714; it met a Virginian strawberry in a Breton garden; together they became the cultivar the world now grows.',
      'Everything you think of as a "strawberry" is this union. Two continents, two climates, compressed into a single scent.',
      'Each strawberry carries about 200 tiny seeds on its surface — the only commercially grown fruit that wears its seeds on the outside.',
    ],
    nutrition: {
      calories: 32,
      carbs: 8,
      fiber: 2.0,
      sugar: 5,
      vitaminC: 59,
    },
    season: [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    funFact: 'The strawberry is not botanically a berry — but the banana is.',
  },
  {
    id: 'dragonfruit',
    name: 'Dragon fruit',
    tagline: 'Midnight cactus bloom',
    scientificName: 'Hylocereus undatus',
    family: 'Cactaceae',
    origin: 'Central and South America — desert night-blooming cacti',
    category: 'tropical',
    colors: {
      primary: '#E63995',
      secondary: '#F4F0EA',
      accent: '#2F6E3A',
      bgFrom: '#FFD3E9',
      bgTo: '#F4E3FF',
    },
    path:
      'M 150 70 C 108 74 82 114 88 162 C 94 214 128 244 150 242 C 172 244 206 214 212 162 C 218 114 192 74 150 70 Z',
    stem: '',
    leaf:
      'M 150 60 L 176 40 L 184 60 L 204 58 L 196 80 L 214 90 L 196 104 L 200 124 L 180 118 L 168 136 L 156 122 L 144 138 L 132 122 L 116 134 L 108 116 L 88 114 L 102 96 L 84 84 L 104 74 L 100 56 L 122 62 L 136 46 Z',
    description:
      'A fruit that flowers only at night. The vivid skin opens onto flesh pale and freckled as a galactic map.',
    story: [
      'Dragon fruit grows on a climbing cactus native to the deserts of Mexico and Central America. Its flowers open for a single night and are pollinated by bats and moths.',
      'The "dragon" name is a 20th-century Vietnamese export story: French colonists planted the cactus there, and when the fruit was re-introduced to global markets, it came dressed in a new mythology.',
      'Bite through the hot-pink skin and the inside is almost underdesigned — a soft white flesh speckled with tiny black seeds, like a paused snowfall.',
    ],
    nutrition: {
      calories: 60,
      carbs: 13,
      fiber: 3.0,
      sugar: 8,
      vitaminC: 3,
    },
    season: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    funFact: 'A single dragon fruit flower blooms for only one night.',
  },
]

export const getFruit = (id) => fruits.find((f) => f.id === id)

export const nextFruit = (id) => {
  const i = fruits.findIndex((f) => f.id === id)
  return fruits[(i + 1) % fruits.length]
}

export const prevFruit = (id) => {
  const i = fruits.findIndex((f) => f.id === id)
  return fruits[(i - 1 + fruits.length) % fruits.length]
}
