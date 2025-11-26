import { reactive, computed } from 'vue';

const copy = {
  es: {
    common: {
      bookingMessage: "Hola Guy! Me gustaria reservar un turno en la barberia. Me contas que horarios tenes disponibles?"
    },
    header: {
      eyebrow: "Guy's Barber Shop",
      title: "Cortes, fades y beats",
      nav: [
        { label: "Experiencia", href: "#features" },
        { label: "Servicios", href: "#services" },
        { label: "Comunidad", href: "#testimonials" },
        { label: "Visitanos", href: "#contact" }
      ],
      ctaLabel: "Reservar turno"
    },
    hero: {
      badge: "Palermo - Desde 2016 - Noches de soft techno",
      title: "Donde los fades afilados se mezclan con grooves suaves.",
      description: "Guy's Barber Shop mezcla cortes artesanales, charlas calidas y una sesion con toques de DJ curada por el propio Guy. Entra a un estudio acogedor en Palermo con madera vintage, lineas modernas y una banda sonora que nunca invade tu vibra.",
      primaryCta: "Reserva tu proximo fade",
      secondaryCta: "Ver el menu",
      bullets: [
        "Aceptamos clientes sin turno",
        "Cafe de especialidad y rincon de vinilos",
        "Playlists suaves seleccionadas por Guy"
      ],
      card: {
        eyebrow: "Dentro de la barberia",
        description: "Madera calida, lineas limpias y un pulso tranquilo para mantener las tijeras en ritmo.",
        location: "Palermo, Buenos Aires"
      }
    },
    features: {
      badge: "La experiencia",
      title: "Mas que un corte, es un reset",
      meta: "Playlists de soft techno curadas cada semana",
      cards: [
        {
          title: "Fades de autor",
          copy: "Consultas personalizadas, lineas precisas y terminaciones que duran. Mezclamos tecnica clasica con estilo moderno para que salgas listo para la camara."
        },
        {
          title: "Espacio con banda sonora",
          copy: "Guy mezcla sets de soft techno y electronica melodica que se mantienen de fondo: relajan sin tapar la charla."
        },
        {
          title: "Hospitalidad primero",
          copy: "Espresso o cold brew al llegar, tips de producto antes de irte y una silla que se siente como si un amigo te la hubiera guardado."
        }
      ]
    },
    services: {
      badge: "El menu",
      title: "Cortes frescos, barbas limpias, terminaciones suaves.",
      viewLocation: "Ver ubicacion",
      cards: [
        {
          name: "Corte clasico",
          price: "$18",
          description: "Corte a tijera o maquina, toalla caliente y peinado final con nuestra arcilla mate preferida.",
          duration: "40-45 minutos"
        },
        {
          name: "Fade + barba",
          badge: "Mas reservado",
          price: "$24",
          description: "Skin fade o taper, esculpido de barba con toalla caliente y balsamo refrescante. Equilibrado para mantener la linea impecable.",
          duration: "55-60 minutos"
        },
        {
          name: "Buzz y refresh",
          price: "$12",
          description: "Buzz uniforme, limpieza de cuello y ajuste rapido de estilo. Ideal entre turnos completos.",
          duration: "25-30 minutos"
        }
      ],
      extras: [
        {
          title: "Adicionales y ritual",
          copy: "Afeitado con toalla caliente, mascarilla negra y lecciones de peinado. Contanos que necesitas y armamos el servicio."
        },
        {
          title: "Sesiones en grupo",
          copy: "Necesitas turnos seguidos para el team? Te alineamos mientras la playlist mantiene el clima."
        }
      ]
    },
    testimonials: {
      badge: "Notas de la comunidad",
      title: "Lo que aman los clientes habituales.",
      rating: "4.9/5 en Google - gracias al barrio.",
      cards: [
        {
          name: "Lucas P.",
          quote: "La musica esta en el punto justo y Guy siempre recuerda como me gusta el fade.",
          note: "Viene cada semana"
        },
        {
          name: "Camila R.",
          quote: "Calido, respetuoso y preciso con las tijeras. Traigo a mi hermano porque el ambiente es inclusivo.",
          note: "Llega con su crew"
        },
        {
          name: "Diego S.",
          quote: "Cafe, charla y una barba alineada que dura. La playlist es tan chill que puedo atender llamadas.",
          note: "Trabaja remoto"
        }
      ]
    },
    cta: {
      badge: "Visitanos",
      title: "Reserva una silla o cae sin turno; la musica ya suena.",
      description: "Escribinos por Instagram, mandanos un WhatsApp o simplemente pasa. Estamos a metros del subte en Guemes, rodeados de cafes y galerias de Palermo.",
      chips: ["Lun-Vie - 09:00-20:00", "Beruti 3776, Palermo"],
      mapCta: "Abrir en Maps",
      whatsappCta: "Escribinos por WhatsApp",
      playlist: {
        eyebrow: "Sonando ahora",
        title: "Soft Techno Session",
        tracks: [
          { name: "Warm-Up Groove", duration: "03:24" },
          { name: "Palermo Lights", duration: "04:12" },
          { name: "Aftercut Drift", duration: "05:01" }
        ],
        caption: "Los sets cambian cada semana. Pedile a Guy el link de la playlist."
      }
    },
    footer: {
      brand: "Guy's Barber Shop - Palermo",
      links: {
        maps: "Maps",
        services: "Servicios",
        contact: "Contacto"
      },
      caption: "Buenos cortes, buena musica, buena gente."
    }
  },
  en: {
    common: {
      bookingMessage: "Hi Guy! I'd like to book a seat at the barbershop. Let me know which times you have available."
    },
    header: {
      eyebrow: "Guy's Barber Shop",
      title: "Cuts, fades and beats",
      nav: [
        { label: "Experience", href: "#features" },
        { label: "Services", href: "#services" },
        { label: "Community", href: "#testimonials" },
        { label: "Visit", href: "#contact" }
      ],
      ctaLabel: "Book a seat"
    },
    hero: {
      badge: "Palermo - Since 2016 - Soft techno nights",
      title: "Where sharp fades meet a smooth electronic groove.",
      description: "Guy's Barber Shop blends artisan cuts, warm conversation and a subtle DJ set curated by Guy himself. Step into a cozy Palermo studio with vintage wood, modern lines and a soundtrack that never overpowers your vibe.",
      primaryCta: "Book your next fade",
      secondaryCta: "See the menu",
      bullets: [
        "Walk-ins welcome",
        "Specialty coffee and vinyl corner",
        "Soft techno playlists by Guy"
      ],
      card: {
        eyebrow: "Inside Guy's",
        description: "Warm timber, clean lines and a calm beat to keep the scissors on rhythm.",
        location: "Palermo, Buenos Aires"
      }
    },
    features: {
      badge: "The experience",
      title: "More than a haircut; it's a reset.",
      meta: "Soft techno playlists curated weekly",
      cards: [
        {
          title: "Signature fades",
          copy: "Tailored consultations, razor lines and finishes that last. We mix classic technique with modern styling so you walk out camera ready."
        },
        {
          title: "Soundtracked space",
          copy: "Guy spins soft techno and melodic electronic sets that stay in the background: enough to relax you, never too loud to chat."
        },
        {
          title: "Hospitality first",
          copy: "Espresso or cold brew when you arrive, product tips before you leave and a seat that feels like a friend saved it for you."
        }
      ]
    },
    services: {
      badge: "The menu",
      title: "Fresh cuts, clean beards, smooth finishes.",
      viewLocation: "View location",
      cards: [
        {
          name: "Classic cut",
          price: "$18",
          description: "Tailored scissor or clipper cut, hot towel and styling finish with our go-to matte clay.",
          duration: "40-45 minutes"
        },
        {
          name: "Fade + beard detail",
          badge: "Most booked",
          price: "$24",
          description: "Skin fade or taper, beard sculpting with hot towel and cooling balm. Balanced to keep the beard line crisp.",
          duration: "55-60 minutes"
        },
        {
          name: "Buzz and refresh",
          price: "$12",
          description: "Even clipper buzz, neck clean-up and a quick style tune-up. Perfect between full appointments.",
          duration: "25-30 minutes"
        }
      ],
      extras: [
        {
          title: "Add-ons and ritual",
          copy: "Hot towel shaves, black mask and styling lessons. Tell us what you need and we'll stack the service."
        },
        {
          title: "Group sessions",
          copy: "Need back-to-back slots for the crew? We'll line you up while the playlist keeps the mood steady."
        }
      ]
    },
    testimonials: {
      badge: "Community notes",
      title: "What regulars love about Guy's.",
      rating: "4.9/5 on Google - thanks to the neighborhood.",
      cards: [
        {
          name: "Lucas P.",
          quote: "The music is on point and Guy remembers how I like my fade every time.",
          note: "Weekly visitor"
        },
        {
          name: "Camila R.",
          quote: "Warm, respectful and sharp with scissors. I bring my brother because the vibe is inclusive and relaxed.",
          note: "Brings the crew"
        },
        {
          name: "Diego S.",
          quote: "You get coffee, conversation and a beard lineup that lasts. The playlist stays chill enough to take a call.",
          note: "Remote worker"
        }
      ]
    },
    cta: {
      badge: "Visit us",
      title: "Reserve a seat or walk in; the music is already playing.",
      description: "DM us on Instagram, send a WhatsApp or drop by. We're a short walk from the metro at Guemes, nestled among Palermo's cafes and galleries.",
      chips: ["Mon-Fri - 09:00-20:00", "Beruti 3776, Palermo"],
      mapCta: "Open in Maps",
      whatsappCta: "WhatsApp us",
      playlist: {
        eyebrow: "Now playing",
        title: "Soft Techno Session",
        tracks: [
          { name: "Warm-Up Groove", duration: "03:24" },
          { name: "Palermo Lights", duration: "04:12" },
          { name: "Aftercut Drift", duration: "05:01" }
        ],
        caption: "Sets rotate weekly. Ask Guy for the playlist link."
      }
    },
    footer: {
      brand: "Guy's Barber Shop - Palermo",
      links: {
        maps: "Maps",
        services: "Services",
        contact: "Contact"
      },
      caption: "Good cuts, good music, good people."
    }
  }
};

const supportedLocales = Object.keys(copy);
const STORAGE_KEY = 'guys_locale';
const DEFAULT_LOCALE = 'es';

const state = reactive({
  locale: readPersistedLocale()
});

function readPersistedLocale() {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && supportedLocales.includes(stored)) {
      return stored;
    }
  } catch (error) {
    // Ignore storage errors and fall back to default locale.
  }

  return DEFAULT_LOCALE;
}

function persistLocale(value) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
    // Ignore storage errors during persistence.
  }
}

function resolveFromLocale(path, locale) {
  return path.split('.').reduce((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return acc[segment];
    }
    return undefined;
  }, copy[locale]);
}

function translate(path) {
  const currentLocale = state.locale;
  const localized = resolveFromLocale(path, currentLocale);

  if (localized !== undefined) {
    return localized;
  }

  const fallback = currentLocale !== 'es' ? resolveFromLocale(path, 'es') : undefined;
  return fallback !== undefined ? fallback : path;
}

export function useI18n() {
  const locale = computed(() => state.locale);

  return {
    t: translate,
    locale,
    setLocale
  };
}

export function setLocale(nextLocale) {
  if (supportedLocales.includes(nextLocale)) {
    state.locale = nextLocale;
    persistLocale(nextLocale);
  }
}
