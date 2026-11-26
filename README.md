# Prakshal HardwareLab
Explore. Assemble. Diagnose. Master. - Prakshal IT Academy, Gandhinagar

## Run
`npm install && npm run dev` (dev) | `npm run build && npm run preview` (production)

## Stack
React + Vite + TypeScript, Tailwind CSS v4, Three.js / React Three Fiber / Drei, Framer Motion, React Router, Zustand (persisted to localStorage), Lucide.

## Implemented
- App shell: collapsible sidebar, global search, breadcrumbs, dark/light mode, responsive layout.
- Hardware Library: Motherboard, CPU, RAM (Hinglish notes, specs, identification, maintenance, troubleshooting, questions, practicals).
- 3D Lab: motherboard explorer with 11 interactive parts, standard views, smooth camera focus, isolate, transparent, fullscreen, info panel.
- Quiz (14 MCQs, topic filter, explanations), Dashboard (progress, bookmarks, history, weak topics).

## Not yet built
Remaining library modules, GLB hardware assets and photographs, virtual practical labs, the 500-question exam system with mock papers and printing.

## Assets and licensing
- Logo: `public/logo.svg` is a placeholder monogram. Replace it with the official Prakshal logo.
- 3D: the motherboard is a procedural educational replica generated in code (no external assets, no attribution needed). Lighting uses local Lightformers (no HDRI download).
- Photographs/GLB: none bundled. When you add any, record source and licence here.
- Font: Poppins (SIL OFL) loaded from Google Fonts.

## Add content
Modules: `src/data/modules.ts`. Questions: `src/data/questions.ts`. Motherboard parts: `src/data/hardware.ts`.
