import PageIntro from '@/components/PageIntro';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CallToAction } from '@/components/CallToAction';

export default async function Home() {
  // Keep SSR fast; preloader inside page will handle the reveal
  await new Promise((res) => setTimeout(res, 300));
  return (
    <div className="overflow-hidden">
      {/* Inline preloader and reveal wrapper */}
      <PageIntro durationMs={5000}>
        <Hero />
      </PageIntro>
      {/* Removed duplicate hero section to avoid double rendering */}

      <Services />

      <CallToAction />
    </div>
  );
}
