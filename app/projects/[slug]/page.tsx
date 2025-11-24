import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const projects = {
  'luxe-cosmetics': {
    title: 'Luxe Cosmetics',
    category: 'Beauty & Lifestyle',
    description: 'Complete brand overhaul for a luxury beauty line',
    challenge: 'Luxe Cosmetics needed to modernize their brand while maintaining their heritage and premium positioning in a competitive market.',
    solution: 'We developed a sophisticated visual identity system that honored their legacy while appealing to contemporary luxury consumers. The new packaging design elevated shelf presence while the digital experience created seamless omnichannel engagement.',
    results: [
      '147% increase in brand recognition',
      '89% improvement in customer engagement',
      '2.5x growth in online sales',
      'Featured in Vogue and Harper\'s Bazaar',
    ],
    tags: ['Brand Identity', 'Packaging', 'Digital'],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionReveal delay={75}>
                <div className="inline-block px-4 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </div>
              </SectionReveal>

              <SectionReveal delay={150}>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
                  {project.title}
                </h1>
              </SectionReveal>

              <SectionReveal delay={225}>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {project.description}
                </p>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-purple/20 text-gold text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SectionReveal>
            </div>

            <SectionReveal delay={375}>
              <div className="h-96 bg-gradient-to-br from-primary-purple to-purple-900 rounded-lg flex items-center justify-center">
                <div className="text-9xl font-serif text-white/20">{project.title.charAt(0)}</div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SectionReveal>
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-gold mb-4">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={75}>
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold text-gold mb-4">Our Solution</h2>
                <p className="text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Results</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <SectionReveal key={index} delay={index * 75}>
                <div className="bg-gradient-to-br from-primary-purple/20 to-purple-900/20 backdrop-blur-sm border border-gold/30 rounded-lg p-6 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                  <p className="text-gray-300 text-sm leading-relaxed">{result}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Ready for Your Brand Transformation?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's create something exceptional together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <VButton variant="primary">Schedule Consultation</VButton>
                </Link>
                <Link href="/projects">
                  <VButton variant="outline" className="inline-flex items-center space-x-2">
                    <span>View More Projects</span>
                    <ExternalLink className="w-4 h-4" />
                  </VButton>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
