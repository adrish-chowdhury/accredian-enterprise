# Accredian Enterprise — Landing Page Clone

A pixel-faithful yet improved rebuild of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and TypeScript.

---

## Live Demo

> Deploy to Vercel with one click:
> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Setup Instructions

### Prerequisites

- Node.js 18+ (tested on v24)
- npm 9+

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/adrish-chowdhury/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

---

## Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx          # Root layout with Inter font + SEO metadata
│   ├── page.tsx            # Main page — assembles all sections
│   ├── globals.css         # Tailwind v4 + custom animations
│   └── api/
│       └── leads/
│           └── route.ts    # POST /api/leads — stores lead data to JSON
├── components/
│   ├── Navbar.tsx          # Sticky nav with scroll progress bar + mobile menu
│   ├── Hero.tsx            # Full-screen hero with live dashboard mockup
│   ├── Stats.tsx           # Animated counter statistics section
│   ├── Features.tsx        # Interactive tabbed features (8 capabilities)
│   ├── HowItWorks.tsx      # 4-step implementation process
│   ├── Testimonials.tsx    # Auto-rotating testimonial carousel
│   ├── Partners.tsx        # Academic & industry partner grid
│   ├── LeadForm.tsx        # Lead capture form with validation
│   ├── FloatingCTA.tsx     # Fixed "Get a Demo" floating button
│   └── Footer.tsx          # 5-column footer with links
├── data/
│   └── leads.json          # Auto-created on first form submission
└── public/
```

---

## Approach Taken

### Architecture

Used **Next.js App Router** with a clear Server / Client component split:
- All section containers (layout, page) are **Server Components** — fast, no JS shipped
- Interactive islands (Navbar, Hero, Stats, Features, Testimonials, LeadForm, FloatingCTA) are **Client Components** — marked with `"use client"`, only where needed

### Styling

**Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"` + `@theme`) with:
- Custom scroll progress bar
- `section-hidden` / `section-visible` utility classes for scroll-triggered fade-ins
- `feature-card` hover lift effects

### Data Flow

Lead submissions hit `/api/leads` (Next.js Route Handler), which:
1. Validates required fields + email format server-side
2. Writes to `data/leads.json` (file-based mock database — swap for Postgres/Supabase in production)
3. Returns `{ success: true, id }` on success

---

## AI Usage Explanation

Claude Code (Anthropic) was used throughout:

1. **Reference analysis** — fetched the live site and Vercel clone to extract all sections, content, and structure
2. **Component scaffolding** — generated all 10 components with proper TypeScript types
3. **Build error debugging** — identified and fixed the Server/Client boundary error (`onClick` in a Server Component page)
4. **Content writing** — wrote realistic placeholder copy for testimonials, features, stats, and partner lists
5. **Code review** — verified no security issues (input sanitization in API route, no SQL/XSS vectors)

AI was used as a force multiplier — all architectural decisions, improvement choices, and quality checks were guided by human judgment.

---

## Improvements Made Over the Reference

| Improvement | Details |
|---|---|
| **Scroll progress bar** | 3px gradient bar at top of viewport showing read progress |
| **Animated stat counters** | Numbers count up from 0 when they enter the viewport via Intersection Observer |
| **Sticky transparent navbar** | Transitions from transparent-over-hero to white/frosted-glass on scroll |
| **Interactive feature tabs** | Clickable tab navigation instead of a static grid — shows detail panel + gradient visual |
| **Auto-rotating testimonials** | 5-second carousel with manual override; resets timer on user click |
| **Lead capture API route** | Real `POST /api/leads` endpoint with server-side validation, persists to JSON |
| **Form UX improvements** | Inline field validation, loading spinner, success state, error recovery |
| **Floating "Get a Demo" CTA** | Always-visible amber pill button fixed to bottom-right |
| **Scroll-triggered animations** | Every section fades in as it enters the viewport |
| **Mobile-first responsive** | Collapsible hamburger menu, stacked grids, horizontal scroll for tabs |
| **SEO metadata** | Title, description, keywords, Open Graph tags in `layout.tsx` |
| **Dashboard mockup** | Animated progress bars with simulated Q4 learning report in the hero |

---

## What I'd Add With More Time

- **Database backend**: Replace `leads.json` with PostgreSQL via Prisma (or Supabase for zero-config)
- **Email notifications**: Send confirmation email to the lead + internal alert via Resend/SendGrid
- **Admin dashboard**: Protected `/admin` route showing all captured leads with export to CSV
- **Dark mode**: System-preference-aware dark theme using CSS custom properties
- **Animations**: Framer Motion for staggered entrance animations and page transitions
- **CMS integration**: Pull testimonials, partners, and features from Contentful or Sanity
- **A/B testing**: Two hero headline variants with Vercel Edge Config
- **Analytics**: PostHog or Vercel Analytics for conversion funnel tracking
- **Accessibility audit**: Full WCAG 2.1 AA pass (focus rings, ARIA labels, color contrast)
- **E2E tests**: Playwright tests for form submission, navigation, and responsive breakpoints
