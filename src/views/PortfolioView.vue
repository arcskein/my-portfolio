<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../i18n'
import { useAppStore } from '../stores/app'
import { getProjects } from '../data/projects'
import { getSkills } from '../data/skills'
import { getCertificates } from '../data/education'

import HeroSection from '../components/HeroSection.vue'
import AboutMe from '../components/AboutMe.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import EducationCertificates from '../components/EducationCertificates.vue'
import ProjectCarousel from '../components/ProjectCarousel.vue'
import BaseSection from '../components/BaseSection.vue'
import ContactSection from '../components/ContactSection.vue'

const { t } = useI18n()
const appStore = useAppStore()

const projects = computed(() => getProjects(appStore.locale))
const skills = computed(() => getSkills(appStore.locale))
const certificates = computed(() => getCertificates(appStore.locale))
</script>

<template>
  <div class="space-y-20">
    <HeroSection />

    <BaseSection id="about" :title="t('about.title')" eyebrow="01">
      <AboutMe />
    </BaseSection>

    <BaseSection id="skills" :title="t('skills.title')" eyebrow="02">
      <SkillsGrid :hard-skills="skills.hardSkills" :soft-skills="skills.softSkills" />
    </BaseSection>

    <BaseSection id="education" :title="t('education.title')" eyebrow="03">
      <EducationCertificates :certificates="certificates" />
    </BaseSection>

    <BaseSection id="projects" :title="t('projects.title')" :subtitle="t('projects.subtitle')" eyebrow="04">
      <ProjectCarousel :projects="projects" />
    </BaseSection>

    <BaseSection id="contact" :title="t('contact.title')" :subtitle="t('contact.subtitle')" eyebrow="05">
      <ContactSection />
    </BaseSection>
  </div>
</template>