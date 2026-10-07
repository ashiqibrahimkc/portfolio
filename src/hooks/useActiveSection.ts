"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { navLinks } from "@/data/portfolioData";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    []
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.3,
      rootMargin: "-80px 0px -40% 0px",
    });

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observerRef.current?.observe(section);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [handleIntersect]);

  return activeSection;
}
