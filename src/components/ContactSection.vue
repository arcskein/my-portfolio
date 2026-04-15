<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <a href="mailto:arcskein@gmail.com"
      class="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-300 transition hover:border-accent/60 hover:text-white">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
      <p class="mt-2 break-all">arcskein@gmail.com</p>
    </a>

    <a href="https://github.com/arcskein" target="_blank" rel="noreferrer noopener"
      class="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-300 transition hover:border-accent/60 hover:text-white">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{{ t('common.github') }}</p>
      <p class="mt-2">github.com/arcskein</p>
    </a>

    <a href="https://t.me/arcskein" target="_blank" rel="noreferrer noopener"
      class="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-300 transition hover:border-accent/60 hover:text-white">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Telegram</p>
      <p class="mt-2">@arcskein</p>
    </a>
  </div>
</template>