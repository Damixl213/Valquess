import React from 'react';

const ITEMS = [
  "Brand Strategy",
  "Digital Presence",
  "Visual Identity",
  "Content Strategy",
];

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-purple-950/30 via-purple-900/30 to-purple-950/30 border-y border-white/5 py-5 flex my-16">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex px-4 items-center gap-12 sm:gap-16">
            {ITEMS.map((item, index) => (
              <React.Fragment key={`${i}-${index}`}>
                <span className="text-sm sm:text-base text-gray-200/90 font-medium tracking-[0.15em] ml-12 sm:ml-16">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-gold/70 shadow-[0_0_8px_rgba(205,170,95,0.6)] flex-shrink-0 ml-12 sm:ml-16"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
