import PageIntro from '@/components/PageIntro';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CallToAction } from '@/components/CallToAction';
import { Marquee } from '@/components/Marquee';

export default async function Home() {
  // Keep SSR fast; preloader inside page will handle the reveal
  await new Promise((res) => setTimeout(res, 300));
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Ambient glowing background strictly behind all sections */}
      <div className="absolute top-0 left-0 w-full h-[2500px] pointer-events-none -z-10">
        <div className="absolute top-[5%] left-[-10%] w-[800px] h-[800px] bg-purple-950 rounded-full blur-[150px] opacity-40 mix-blend-screen" />
        <div className="absolute top-[25%] right-[-10%] w-[900px] h-[900px] bg-indigo-950 rounded-full blur-[150px] opacity-40 mix-blend-screen" />
        <div className="absolute top-[60%] left-[15%] w-[1000px] h-[1000px] bg-purple-900 rounded-full blur-[150px] opacity-30 mix-blend-screen" />
      </div>

      {/* Inline preloader and reveal wrapper */}
      <PageIntro durationMs={5000}>
        <Hero />
      </PageIntro>

      <Marquee />
      <Services />

      <CallToAction />
    </div>
  );
}
