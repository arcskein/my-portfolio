<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="max-w-3xl">
    <p class="text-base leading-8 text-slate-300 sm:text-lg">
      {{ t('about.text') }}
    </p>
  </div>
</template>