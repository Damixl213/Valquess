"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

type PreloaderProps = {
  durationMs?: number;
  onComplete?: () => void;
};

export default function Preloader({ durationMs = 4500, onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Check if user has visited today
    const today = new Date().toDateString();
    const lastVisitDate = localStorage.getItem("lastVisitDate");
    const visitCountStr = localStorage.getItem("visitCount");
    let visitCount = visitCountStr ? parseInt(visitCountStr) : 0;

    // Reset count if it's a new day
    if (lastVisitDate !== today) {
      visitCount = 0;
    }

    // Allow 2 full animations per day
    const shouldShowFullAnimation = visitCount < 2;

    // Increment and save count
    localStorage.setItem("lastVisitDate", today);
    localStorage.setItem("visitCount", (visitCount + 1).toString());

    if (!shouldShowFullAnimation) {
      // Just do the transition
      setShowText(false);
      // Start reveal almost immediately to show the curtain opening effect
      const quickReveal = setTimeout(() => setReveal(true), 100);
      const quickDone = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 1100); // 100ms delay + 1000ms transition
      
      return () => {
        clearTimeout(quickReveal);
        clearTimeout(quickDone);
      };
    }

    // Normal full animation
    const revealTimer = setTimeout(() => {
      setReveal(true);
    }, durationMs);

    const doneTimer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, durationMs + 1200); // Wait for curtain animation

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, [durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Top Curtain */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 bg-black z-0 transition-transform duration-1000 ease-in-out"
        style={{ transform: reveal ? 'translateY(-100%)' : 'translateY(0)' }}
      />
      
      {/* Bottom Curtain */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-0 transition-transform duration-1000 ease-in-out"
        style={{ transform: reveal ? 'translateY(100%)' : 'translateY(0)' }}
      />

      <div className={`relative z-10 transition-opacity duration-500 ${reveal ? 'opacity-0' : 'opacity-100'}`}>
        {showText && (
          <div className={styles.loaderWrapper}>
            <span className={styles.loaderLetter}>V</span>
            <span className={styles.loaderLetter}>a</span>
            <span className={styles.loaderLetter}>l</span>
            <span className={styles.loaderLetter}>q</span>
            <span className={styles.loaderLetter}>u</span>
            <span className={styles.loaderLetter}>e</span>
            <span className={styles.loaderLetter}>s</span>
            <span className={styles.loaderLetter}>s</span>
            <div className={styles.loader}></div>
          </div>
        )}
      </div>
    </div>
  );
}