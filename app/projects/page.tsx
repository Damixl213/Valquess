import { SectionReveal } from '@/components/SectionReveal';
import { ProjectCard } from '@/components/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore ValQuess portfolio of premium brand transformations and creative excellence',
};

const projects = [
  {
    id: '1',
    title: 'Luxe Cosmetics',
    description: 'Complete brand overhaul for a luxury beauty line, including identity, packaging, and digital presence',
    category: 'Beauty & Lifestyle',
    image: '',
    slug: 'luxe-cosmetics',
    tags: ['Brand Identity', 'Packaging', 'Digital'],
  },
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

export default function ProjectsPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Our <span className="text-gold">Projects</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-lg text-gray-300 leading-relaxed">
              A showcase of transformative brand experiences we've crafted for visionary clients across
              diverse industries
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} delay={index * 75} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
              Every Project Tells a Story
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Each brand we work with receives our full dedication to excellence, strategic thinking, and
              creative innovation. Your success is our passion.
            </p>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
