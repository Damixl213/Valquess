
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Outfit } from 'next/font/google';
import botError from '@/assets/image/Boterror.png';
import number from '@/assets/image/404.png';

const outfit = Outfit({ 
  subsets: ['latin'], 
  weight: ['800'],
  variable: '--font-outfit' 
});

export default function NotFound() {
  return (
    <div className={`${outfit.className} fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0A0713] px-4 text-center`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,45,168,0.45),transparent_34%),radial-gradient(circle_at_bottom,rgba(48,25,115,0.7),transparent_40%),linear-gradient(180deg,#34105f_0%,#0a0713_55%,#10163a_100%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full">
          <Image
            src={botError}
            alt="404 error icon"
            priority
            className="h-20 w-20 object-contain drop-shadow-[0_0_20px_rgba(205,166,90,0.35)]"
          />
        </div>

        <Image 
         src={number}
         alt="404"
         priority
         className='h-20 w-40'
        
        />

        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Path Not Found</h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-white/40 sm:text-base">
          It seems you’ve wandered off the beaten path. Let’s guide you back to your journey.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-md border border-[#cda65a] px-4 py-2 text-sm font-medium text-[#e8c26a] transition-colors duration-200 hover:bg-[#cda65a] hover:text-black"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
