import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { SITE_CONFIG } from '@/lib/constants';
import { ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/image/ValQuess-logo2.png';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center px-4 sm:px-6 lg:px-16 pt-20 lg:pt-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-32 w-[600px] h-[600px] bg-[#3A2D5E] rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute -bottom-20 right-0 w-[700px] h-[700px] bg-[#2D1B54] rounded-full blur-[150px] opacity-40 mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 lg:mt-0">
        <SectionReveal delay={75}>
          <div className="text-left w-full lg:w-auto">
            <div className="relative inline-block mb-10 lg:mb-16">
              <h1 className="text-[80px] sm:text-[100px] lg:text-[140px] xl:text-[180px] font-serif text-white/95 leading-[0.85] tracking-tight">
                Valquess
              </h1>
              <div className="text-right w-full mt-2 lg:mt-3 pr-2 lg:pr-8">
                <span className="text-xl sm:text-2xl lg:text-[28px] text-gold font-serif font-normal italic tracking-wide">
                  your journey, our story
                </span>
              </div>
            </div>

            <p className="mt-4 text-lg sm:text-xl lg:text-[22px] text-gray-300/90 leading-relaxed font-light max-w-[600px]">
              Premium branding consultancy.<br />
              Delivering clarity through sophisticated design and<br className="hidden sm:block" /> strategy.
            </p>
            <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <Link href="/booking">
                <VButton variant="primary" className="!rounded-full flex items-center space-x-2 px-8 py-4 text-lg font-medium shadow-gold-lg group">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </VButton>
              </Link>
              <Link href="/projects">
                <VButton variant="outline" className="!rounded-full flex items-center space-x-2 px-8 py-4 text-lg font-medium group">
                  <span>View Our Work</span>
                  <Layers className="w-5 h-5 group-hover:scale-105 transition-transform" />
                </VButton>
              </Link>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] flex justify-center items-center lg:-mr-10 xl:-mr-20">
            <Image
              src={logo}
              alt={SITE_CONFIG.name}
              width={875}
              height={548}
              className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(205,170,95,0.15)] scale-110 lg:scale-[1.15]"
              priority
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
