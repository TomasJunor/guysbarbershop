<template>
  <section class="relative overflow-hidden" id="hero">
    <div class="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black" />
    <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,87,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,125,69,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(94,234,212,0.12),transparent_45%)]" />
    <div class="absolute -right-20 -bottom-32 h-80 w-80 rounded-full bg-gradient-to-br from-amber-500/30 via-orange-500/10 to-emerald-400/10 blur-3xl" />
    <div class="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <p class="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.3em] rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200">
            {{ heroCopy.badge }}
          </p>
          <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            {{ heroCopy.title }}
          </h2>
          <p class="text-lg text-stone-200/80 leading-relaxed">
            {{ heroCopy.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              :href="bookingUrl"
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-semibold shadow-lg shadow-amber-500/30 hover:from-amber-400 hover:to-orange-400 transition-all"
              :class="{ 'opacity-70 cursor-not-allowed': !hasWhatsapp }"
              :aria-disabled="!hasWhatsapp"
            >
              {{ heroCopy.book }}
              <span class="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
            </a>
            <a href="#services" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-amber-500/30 text-amber-100 hover:border-amber-300 hover:text-amber-200 transition-colors">
              {{ heroCopy.seeMenu }}
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          <div class="flex flex-wrap gap-6 text-sm text-stone-300/80">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {{ heroCopy.walkIns }}</div>
            <div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-amber-400" /> {{ heroCopy.coffee }}</div>
            <div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-cyan-400" /> {{ heroCopy.playlists }}</div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-8 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-500/5 blur-3xl" />
          <div class="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-stone-900/70 shadow-2xl shadow-amber-500/20">
            <div class="h-full w-full bg-[url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center min-h-[360px]" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 space-y-3">
              <p class="text-xs uppercase tracking-[0.3em] text-amber-300">{{ heroCopy.insideLabel }}</p>
              <p class="text-lg font-semibold">{{ heroCopy.insideDescription }}</p>
              <div class="flex items-center gap-3 text-sm text-amber-200/80">
                <span class="h-2 w-2 rounded-full bg-lime-400" /> {{ heroCopy.location }}
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
import { useLocaleContent } from '../composables/useLocaleContent.js';

const { copy, whatsappLink } = useLocaleContent();
const heroCopy = computed(() => copy.value.hero);
const hasWhatsapp = computed(() => Boolean(whatsappLink.value));
const bookingUrl = computed(() => whatsappLink.value || '#');
</script>
