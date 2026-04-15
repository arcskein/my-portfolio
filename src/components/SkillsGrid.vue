<script setup lang="ts">
import type { ISkill } from '../types'
import { useI18n } from '../i18n'

defineProps<{
  hardSkills: ISkill[]
  softSkills: string[]
}>()

const { t } = useI18n()
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-2">
    <div class="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
      <h3 class="text-lg font-semibold text-white">{{ t('skills.hard') }}</h3>

      <div class="mt-5 space-y-4">
        <div v-for="skill in hardSkills" :key="skill.name" class="space-y-2">
          <div class="flex items-center justify-between gap-4 text-sm">
            <span class="text-slate-200">{{ skill.name }}</span>
            <span class="font-mono text-xs text-slate-500">{{ skill.level }}%</span>
          </div>

          <div class="h-2 rounded-full bg-white/5">
            <div class="h-2 rounded-full bg-accent transition-all duration-700" :style="{ width: `${skill.level}%` }" />
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
      <h3 class="text-lg font-semibold text-white">{{ t('skills.soft') }}</h3>

      <div class="mt-5 flex flex-wrap gap-3">
        <span v-for="skill in softSkills" :key="skill"
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>