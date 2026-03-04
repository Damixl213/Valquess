
import Link from 'next/link';
import { VButton } from '@/components/VButton';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 opacity-50">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M50 10 L70 40 L50 35 L30 40 Z" fill="#CDAA5F" />
              <path d="M50 35 L50 90" stroke="#CDAA5F" strokeWidth="3" strokeLinecap="round" />
              <circle cx="50" cy="90" r="3" fill="#CDAA5F" />
            </svg>
          </div>
        </div>

        <h1 className="text-6xl sm:text-8xl font-serif font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
          Path Not Found
        </h2>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          It seems you've wandered off the beaten path. Let's guide you back to your journey.
        </p>

        <Link href="/">
          <VButton variant="primary" className="inline-flex items-center space-x-2">
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </VButton>
        </Link>
      </div>
    </div>
  );
}
