export type EventCategory = "Bienvenida" | "Tradición" | "Encuentro" | "Aire libre";

export type CommunityEvent = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  time: string;
  city: string;
  venue: string;
  category: EventCategory;
  summary: string;
  featured?: boolean;
};

/**
 * Contenido de ejemplo. Reemplaza este arreglo con eventos reales
 * (o conéctalo a un CMS / hoja de cálculo cuando exista).
 */
export const events: CommunityEvent[] = [
  {
    id: "fiestas-patrias-2026",
    title: "Fiestas Patrias en el Parque",
    date: "2026-09-18",
    dateLabel: "18 de septiembre",
    time: "13:00",
    city: "CDMX",
    venue: "Parque Lincoln, Polanco",
    category: "Tradición",
    summary:
      "Empanadas, cueca, fonda y un 18 de verdad — lejos de casa, pero entre los nuestros.",
    featured: true,
  },
  {
    id: "asado-bienvenida",
    title: "Asado de bienvenida",
    date: "2026-09-27",
    dateLabel: "27 de septiembre",
    time: "14:00",
    city: "CDMX",
    venue: "Parque México, Condesa",
    category: "Bienvenida",
    summary:
      "Choripán, ensalada chilena y caras nuevas. Ideal si acabas de aterrizar o quieres volver a saludar.",
  },
  {
    id: "once-coyoacan",
    title: "Once chilena en Coyoacán",
    date: "2026-10-04",
    dateLabel: "4 de octubre",
    time: "17:30",
    city: "CDMX",
    venue: "Jardín Centenario",
    category: "Encuentro",
    summary:
      "Té, hallullas, palta y conversación larga. Trae algo para compartir si puedes; si no, igual hay mesa.",
  },
  {
    id: "caminata-chapultepec",
    title: "Caminata dominical",
    date: "2026-10-11",
    dateLabel: "11 de octubre",
    time: "09:30",
    city: "CDMX",
    venue: "Bosque de Chapultepec",
    category: "Aire libre",
    summary:
      "Caminamos suave, platicamos y cerramos con café. Todas las edades; el ritmo lo pone el grupo.",
  },
];

export const featuredEvent =
  events.find((event) => event.featured) ?? events[0];
