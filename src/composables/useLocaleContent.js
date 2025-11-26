import { computed } from 'vue';

const translations = {
  es: {
    header: {
      badge: "Barbería Guy's",
      title: 'Cortes • Fades • Beats',
      nav: {
        experience: 'Experiencia',
        services: 'Servicios',
        community: 'Comunidad',
        visit: 'Visítanos',
      },
      book: 'Reservar turno',
    },
    hero: {
      badge: 'Palermo • Desde 2016 • Noches de soft techno',
      title: 'Donde los fades perfectos se mezclan con un groove electrónico suave.',
      description:
        'Guy’s Barber Shop combina cortes artesanales, charla amena y un DJ set curado por Guy. Un estudio acogedor en Palermo con madera cálida, líneas modernas y un soundtrack que nunca invade la conversación.',
      book: 'Reserva tu próximo corte',
      seeMenu: 'Ver servicios',
      walkIns: 'Atendemos sin turno',
      coffee: 'Café de cortesía y rincón de vinilos',
      playlists: 'Playlists soft techno curadas por Guy',
      insideLabel: "Dentro de Guy's",
      insideDescription: 'Madera cálida, líneas limpias y un beat tranquilo para que las tijeras sigan el ritmo.',
      location: 'Palermo, Buenos Aires',
    },
    features: {
      badge: 'La experiencia',
      title: 'Más que un corte: es un reinicio.',
      vibe: 'Soft techno curado cada semana',
      items: [
        {
          title: 'Fades de autor',
          description:
            'Consultas personalizadas, líneas definidas y terminaciones que duran. Técnica clásica con estilo moderno para salir listo para la foto.',
        },
        {
          title: 'Espacio musicalizado',
          description:
            'Guy mezcla soft techno y electrónica melódica al fondo: relaja sin tapar la charla.',
        },
        {
          title: 'Hospitalidad ante todo',
          description:
            'Espresso o cold brew al llegar, tips de producto al salir y una silla que se siente reservada para vos.',
        },
      ],
    },
    services: {
      badge: 'La carta',
      title: 'Cortes frescos, barbas limpias, terminaciones suaves.',
      viewLocation: 'Ver ubicación',
      items: [
        {
          title: 'Corte clásico',
          price: '$18',
          description: 'Corte a tijera o máquina, toalla caliente y peinado final con arcilla mate.',
          timing: '40–45 minutos',
        },
        {
          title: 'Fade + barba',
          price: '$24',
          highlight: 'El más pedido',
          description: 'Skin fade o taper, perfilado de barba con toalla caliente y bálsamo fresco. Equilibrio para mantener la línea.',
          timing: '55–60 minutos',
        },
        {
          title: 'Buzz & refresh',
          price: '$12',
          description: 'Máquina pareja, limpieza de cuello y retoque rápido. Ideal entre turnos completos.',
          timing: '25–30 minutos',
        },
      ],
      addOns: {
        title: 'Extras y ritual',
        description: 'Afeitado con toalla caliente, black mask y mini clases de peinado. Contanos qué necesitas y armamos el combo.',
      },
      groups: {
        title: 'Turnos en grupo',
        description: '¿Necesitás turnos seguidos para el equipo? Los acomodamos mientras la playlist mantiene el mood.',
      },
    },
    testimonials: {
      badge: 'La comunidad dice',
      title: 'Lo que más disfrutan los habituales.',
      rating: '4.9 ★ en Google — gracias, barrio.',
      items: [
        {
          name: 'Lucas P.',
          role: 'Viene todas las semanas',
          quote:
            '“La música es perfecta: sets electrónicos tranquilos que hacen que el tiempo pase volando. Guy siempre recuerda cómo me gusta el fade.”',
        },
        {
          name: 'Camila R.',
          role: 'Trae a la banda',
          quote:
            '“Cálido, respetuoso y muy preciso con las tijeras. Traigo a mi hermano y amigos porque el ambiente es inclusivo y relajado.”',
        },
        {
          name: 'Diego S.',
          role: 'Trabaja remoto',
          quote:
            '“Te dan café, charla y una barba que dura. La playlist es lo suficientemente tranquila como para atender un llamado.”',
        },
      ],
    },
    cta: {
      badge: 'Visitanos',
      title: 'Reservá por WhatsApp o caé: la música ya está sonando.',
      description:
        'Escribinos por Instagram, mandá un WhatsApp o pasá directo. Estamos a pasos del subte en Güemes, entre cafés y galerías de Palermo.',
      hours: 'Mar–Sáb • 11:00–20:00',
      address: 'Costa Rica 4750, Palermo',
      openMaps: 'Abrir en Maps',
      whatsapp: 'Chatear por WhatsApp',
      nowPlaying: 'Ahora suena',
      playlistTitle: 'Soft Techno Session',
      tracks: [
        { name: 'Warm-Up Groove', duration: '03:24' },
        { name: 'Palermo Lights', duration: '04:12' },
        { name: 'Aftercut Drift', duration: '05:01' },
      ],
      playlistNote: 'Las sesiones rotan cada semana. Pedile a Guy el link.',
    },
    footer: {
      title: "Guy's Barber Shop • Palermo",
      maps: 'Maps',
      services: 'Servicios',
      contact: 'Contacto',
      tagline: 'Buenos cortes, buena música, buena gente.',
    },
  },
  en: {
    header: {
      badge: "Guy's Barber Shop",
      title: 'Cuts • Fades • Beats',
      nav: {
        experience: 'Experience',
        services: 'Services',
        community: 'Community',
        visit: 'Visit',
      },
      book: 'Book a seat',
    },
    hero: {
      badge: 'Palermo • Since 2016 • Soft Techno Nights',
      title: 'Where sharp fades meet a smooth electronic groove.',
      description:
        'Guy’s Barber Shop blends artisan cuts, warm conversation, and a subtle DJ set curated by Guy. Step into a cozy Palermo studio with vintage wood, modern lines, and a soundtrack that never overpowers your vibe.',
      book: 'Book your next fade',
      seeMenu: 'See the menu',
      walkIns: 'Walk-ins welcome',
      coffee: 'Specialty coffee & vinyl corner',
      playlists: 'Soft techno playlists by Guy',
      insideLabel: "Inside Guy's",
      insideDescription: 'Warm timber, clean lines, and a calm beat to keep the scissors on rhythm.',
      location: 'Palermo, Buenos Aires',
    },
    features: {
      badge: 'The Experience',
      title: 'More than a haircut — it’s a reset.',
      vibe: 'Soft techno playlists curated weekly',
      items: [
        {
          title: 'Signature Fades',
          description:
            'Tailored consultations, razor-sharp lines, and finishes that last. We mix classic technique with modern styling so you walk out camera-ready.',
        },
        {
          title: 'Soundtracked Space',
          description:
            'Guy spins soft techno and melodic electronic sets that stay in the background — enough to relax you, never too loud to chat.',
        },
        {
          title: 'Hospitality First',
          description:
            'Espresso or cold brew when you arrive, product tips before you leave, and a seat that feels like a friend saved it for you.',
        },
      ],
    },
    services: {
      badge: 'The Menu',
      title: 'Fresh cuts, clean beards, smooth finishes.',
      viewLocation: 'View location',
      items: [
        {
          title: 'Classic Cut',
          price: '$18',
          description: 'Tailored scissor or clipper cut, hot towel, and styling finish with our go-to matte clay.',
          timing: '40–45 minutes',
        },
        {
          title: 'Fade + Beard Detail',
          price: '$24',
          highlight: 'Most booked',
          description:
            'Skin fade or taper, beard sculpting with hot towel, and cooling balm. Balanced to keep the beardline crisp.',
          timing: '55–60 minutes',
        },
        {
          title: 'Buzz & Refresh',
          price: '$12',
          description: 'Even clipper buzz, neck clean-up, and a quick style tune-up. Perfect between full appointments.',
          timing: '25–30 minutes',
        },
      ],
      addOns: {
        title: 'Add-ons & ritual',
        description: 'Hot towel shaves, black mask, and styling lessons. Tell us what you need and we’ll stack the service.',
      },
      groups: {
        title: 'Group sessions',
        description: 'Need back-to-back slots for a crew? We’ll line you up while the playlist keeps the mood steady.',
      },
    },
    testimonials: {
      badge: 'Community Notes',
      title: "What regulars love about Guy's.",
      rating: '4.9 ★ on Google — thanks to the neighborhood.',
      items: [
        {
          name: 'Lucas P.',
          role: 'Weekly visitor',
          quote:
            '“The music is on point — chill electronic sets that make the time fly. Guy remembers how I like my fade every time.”',
        },
        {
          name: 'Camila R.',
          role: 'Brings the crew',
          quote:
            '“Warm, respectful, and sharp with scissors. I bring my brother and friends because the vibe is inclusive and relaxed.”',
        },
        {
          name: 'Diego S.',
          role: 'Remote worker',
          quote:
            '“You get coffee, conversation, and a beard lineup that lasts. The playlist is chill enough to take a call if you need to.”',
        },
      ],
    },
    cta: {
      badge: 'Visit Us',
      title: 'Reserve a seat or walk in — the music’s already playing.',
      description:
        'DM us on Instagram, send a WhatsApp, or drop by. We’re a short walk from the metro at Güemes, nestled among Palermo’s cafés and galleries.',
      hours: 'Tue–Sat • 11:00–20:00',
      address: 'Costa Rica 4750, Palermo',
      openMaps: 'Open in Maps',
      whatsapp: 'WhatsApp us',
      nowPlaying: 'Now Playing',
      playlistTitle: 'Soft Techno Session',
      tracks: [
        { name: 'Warm-Up Groove', duration: '03:24' },
        { name: 'Palermo Lights', duration: '04:12' },
        { name: 'Aftercut Drift', duration: '05:01' },
      ],
      playlistNote: 'Sets rotate weekly. Ask Guy for the playlist link.',
    },
    footer: {
      title: "Guy's Barber Shop • Palermo",
      maps: 'Maps',
      services: 'Services',
      contact: 'Contact',
      tagline: 'Good cuts, good music, good people.',
    },
  },
};

const detectLocale = () => {
  if (typeof navigator === 'undefined') return 'es';
  const languages = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  const match = languages.find((lang) => lang && lang.toLowerCase().startsWith('es'));
  if (match) return 'es';
  const englishMatch = languages.find((lang) => lang && lang.toLowerCase().startsWith('en'));
  if (englishMatch) return 'en';
  return 'es';
};

export function useLocaleContent() {
  const locale = computed(() => detectLocale());
  const copy = computed(() => translations[locale.value] || translations.es);

  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
  const whatsappLink = computed(() => (whatsappNumber ? `https://wa.me/${whatsappNumber}` : null));

  return {
    locale,
    copy,
    whatsappLink,
  };
}
