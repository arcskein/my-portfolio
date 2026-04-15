import type { IProject, Locale } from '../types'

function makePlaceholder(label: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#111827"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="32" fill="url(#g)"/>
      <rect x="80" y="80" width="1040" height="640" rx="24" fill="#0b0e14" stroke="#1f2937"/>
      <circle cx="180" cy="160" r="14" fill="#34d399"/>
      <circle cx="220" cy="160" r="14" fill="#334155"/>
      <circle cx="260" cy="160" r="14" fill="#334155"/>
      <text x="120" y="410" fill="#e2e8f0" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="700">${label}</text>
      <text x="120" y="478" fill="#94a3b8" font-family="Inter, Arial, sans-serif" font-size="24">Minimal placeholder preview</text>
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const PROJECTS: Record<Locale, IProject[]> = {
  en: [
    {
      id: 'portfolio-site',
      title: 'Personal Portfolio',
      description: 'Minimal, responsive developer portfolio.',
      image: makePlaceholder('Portfolio'),
      techStack: ['TypeScript', 'Vue 3', 'Vite', 'i18n'],
      githubUrl: 'https://github.com/arcskein/my-portfolio',
    },
    {
      id: 'java-friend-project',
      title: 'Spring Boot Project',
      description: 'REST API, Hibernate, MySQL, Vue 3.',
      image: makePlaceholder('Java + Spring Boot'),
      techStack: ['Java 21', 'Spring Boot 3', 'Hibernate', 'MySQL', 'Vue', 'Maven'],
      downloadUrl: 'https://drive.google.com/file/d/1okIn410FR8LGc2vax74H5ulm_Pr54u21/view?usp=sharing'
    },
    {
      id: 'java-spring-boot-practice',
      title: 'Modsen Java Practice',
      description: 'REST API, Hibernate, layered architecture.',
      image: makePlaceholder('Java + Spring Boot'),
      techStack: ['Java 21', 'Spring Boot 3', 'Hibernate', 'MySQL', 'Maven']
    },
  ],
  ru: [
    {
      id: 'portfolio-site',
      title: 'Личное портфолио',
      description: 'Минималистичное, адаптивное портфолио разработчика.',
      image: makePlaceholder('Портфолио'),
      techStack: ['TypeScript', 'Vue 3', 'Vite', 'i18n'],
      githubUrl: 'https://github.com/arcskein/my-portfolio',
    },
    {
      id: 'java-friend-project',
      title: 'Проект Spring Boot',
      description: 'REST API, Hibernate, MySQL, Vue 3.',
      image: makePlaceholder('Java + Spring Boot'),
      techStack: ['Java 21', 'Spring Boot 3', 'Hibernate', 'MySQL', 'Vue', 'Maven'],
      downloadUrl: 'https://drive.google.com/file/d/1okIn410FR8LGc2vax74H5ulm_Pr54u21/view?usp=sharing'
    },
    {
      id: 'java-spring-boot-practice',
      title: 'Практика Java от Modsen',
      description:
        'REST API, Hibernate, многослойная архитектура.',
      image: makePlaceholder('Java + Spring Boot'),
      techStack: ['Java 21', 'Spring Boot 3', 'Hibernate', 'MySQL', 'Maven']
    },
  ],
}

export const getProjects = (locale: Locale): IProject[] => PROJECTS[locale]