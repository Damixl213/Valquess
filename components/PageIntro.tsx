"use client";

import { useState, useEffect } from "react";
import Preloader from "./Preloader";

type PageIntroProps = {
  children: React.ReactNode;
  durationMs?: number;
};

export default function PageIntro({ children, durationMs = 5000 }: PageIntroProps) {
  const [ready, setReady] = useState(false);
  const [canShowPreloader, setCanShowPreloader] = useState(false);

  useEffect(() => {
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (hasSeenIntro) {
      // If seen, show content immediately
      setReady(true);
    } else {
      // If not seen, allow preloader to show
      setCanShowPreloader(true);
    }
  }, []);

  const handleComplete = () => {
    setReady(true);
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  return (
    <div className="relative">
      {/* Loader overlays content; fades/curtains then hides */}
      {canShowPreloader && !ready && (
        <Preloader durationMs={durationMs} onComplete={handleComplete} />
      )}

      {/* Content container with smooth reveal */}
      <div
        className={`transition-all duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
        style={{ transform: ready ? "translateY(0)" : "translateY(16px)" }}
      >
        {children}
      </div>
    </div>
  );
}