<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section id="home" class="scroll-mt-28 py-10 sm:py-16">
    <div class="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
      <div class="space-y-6">
        <p class="font-mono text-xs uppercase tracking-[0.28em] text-accent/80">
          {{ t('hero.eyebrow') }}
        </p>

        <div class="space-y-4">
          <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {{ t('hero.name') }}
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {{ t('hero.role') }}
          </p>
          <p class="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            {{ t('hero.bio') }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a href="#projects"
            class="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-accent-soft">
            {{ t('hero.cta') }}
          </a>
          <a href="#contact"
            class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-accent/60 hover:text-accent">
            {{ t('common.contactMe') }}
          </a>
        </div>
      </div>

      <div class="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div class="space-y-4">
          <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <p class="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">Focus</p>
            <p class="mt-3 text-sm leading-6 text-slate-300">
              Software development. Creating a simple and maintainable architecture.
            </p>
          </div>

          <div class="grid gap-3">
            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p class="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Stack</p>
              <p class="mt-2 text-sm text-white">Java · Spring · Hibernate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>