<template>
  <section id="services" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-[#f2dea2]">{{ servicesCopy.badge }}</p>
        <h3 class="text-3xl md:text-4xl font-bold mt-2 text-gold-strong">{{ servicesCopy.title }}</h3>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="card in servicesCopy.cards"
        :key="card.name"
        :class="[
          'rounded-2xl border border-gold-soft p-6 shadow-gold bg-stone-950/70',
          card.badge ? 'bg-gold-gradient-dark' : ''
        ]"
      >
        <div class="mb-4">
          <h4 class="text-xl font-semibold">{{ card.name }}</h4>
          <p v-if="card.badge" class="text-[#f2dea2] text-sm">{{ card.badge }}</p>
        </div>
        <p class="text-stone-300/80 mt-3">{{ card.description }}</p>
        <!-- <div class="mt-4 inline-flex items-center gap-2 text-xs text-[#f2dea2]/80">
          <span class="h-2 w-2 rounded-full bg-[#c6a24a]" /> {{ card.duration }}
        </div> -->
      </div>
    </div>

    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div
        v-for="(extra, index) in servicesCopy.extras"
        :key="extra.title"
        class="rounded-2xl border border-gold-soft bg-stone-950/70 p-6"
      >
        <div class="flex items-center gap-3 text-[#f2dea2]">
          <svg
            v-if="index === 0"
            class="h-6 w-6 text-[#f2dea2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 5h18M6 12h12M10 19h4" />
          </svg>
          <svg
            v-else
            class="h-6 w-6 text-[#c6a24a]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 3v4c0 7 5 9 7 9s7-2 7-9V3" />
            <path d="M3 21h18" />
          </svg>
          <h5 class="text-lg font-semibold">{{ extra.title }}</h5>
        </div>
        <p class="text-stone-300/80 mt-3">{{ extra.copy }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../i18n';

const { t } = useI18n();
const servicesCopy = computed(() => t('services'));
</script>
