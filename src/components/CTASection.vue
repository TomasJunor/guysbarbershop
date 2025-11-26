<template>
  <section id="contact" class="max-w-6xl mx-auto px-4 pb-16">
    <div class="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-stone-900 via-stone-950 to-black shadow-2xl shadow-amber-500/20">
      <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-amber-500/25 via-orange-500/15 to-emerald-400/15 blur-3xl" />
      <div class="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-500/15 to-cyan-400/15 blur-3xl" />
      <div class="relative px-6 py-10 md:px-10 md:py-12 grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.3em] text-amber-300">{{ ctaCopy.badge }}</p>
          <h3 class="text-3xl font-bold">{{ ctaCopy.title }}</h3>
          <p class="text-stone-300/80 leading-relaxed">
            {{ ctaCopy.description }}
          </p>
          <div class="flex flex-wrap gap-4 text-sm text-amber-100">
            <span
              v-for="chip in ctaCopy.chips"
              :key="chip"
              class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-amber-500/30 bg-amber-500/10"
            >
              {{ chip }}
            </span>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-semibold shadow-lg shadow-amber-500/30">
              {{ ctaCopy.mapCta }}
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              class="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-amber-500/30 text-amber-100 hover:text-amber-50"
              :href="whatsappLink || '#'"
              target="_blank"
              rel="noreferrer noopener"
              :aria-disabled="!whatsappLink"
              @click="handleWhatsappClick"
            >
              {{ ctaCopy.whatsappCta }}
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 17c5 3 10 0 10-5a5 5 0 0 0-9-2l-1 2-2 1 1 4Z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="bg-stone-900/60 border border-amber-500/20 rounded-2xl p-6 space-y-4">
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
