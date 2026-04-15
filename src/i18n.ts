import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'
import type { ILocaleMessage, Locale } from './types'

export const availableLocales = ['en', 'ru'] as const satisfies readonly Locale[]

export const i18n = createI18n<[ILocaleMessage], Locale>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: en as ILocaleMessage,
    ru: ru as ILocaleMessage,
  },
})