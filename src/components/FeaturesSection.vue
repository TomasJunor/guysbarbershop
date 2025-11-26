<template>
  <section id="features" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-amber-300">{{ featuresCopy.badge }}</p>
        <h3 class="text-3xl md:text-4xl font-bold mt-2">{{ featuresCopy.title }}</h3>
      </div>
      <div class="flex items-center gap-2 text-sm text-amber-100/80">
        <span class="h-2 w-2 rounded-full bg-emerald-400" /> {{ featuresCopy.meta }}
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div
        v-for="(card, index) in featuresCopy.cards"
        :key="card.title"
        class="group rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6 shadow-lg shadow-amber-500/10 hover:border-amber-300/40 transition-all"
      >
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-xl font-semibold">{{ card.title }}</h4>
          <span class="text-amber-300">{{ String(index + 1).padStart(2, '0') }}</span>
        </div>
        <p class="text-stone-300/80 leading-relaxed">
          {{ card.copy }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../i18n';

const { t } = useI18n();
const featuresCopy = computed(() => t('features'));
</script>
