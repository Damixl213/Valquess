import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Cormorant_Garamond } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { SITE_CONFIG } from '@/lib/constants';
import logo from '@/assets/image/logo.png';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://valquess.com'), // Replace with your actual domain
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ['branding', 'consultancy', 'design', 'strategy', 'identity'],
  authors: [{ name: 'BraveArt' }],
  icons: {
    icon: logo.src,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        <Navbar />
        <main className="pt-16 md:pt-16 pb-16 md:pb-0 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
