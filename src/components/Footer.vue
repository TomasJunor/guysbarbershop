<template>
  <footer class="border-t border-amber-500/20 bg-stone-950/80">
    <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">
      <div class="flex items-center gap-3 text-amber-100">
        <div class="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-stone-950 font-bold">G</div>
        <span>{{ footerCopy.title }}</span>
      </div>
      <div class="flex items-center gap-4">
        <a class="hover:text-amber-200" href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina" target="_blank" rel="noreferrer">{{ footerCopy.maps }}</a>
        <a class="hover:text-amber-200" href="#services">{{ footerCopy.services }}</a>
        <a class="hover:text-amber-200" href="#contact">{{ footerCopy.contact }}</a>
      </div>
      <p class="text-xs text-stone-500">{{ footerCopy.tagline }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useLocaleContent } from '../composables/useLocaleContent.js';

const { copy } = useLocaleContent();
const footerCopy = computed(() => copy.value.footer);
</script>
