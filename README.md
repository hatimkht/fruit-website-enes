# Flora — An Experience in Fruit

An editorial, interactive multi-page website about fruit. Built with React, Vite, Framer Motion, Lenis and flubber (SVG morph). No templates, no bootstrap — every layout, motion and detail is hand-designed.

## Highlights

- **SVG-morph hero** — Apple ▸ Pear ▸ Banana ▸ Orange ▸ Strawberry ▸ Dragon fruit, continuously morphing with matched color transitions (flubber + requestAnimationFrame).
- **Custom cursor** with dot + ring spring motion, reacting to interactive elements.
- **Lenis smooth scroll** with cubic easing, plus scroll-driven parallax on hero and detail pages.
- **Proximity "Warp" typography** — letters of the big headline bend gently away from the pointer.
- **Framer Motion page transitions** (mode="wait") with eased translate + fade.
- **Real routing**: Landing, Catalog, Detail (`/fruit/:id`), About, Play.
- **Smoothie Mixer (Play page)** — click fruits into a blender; the liquid morphs into a soft blob and blends the fruits' colors into a living palette. Export the palette as HSL.
- Fully responsive, no external UI library, no Tailwind — one hand-written CSS system.

## Stack

- React 18 + Vite 5
- React Router 6
- Framer Motion 11
- Lenis (smooth scroll)
- flubber (SVG path interpolation)
- Google Fonts: Fraunces (display serif) + Inter (UI)

## Getting started

```bash
cd fruit-experience
npm install
npm run dev
```

Open http://localhost:5173.

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
fruit-experience/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css          # Full design system
    ├── data/
    │   └── fruits.js           # Fruit catalog + SVG paths
    ├── components/
    │   ├── Navigation.jsx
    │   ├── Cursor.jsx
    │   ├── SmoothScroll.jsx
    │   ├── PageTransition.jsx
    │   ├── FruitMorph.jsx      # The morphing hero
    │   ├── FruitShape.jsx      # Static fruit SVG
    │   ├── FruitCard.jsx
    │   ├── WarpText.jsx        # Proximity-reactive headline
    │   └── NutritionRing.jsx
    └── pages/
        ├── Landing.jsx
        ├── Catalog.jsx
        ├── Detail.jsx
        ├── About.jsx
        └── Play.jsx            # Smoothie mixer
```

## Design direction

- Warm off-white background (`#faf6ef`), deep ink text (`#16120e`).
- Soft fruit-inspired gradients as accent surfaces.
- Big display serif (Fraunces) paired with Inter for body.
- Generous whitespace, precise type scale, motion that leads the eye.

Feel free to remix.
