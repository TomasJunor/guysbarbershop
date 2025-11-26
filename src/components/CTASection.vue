<template>
  <section id="contact" class="max-w-6xl mx-auto px-4 pb-16">
    <div class="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-stone-900 via-stone-950 to-black shadow-2xl shadow-amber-500/20">
      <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-amber-500/25 via-orange-500/15 to-emerald-400/15 blur-3xl" />
      <div class="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tr from-amber-400/20 via-orange-500/15 to-cyan-400/15 blur-3xl" />
      <div class="relative px-6 py-10 md:px-10 md:py-12 grid md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.3em] text-amber-300">Visit Us</p>
          <h3 class="text-3xl font-bold">Reserve a seat or walk in — the music’s already playing.</h3>
          <p class="text-stone-300/80 leading-relaxed">
            DM us on Instagram, send a WhatsApp, or drop by. We’re a short walk from the metro at Güemes, nestled among Palermo’s cafés and galleries.
          </p>
          <div class="flex flex-wrap gap-4 text-sm text-amber-100">
            <span class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-amber-500/30 bg-amber-500/10">Tue–Sat • 11:00–20:00</span>
            <span class="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-amber-500/30 bg-amber-500/10">Costa Rica 4750, Palermo</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-semibold shadow-lg shadow-amber-500/30">
              Open in Maps
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <button class="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-amber-500/30 text-amber-100 hover:text-amber-50">
              WhatsApp us
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 17c5 3 10 0 10-5a5 5 0 0 0-9-2l-1 2-2 1 1 4Z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="bg-stone-900/60 border border-amber-500/20 rounded-2xl p-6 space-y-4">
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-stone-950 font-bold">DJ</div>
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-amber-300">Now Playing</p>
              <h4 class="text-lg font-semibold">Soft Techno Session</h4>
            </div>
          </div>
          <div class="space-y-2 text-sm text-stone-300/90">
            <div class="flex items-center justify-between">
              <span>Warm-Up Groove</span>
              <span class="text-amber-300">03:24</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Palermo Lights</span>
              <span class="text-amber-300">04:12</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Aftercut Drift</span>
              <span class="text-amber-300">05:01</span>
            </div>
          </div>
          <div class="h-1.5 rounded-full bg-stone-800 overflow-hidden">
            <div class="w-2/3 h-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 animate-pulse" />
          </div>
          <p class="text-xs text-stone-400">Sets rotate weekly. Ask Guy for the playlist link.</p>
        </div>
      </div>
    </div>
  </section>
</template>
