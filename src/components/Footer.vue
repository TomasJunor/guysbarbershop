<template>
  <footer class="border-t border-gold-soft bg-stone-950/80">
    <div class="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">
      <div class="flex items-center gap-3 text-[#f2dea2]">
        <div class="h-8 w-8 rounded-full bg-gold-gradient flex items-center justify-center text-stone-950 font-bold">G</div>
        <span>{{ footerCopy.brand }}</span>
      </div>
      <div class="flex items-center gap-4">
        <a class="hover:text-[#f2dea2]" href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina" target="_blank" rel="noreferrer">{{ footerCopy.links.maps }}</a>
        <a class="hover:text-[#f2dea2]" href="#services">{{ footerCopy.links.services }}</a>
        <a class="hover:text-[#f2dea2]" href="#contact">{{ footerCopy.links.contact }}</a>
      </div>
      <p class="text-xs text-stone-500">{{ footerCopy.caption }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../i18n';

const { t } = useI18n();
const footerCopy = computed(() => t('footer'));
</script>
