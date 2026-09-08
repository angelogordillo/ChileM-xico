export type Noticia = {
  id: string;
  title: string;
  date: string;
  dateLabel?: string;
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
      "Los Lagos fortalece su presencia acuícola en México con el “Encuentro Gastronómico Austral”",
    date: "2026-09",
    dateLabel: "septiembre 2026",
    summary:
      "ProChile impulsó en Ciudad de México el Encuentro Gastronómico Austral con empresas de Los Lagos (salmón, mejillones y otros productos del mar) ante importadores, hotelería y gastronomía.",
    source: "Portal Innova",
    url: "https://portalinnova.cl/los-lagos-fortalece-su-presencia-acuicola-en-mexico-con-el-encuentro-gastronomico-austral/",
  },
];

export function formatNoticiaDate(isoDate: string, dateLabel?: string): string {
  if (dateLabel) return dateLabel;

  const parts = isoDate.split("-").map(Number);
  const [year, month, day] = parts;
  const options: Intl.DateTimeFormatOptions =
    parts.length >= 3
      ? { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
      : { month: "long", year: "numeric", timeZone: "UTC" };

  return new Intl.DateTimeFormat("es-MX", options).format(
    new Date(Date.UTC(year, month - 1, day ?? 1)),
  );
}
