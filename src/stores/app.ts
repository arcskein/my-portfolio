import { defineStore } from 'pinia'
import { loadLocale } from '../i18n'
import type { Locale } from '../types'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'ru'
}

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: 'en' as Locale,
    theme: 'dark' as const,
    hydrated: false,
  }),

  actions: {
    async hydrate() {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
      const browserLocale: Locale = window.navigator.language.startsWith('ru') ? 'ru' : 'en'
      const nextLocale: Locale = isLocale(savedLocale) ? savedLocale : browserLocale
      this.locale = nextLocale
      await loadLocale(nextLocale)
      document.documentElement.lang = this.locale
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'

      this.hydrated = true
    },

    async setLocale(locale: Locale) {
      this.locale = locale
      await loadLocale(locale)
      localStorage.setItem(LOCALE_STORAGE_KEY, locale)
      document.documentElement.lang = locale
    },

    async toggleLocale() {
      await this.setLocale(this.locale === 'en' ? 'ru' : 'en')
    },
  },
})