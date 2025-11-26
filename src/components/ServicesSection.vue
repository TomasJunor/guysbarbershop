<template>
  <section id="services" class="max-w-6xl mx-auto px-4">
    <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-amber-300">The Menu</p>
        <h3 class="text-3xl md:text-4xl font-bold mt-2">Fresh cuts, clean beards, smooth finishes.</h3>
      </div>
      <a href="https://maps.google.com/?q=Guy's+Barber+Shop+Argentina" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-sm text-amber-200 hover:text-amber-100">
        View location
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6 shadow-lg shadow-amber-500/15">
        <div class="flex items-start justify-between">
          <h4 class="text-xl font-semibold">Classic Cut</h4>
          <span class="text-amber-300 font-semibold">$18</span>
        </div>
        <p class="text-stone-300/80 mt-3">Tailored scissor or clipper cut, hot towel, and styling finish with our go-to matte clay.</p>
        <div class="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300">
          <span class="h-2 w-2 rounded-full bg-emerald-400" /> 40–45 minutes
        </div>
      </div>

      <div class="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-stone-900 to-stone-950 p-6 shadow-xl shadow-amber-500/25">
        <div class="flex items-start justify-between">
          <div>
            <h4 class="text-xl font-semibold">Fade + Beard Detail</h4>
            <p class="text-amber-300 text-sm">Most booked</p>
          </div>
          <span class="text-amber-300 font-semibold">$24</span>
        </div>
        <p class="text-stone-300/80 mt-3">Skin fade or taper, beard sculpting with hot towel, and cooling balm. Balanced to keep the beardline crisp.</p>
        <div class="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300">
          <span class="h-2 w-2 rounded-full bg-emerald-400" /> 55–60 minutes
        </div>
      </div>

      <div class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6 shadow-lg shadow-amber-500/15">
        <div class="flex items-start justify-between">
          <h4 class="text-xl font-semibold">Buzz & Refresh</h4>
          <span class="text-amber-300 font-semibold">$12</span>
        </div>
        <p class="text-stone-300/80 mt-3">Even clipper buzz, neck clean-up, and a quick style tune-up. Perfect between full appointments.</p>
        <div class="mt-4 inline-flex items-center gap-2 text-xs text-emerald-300">
          <span class="h-2 w-2 rounded-full bg-emerald-400" /> 25–30 minutes
        </div>
      </div>
    </div>

    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6">
        <div class="flex items-center gap-3 text-amber-100">
          <svg class="h-6 w-6 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 5h18M6 12h12M10 19h4" />
          </svg>
          <h5 class="text-lg font-semibold">Add-ons & ritual</h5>
        </div>
        <p class="text-stone-300/80 mt-3">Hot towel shaves, black mask, and styling lessons. Tell us what you need and we’ll stack the service.</p>
      </div>
      <div class="rounded-2xl border border-amber-500/20 bg-stone-900/70 p-6">
        <div class="flex items-center gap-3 text-amber-100">
          <svg class="h-6 w-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 3v4c0 7 5 9 7 9s7-2 7-9V3" />
            <path d="M3 21h18" />
          </svg>
          <h5 class="text-lg font-semibold">Group sessions</h5>
        </div>
        <p class="text-stone-300/80 mt-3">Need back-to-back slots for a crew? We’ll line you up while the playlist keeps the mood steady.</p>
      </div>
    </div>
  </section>
</template>
