import { SectionReveal } from '@/components/SectionReveal';
import { VButton } from '@/components/VButton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Target, Eye, Heart, Award, Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TEAM1 from '@/assets/image/team.jpeg'
import TEAM2 from '@/assets/image/team1.jpeg'
import TEAM3 from '@/assets/image/team2.jpeg'
import TEAM4 from '@/assets/image/team4.png'
import TEAM5 from '@/assets/image/team5.png'

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
    name: 'oluwadamilola oyeyipo ',
    role: 'software engineer ',
    bio: 'I am a passionate software engineering student and full-stack developer with a strong focus on building clean, functional, and user-friendly digital solutions.',
    image: TEAM3.src ,
    social: {
      linkedin: 'https://www.linkedin.com/in/damilola-oyeyipo-b483ba2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      twitter: 'https://x.com/DamilolaOy99721',
      instagram: '#',
    },
  },
  {
    name: 'Michael Mark',
    role: 'Creative Director/ Project Manager',
    bio: 'Oversees verbal consistency and keeps everything on track',
    image: TEAM1.src,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Daniel Adeyeye',
    role: 'webdesigner',
    bio: 'Award-winning designer with a passion for visual storytelling and innovation',
    image:TEAM2.src ,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Hassan',
    role: '',
    bio: 'Award-winning designer with a passion for visual storytelling and innovation',
    image:TEAM4.src ,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'Chiedozie Onyekwelu ',
    role: 'web developer ',
    bio: 'I am deeply passionate about web development. I am committed to improving my skills and building practical, real-world web solutions',
    image:TEAM5.src ,
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const services = [
  {
    title: 'Brand Strategy',
    description: 'Positioning, messaging, and narrative frameworks that anchor every touchpoint.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    framed: true,
  },
  {
    title: 'Visual Identity',
    description: 'Logo suites, typography systems, and color worlds crafted for longevity.',
    image:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80',
    framed: false,
  },
  {
    title: 'Digital Presence',
    description: 'Web, social, and motion toolkits that keep your brand alive in every channel.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    framed: true,
  },
  {
    title: 'Launch & Campaigns',
    description: 'Go-to-market rollouts and campaign concepts that move audiences to action.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    framed: false,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              About <span className="text-gold">ValQuess</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={75}>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We are a premium branding consultancy dedicated to transforming businesses through strategic
              design and authentic storytelling. Our philosophy is simple yet profound: clarity is the
              highest form of sophistication.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/80">What we do</p>
                <h2 className="text-3xl font-serif font-bold text-white">Services tailored to your story</h2>
              </div>
              <p className="text-gray-300 max-w-xl text-sm">
                We guide brands from first spark to lasting presence with strategic, design-led delivery that
                feels bespoke and alive.
              </p>
            </div>
          </SectionReveal>

          <Carousel opts={{ align: 'start', loop: true }} className="relative">
            <CarouselContent className="pb-6">
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="md:basis-1/2 xl:basis-1/3">
                  <SectionReveal delay={index * 60}>
                    <div
                      className={`group h-full rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm transition-all duration-300 ${
                        service.framed
                          ? 'border border-gold/30 shadow-gold/20'
                          : 'border border-transparent'
                      } hover:-translate-y-1 hover:border-gold/60`}
                    >
                      <div
                        className={`relative h-40 w-full ${service.framed ? 'rounded-b-none' : ''}`}
                        style={{
                          backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.55), rgba(0,0,0,0.05)), url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        {!service.framed && (
                          <div className="absolute inset-0 ring-1 ring-white/5" aria-hidden />
                        )}
                      </div>
                      <div className="p-5 flex flex-col gap-2">
                        <h3 className="text-lg font-serif font-semibold text-white">{service.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </SectionReveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-10" />
            <CarouselNext className="hidden sm:flex -right-10" />
          </Carousel>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-white mb-3">Our Philosophy</h2>
              <p className="text-base text-gold/90 font-serif italic">
                "your journey, our story"
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <SectionReveal delay={75}>
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                <h3 className="text-xl font-serif font-semibold text-gold mb-3">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  To empower brands with clarity, authenticity, and strategic vision. We believe that every
                  organization deserves a brand identity that truly reflects their values and resonates with
                  their audience.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6">
                <h3 className="text-xl font-serif font-semibold text-gold mb-3">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  To become the most trusted partner for businesses seeking to define, refine, and elevate
                  their brand presence in an increasingly complex marketplace through sophisticated design
                  and strategy.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-8">Our Values</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 75}>
                <div className="bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-5 text-center hover:border-gold hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-8">Meet Our Team</h2>
          </SectionReveal>

          <div className="perspective-[2000px]">
            <Carousel
              opts={{
                align: 'center',
                loop: true,
              }}
              className="relative"
            >
              <CarouselContent className="pb-6">
                {team.map((member, index) => (
                  <CarouselItem key={member.name} className="md:basis-1/2 lg:basis-1/3">
                    <SectionReveal delay={index * 75}>
                      <div className="perspective-[1000px] h-full">
                        <div className="group relative transform-gpu transition-all duration-500 hover:scale-[1.02] hover:rotate-y-6 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gold/30">
                          {/* Image Section */}
                          <div className="relative h-[400px] overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 z-20">
                              <div>
                                <h3 className="text-xl font-serif font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-gold text-xs mb-2 font-medium tracking-wide">{member.role}</p>
                                <p className="text-gray-200 text-xs leading-relaxed mb-3 opacity-90">{member.bio}</p>
                                
                                {/* Social Media Icons */}
                                <div className="flex gap-2 items-center">
                                  <a
                                    href={member.social.linkedin}
                                    className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                                    aria-label="LinkedIn"
                                  >
                                    <Linkedin className="w-3 h-3 text-gold hover:text-black transition-colors" />
                                  </a>
                                  <a
                                    href={member.social.twitter}
                                    className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                                    aria-label="Twitter"
                                  >
                                    <Twitter className="w-3 h-3 text-gold hover:text-black transition-colors" />
                                  </a>
                                  <a
                                    href={member.social.instagram}
                                    className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-300"
                                    aria-label="Instagram"
                                  >
                                    <Instagram className="w-3 h-3 text-gold hover:text-black transition-colors" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12 hover:bg-gold hover:text-black transition-colors" />
              <CarouselNext className="hidden sm:flex -right-12 hover:bg-gold hover:text-black transition-colors" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="bg-gradient-to-br from-primary-purple/20 to-purple-900/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                Let's Create Something Extraordinary
              </h2>
              <p className="text-base text-gray-300 mb-6">
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
