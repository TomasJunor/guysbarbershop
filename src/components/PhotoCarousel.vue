<template>
  <section id="gallery" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-[#f2dea2]">{{ galleryCopy.badge }}</p>
        <h3 class="text-3xl font-bold text-gold-strong mt-2">{{ galleryCopy.title }}</h3>
        <p class="text-stone-300/80 text-sm mt-2 max-w-2xl">{{ galleryCopy.description }}</p>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="w-10 h-10 rounded-full border border-gold text-[#f2dea2] hover:bg-gold-pill transition"
          type="button"
          aria-label="Previous slide"
          @click="prevSlide"
        >
          &lsaquo;
        </button>
        <button
          class="w-10 h-10 rounded-full border border-gold text-[#f2dea2] hover:bg-gold-pill transition"
          type="button"
          aria-label="Next slide"
          @click="nextSlide"
        >
          &rsaquo;
        </button>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-3xl border border-gold-soft bg-stone-950 shadow-gold">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }"
      >
        <article
          v-for="(slide, index) in slides"
          :key="slide.alt + index"
          class="min-w-full"
        >
          <div class="relative h-[320px] md:h-[420px]">
            <img
              :src="slide.src"
              :alt="slide.alt"
              class="h-full w-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col gap-1">
              <p class="text-[#f2dea2] text-sm">{{ slide.caption }}</p>
              <span class="text-xs text-stone-300/80">{{ slide.meta }}</span>
            </div>
          </div>
        </article>
      </div>
      <div class="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        <button
          v-for="(slide, index) in slides"
          :key="slide.alt + 'dot' + index"
          class="h-2 w-8 rounded-full transition"
          :class="index === currentIndex ? 'bg-[#c6a24a]' : 'bg-white/20 hover:bg-white/40'"
          type="button"
          :aria-label="galleryCopy.dotLabel + ' ' + (index + 1)"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from '../i18n';

const slideSources = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80',
    fallbackAlt: 'Detalle de corte en progreso',
    fallbackCaption: 'Afeitadas precisas con terminacion en navaja',
    fallbackMeta: 'By Guy · Palermo'
  },
  {
    src: 'https://images.unsplash.com/photo-1653875700329-a7c8aca94c95?auto=format&fit=crop&w=1400&q=80',
    fallbackAlt: 'Toalla caliente sobre barba',
    fallbackCaption: 'Ritual de toalla caliente, afeitado y aceites',
    fallbackMeta: 'Servicio premium'
  },
  {
    // src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80',
    src: 'https://images.unsplash.com/photo-1577466801953-526b0ba3879d?auto=format&fit=crop&w=1400&q=80',
    fallbackAlt: 'Detalle de productos de styling',
    fallbackCaption: 'Productos seleccionados para cada tipo de cabello',
    fallbackMeta: 'Productos profesionales'
  }
];

const currentIndex = ref(0);
const intervalMs = 6000;
let timerId = null;

const { t } = useI18n();
const galleryCopy = computed(() => t('gallery'));

const slides = computed(() => {
  const localizedSlides = galleryCopy.value?.slides ?? [];
  return slideSources.map((source, index) => ({
    src: source.src,
    alt: localizedSlides[index]?.alt ?? source.fallbackAlt,
    caption: localizedSlides[index]?.caption ?? source.fallbackCaption,
    meta: localizedSlides[index]?.meta ?? source.fallbackMeta
  }));
});

const totalSlides = computed(() => slides.value.length || 1);

const nextSlide = () => {
  if (!totalSlides.value) return;
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
};

const prevSlide = () => {
  if (!totalSlides.value) return;
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
};

const goToSlide = (index) => {
  if (!totalSlides.value) return;
  currentIndex.value = index;
  resetTimer();
};

const resetTimer = () => {
  if (timerId) {
    clearInterval(timerId);
  }
  if (totalSlides.value < 2) {
    timerId = null;
    return;
  }
  timerId = setInterval(() => {
    nextSlide();
  }, intervalMs);
};

onMounted(() => {
  resetTimer();
});

onBeforeUnmount(() => {
  if (timerId) {
    clearInterval(timerId);
  }
});
</script>
