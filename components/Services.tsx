import { SectionReveal } from '@/components/SectionReveal';
import { ServiceCard } from '@/components/ServiceCard';
import { SERVICES } from '@/lib/constants';

export function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We craft comprehensive brand experiences that resonate with our<br className="hidden sm:block" />
              audiences.
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
  );
}
