<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-stone-950/80 border-b border-amber-500/20">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 p-[2px] rounded-full shadow-lg shadow-amber-500/30">
          <div class="bg-stone-950 rounded-full p-2">
            <svg class="h-8 w-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 19c-1 0-1.5-.5-2-1-1-1-1.5-2.5-1.5-4.5S4 10 5 8.5C6 7 7 6 7 5c0-.5.5-2 5-2s5 1.5 5 2c0 1 1 2 2 3.5 1 1.5 1.5 3 1.5 5s-.5 3.5-1.5 4.5c-.5.5-1 1-2 1H7Z" />
              <path d="M9 9.5c.5.5 1.5 1 3 1s2.5-.5 3-1" />
              <path d="m9 13 6 2" />
            </svg>
          </div>
        </div>
        <div>
          <p class="text-xs uppercase tracking-[0.25em] text-amber-400/80">{{ headerCopy.badge }}</p>
          <h1 class="text-xl md:text-2xl font-semibold">{{ headerCopy.title }}</h1>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-10 text-sm">
        <a class="hover:text-amber-200 transition-colors" href="#features">{{ headerCopy.nav.experience }}</a>
        <a class="hover:text-amber-200 transition-colors" href="#services">{{ headerCopy.nav.services }}</a>
        <a class="hover:text-amber-200 transition-colors" href="#testimonials">{{ headerCopy.nav.community }}</a>
        <a class="hover:text-amber-200 transition-colors" href="#contact">{{ headerCopy.nav.visit }}</a>
      </nav>

      <a
        :href="bookingUrl"
        target="_blank"
        rel="noreferrer"
        class="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 shadow-lg shadow-amber-500/30 hover:from-amber-400 hover:to-orange-400 transition-colors"
        :class="{ 'opacity-70 cursor-not-allowed': !hasWhatsapp }"
        :aria-disabled="!hasWhatsapp"
      >
        {{ headerCopy.book }}
        <span class="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
      </a>

      <button class="md:hidden text-amber-300" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </div>

    <div v-if="mobileMenuOpen" class="md:hidden border-t border-amber-500/20 bg-stone-950/95">
      <div class="max-w-6xl mx-auto px-4 py-4 space-y-3">
        <a class="block text-amber-100 hover:text-amber-300" href="#features" @click="mobileMenuOpen = false">{{ headerCopy.nav.experience }}</a>
        <a class="block text-amber-100 hover:text-amber-300" href="#services" @click="mobileMenuOpen = false">{{ headerCopy.nav.services }}</a>
        <a class="block text-amber-100 hover:text-amber-300" href="#testimonials" @click="mobileMenuOpen = false">{{ headerCopy.nav.community }}</a>
        <a class="block text-amber-100 hover:text-amber-300" href="#contact" @click="mobileMenuOpen = false">{{ headerCopy.nav.visit }}</a>
        <a
          :href="bookingUrl"
          target="_blank"
          rel="noreferrer"
          class="w-full px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-semibold block text-center"
          :class="{ 'opacity-70 cursor-not-allowed': !hasWhatsapp }"
          :aria-disabled="!hasWhatsapp"
          @click="mobileMenuOpen = false"
        >
          {{ headerCopy.book }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useLocaleContent } from '../composables/useLocaleContent.js';

const mobileMenuOpen = ref(false);
const { copy, whatsappLink } = useLocaleContent();

const headerCopy = computed(() => copy.value.header);
const hasWhatsapp = computed(() => Boolean(whatsappLink.value));
const bookingUrl = computed(() => whatsappLink.value || '#');
</script>
