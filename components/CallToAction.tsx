import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CallToAction() {
  return (
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
  );
}
