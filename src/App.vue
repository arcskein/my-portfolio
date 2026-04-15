<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from './i18n'
import PortfolioView from './views/PortfolioView.vue'
import { useAppStore } from './stores/app'

const { t } = useI18n()
const appStore = useAppStore()

const localeLabel = computed(() => (appStore.locale === 'en' ? 'RU' : 'EN'))
</script>

<template>
  <div class="min-h-screen bg-surface text-slate-100">
    <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" class="flex items-center gap-3 text-sm font-semibold tracking-wide text-white">
          <span class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-mono text-accent">
            AV
          </span>
          <span class="hidden sm:inline">{{ t('brand.label') }}</span>
        </a>

        <nav class="flex flex-wrap items-center justify-end gap-3 text-sm text-slate-300">
          <a href="#home" class="hover:text-white">{{ t('nav.home') }}</a>
          <a href="#about" class="hover:text-white">{{ t('nav.about') }}</a>
          <a href="#skills" class="hover:text-white">{{ t('nav.skills') }}</a>
          <a href="#education" class="hover:text-white">{{ t('nav.education') }}</a>
          <a href="#projects" class="hover:text-white">{{ t('nav.projects') }}</a>
          <a href="#contact" class="hover:text-white">{{ t('nav.contact') }}</a>

          <button
            type="button"
            class="ml-1 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs font-medium text-slate-100 hover:border-accent/60 hover:text-accent"
            @click="appStore.toggleLocale"
          >
            {{ localeLabel }}
          </button>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PortfolioView />
    </main>

    <footer class="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        © {{ new Date().getFullYear() }} {{ t('brand.label') }} · {{ t('footer.rights') }}
      </div>
    </footer>
  </div>
</template>