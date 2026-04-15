export type Locale = 'en' | 'ru'

export interface IProject {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  downloadUrl?: string
}

export interface ISkill {
  name: string
  level: number
}

export interface ICertificate {
  name: string
  issuer: string
  date: string
  details?: string
  url?: string
}

export interface ILocaleMessage {
  brand: {
    label: string
  }
  nav: {
    home: string
    about: string
    skills: string
    education: string
    projects: string
    contact: string
  }
  common: {
    viewProjects: string
    contactMe: string
    github: string
    liveDemo: string
    download: string
    previous: string
    next: string
  }
  hero: {
    eyebrow: string
    name: string
    role: string
    bio: string
    cta: string
  }
  about: {
    title: string
    text: string
  }
  skills: {
    title: string
    hard: string
    soft: string
  }
  education: {
    title: string
  }
  projects: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
  }
  footer: {
    rights: string
  }
}