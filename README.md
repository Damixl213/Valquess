# ValQuess - Premium Branding Consultancy

A sophisticated, production-ready website for ValQuess, a premium branding consultancy embodying luxury through bold purple and black aesthetics, accented by gold and white.

## Brand Identity

- **Tagline**: "your journey, our story"
- **Philosophy**: "Clarity is the highest form of sophistication"
- **Color Palette**:
  - Primary Purple: `#6B21A8`
  - Black: `#000000`
  - Gold: `#CDAA5F`
  - White: `#FFFFFF`
  - Purple 900: `#581C87`
  - Purple 950: `#3B0764`

## Features

### Pages
- **Home**: Hero section with animated Pathfinder emblem, services showcase, and CTAs
- **About Us**: Brand philosophy, mission, values, and team member profiles
- **Projects**: Portfolio grid with filterable case studies and hover effects
- **Blog**: Article grid with category filtering and detailed post pages
- **Booking**: Consultation scheduling form with date/time selection
- **Contact**: Multi-column layout with contact info, form, and map placeholder
- **404**: Custom error page with brand styling

### Design System
- **Typography**: Inter (body), Playfair Display (headings)
- **Animations**:
  - Scroll-triggered reveal animations (fade + slide up)
  - Navigation active state with gold underline slide
  - Hover effects with lift and color transitions
  - Smooth scroll behavior
- **Responsive Navigation**:
  - Desktop: Fixed top horizontal navbar
  - Mobile: Fixed bottom navigation bar with icons
- **Components**:
  - Custom buttons with hover lift effects
  - Service, Project, and Blog cards
  - Pathfinder spinner loading animation
  - Section reveal wrapper for scroll animations

### Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Build**: Static export for deployment

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out` directory.

### Type Checking

```bash
npm run typecheck
```

## Project Structure

```
project/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── blog/                # Blog listing & detail pages
│   ├── projects/            # Projects listing & detail pages
│   ├── booking/             # Booking form page
│   ├── contact/             # Contact page
│   ├── not-found.tsx        # 404 page
│   ├── layout.tsx           # Root layout with nav & footer
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Footer.tsx          # Site footer
│   ├── VButton.tsx         # Custom button component
│   ├── ServiceCard.tsx     # Service display card
│   ├── ProjectCard.tsx     # Project display card
│   ├── BlogCard.tsx        # Blog post card
│   ├── SectionReveal.tsx   # Scroll animation wrapper
│   └── PathfinderSpinner.tsx # Loading animation
├── hooks/                   # Custom React hooks
│   └── useScrollReveal.ts  # Intersection Observer hook
├── lib/                     # Utilities and constants
│   ├── constants.ts        # Site configuration
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  'primary-purple': '#6B21A8',
  'gold': '#CDAA5F',
  // ... other colors
}
```

### Content
- Site configuration: `lib/constants.ts`
- Blog posts: `app/blog/[slug]/page.tsx`
- Projects: `app/projects/[slug]/page.tsx`
- Services: `lib/constants.ts`

### Animations
Scroll reveal animations are controlled by:
- Hook: `hooks/useScrollReveal.ts`
- Component: `components/SectionReveal.tsx`
- Settings: Threshold (75%), duration (250ms), stagger (75ms)

## Deployment

This project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `out` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images
- Code splitting
- Lazy loading
- Minimal JavaScript bundle
- Static site generation

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance

## License

©2025, BraveArt. All rights reserved.

## Support

For questions or support, contact: hello@valquess.com
