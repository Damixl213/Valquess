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
        <section className="relative min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-16 bg-[#0A0A1E] -mt-16 pt-24">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#3A2D5E] rounded-full blur-3xl opacity-80" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#3A2D5E] rounded-full blur-3xl opacity-70" />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">
            <SectionReveal delay={75}>
              <div className="text-left max-w-xl">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                  <span className="block">Valquess</span>
                  <span className="mt-3 block text-lg sm:text-xl lg:text-2xl text-gold font-normal">
                    {SITE_CONFIG.tagline}
                  </span>
                </h1>
                <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                  {SITE_CONFIG.description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="relative w-56 h-40 sm:w-72 sm:h-52 lg:w-[420px] lg:h-[300px]">
                <Image
                  src={logo}
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.7)]"
                  priority
                />
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
