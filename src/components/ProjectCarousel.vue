<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { IProject } from '../types'

const props = defineProps<{
  projects: IProject[]
}>()

const { t } = useI18n()

const scroller = ref<HTMLDivElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

function updateButtons() {
  const el = scroller.value
  if (!el) return

  canScrollLeft.value = el.scrollLeft > 0
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1
}

function scroll(direction: -1 | 1) {
  const el = scroller.value
  if (!el) return

  const distance = Math.round(el.clientWidth * 0.85)
  el.scrollBy({
    left: direction * distance,
    behavior: 'smooth',
  })
}

onMounted(() => {
  updateButtons()
})
</script>

<template>
  <div class="space-y-5">
    <div class="flex items-center justify-between gap-3">
      <p class="text-sm text-slate-400"> </p>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-accent/60 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="!canScrollLeft"
          :aria-label="t('common.previous')"
          @click="scroll(-1)"
        >
          ←
        </button>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-accent/60 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="!canScrollRight"
          :aria-label="t('common.next')"
          @click="scroll(1)"
        >
          →
        </button>
      </div>
    </div>

    <div
      ref="scroller"
      class="flex gap-5 overflow-x-auto scroll-smooth pb-3 snap-x snap-mandatory"
      @scroll="updateButtons"
    >
      <article
        v-for="project in props.projects"
        :key="project.id"
        class="min-w-[300px] sm:min-w-[360px] lg:min-w-[400px] shrink-0 snap-start rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-accent/30 transition-all duration-300 overflow-hidden flex flex-col"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="h-52 w-full object-cover"
          loading="lazy"
        />

        <div class="flex flex-col flex-1 p-5 space-y-4">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="text-sm leading-6 text-slate-400">
              {{ project.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-3 pt-2 mt-auto">
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noreferrer noopener"
              class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:text-accent"
            >
              {{ t('common.github') }}
            </a>

            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noreferrer noopener"
              class="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-accent-soft"
            >
              {{ t('common.liveDemo') }}
            </a>

            <a
              v-if="project.downloadUrl"
              :href="project.downloadUrl"
              class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:text-accent"
              :download="project.id + '.zip'"
            >
              {{ t('common.download') }}
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>