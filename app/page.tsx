import { SectionReveal } from '@/components/SectionReveal';
import { ServiceCard } from '@/components/ServiceCard';
import { VButton } from '@/components/VButton';
import { SERVICES, SITE_CONFIG } from '@/lib/constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <SectionReveal>
            <div className="mb-8 flex justify-center">
              <div className="relative w-24 h-24 animate-pulse-glow">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 10 L70 40 L50 35 L30 40 Z" fill="#CDAA5F" className="drop-shadow-lg" />
                  <path d="M50 35 L50 90" stroke="#CDAA5F" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="90" r="3" fill="#CDAA5F" />
                </svg>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={75}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-gold">{SITE_CONFIG.name}</span>
            </h1>
          </SectionReveal>

          <SectionReveal delay={150}>
            <p className="text-xl sm:text-2xl text-gold/90 font-serif italic mb-4">
              {SITE_CONFIG.tagline}
            </p>
          </SectionReveal>

          <SectionReveal delay={225}>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="bg-gradient-to-br from-primary-purple/20 to-purple-900/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Ready to Define Your Brand?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
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
