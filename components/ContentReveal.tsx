"use client";

import { useEffect, useState } from "react";

export default function ContentReveal({ children, delay = 600 }: { children: React.ReactNode; delay?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ transform: show ? "translateY(0)" : "translateY(16px)" }}
    >
      {children}
    </div>
  );
}