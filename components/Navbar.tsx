'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, Info, Briefcase, BookOpen, Calendar, Mail } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import logo from '@/assets/image/ValQuess-logo.svg';
import { cn } from '@/lib/utils';

const iconMap = {
  'Home': Home,
  'About Us': Info,
  'Projects': Briefcase,
  'Blog': BookOpen,
  'Booking': Calendar,
  'Contact': Mail,
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 bg-transparent',
          scrolled && 'backdrop-blur-md'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain"
                priority
              />
              {/* <div className="leading-tight">
                <h1 className="text-xl font-serif font-bold text-white">
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-xs text-gold/80">{SITE_CONFIG.tagline}</p>
              </div> */}
            </Link>

            <div className="flex-1 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-primary-purple/60 bg-white/5 px-2 py-1 backdrop-blur-sm">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link key={link.href} href={link.href} className="px-1">
                      <span
                        className={cn(
                          'inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300',
                          isActive
                            ? 'bg-white text-purple-900 shadow-[0_0_18px_rgba(107,33,168,0.8)]'
                            : 'text-white/70 hover:text-white'
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center">
              <Link href="/contact">
                <button className="rounded-full bg-white text-black px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-t border-gold/20 md:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex flex-col items-center justify-center flex-1 h-full transition-all',
                  isActive && 'scale-110'
                )}
              >
                <Icon
                  size={20}
                  className={cn(
                    'transition-colors mb-1',
                    isActive ? 'text-gold' : 'text-white'
                  )}
                  style={isActive ? { filter: 'drop-shadow(0 0 8px rgba(205, 170, 95, 0.4))' } : {}}
                />
                <span
                  className={cn(
                    'text-xs transition-colors',
                    isActive ? 'text-gold font-medium' : 'text-white/70'
                  )}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
