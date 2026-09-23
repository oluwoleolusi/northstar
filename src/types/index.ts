export interface CaseStudySection {
  heading: string
  body: string
}

export interface Project {
  id: string
  slug: string
  title: string
  client: string
  category: string
  year: string
  description: string
  accent: string
  heroImage: string
  gallery: [string, string, string]
  services: string[]
  challenge: string
  approach: string
  outcome: string
  layout: 'featured' | 'standard' | 'wide' | 'text-led'
}

export interface Service {
  number: string
  title: string
  summary: string
  detail: string
  capabilities: string[]
}

export interface Principle {
  number: string
  lines: string[]
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
}
