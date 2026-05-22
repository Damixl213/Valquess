'use client';

import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  framed: boolean;
}

interface ServicesCarouselProps {
  services: ServiceCardProps[];
}

export function Services3DCarousel({ services }: ServicesCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const getCardStateClass = (index: number) => {
    const total = services.length;
    const rawDistance = Math.abs(index - selectedIndex);
    const distance = Math.min(rawDistance, total - rawDistance);

    if (distance === 0) {
      return 'scale-[1.08] -translate-y-4 opacity-100 blur-0 z-20';
    }

    if (distance === 1) {
      return 'scale-[0.88] translate-y-1 opacity-65 blur-[6px] z-10';
    }

    return 'scale-[0.8] translate-y-3 opacity-35 blur-[10px] z-[1]';
  };

  return (
    <div className="carousel-3d-container w-full overflow-visible px-8 sm:px-12">
      <Carousel
        opts={{ align: 'center', loop: true }}
        setApi={setApi}
        className="relative mx-auto w-full max-w-6xl"
      >
        <CarouselContent className="-ml-4 items-stretch py-4">
          {services.map((service, index) => (
            <CarouselItem
              key={service.title}
              className="basis-[84%] pl-4 sm:basis-[72%] md:basis-[55%] lg:basis-[46%]"
            >
              <div className={`transition-all duration-700 ease-out transform-gpu ${getCardStateClass(index)}`}>
                <div
                  className={`group h-full overflow-hidden rounded-[28px] border bg-[#17122f]/90 backdrop-blur-md transition-all duration-500 ${
                    service.framed
                      ? 'border-gold/35 shadow-[0_0_0_1px_rgba(205,170,95,0.25),0_24px_70px_rgba(0,0,0,0.55)]'
                      : 'border-white/8 shadow-[0_18px_50px_rgba(0,0,0,0.32)]'
                  } hover:border-gold/60`}
                >
                  <div className="relative h-[190px] overflow-hidden sm:h-[220px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 55vw, 46vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10081d] via-[#180f2e]/55 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <span className="mb-2 inline-flex rounded-full border border-gold/30 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-gold/90">
                        {service.framed ? 'Featured' : 'Core'}
                      </span>
                      <h3 className="text-2xl font-serif font-semibold leading-tight text-[#F5E9C8] sm:text-[2rem]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="border-t border-white/10 bg-[#1b1432]/95 p-5 sm:p-6">
                    <p className="max-w-sm text-sm leading-relaxed text-white/65">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 hidden border-gold/40 bg-black/50 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-gold hover:bg-black/70 sm:flex" />
        <CarouselNext className="right-0 hidden border-gold/40 bg-black/50 text-white shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-gold hover:bg-black/70 sm:flex" />
      </Carousel>
    </div>
  );
}
