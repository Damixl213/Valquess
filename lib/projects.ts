import { Project } from '@/lib/types';

export type ProjectWithDetails = Project & {
  challenge?: string;
  solution?: string;
  results?: string[];
};

type SheetRow = Record<string, unknown>;

const DEFAULT_PROJECT: ProjectWithDetails = {
  id: '1',
  title: 'Luxe Cosmetics',
  description: 'Complete brand overhaul for a luxury beauty line, including identity, packaging, and digital presence',
  category: 'Beauty & Lifestyle',
  image: '',
  slug: 'luxe-cosmetics',
  tags: ['Brand Identity', 'Packaging', 'Digital'],
  challenge:
    'Luxe Cosmetics needed to modernize their brand while maintaining their heritage and premium positioning in a competitive market.',
  solution:
    'We developed a sophisticated visual identity system that honored their legacy while appealing to contemporary luxury consumers. The new packaging design elevated shelf presence while the digital experience created seamless omnichannel engagement.',
  results: [
    '147% increase in brand recognition',
    '89% improvement in customer engagement',
    '2.5x growth in online sales',
    'Featured in Vogue and Harper\'s Bazaar',
  ],
};

const FALLBACK_PROJECTS: ProjectWithDetails[] = [
  DEFAULT_PROJECT,
  {
    id: '2',
    title: 'TechVista',
    description: 'Strategic rebrand for a B2B SaaS company, positioning them as industry thought leaders',
    category: 'Technology',
    image: '',
    slug: 'techvista',
    tags: ['Rebrand', 'Strategy', 'Web Design'],
  },
  {
    id: '3',
    title: 'Heritage Hotels',
    description: 'Sophisticated brand identity for a boutique hotel chain emphasizing luxury and tradition',
    category: 'Hospitality',
    image: '',
    slug: 'heritage-hotels',
    tags: ['Brand Identity', 'Collateral', 'Photography'],
  },
  {
    id: '4',
    title: 'EcoFlow',
    description: 'Sustainable brand development for an eco-conscious consumer products company',
    category: 'Sustainability',
    image: '',
    slug: 'ecoflow',
    tags: ['Brand Strategy', 'Packaging', 'Messaging'],
  },
  {
    id: '5',
    title: 'Apex Financial',
    description: 'Premium rebrand for a wealth management firm targeting high-net-worth individuals',
    category: 'Finance',
    image: '',
    slug: 'apex-financial',
    tags: ['Rebrand', 'Digital', 'Print'],
  },
  {
    id: '6',
    title: 'Artisan Collective',
    description: 'Visual identity and marketplace platform for a curated collection of independent artisans',
    category: 'E-commerce',
    image: '',
    slug: 'artisan-collective',
    tags: ['Brand Identity', 'Web Design', 'UX/UI'],
  },
];

function toText(value: unknown) {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number') return String(value);
  return '';
}

function toList(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => toText(item)).filter(Boolean);
  }

  const text = toText(value);
  if (!text) return [];

  return text
    .split(/[|,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeProject(row: SheetRow): ProjectWithDetails | null {
  const slug = toText(row.slug);
  const title = toText(row.title);

  if (!slug || !title) return null;

  return {
    id: toText(row.id) || slug,
    slug,
    title,
    category: toText(row.category),
    description: toText(row.description),
    image: toText(row.image) || toText(row.imageUrl),
    tags: toList(row.tags),
    challenge: toText(row.challenge),
    solution: toText(row.solution),
    results: toList(row.results),
  };
}

function normalizeProjects(input: unknown) {
  if (!Array.isArray(input)) return [] as ProjectWithDetails[];

  return input.map((row) => normalizeProject(row as SheetRow)).filter(Boolean) as ProjectWithDetails[];
}

async function fetchProjectsFromSheet() {
  const apiUrl = process.env.PROJECTS_SHEET_API_URL?.trim();

  if (!apiUrl) {
    return null;
  }

  const response = await fetch(apiUrl, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to load projects sheet: ${response.status}`);
  }

  const data = await response.json();
  const projects = Array.isArray(data) ? data : data?.projects;

  return normalizeProjects(projects);
}

export async function getProjects() {
  try {
    const projects = await fetchProjectsFromSheet();

    if (!projects || projects.length === 0) {
      return FALLBACK_PROJECTS;
    }

    const withoutDefault = projects.filter((project) => project.slug !== DEFAULT_PROJECT.slug);
    return [DEFAULT_PROJECT, ...withoutDefault];
  } catch {
    return FALLBACK_PROJECTS;
  }
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  const project = projects.find((item) => item.slug === slug);

  if (project) {
    return project;
  }

  return FALLBACK_PROJECTS.find((item) => item.slug === slug) ?? null;
}
