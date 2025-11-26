<template>
  <section class="relative overflow-hidden" id="hero">
    <div class="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black" />
    <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(198,162,74,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(154,122,43,0.18),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(242,222,162,0.15),transparent_45%)]" />
    <div class="absolute -right-20 -bottom-32 h-80 w-80 rounded-full bg-gradient-to-br from-[#c6a24a40] via-[#c6a24a1a] to-transparent blur-3xl" />
    <div class="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold leading-tight text-gold-strong">
            {{ heroCopy.title }}
          </h2>
          <p class="text-lg text-stone-200/80 leading-relaxed">
            {{ heroCopy.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              class="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gold-gradient text-stone-950 font-semibold shadow-gold hover:opacity-90 transition-opacity"
              :href="whatsappLink || '#'"
              target="_blank"
              rel="noreferrer noopener"
              :aria-disabled="!whatsappLink"
              @click="handleWhatsappClick"
            >
              {{ heroCopy.primaryCta }}
              <span class="h-2 w-2 rounded-full bg-[#c6a24a] animate-ping" />
            </a>
            <a href="#services" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gold text-[#f2dea2] hover:bg-gold-pill transition-colors">
              {{ heroCopy.secondaryCta }}
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-8 bg-gradient-to-br from-[#c6a24a33] via-transparent to-[#f2dea210] blur-3xl" />
          <div class="relative overflow-hidden rounded-3xl border border-gold-soft bg-stone-900/70 shadow-2xl shadow-gold">
            <div class="h-full w-full bg-[url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center min-h-[360px]" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 space-y-3">
              <p class="text-xs uppercase tracking-[0.3em] text-[#f2dea2]">{{ heroCopy.card.eyebrow }}</p>
              <p class="text-lg font-semibold">{{ heroCopy.card.description }}</p>
              <div class="flex items-center gap-3 text-sm text-[#f2dea2]/80">
                <span class="h-2 w-2 rounded-full bg-[#c6a24a]" /> {{ heroCopy.card.location }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../i18n';
import { useWhatsApp } from '../composables/useWhatsApp';

const { t } = useI18n();
const heroCopy = computed(() => t('hero'));
const bulletAccentClasses = ['bg-[#c6a24a] animate-pulse', 'bg-[#9a7a2b]', 'bg-[#f2dea2]'];

const { whatsappLink, handleWhatsappClick } = useWhatsApp();
</script>
