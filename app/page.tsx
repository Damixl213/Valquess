import { SectionReveal } from '@/components/SectionReveal';
import { ServiceCard } from '@/components/ServiceCard';
import { VButton } from '@/components/VButton';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import Image from 'next/image';
import logo from '@/assets/image/logo.png';

export default async function Home() {
  // Keep SSR fast; preloader inside page will handle the reveal
  await new Promise((res) => setTimeout(res, 300));
  return (
    <div className="overflow-hidden">
      {/* Inline preloader and reveal wrapper */}
      <PageIntro durationMs={5000}>
            <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              <div className="relative z-10 text-center max-w-5xl mx-auto">
                <SectionReveal delay={75}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight flex flex-col items-center gap-4">
                    <span>Welcome to Valquess</span>
                    <div className="relative h-24 w-64 sm:h-32 sm:w-80 lg:h-40 lg:w-96">
                      <Image 
                        src={logo} 
                        alt={SITE_CONFIG.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </h1>
                </SectionReveal>

                <SectionReveal delay={150}>
                  <p className="text-lg sm:text-xl text-gold/90 font-serif italic mb-4">
                    {SITE_CONFIG.tagline}
                  </p>
                </SectionReveal>

                <SectionReveal delay={225}>
                  <p className="text-base text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {SITE_CONFIG.description}
                  </p>
                </SectionReveal>

                <SectionReveal delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/booking">
                      <VButton variant="primary" className="flex items-center space-x-2">
                        <span>Start Your Journey</span>
                        <ArrowRight className="w-5 h-5" />
                      </VButton>
                    </Link>
                    <Link href="/projects">
                      <VButton variant="outline" className="flex items-center space-x-2">
                        <span>View Our Work</span>
                        <Sparkles className="w-5 h-5" />
                      </VButton>
                    </Link>
                  </div>
                </SectionReveal>
              </div>
            </section>
      </PageIntro>
      {/* Removed duplicate hero section to avoid double rendering */}

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-base text-gray-400 max-w-2xl mx-auto">
                We craft comprehensive brand experiences that resonate with your audience
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 75}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="bg-gradient-to-br from-primary-purple/20 to-purple-900/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Ready to Define Your Brand?
              </h2>
              <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create a brand identity that stands out and tells your unique story
              </p>
              <Link href="/contact">
                <VButton variant="primary" className="inline-flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </VButton>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
