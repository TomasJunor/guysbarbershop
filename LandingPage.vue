<template>
  <div class="font-serif bg-stone-900 text-amber-100 min-h-screen">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    <ServicesSection />
    <CTASection />
    <Footer />
  </div>
</template>

<script setup>
import Header from './src/components/Header.vue';
import HeroSection from './src/components/HeroSection.vue';
import FeaturesSection from './src/components/FeaturesSection.vue';
import TestimonialsSection from './src/components/TestimonialsSection.vue';
import ServicesSection from './src/components/ServicesSection.vue';
import CTASection from './src/components/CTASection.vue';
import Footer from './src/components/Footer.vue';
</script>