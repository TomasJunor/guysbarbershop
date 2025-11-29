<template>
  <header
    class="sticky top-0 z-50 backdrop-blur bg-stone-950/85 border-b border-gold-soft"
  >
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="bg-gold-gradient p-[2px] rounded-full shadow-gold">
          <div class="bg-stone-950 rounded-full p-2">
            <svg
              class="h-8 w-8 text-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M7 19c-1 0-1.5-.5-2-1-1-1-1.5-2.5-1.5-4.5S4 10 5 8.5C6 7 7 6 7 5c0-.5.5-2 5-2s5 1.5 5 2c0 1 1 2 2 3.5 1 1.5 1.5 3 1.5 5s-.5 3.5-1.5 4.5c-.5.5-1 1-2 1H7Z"
              />
              <path d="M9 9.5c.5.5 1.5 1 3 1s2.5-.5 3-1" />
              <path d="m9 13 6 2" />
            </svg>
          </div>
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.25em] text-[#f2dea2]">
            {{ headerCopy.eyebrow }}
          </p>
          <h1 class="text-xl md:text-2xl font-semibold text-gold-strong">
            {{ headerCopy.title }}
          </h1>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-10 text-sm">
        <a
          v-for="item in navLinks"
          :key="item.href"
          class="text-stone-200 hover:text-[#f2dea2] transition-colors"
          :href="item.href"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Desktop flag button -->
      <button
        class="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold"
        type="button"
        :aria-label="localeToggleLabel"
        @click="toggleLocale"
      >
        <span class="flag" :class="localeFlagClass" aria-hidden="true" />
      </button>

      <a
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gold-gradient shadow-gold hover:opacity-90 transition-opacity"
        :href="whatsappLink || '#'"
        target="_blank"
        rel="noreferrer noopener"
        :aria-disabled="!whatsappLink"
        @click="handleWhatsappClick"
      >
        {{ headerCopy.ctaLabel }}
        <span class="h-2 w-2 rounded-full bg-[#c6a24a] animate-pulse" />
      </a>

      <button
        class="md:hidden text-[#f2dea2]"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg
          v-if="!mobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6 6l12 12M6 18L18 6"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-gold-soft bg-stone-950/95"
    >
      <div class="max-w-6xl mx-auto px-4 py-4 space-y-3">
        <a
          v-for="item in navLinks"
          :key="item.href"
          class="block text-stone-200 hover:text-[#f2dea2]"
          :href="item.href"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
        <!-- Mobile flag button -->
        <button
          class="w-full px-4 py-2 rounded-full border border-gold text-[#f2dea2] font-semibold flex items-center justify-center"
          type="button"
          :aria-label="localeToggleLabel"
          @click="toggleLocale"
        >
          <span class="flag flag-lg" :class="localeFlagClass" aria-hidden="true" />
        </button>
        <a
          class="w-full px-4 py-2 rounded-full bg-gold-gradient text-stone-950 font-semibold text-center inline-flex justify-center shadow-gold hover:opacity-90 transition-opacity"
          :href="whatsappLink || '#'"
          target="_blank"
          rel="noreferrer noopener"
          :aria-disabled="!whatsappLink"
          @click="onMobileWhatsappClick"
        >
          {{ headerCopy.ctaLabel }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "../i18n";
import { useWhatsApp } from "../composables/useWhatsApp";

const mobileMenuOpen = ref(false);

const { t, locale, setLocale } = useI18n();
const headerCopy = computed(() => t("header"));
const navLinks = computed(() => headerCopy.value?.nav ?? []);
const localeFlagClass = computed(() =>
  locale.value === "es" ? "flag-ar" : "flag-us"
);
const localeToggleLabel = computed(() =>
  locale.value === "es" ? "Cambiar a inglés" : "Switch to Spanish"
);

const { whatsappLink, handleWhatsappClick } = useWhatsApp();

const toggleLocale = () => {
  setLocale(locale.value === "es" ? "en" : "es");
};

const onMobileWhatsappClick = (event) => {
  handleWhatsappClick(event);
  mobileMenuOpen.value = false;
};
</script>
