export const SITE_CONFIG = {
  name: 'ValQuess',
  tagline: 'your journey, our story',
  description: 'Premium branding consultancy delivering clarity through sophisticated design and strategy',
  copyright: '©2025, VALQUESS',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
] as const;
export const Quick_link = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
] as const;

export const Service_link = [
  { href: '/about', label: 'About Us' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SERVICES = [
  {
    title: 'Brand Strategy',
    description: 'Comprehensive brand positioning and identity development',
    icon: 'target',
  },
  {
    title: 'Visual Design',
    description: 'Logo design, color systems, and brand guidelines',
    icon: 'palette',
  },
  {
    title: 'Digital Presence',
    description: 'Web design and digital experience optimization',
    icon: 'monitor',
  },
  {
    title: 'Content Strategy',
    description: 'Compelling storytelling and messaging frameworks',
    icon: 'file-text',
  },
] as const;
