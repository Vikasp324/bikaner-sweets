# Design Brief

## Direction
Bikaner Sweets — Warm, festive Indian sweet shop showcase with modern e-commerce polish; traditional festival aesthetics paired with clean, navigable layout.

## Tone
Maximalist with restraint: saturated warm colors (saffron, red, gold) balanced against cream neutrals; editorial serif headings with rounded body text create approachable luxury.

## Differentiation
Indian decorative pattern borders (CSS), warm gradient CTAs, high-quality product imagery elevation, and smooth entrance animations evoke handcrafted tradition and festive celebration.

## Color Palette

| Token      | OKLCH           | Role                                  |
| ---------- | --------------- | ------------------------------------- |
| background | 0.97 0.01 75    | Warm cream base; light/approachable   |
| foreground | 0.2 0.04 50     | Deep warm brown; text                 |
| primary    | 0.55 0.22 40    | Deep saffron/orange; hero & CTAs      |
| accent     | 0.65 0.2 20     | Warm red; decorative borders, accents |
| card       | 0.99 0.005 75   | Off-white; product cards              |
| muted      | 0.92 0.02 75    | Light warm grey; secondary sections   |

## Typography

- Display: Lora — serif, editorial elegance for hero & section headings
- Body: Nunito — warm, rounded sans for copy & labels; friendly & festive
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, label `text-sm font-semibold uppercase tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Card-based hierarchy with warm shadows; muted background alternation (cream / pale warm) creates visual rhythm; product cards lift on hover via shadow + scale.

## Structural Zones

| Zone    | Background         | Border                 | Notes                                               |
| ------- | ------------------ | ---------------------- | --------------------------------------------------- |
| Header  | primary gradient   | none                   | Saffron gradient + white nav text; sticky/float    |
| Hero    | warm cream + image | none                   | Full-width image + overlay text (Hindi)            |
| Content | alternating        | subtle warm decorative | Sections: Products, About, Offers, Contact         |
| Footer  | muted background   | top warm accent border | Warm-toned footer with contact/links               |

## Spacing & Rhythm

Section gaps 64px–80px; card grids 16px gaps; micro-spacing (padding) 12px–24px; breathing room maintains festive energy without cluttering.

## Component Patterns

- **Buttons**: Primary (saffron gradient) + Secondary (outline warm border); rounded-lg; hover scale + shadow lift
- **Cards**: bg-card, rounded-lg, subtle shadow; hover shadow-elevated + transform scale-105
- **Badges**: inline-block, bg-accent/10, text-accent, rounded-full, px-3 py-1

## Motion

- Entrance: fade-in-up (0.6s) on section scroll
- Hover: scale transform + shadow elevation (0.3s cubic-bezier smooth)
- Decorative: float-gentle (3s) on hero imagery; subtle fade-in on load

## Constraints

- No dark mode (light-only showcase aesthetic; warm cream + saffron defines brand)
- High image prominence; layout must showcase product photography
- All text in Hindi; font metrics optimized for Devanagari rendering
- Mobile-first responsive; touch-friendly tap targets (48px minimum)

## Signature Detail

Decorative warm-red borders (opacity 30%) subtly frame product cards and sections, evoking traditional Indian art danda/border patterns in CSS—no raster graphics needed.
