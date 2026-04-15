import { ref } from 'vue'
import type { ILocaleMessage, Locale } from './types'

type LeafKey<T> = {
  [K in keyof T & string]: T[K] extends string ? K : T[K] extends object ? `${K}.${LeafKey<T[K]>}` : never
}[keyof T & string]

export type I18nKey = LeafKey<ILocaleMessage>

const localeLoaders: Record<Locale, () => Promise<ILocaleMessage>> = {
  en: () => import('./locales/en.json').then((module) => module.default as ILocaleMessage),
  ru: () => import('./locales/ru.json').then((module) => module.default as ILocaleMessage),
}

const loadedMessages = new Map<Locale, ILocaleMessage>()
export const locale = ref<Locale>('en')

function readByPath(message: ILocaleMessage, key: I18nKey): string {
  const parts = key.split('.')
  let value: unknown = message
  for (const part of parts) {
    if (typeof value !== 'object' || value === null || !(part in value)) {
      return key
    }
    value = (value as Record<string, unknown>)[part]
  }
  return typeof value === 'string' ? value : key
}

export async function loadLocale(nextLocale: Locale): Promise<void> {
  if (!loadedMessages.has(nextLocale)) {
    const message = await localeLoaders[nextLocale]()
    loadedMessages.set(nextLocale, message)
  }
  locale.value = nextLocale
}

export function t(key: I18nKey): string {
  const currentMessage = loadedMessages.get(locale.value)
  if (!currentMessage) {
    return key
  }
  return readByPath(currentMessage, key)
}

export function useI18n() {
  return {
    t,
    locale,
  }
}