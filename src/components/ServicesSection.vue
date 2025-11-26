<template>
  <section id="services" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-amber-300">{{ servicesCopy.badge }}</p>
        <h3 class="text-3xl md:text-4xl font-bold mt-2">{{ servicesCopy.title }}</h3>
      </div>
      <a
        href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 text-sm text-amber-200 hover:text-amber-100"
      >
        {{ servicesCopy.viewLocation }}
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="service in servicesCopy.items"
        :key="service.title"
        class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6 shadow-lg shadow-amber-500/15"
        :class="{ 'bg-gradient-to-br from-stone-900 to-stone-950 shadow-xl shadow-amber-500/25': service.highlight }"
      >
        <div class="flex items-start justify-between">
          <div>
            <h4 class="text-xl font-semibold">{{ service.title }}</h4>
            <p v-if="service.highlight" class="text-amber-300 text-sm">{{ service.highlight }}</p>
          </div>
          <span class="text-amber-300 font-semibold">{{ service.price }}</span>
        </div>
        <p class="text-stone-300/80 mt-3">{{ service.description }}</p>
        <div class="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300">
          <span class="h-2 w-2 rounded-full bg-emerald-400" /> {{ service.timing }}
        </div>
      </div>
    </div>

    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6">
        <div class="flex items-center gap-3 text-amber-100">
          <svg class="h-6 w-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 5h18M6 12h12M10 19h4" />
          </svg>
          <h5 class="text-lg font-semibold">{{ servicesCopy.addOns.title }}</h5>
        </div>
        <p class="text-stone-300/80 mt-3">{{ servicesCopy.addOns.description }}</p>
      </div>
      <div class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6">
        <div class="flex items-center gap-3 text-amber-100">
          <svg class="h-6 w-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 3v4c0 7 5 9 7 9s7-2 7-9V3" />
            <path d="M3 21h18" />
          </svg>
          <h5 class="text-lg font-semibold">{{ servicesCopy.groups.title }}</h5>
        </div>
        <p class="text-stone-300/80 mt-3">{{ servicesCopy.groups.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLocaleContent } from '../composables/useLocaleContent.js';

const { copy } = useLocaleContent();
const servicesCopy = computed(() => copy.value.services);
</script>
