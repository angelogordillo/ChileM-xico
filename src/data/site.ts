/** Placeholders de contacto: reemplázalos por datos reales antes del lanzamiento. */
export const site = {
  name: "Chile en México",
  tagline: "Comunidad, encuentros y un pedacito de casa.",
  description:
    "Comunidad chilena en México: asados, onces, Fiestas Patrias y una red para llegar, quedarse y pertenecer.",
  locale: "es-MX",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chileenmexico.example",
  email: "hola@chileenmexico.example",
  whatsappHref: "https://wa.me/000000000000",
  social: {
    instagram: {
      label: "@chileenmexico",
      href: "https://instagram.example/chileenmexico",
    },
    facebook: {
      label: "Chile en México",
      href: "https://facebook.example/chileenmexico",
    },
  },
} as const;

export const nav = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#unirse", label: "Unirse" },
] as const;
