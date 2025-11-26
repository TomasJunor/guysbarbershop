<template>
  <section id="contact" class="max-w-6xl mx-auto px-4 pb-16">
    <div class="relative overflow-hidden rounded-3xl border border-gold-soft bg-gradient-to-br from-stone-950 via-black to-stone-900 shadow-2xl shadow-gold">
      <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#c6a24a33] via-transparent to-[#f2dea20f] blur-3xl" />
      <div class="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tr from-[#f2dea220] via-transparent to-[#c6a24a0f] blur-3xl" />
      <div class="relative px-6 py-10 md:px-10 md:py-12 grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.3em] text-[#f2dea2]">{{ ctaCopy.badge }}</p>
          <h3 class="text-3xl font-bold text-gold-strong">{{ ctaCopy.title }}</h3>
          <p class="text-stone-300/80 leading-relaxed">
            {{ ctaCopy.description }}
          </p>
          <div class="flex flex-wrap gap-4 text-sm text-[#f2dea2]">
            <span
              v-for="chip in ctaCopy.chips"
              :key="chip"
              class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-gold text-[#f2dea2] bg-gold-pill"
            >
              {{ chip }}
            </span>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-gradient text-stone-950 font-semibold shadow-gold hover:opacity-90 transition-opacity">
              {{ ctaCopy.mapCta }}
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              class="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gold text-[#f2dea2] hover:bg-gold-pill"
              :href="whatsappLink || '#'"
              target="_blank"
              rel="noreferrer noopener"
              :aria-disabled="!whatsappLink"
              @click="handleWhatsappClick"
            >
              {{ ctaCopy.whatsappCta }}
              <span class="pi pi-whatsapp"></span>
            </a>
          </div>
        </div>
        <div class="bg-stone-900/70 border border-gold-soft rounded-2xl p-6 space-y-4">
          <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2SxPwmD1Sh6qGJhsRKEjd2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
const ctaCopy = computed(() => t('cta'));

const { whatsappLink, handleWhatsappClick } = useWhatsApp();
</script>
