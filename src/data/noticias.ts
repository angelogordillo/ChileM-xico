export type Noticia = {
  id: string;
  title: string;
  date: string;
  summary: string;
  source?: string;
  url?: string;
};

/**
 * Notas de comunidad y Chile–México.
 * Si hay url, se muestra como enlace externo.
 */
export const noticias: Noticia[] = [
  {
    id: "encuentro-gastronomico-austral-mexico",
    title:
      "Los Lagos fortalece su presencia acuícola en México con el Encuentro Gastronómico Austral",
    date: "2026-09-07",
    summary:
      "ProChile reunió en Ciudad de México a exportadores de Los Lagos —salmón, mejillón, jibia, merluza y caviar— con importadores, hoteles y restaurantes, para abrir más espacio a los productos del mar chilenos en la gastronomía mexicana.",
    source: "Portal Innova",
    url: "https://portalinnova.cl/los-lagos-fortalece-su-presencia-acuicola-en-mexico-con-el-encuentro-gastronomico-austral/",
  },
];

export function formatNoticiaDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
