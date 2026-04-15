import { defineStore } from 'pinia'
import { i18n } from '../i18n'
import type { Locale } from '../types'

function normalizeLocale(value: string | null | undefined): Locale {
  return value === 'ru' ? 'ru' : 'en'
}

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: 'en' as Locale,
    theme: 'dark' as const,
    hydrated: false,
  }),

  actions: {
    hydrate() {
      const savedLocale = normalizeLocale(localStorage.getItem('portfolio-locale'))
      const browserLocale = normalizeLocale(window.navigator.language.startsWith('ru') ? 'ru' : 'en')

      this.locale = savedLocale ?? browserLocale

      i18n.global.locale = this.locale
      document.documentElement.lang = this.locale
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'

      this.hydrated = true
    },

    setLocale(locale: Locale) {
      this.locale = locale
      localStorage.setItem('portfolio-locale', locale)
      i18n.global.locale = locale
      document.documentElement.lang = locale
    },

    toggleLocale() {
      this.setLocale(this.locale === 'en' ? 'ru' : 'en')
    },
  },
})