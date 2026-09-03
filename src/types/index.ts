// src/types/index.ts

export type Language = "id" | "en";

export interface BilingualText {
  id: string;
  en: string;
}

export interface Profile {
  name: string;
  title: BilingualText;
  headline: BilingualText;
  bio: BilingualText;
  highlights: BilingualText[];
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: BilingualText;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  category: "network" | "ai" | "iot" | "robotics";
  description: BilingualText;
  highlights: BilingualText[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: BilingualText;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: BilingualText;
  highlights: BilingualText[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
}

export interface NavLink {
  id: string;
  label: BilingualText;
  href: string;
}
