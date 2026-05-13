import { getProjectBySlug } from '@/lib/projects';
import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Cormorant_Garamond, Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export function generateStaticParams() {
  const slugs = [
    'luxe-cosmetics',
    'techvista',
    'heritage-hotels',
    'ecoflow',
    'apex-financial',
    'artisan-collective',
  ];

  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="overflow-hidden bg-projects-gradient min-h-screen w-full -mt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-projects-section">
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
                <h1 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-white mb-6`}>
                  {project.title}
                </h1>
              </SectionReveal>

              <SectionReveal delay={225}>
                <p className={`${outfit.className} text-xl text-gray-300 leading-relaxed mb-8`}>
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
              <div className="h-96 flex items-center justify-center">
                {project.image ? (
                  <div className="w-11/12 h-5/6 bg-gradient-to-br from-primary-purple to-purple-700 rounded-tl-3xl rounded-br-3xl shadow-2xl overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="w-11/12 h-5/6 bg-primary-purple rounded-tl-3xl rounded-br-3xl shadow-2xl flex items-center justify-center">
                    <span className="text-6xl font-serif text-purple-900/70">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
 <div className='bg-projects-section'> 
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <SectionReveal>
              <div className=" backdrop-blur-sm rounded-lg p-12">
                <h2 className={`${cormorant.className} text-3xl sm:text-4xl text-gold mb-6 text-center`}>The Challenge</h2>
                <p className={`${outfit.className} text-sm sm:text-xl text-white/12 leading-relaxed max-w-xl mx-auto text-left lg:text-center font-light`}>
                  {project.challenge || 'This project is being updated from the Google Sheet, so more detail will appear here once challenge and solution fields are added.'}
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={75}>
              <div className=" backdrop-blur-sm rounded-lg p-12">
                <h2 className={`${cormorant.className} text-3xl sm:text-4xl text-gold mb-6 text-center `}>Our Solution</h2>
                <p className={`${outfit.className} text-sm sm:text-xl text-white/12 leading-relaxed max-w-xl mx-auto text-left lg:text-center font-light`}>
                  {project.solution || 'Add a solution field in the Google Sheet to automatically show the project approach here.'}
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Center divider line on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-56 bg-white" aria-hidden />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionReveal>
            <h2 className={`${cormorant.className} text-3xl font-bold text-white text-center mb-12`}>Results</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {(project.results?.length ? project.results : ['Add results in the Google Sheet to show outcomes here.']).map((result, index) => (
              <SectionReveal key={index} delay={index * 75}>
                <div className="bg-gradient-to-br from-[#8A38F5]/30 to-transparent backdrop-blur-sm border border-white/20 px-6 py-6 text-center shadow-inner min-h-[90px] flex items-center justify-center rounded-tl-2xl rounded-br-2xl hover:-translate-y-1 transition-all duration-300">
                  <p className={`${outfit.className} text-white/15 text-sm leading-relaxed`}>{result}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center">
              <h2 className={`${cormorant.className} text-3xl font-bold text-white mb-4`}>
                Ready for Your Brand Transformation?
              </h2>
              <p className={`${outfit.className} text-lg text-gray-300 mb-8`}>
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
