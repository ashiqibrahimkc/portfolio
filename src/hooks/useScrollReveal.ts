"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: "0px 0px -50px 0px",
    });

    const el = ref.current;
    if (el) {
      // Observe the container and all reveal children
      const revealElements = el.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
      );
      revealElements.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [handleIntersect, threshold]);

  return ref;
}
