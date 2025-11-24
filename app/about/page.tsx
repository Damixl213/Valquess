import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { Target, Eye, Heart, Award } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ValQuess, our philosophy, mission, and the team behind premium branding consultancy',
};

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'We believe every brand has a unique story worth telling with clarity and intention',
  },
  {
    icon: Eye,
    title: 'Visionary',
    description: 'Looking beyond trends to create timeless identities that stand the test of time',
  },
  {
    icon: Heart,
    title: 'Passionate',
    description: 'Deeply committed to the success and authenticity of every brand we partner with',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering sophisticated solutions that exceed expectations and drive results',
  },
];

const team = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & Creative Director',
    bio: '15+ years crafting iconic brand identities for Fortune 500 companies',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Strategy Director',
    bio: 'Former McKinsey consultant specializing in brand positioning and market strategy',
  },
  {
    name: 'Sophia Williams',
    role: 'Design Lead',
    bio: 'Award-winning designer with a passion for visual storytelling and innovation',
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
              About <span className="text-gold">ValQuess</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We are a premium branding consultancy dedicated to transforming businesses through strategic
              design and authentic storytelling. Our philosophy is simple yet profound: clarity is the
              highest form of sophistication.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">Our Philosophy</h2>
              <p className="text-lg text-gold/90 font-serif italic">
                "your journey, our story"
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <SectionReveal delay={75}>
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-8">
                <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower brands with clarity, authenticity, and strategic vision. We believe that every
                  organization deserves a brand identity that truly reflects their values and resonates with
                  their audience.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-8">
                <h3 className="text-2xl font-serif font-semibold text-gold mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the most trusted partner for businesses seeking to define, refine, and elevate
                  their brand presence in an increasingly complex marketplace through sophisticated design
                  and strategy.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">Our Values</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 75}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="text-4xl font-serif font-bold text-white text-center mb-12">Meet Our Team</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <SectionReveal key={member.name} delay={index * 75}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg overflow-hidden hover:border-gold hover:-translate-y-1 transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-primary-purple to-purple-900 flex items-center justify-center">
                    <div className="w-32 h-32 bg-black/30 rounded-full flex items-center justify-center border-2 border-gold">
                      <span className="text-4xl font-serif text-gold">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-gold text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="bg-gradient-to-br from-primary-purple/20 to-purple-900/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Let's Create Something Extraordinary
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to begin your brand transformation journey with ValQuess?
              </p>
              <Link href="/contact">
                <VButton variant="primary">Start a Conversation</VButton>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
