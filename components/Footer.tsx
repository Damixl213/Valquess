import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10 L70 40 L50 35 L30 40 Z" fill="#CDAA5F" />
                  <path d="M50 35 L50 90" stroke="#CDAA5F" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="90" r="3" fill="#CDAA5F" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold text-white">{SITE_CONFIG.name}</h2>
                <p className="text-xs text-gold/80">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-4">Philosophy</h3>
            <p className="text-sm text-gray-400 italic">
              "Clarity is the highest form of sophistication"
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold/20">
          <p className="text-center text-sm text-gray-500">
            {SITE_CONFIG.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
