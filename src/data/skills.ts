import type { ISkill, Locale } from '../types'

export interface ILocalizedSkills {
  hardSkills: ISkill[]
  softSkills: string[]
}

const SKILLS: Record<Locale, ILocalizedSkills> = {
  en: {
    hardSkills: [
      { name: 'Java', level: 65 },
      { name: 'Spring Boot', level: 50 },
      { name: 'Hibernate', level: 65 },
      { name: 'TypeScript', level: 50 },
      { name: 'Vue', level: 55 },
      { name: 'MySQL', level: 65 },
      { name: 'PostgrSQL', level: 60 }
    ],
    softSkills: [
      'Problem solving',
      'Attention to detail',
      'Team collaboration',
      'Willingness to learn',
      'Clear communication'
    ]
  },
  ru: {
    hardSkills: [
      { name: 'Java', level: 65 },
      { name: 'Spring Boot', level: 50 },
      { name: 'Hibernate', level: 65 },
      { name: 'TypeScript', level: 50 },
      { name: 'Vue', level: 55 },
      { name: 'MySQL', level: 65 },
      { name: 'PostgrSQL', level: 60 }
    ],
    softSkills: [
      'Решение проблем',
      'Внимание к деталям',
      'Командная работа',
      'Желание учиться',
      'Понятная коммуникация'
    ]
  }
}

export const getSkills = (locale: Locale): ILocalizedSkills => SKILLS[locale]