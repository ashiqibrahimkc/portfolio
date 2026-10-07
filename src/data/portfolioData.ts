// ─── Profile ────────────────────────────────────────────────────────────────
export const profile = {
  name: "Ashiqu Ibrahim KC",
  role: "Full-Stack Software Engineer",
  tagline: "Building scalable enterprise systems with modern web technologies",
  bio: "I architect and build production-grade SaaS platforms, ERPs, and management systems that serve real businesses. From school management across 4 institutions to restaurant POS systems and quarry ERPs — I ship software that works at scale.",
  location: "Kerala, India",
  email: "ashiqibrahimkc@gmail.com",
  phone: "+91 7510381368",
  github: "https://github.com/ashiqibrahim",
  linkedin: "https://linkedin.com/in/ashiqibrahimkc",
  status: "Available for opportunities",
};

// ─── Stats ──────────────────────────────────────────────────────────────────
export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Schools Managed", value: "4" },
  { label: "Enterprise Systems", value: "6+" },
];

// ─── Experience ─────────────────────────────────────────────────────────────
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "fulltime" | "freelance" | "contract";
  description: string;
  responsibilities: string[];
  techStack: string[];
  accent: string;
}

export const experiences: Experience[] = [
  {
    id: "byten",
    company: "Byten",
    role: "Software Engineer",
    period: "Jun 2025 — Present",
    location: "Kerala, India",
    type: "fulltime",
    description:
      "Lead development of multiple SaaS products at an early-stage software startup. Architecting and building end-to-end enterprise systems serving real businesses.",
    responsibilities: [
      "Lead development of EduByte — a school management system deployed across 4 schools managing admissions, fees, attendance, and academics",
      "Built ByteStrata — an ERP platform for quarry and crusher businesses with real-time inventory, billing, and fleet management",
      "Developed BytePOS — a restaurant billing and POS system with order management, kitchen display, and payment processing",
      "Created ByteFlow — an internal task tracking and project management engine for the engineering team",
      "Implemented role-based access control (RBAC) with multi-tenant architecture across all products",
      "Designed and optimized PostgreSQL schemas with Prisma ORM for complex business domains",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Express.js",
    ],
    accent: "var(--accent-emerald)",
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Web Developer",
    period: "Jan 2025 — Jun 2025",
    location: "Remote",
    type: "freelance",
    description:
      "Built production websites and platforms for clients across construction, education, and food service industries.",
    responsibilities: [
      "Developed a construction financial management platform with budget tracking, invoice generation, and project analytics",
      "Implemented Supabase Row Level Security (RLS) and Edge Functions for secure multi-user data isolation",
      "Built and deployed client websites for Skyra LLP (construction), Kids Cove (childcare), and Sali Chef (catering)",
      "Delivered responsive, SEO-optimized websites with CMS integration for client self-management",
    ],
    techStack: [
      "Next.js",
      "React",
      "Supabase",
      "TypeScript",
      "PostgreSQL",
      "Vercel",
    ],
    accent: "var(--accent-cyan)",
  },
  {
    id: "dbitlab",
    company: "Dbitlab Solution Pvt Ltd",
    role: "Software Developer",
    period: "Nov 2023 — Dec 2024",
    location: "Kerala, India",
    type: "fulltime",
    description:
      "Built and maintained enterprise CRM platform serving businesses with automated lead tracking, customer management, and analytics.",
    responsibilities: [
      "Developed an enterprise CRM platform with Angular frontend and Express.js REST API backend",
      "Implemented automated lead tracking pipeline with status workflows, assignment rules, and notification triggers",
      "Built dynamic reporting dashboards with real-time data visualization and export capabilities",
      "Managed GCP deployments with NGINX reverse proxy, SSL termination, and CI/CD pipelines",
      "Collaborated with cross-functional teams on product feature planning and sprint execution",
    ],
    techStack: [
      "Angular",
      "Express.js",
      "Node.js",
      "MongoDB",
      "GCP",
      "NGINX",
    ],
    accent: "var(--accent-violet)",
  },
];

// ─── Projects ───────────────────────────────────────────────────────────────
export interface Project {
  id: string;
  name: string;
  category: "enterprise" | "saas" | "client";
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  metrics?: string;
  accent: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "edubyte",
    name: "EduByte",
    category: "enterprise",
    tagline: "School Management System",
    description:
      "Comprehensive school management platform handling admissions, fee collection, attendance tracking, academic records, timetable scheduling, and parent communication — deployed across 4 schools.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    highlights: [
      "Multi-tenant architecture serving 4 schools simultaneously",
      "Role-based access for admins, teachers, parents, and students",
      "Automated fee collection with receipt generation and payment tracking",
      "Real-time attendance tracking with parent SMS notifications",
      "Academic grade management with report card generation",
    ],
    metrics: "4 Schools · 2000+ Students",
    accent: "var(--accent-emerald)",
    icon: "GraduationCap",
  },
  {
    id: "bytestrata",
    name: "ByteStrata",
    category: "enterprise",
    tagline: "Quarry & Crusher ERP",
    description:
      "End-to-end ERP solution for quarry and crusher businesses with real-time inventory management, billing, fleet tracking, and financial reporting.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    highlights: [
      "Real-time inventory tracking with stock alerts and reorder points",
      "Automated billing and invoice generation with GST compliance",
      "Fleet management with trip logging and fuel consumption tracking",
      "Financial dashboards with P&L, cash flow, and receivables analysis",
    ],
    metrics: "Enterprise ERP · Production Ready",
    accent: "var(--accent-cyan)",
    icon: "Mountain",
  },
  {
    id: "bytepos",
    name: "BytePOS",
    category: "saas",
    tagline: "Restaurant Billing & POS",
    description:
      "Modern point-of-sale system for restaurants with order management, kitchen display integration, table management, and payment processing.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    highlights: [
      "Intuitive order entry with menu customization and modifiers",
      "Kitchen display system (KDS) for real-time order communication",
      "Table management with visual floor plan and reservation system",
      "Daily sales reporting with item-wise and category-wise breakdowns",
    ],
    metrics: "POS System · Live",
    accent: "var(--accent-violet)",
    icon: "UtensilsCrossed",
  },
  {
    id: "byteflow",
    name: "ByteFlow",
    category: "saas",
    tagline: "Task Tracking Engine",
    description:
      "Internal task tracking and project management platform with sprint planning, time logging, and team collaboration features.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    highlights: [
      "Kanban board with drag-and-drop task management",
      "Sprint planning with story points and velocity tracking",
      "Time logging with automated timesheet generation",
      "Team workload visualization and resource allocation",
    ],
    metrics: "Internal Tool · Active",
    accent: "var(--accent-amber)",
    icon: "Workflow",
  },
  {
    id: "enterprise-crm",
    name: "Enterprise CRM",
    category: "enterprise",
    tagline: "Customer Relationship Management",
    description:
      "Full-featured CRM platform with automated lead tracking, customer lifecycle management, reporting dashboards, and integration with external marketing tools.",
    techStack: ["Angular", "Express.js", "Node.js"],
    highlights: [
      "Automated lead tracking pipeline with status workflows",
      "Dynamic reporting dashboards with real-time visualization",
      "Role-based access control with team hierarchy management",
      "GCP deployment with NGINX reverse proxy and CI/CD pipelines",
    ],
    metrics: "Enterprise · Production",
    accent: "var(--accent-emerald)",
    icon: "Users",
  },
  {
    id: "client-websites",
    name: "Client Websites",
    category: "client",
    tagline: "Skyra LLP · Kids Cove · Sali Chef",
    description:
      "Collection of responsive, SEO-optimized websites built for clients in construction, childcare, and catering industries with CMS integration.",
    techStack: ["Next.js", "Angular", "Supabase", "Vercel", "TypeScript"],
    highlights: [
      "Responsive designs optimized for all device sizes",
      "SEO-first architecture with meta tags, structured data, and sitemaps",
      "CMS integration for client self-management of content",
      "Performance optimized with Core Web Vitals scores above 90",
    ],
    metrics: "3 Clients · Live",
    accent: "var(--accent-cyan)",
    icon: "Globe",
  },
];

// ─── Skills ─────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  accent: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    icon: "Code2",
    accent: "var(--accent-emerald)",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "HTML / CSS", level: 90 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "Monitor",
    accent: "var(--accent-cyan)",
    skills: [
      { name: "Next.js", level: 93 },
      
      { name: "Angular", level: 82 },
      
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    accent: "var(--accent-violet)",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "Prisma ORM", level: 88 },
      { name: "Supabase", level: 82 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    id: "database",
    name: "Databases",
    icon: "Database",
    accent: "var(--accent-amber)",
    skills: [
      { name: "PostgreSQL", level: 90 },
      
      { name: "MySQL", level: 75 },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "Cloud",
    accent: "var(--accent-emerald)",
    skills: [
      
      { name: "Vercel", level: 85 },
      { name: "NGINX", level: 75 },
      { name: "Docker", level: 72 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
];

// ─── Education ──────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Sc. Computer Science",
    institution: "University of Calicut",
    period: "2020 — 2023",
    description: "Focused on software engineering, data structures, algorithms, database systems, and web technologies.",
  },
];

export const certifications = [
  {
    name: "Angular — The Complete Guide",
    issuer: "Udemy",
    year: "2023",
  },
];

// ─── Terminal Code Snippets ─────────────────────────────────────────────────
export const terminalTabs = [
  {
    id: "prisma",
    label: "schema.prisma",
    language: "prisma",
    code: `// EduByte — Multi-tenant School Management
model School {
  id        String   @id @default(cuid())
  name      String
  code      String   @unique
  students  Student[]
  teachers  Teacher[]
  fees      FeeStructure[]
  createdAt DateTime @default(now())
}

model Student {
  id         String     @id @default(cuid())
  admNo      String     @unique
  name       String
  class      String
  section    String
  school     School     @relation(fields: [schoolId], references: [id])
  schoolId   String
  attendance Attendance[]
  feePayments FeePayment[]
}`,
  },
  {
    id: "middleware",
    label: "rbac.middleware.ts",
    language: "typescript",
    code: `// Role-Based Access Control Middleware
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

const rolePermissions: Record<string, string[]> = {
  admin:   ["read", "write", "delete", "manage"],
  teacher: ["read", "write", "attendance"],
  parent:  ["read", "fees", "attendance"],
  student: ["read"],
};

export async function rbacMiddleware(
  req: NextRequest,
  requiredPermission: string
) {
  const token = req.headers.get("authorization");
  const user = await verifyToken(token);

  const permissions = rolePermissions[user.role];
  if (!permissions?.includes(requiredPermission)) {
    return NextResponse.json(
      { error: "Insufficient permissions" },
      { status: 403 }
    );
  }

  return NextResponse.next();
}`,
  },
  {
    id: "action",
    label: "server-action.ts",
    language: "typescript",
    code: `// Next.js Server Action — Fee Collection
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function collectFee(
  studentId: string,
  amount: number,
  feeTypeId: string
) {
  const payment = await prisma.feePayment.create({
    data: {
      studentId,
      amount,
      feeTypeId,
      status: "PAID",
      paidAt: new Date(),
      receiptNo: await generateReceiptNo(),
    },
    include: {
      student: { select: { name: true, admNo: true } },
      feeType: { select: { name: true } },
    },
  });

  // Trigger SMS to parent
  await notifyParent(payment.student, payment);

  revalidatePath("/dashboard/fees");
  return { success: true, receiptNo: payment.receiptNo };
}`,
  },
];

// ─── Navigation ─────────────────────────────────────────────────────────────
export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// ─── Social Links ───────────────────────────────────────────────────────────
export const socialLinks = [
  { name: "GitHub", url: "https://github.com/ashiqibrahim", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ashiqibrahimkc",
    icon: "Linkedin",
  },
  { name: "Email", url: "mailto:ashiqibrahimkc@gmail.com", icon: "Mail" },
  { name: "Phone", url: "tel:+917510381368", icon: "Phone" },
];
