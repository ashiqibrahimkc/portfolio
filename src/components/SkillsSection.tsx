"use client";

import { useEffect, useRef, useCallback } from "react";
import { skillCategories } from "@/data/portfolioData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
};

const accentToDim: Record<string, string> = {
  "var(--accent-emerald)": "var(--accent-emerald-dim)",
  "var(--accent-cyan)": "var(--accent-cyan-dim)",
  "var(--accent-violet)": "var(--accent-violet-dim)",
  "var(--accent-amber)": "var(--accent-amber-dim)",
};

export default function SkillsSection() {
  const sectionRef = useScrollReveal();
  const barsRef = useRef<HTMLDivElement>(null);

  const animateBars = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll(".skill-bar-fill");
        fills.forEach((fill, i) => {
          setTimeout(() => {
            fill.classList.add("animated");
          }, i * 80);
        });
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(animateBars, {
      threshold: 0.2,
    });

    const cards = barsRef.current?.querySelectorAll(".skill-category-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [animateBars]);

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="ambient-glow ambient-glow-3" />

      <div className="container">
        <div className="section-header scroll-reveal">
          <div className="section-label">
            <span>⚡</span> Technical Arsenal
          </div>
          <h2 className="section-title">
            Skills <span className="gradient-text">&amp; Technologies</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I use to build scalable, production-grade systems.
          </p>
        </div>

        <div className="skills-grid" ref={barsRef}>
          {skillCategories.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="skill-category-card scroll-reveal"
                style={{
                  ["--cat-accent" as string]: category.accent,
                  ["--cat-accent-dim" as string]:
                    accentToDim[category.accent] || "var(--accent-emerald-dim)",
                  transitionDelay: `${catIdx * 0.1}s`,
                }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon />
                  </div>
                  <h3 className="skill-category-name">{category.name}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item-header">
                        <span className="skill-item-name">{skill.name}</span>
                        <span className="skill-item-level">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            ["--skill-level" as string]: `${skill.level}%`,
                            ["--bar-color" as string]: category.accent,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
