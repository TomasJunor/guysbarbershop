<template>
  <section id="testimonials" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-[#f2dea2]">{{ testimonialsCopy.badge }}</p>
        <h3 class="text-3xl md:text-4xl font-bold mt-2 text-gold-strong">{{ testimonialsCopy.title }}</h3>
      </div>
      <div class="text-sm text-[#f2dea2]/80">{{ testimonialsCopy.rating }}</div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <article
  v-for="card in testimonialsCopy.cards"
  :key="card.name"
  class="rounded-2xl border border-gold-soft bg-stone-950/70 p-6 shadow-gold flex flex-col"
>
        <div class="flex items-center justify-between">
          <h4 class="font-semibold">{{ card.name }}</h4>
          <span class="text-[#f2dea2]">5/5</span>
        </div>
        <p class="text-stone-300/80 mt-3 leading-relaxed">
          {{ card.quote }}
        </p>
        <p class="text-xs text-stone-400 mt-auto pt-4">{{ card.note }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../i18n';

const { t } = useI18n();
const testimonialsCopy = computed(() => t('testimonials'));
</script>
