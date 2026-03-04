import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/image/logo.png';
import { SITE_CONFIG, NAV_LINKS, Quick_link, Service_link } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold/20 mt-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src={logo} 
                alt={SITE_CONFIG.name} 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-sm text-gray-400">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {Quick_link.map((link) => (
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
             <h3 className="text-sm font-semibold text-gold mb-4">Service</h3>
            <ul className="space-y-1">
              {Service_link.map((link) => (
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

        <div className="mt-6 pt-6 border-t border-gold/20">
          <p className="text-center text-sm text-gray-500">
            {SITE_CONFIG.copyright}
          </p>
        </div>
      </div>

      {/* Soft spot lighting effect at bottom of footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none h-32">
        <div className="w-96 h-32 bg-[radial-gradient(ellipse_90%_70%_at_50%_65%,_#7D52FD4D_0%,_transparent_75%)] rounded-full"></div>
      </div>
    </footer>
  );
}
