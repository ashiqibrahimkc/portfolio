import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashiqu Ibrahim K C — Full-Stack Software Engineer",
  description:
    "Portfolio of Ashiqu Ibrahim K C — Full-Stack Software Engineer building scalable SaaS platforms, ERPs, and management systems with Next.js, Node.js, PostgreSQL, and Prisma.",
  keywords: [
    "Ashiqu Ibrahim",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Portfolio",
  ],
  authors: [{ name: "Ashiqu Ibrahim K C" }],
  openGraph: {
    title: "Ashiqu Ibrahim K C — Full-Stack Software Engineer",
    description:
      "Building scalable enterprise systems with modern web technologies. Next.js, Node.js, PostgreSQL, Prisma.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
