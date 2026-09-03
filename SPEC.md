# Portfolio Landing Page — Spec Driven Development (SDD)

## 📋 Overview

**Owner:** Muhammad Rizqi Fauzan  
**Domain:** Network Engineer × AI/IoT/Robotics Specialist  
**Tech Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion  
**Deployment:** Vercel (connected to GitHub)  
**Last Updated:** 2026-09-01

---

## 🎯 Goals

1. **Personal Branding** — Position Rizqi as a Network Engineer with strong AI/IoT/Robotics capabilities
2. **Recruiter-Friendly** — Clear, scannable, professional (not "AI-looking")
3. **Responsive** — Flawless on mobile, tablet, laptop, desktop, ultrawide
4. **Maintainable** — Clean architecture, well-documented, easy to update
5. **Performant** — Fast loading, optimized assets, SEO-friendly

---

## 🎨 Design System

### Color Palette
| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--bg` | `#FFFFFF` | `#0F172A` | Background |
| `--bg-secondary` | `#F8FAFC` | `#1E293B` | Cards, sections |
| `--text` | `#0F172A` | `#F8FAFC` | Primary text |
| `--text-secondary` | `#475569` | `#94A3B8` | Secondary text |
| `--accent` | `#1E40AF` | `#3B82F6` | Links, buttons, highlights |
| `--accent-hover` | `#1E3A8A` | `#60A5FA` | Hover state |
| `--border` | `#E2E8F0` | `#334155` | Borders, dividers |

### Typography
- **Headings:** `font-sans` (Inter / Geist Sans) — `font-weight: 700`
- **Body:** `font-sans` — `font-weight: 400`, `line-height: 1.7`
- **Code/Technical:** `font-mono` (JetBrains Mono) — for tech stack labels

### Spacing Scale
`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px — consistent rhythm

### Breakpoints (Tailwind default)
- `sm:` 640px (large phones)
- `md:` 768px (tablets)
- `lg:` 1024px (laptops)
- `xl:` 1280px (desktops)
- `2xl:` 1536px (ultrawide)

---

## 🏗️ Architecture

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (providers, metadata)
│   ├── page.tsx              # Home page (composes sections)
│   ├── globals.css           # Global styles + Tailwind
│   ├── blog/                 # Blog section
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── api/                  # API routes (contact form, etc.)
│       └── contact/route.ts
│
├── components/               # React components
│   ├── ui/                   # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── SectionTitle.tsx
│   ├── layout/               # Layout components
│   │   ├── Header.tsx        # Sticky nav with mobile menu
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx # Dark/light mode context
│   ├── sections/             # Page sections (one per file)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   └── icons/                # Custom SVG icons
│       └── index.tsx
│
├── lib/                      # Utilities & data
│   ├── data/                 # Content data (JSON-like TS files)
│   │   ├── profile.ts        # Name, bio, links
│   │   ├── skills.ts         # Skills grouped by category
│   │   ├── projects.ts       # Project list
│   │   ├── experience.ts     # Work experience
│   │   └── certifications.ts # Certifications list
│   ├── hooks/                # Custom React hooks
│   │   ├── useTheme.ts
│   │   └── useScrollAnimation.ts
│   └── utils/                # Helper functions
│       └── cn.ts             # clsx + tailwind-merge
│
├── content/                  # MDX content for blog
│   └── posts/
│
├── types/                    # TypeScript type definitions
│   └── index.ts
│
└── public/                   # Static assets
    ├── cv/
    │   └── Muhammad_Rizqi_Fauzan_CV.pdf
    └── images/
        ├── profile.jpg
        └── projects/
```

---

## 📦 Dependencies

### Core
- `next` — Framework
- `react` / `react-dom` — UI
- `typescript` — Type safety

### Styling
- `tailwindcss` — Utility-first CSS
- `clsx` / `tailwind-merge` — Conditional class merging
- `next-themes` — Dark/light mode

### Animation
- `framer-motion` — Scroll animations, transitions

### Content
- `next-mdx-remote` — Blog posts from MDX
- `gray-matter` — Frontmatter parsing

### Dev
- `@types/react`, `@types/node` — TypeScript types
- `eslint`, `eslint-config-next` — Linting

---

## 🔧 Component Specs

### `<Header />`
- Sticky top, blur backdrop on scroll
- Logo (name) left, nav links right
- Mobile: hamburger menu with slide-out drawer
- Theme toggle (sun/moon icon) always visible
- Language toggle (ID/EN) always visible

### `<Hero />`
- Full viewport height (min 100vh)
- Left: Headline + subheadline + CTA buttons
- Right: Profile photo (circular, subtle border)
- Scroll indicator at bottom
- Animation: fade-in-up on load

### `<About />`
- 2-column on desktop, stacked on mobile
- Left: Profile photo or illustration
- Right: Bio text (4-5 sentences)
- Key highlights as bullet points

### `<Skills />`
- Grouped by category: Network, AI/ML, IoT/Robotics, Tools
- Each skill as a `Badge` with icon
- Hover effect: subtle scale + color change
- Animation: stagger fade-in on scroll

### `<Projects />`
- Grid: 1 col mobile, 2 cols tablet, 3 cols desktop
- Each card: image, title, description, tech tags, links
- Hover: image zoom + card lift
- Click: expand or navigate to detail

### `<Experience />`
- Timeline layout (vertical line + dots)
- Each entry: date, role, company, description
- Alternating sides on desktop

### `<Certifications />`
- Badge/card grid
- Each: issuer, name, date, credential link
- Grouped by issuer (Huawei, Dicoding, etc.)

### `<Contact />`
- 2-column: info left, form right
- Form: name, email, message + submit
- Social links row
- Success/error states

### `<Footer />`
- Copyright, social links, back-to-top button

---

## 🌐 Multi-Language (i18n)

### Approach
- Simple context-based (no library needed for 2 languages)
- Language stored in localStorage + cookie
- All text content in `lib/data/` with `id` and `en` keys

### Structure
```typescript
// lib/data/profile.ts
export const profile = {
  name: "Muhammad Rizqi Fauzan",
  headline: {
    id: "Network Engineer × AI/IoT Specialist",
    en: "Network Engineer × AI/IoT Specialist",
  },
  bio: {
    id: "Lulusan Teknik Telekomunikasi...",
    en: "Telecommunication Engineering graduate...",
  },
  // ...
};
```

---

## 🌙 Dark/Light Mode

- Default: system preference
- Toggle: manual override stored in localStorage
- Smooth transition between themes
- All colors via CSS variables

---

## 📱 Responsive Strategy

### Mobile-First
- Base styles for mobile
- Progressive enhancement for larger screens

### Section Spacing
- Mobile: `py-12` (48px)
- Tablet: `py-16` (64px)
- Desktop: `py-24` (96px)

### Typography Scaling
- Headings: `text-2xl` → `text-4xl` → `text-5xl`
- Body: `text-base` → `text-lg`

### Navigation
- Mobile: hamburger menu
- Desktop: inline links

---

## ⚡ Performance

- Image optimization via `next/image`
- Font optimization via `next/font`
- Lazy loading for below-fold sections
- Minimal JavaScript bundle
- Static generation where possible

---

## 🔍 SEO

- Semantic HTML (`<main>`, `<section>`, `<article>`)
- Meta tags (title, description, OG tags)
- Structured data (Person schema)
- Sitemap + robots.txt

---

## 📝 Content Data

All content lives in `lib/data/` as TypeScript files. This makes it easy to update without touching components.

---

## 🚀 Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push to `main`
4. Custom domain (optional): `rizqifauzan.dev`

---

## ✅ Acceptance Criteria

- [ ] Loads in < 3s on 4G
- [ ] Perfect Lighthouse score (90+)
- [ ] Responsive on all breakpoints
- [ ] Dark/light mode works
- [ ] Language toggle works
- [ ] All links work
- [ ] Contact form validates
- [ ] CV download works
- [ ] Blog renders MDX
- [ ] No console errors
