'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, BookOpen, Calendar, Mail } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import logo from '@/assets/image/logo.png'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          scrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-gold/20 py-0" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 bottom-8">
            <Link href="/" className="flex items-center group">
              <Image 
                src={logo} 
                alt="logo" 
                className="h-[150px] w-[150px] object-contain top-2" 
                priority 

              />
              <div>
                <h1 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-xs text-gold/80 -mt-1">{SITE_CONFIG.tagline}</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span
                      className={cn(
                        'text-sm font-medium transition-colors',
                        isActive ? 'text-gold' : 'text-white hover:text-gold'
                      )}
                    >
                      {link.label}
                    </span>
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 h-0.5 bg-gold transition-all',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                      style={isActive ? {} : { animation: 'none' }}
                    />
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gold/20">
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg transition-colors',
                      isActive
                        ? 'bg-gold/10 text-gold'
                        : 'text-white hover:bg-white/5 hover:text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
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
