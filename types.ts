
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  title: string;
  description: string;
  image: string;
}

export interface TechItem {
  name: string;
  icon: string; // URL or simplified string for demo
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  href?: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}
