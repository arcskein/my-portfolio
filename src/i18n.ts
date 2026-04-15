import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'
import type { Locale } from './types'

type MessageSchema = typeof en

export const availableLocales = ['en', 'ru'] as const satisfies readonly Locale[]

export const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en,
    ru,
  },
})

;(i18n.global.locale as any)