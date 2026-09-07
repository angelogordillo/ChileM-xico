# Chile en México

Sitio de la comunidad chilena en México: eventos, encuentro y vida en común.

Landing page en español (es-MX), hecha con Next.js (App Router), TypeScript y Tailwind CSS.

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior

## Cómo correrlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # ESLint
```

## Cómo actualizar el contenido

El texto y los datos de ejemplo viven en archivos fáciles de editar:

| Archivo | Qué cambia |
| --- | --- |
| `src/data/site.ts` | Nombre, tagline, correo, WhatsApp y redes |
| `src/data/events.ts` | Tarjetas de eventos próximos |

Reemplaza los placeholders antes de un lanzamiento público:

- Correo: `hola@chileenmexico.example`
- WhatsApp: `https://wa.me/000000000000`
- Instagram / Facebook: URLs de ejemplo en `site.social`

Opcional: define la URL canónica del sitio.

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## Despliegue

El proyecto es una app Next.js estándar.

1. Sube el repositorio a GitHub.
2. Impórtalo en [Vercel](https://vercel.com) (o Netlify, Cloudflare Pages u otro host compatible con Next.js).
3. Framework preset: **Next.js**. Comando de build: `npm run build`.
4. Configura `NEXT_PUBLIC_SITE_URL` con el dominio final.
5. Actualiza correo, WhatsApp y redes en `src/data/site.ts`.

## Estructura

```
src/
  app/          # layout, página única, SEO
  components/   # secciones de la landing
  data/         # contenido editable
```

La navegación usa anclas (`#eventos`, `#unirse`, etc.) con desplazamiento suave.
