"use client";

import { useState, useMemo, useCallback } from "react";
import { projects } from "@/data/portfolioData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  GraduationCap,
  Mountain,
  UtensilsCrossed,
  Workflow,
  Users,
  Globe,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Mountain,
  UtensilsCrossed,
  Workflow,
  Users,
  Globe,
};

const filters = [
  { id: "all", label: "All Projects" },
  { id: "enterprise", label: "Enterprise" },
  { id: "saas", label: "SaaS" },
  { id: "client", label: "Client Work" },
];

const accentToDim: Record<string, string> = {
  "var(--accent-emerald)": "var(--accent-emerald-dim)",
  "var(--accent-cyan)": "var(--accent-cyan-dim)",
  "var(--accent-violet)": "var(--accent-violet-dim)",
  "var(--accent-amber)": "var(--accent-amber-dim)",
};

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useScrollReveal();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleFilterClick = useCallback((id: string) => {
    setActiveFilter(id);
  }, []);

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="ambient-glow ambient-glow-1" />

      <div className="container">
        <div className="section-header scroll-reveal">
          <div className="section-label">
            <span>🚀</span> Featured Work
          </div>
          <h2 className="section-title">
            Projects <span className="gradient-text-violet">&amp; Systems</span>
          </h2>
          <p className="section-subtitle">
            Production-grade platforms and tools I&apos;ve architected and built — from school management to restaurant POS.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters scroll-reveal">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`projects-filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => handleFilterClick(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const Icon = iconMap[project.icon] || Globe;
            return (
              <div
                key={project.id}
                className="project-card scroll-reveal"
                style={{
                  ["--card-accent" as string]: project.accent,
                  ["--card-accent-dim" as string]:
                    accentToDim[project.accent] || "var(--accent-emerald-dim)",
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className="project-card-header">
                  <div className="project-card-icon">
                    <Icon />
                  </div>
                  <span className="project-card-category">
                    {project.category}
                  </span>
                </div>

                <h3 className="project-card-name">{project.name}</h3>
                <div className="project-card-tagline">{project.tagline}</div>
                <p className="project-card-description">
                  {project.description}
                </p>

                <ul className="project-card-highlights">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>
                      <CheckCircle2 />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="project-card-footer">
                  <div className="project-card-tech">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="project-card-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.metrics && (
                    <span className="project-card-metrics">
                      {project.metrics}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
