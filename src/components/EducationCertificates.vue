<script setup lang="ts">
import type { ICertificate } from '../types'

defineProps<{
  certificates: ICertificate[]
}>()
</script>

<template>
  <div class="grid gap-4">
    <a v-for="certificate in certificates" :key="`${certificate.name}-${certificate.date}`" :href="certificate.url"
      target="_blank" rel="noopener noreferrer" :class="[
        'group block rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition-all duration-300',
        certificate.url
          ? 'hover:border-accent/60 hover:bg-slate-950/70 hover:shadow-lg'
          : 'cursor-default'
      ]">
      <article>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div class="space-y-2">
            <h3 class="text-base font-semibold text-white transition-colors group-hover:text-accent sm:text-lg">
              {{ certificate.name }}
            </h3>
            <p class="text-sm text-slate-400">
              {{ certificate.issuer }}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span
              class="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
              {{ certificate.date }}
            </span>
            <span v-if="certificate.url" class="text-slate-500 transition-colors group-hover:text-accent"
              aria-hidden="true">
              ↗
            </span>
          </div>
        </div>

        <p v-if="certificate.details" class="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
          {{ certificate.details }}
        </p>
      </article>
    </a>
  </div>
</template>