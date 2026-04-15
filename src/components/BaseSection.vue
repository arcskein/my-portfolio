<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
  id: string
  title: string
  subtitle?: string
  eyebrow?: string
}>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(
  sectionRef,
  ([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  },
  { threshold: 0.15 }
)
</script>

<template>
  <section :id="id" ref="sectionRef" class="scroll-mt-28" :class="[
    'transition-all duration-700',
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
  ]">
    <div class="mb-8 flex items-start justify-between gap-4">
      <div class="max-w-3xl">
        <p v-if="eyebrow" class="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-accent/80">
          {{ eyebrow }}
        </p>
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <div class="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-7">
      <slot />
    </div>
  </section>
</template>