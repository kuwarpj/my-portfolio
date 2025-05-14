import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
  avatarUrl?: string;
}

export interface SummaryData {
  title: string;
  content: string[];
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: LucideIcon | string; // Can be a LucideIcon or URL to an image
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  detailedDescription?: string[];
  dataAiHint?: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  // level: number; // e.g., 0-100 for progress bar -- No longer used for display
  icon?: LucideIcon;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string[];
  logo?: LucideIcon | string;
}

export interface PortfolioData {
  hero: HeroData;
  summary: SummaryData;
  workExperience: WorkExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  socialLinks: SocialLink[];
  contactEmail: string;
}
