"use client";

import { useRef, useCallback, useMemo } from "react";
import { profile, stats } from "@/data/portfolioData";
import {
  ArrowDown,
  MapPin,
  Briefcase,
  Mail,
  ExternalLink,
  FileDown,
} from "lucide-react";

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  const techBadges = useMemo(
    () => ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Angular"],
    []
  );

  return (
    <section id="home" className="hero section">
      {/* Ambient Glows */}
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-3" />

      <div className="container">
        <div className="hero-inner">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span>👋</span> Hello, I&apos;m
            </div>

            <h1 className="hero-name">
              {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">
                {profile.name.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="hero-role">{profile.role}</p>

            <p className="hero-bio">{profile.bio}</p>

            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">
                <ExternalLink size={18} />
                <span>View My Work</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                <span>Get In Touch</span>
              </a>
              <a href="#skills" className="btn-secondary">
                <FileDown size={18} />
                <span>My Skills</span>
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D Tilt Card */}
          <div className="hero-card-wrapper">
            <div
              ref={cardRef}
              className="hero-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hero-card-hologram" />

              <div className="hero-card-header">
                <div className="hero-card-avatar">AI</div>
                <div className="hero-card-badge">
                  <span className="hero-card-badge-dot" />
                  Available
                </div>
              </div>

              <div className="hero-card-name">{profile.name}</div>
              <div className="hero-card-role">{profile.role}</div>

              <div className="hero-card-divider" />

              <div className="hero-card-info">
                <div className="hero-card-info-row">
                  <MapPin size={16} />
                  <span>{profile.location}</span>
                </div>
                <div className="hero-card-info-row">
                  <Briefcase size={16} />
                  <span>Byten · Software Engineer</span>
                </div>
                <div className="hero-card-info-row">
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </div>
              </div>

              <div className="hero-card-tech">
                {techBadges.map((tech) => (
                  <span key={tech} className="hero-card-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
