<template>
  <div class="min-h-screen bg-stone-950 text-stone-100 font-sans">
    <Header />
    <main class="space-y-20 md:space-y-28">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './src/components/Header.vue';
import HeroSection from './src/components/HeroSection.vue';
import FeaturesSection from './src/components/FeaturesSection.vue';
import ServicesSection from './src/components/ServicesSection.vue';
import TestimonialsSection from './src/components/TestimonialsSection.vue';
import CTASection from './src/components/CTASection.vue';
import Footer from './src/components/Footer.vue';
</script>
