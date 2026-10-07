"use client";

import { useState, useCallback } from "react";
import { profile, socialLinks, education, certifications } from "@/data/portfolioData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  CheckCircle,
  Send,
  GraduationCap,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
  Phone,
};

export default function ContactSection() {
  const [toast, setToast] = useState<string | null>(null);
  const sectionRef = useScrollReveal();

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setToast("Email copied to clipboard!");
      setTimeout(() => setToast(null), 2500);
    });
  }, []);

  return (
    <>
      {/* Education mini-section */}
      <section className="section" ref={sectionRef}>
        <div className="container">
          <div className="section-header scroll-reveal">
            <div className="section-label">
              <span>🎓</span> Education
            </div>
            <h2 className="section-title">
              Education <span className="gradient-text-violet">&amp; Certifications</span>
            </h2>
          </div>

          <div className="education-grid scroll-reveal">
            {education.map((edu, i) => (
              <div key={i} className="education-card">
                <div className="education-card-icon">
                  <GraduationCap />
                </div>
                <h3 className="education-card-title">{edu.degree}</h3>
                <div className="education-card-institution">{edu.institution}</div>
                <div className="education-card-period">{edu.period}</div>
                <p className="education-card-description">{edu.description}</p>
              </div>
            ))}
            {certifications.map((cert, i) => (
              <div key={i} className="education-card">
                <div className="education-card-icon">
                  <Award />
                </div>
                <h3 className="education-card-title">{cert.name}</h3>
                <div className="education-card-institution">{cert.issuer}</div>
                <div className="education-card-period">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="ambient-glow ambient-glow-2" />

        <div className="container">
          <div className="section-header scroll-reveal">
            <div className="section-label">
              <span>📬</span> Get In Touch
            </div>
            <h2 className="section-title">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left — Info Cards */}
            <div className="contact-info scroll-reveal-left">
              <div className="contact-info-card" onClick={copyEmail}>
                <div className="contact-info-icon">
                  <Mail />
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">
                    {profile.email}
                    <Copy
                      size={14}
                      style={{
                        marginLeft: 8,
                        opacity: 0.5,
                        verticalAlign: "middle",
                      }}
                    />
                  </div>
                </div>
              </div>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="contact-info-card"
              >
                <div className="contact-info-icon">
                  <Phone />
                </div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">{profile.phone}</div>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <MapPin />
                </div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">{profile.location}</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-socials">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon] || Mail;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      title={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form scroll-reveal-right">
              <h3 className="contact-form-title">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setToast("Message sent successfully! I'll get back to you soon.");
                  setTimeout(() => setToast(null), 3000);
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="contact-form-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="contact-form-input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="contact-form-textarea"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button type="submit" className="contact-form-submit">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="toast">
          <CheckCircle size={18} />
          {toast}
        </div>
      )}
    </>
  );
}
