export const site = {
  name: "Chile en México",
  tagline: "Comunidad chilena y empresas con presencia en México.",
  description:
    "Chile en México reúne a la comunidad chilena y un directorio de empresas chilenas con presencia en México.",
  locale: "es-MX",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chileenmexico.example",
  rinconDeChile: {
    name: "Un Rincón de Chile",
    href: "http://www.unrincondechile.com.mx/index.html",
  },
} as const;

export const nav = [
  { href: "#comunidad", label: "Comunidad" },
  { href: "#empresas", label: "Empresas" },
  { href: "#noticias", label: "Noticias" },
] as const;
