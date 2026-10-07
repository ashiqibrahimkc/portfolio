"use client";

import { socialLinks } from "@/data/portfolioData";
import { Mail, Phone, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail,
  Phone,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-copyright">
              © {year} Ashiqu Ibrahim K C. All rights reserved.
            </div>
            <div className="footer-built">
              Built with <Heart size={14} style={{ color: "var(--accent-rose)" }} /> using Next.js &amp; TypeScript
            </div>
          </div>

          <div className="footer-socials">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon] || Mail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={link.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
