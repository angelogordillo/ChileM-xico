export type Noticia = {
  id: string;
  title: string;
  date: string;
  summary: string;
  source?: string;
  url?: string;
};

/**
 * Notas de comunidad. Reemplaza estos textos de ejemplo por noticias reales.
 * Si hay url, se muestra como enlace externo; si no, solo el resumen.
 */
export const noticias: Noticia[] = [
  {
    id: "fiestas-patrias-cdmx",
    title: "Fiestas Patrias: la comunidad se junta en la CDMX",
    date: "2026-09-18",
    summary:
      "Un 18 para encontrarnos: empanadas, cueca y mesa larga. Fecha y lugar se confirman en esta sección cuando estén listos.",
    source: "Chile en México",
  },
  {
    id: "directorio-empresas",
    title: "El directorio de empresas chilenas sigue creciendo",
    date: "2026-08-20",
    summary:
      "Más compañías con presencia en México aparecen en Empresas. El listado se actualiza de a poco, con datos públicos.",
    source: "Chile en México",
  },
  {
    id: "rincon-de-chile",
    title: "Un Rincón de Chile, mesa de siempre en la ciudad",
    date: "2026-07-08",
    summary:
      "El restaurante sigue siendo un punto de encuentro para extrañar menos la casa. El enlace está en Comunidad.",
    source: "Chile en México",
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
