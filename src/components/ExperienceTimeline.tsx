"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { experiences } from "@/data/portfolioData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceTimeline() {
  const sectionRef = useScrollReveal();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeItems, setActiveItems] = useState<Set<string>>(new Set());

  const handleScroll = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const timelineRect = timeline.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.5;

    // Progress line calculation
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    const scrolled = viewportCenter - timelineTop;
    const progress = Math.max(0, Math.min(1, scrolled / timelineHeight));
    setProgressHeight(progress * 100);

    // Active items
    const items = timeline.querySelectorAll(".timeline-item");
    const newActive = new Set<string>();
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < viewportCenter + 100) {
        const id = item.getAttribute("data-id");
        if (id) newActive.add(id);
      }
    });
    setActiveItems(newActive);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="experience" className="section experience-section" ref={sectionRef}>
      <div className="ambient-glow ambient-glow-2" />

      <div className="container">
        <div className="section-header scroll-reveal">
          <div className="section-label">
            <span>💼</span> Career Journey
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            From enterprise CRM platforms to multi-tenant school management systems — building production software that serves real businesses.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          {/* Animated progress line */}
          <div
            className="timeline-progress"
            style={{ height: `${progressHeight}%` }}
          />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${
                activeItems.has(exp.id) ? "active" : ""
              }`}
              data-id={exp.id}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-dot" />

              <div className="timeline-card scroll-reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className="timeline-card-header">
                  <div>
                    <div
                      className="timeline-company"
                      style={{ color: exp.accent }}
                    >
                      {exp.company}
                    </div>
                    <div className="timeline-role">{exp.role}</div>
                  </div>
                  <span
                    className={`timeline-type-badge ${exp.type}`}
                  >
                    {exp.type === "fulltime" ? "Full-time" : "Freelance"}
                  </span>
                </div>

                <div className="timeline-meta">
                  <div className="timeline-meta-item">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="timeline-meta-item">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="timeline-tech-stack">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="timeline-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
