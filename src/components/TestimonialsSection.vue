<template>
  <section id="testimonials" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-amber-300">{{ testimonialsCopy.badge }}</p>
        <h3 class="text-3xl md:text-4xl font-bold mt-2">{{ testimonialsCopy.title }}</h3>
      </div>
      <div class="text-sm text-stone-300/80">{{ testimonialsCopy.rating }}</div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <article
        v-for="testimonial in testimonialsCopy.items"
        :key="testimonial.name"
        class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6 shadow-lg shadow-amber-500/15"
      >
        <div class="flex items-center justify-between">
          <h4 class="font-semibold">{{ testimonial.name }}</h4>
          <span class="text-amber-300">★ ★ ★ ★ ★</span>
        </div>
        <p class="text-stone-300/80 mt-3 leading-relaxed">
          {{ testimonial.quote }}
        </p>
        <p class="text-xs text-stone-400 mt-4">{{ testimonial.role }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLocaleContent } from '../composables/useLocaleContent.js';

const { copy } = useLocaleContent();
const testimonialsCopy = computed(() => copy.value.testimonials);
</script>
