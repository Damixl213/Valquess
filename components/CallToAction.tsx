import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CallToAction() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 sm:p-16 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
                Ready to Define Your Brand
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Let's collaborate to create a brand identity that stands out and tells your<br className="hidden sm:block" /> unique story.
              </p>
              <Link href="/contact">
                <VButton variant="primary" className="!rounded-full inline-flex items-center space-x-2 px-8 py-4 text-base font-medium bg-gold text-[#1A112B] hover:bg-gold/90 transition-all shadow-gold">
                  <span>Let's Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </VButton>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
