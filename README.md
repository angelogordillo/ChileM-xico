# Chile en México

Sitio mínimo de la comunidad chilena en México: comunidad y empresas.

Hecho con Next.js (App Router), TypeScript y Tailwind CSS. Idioma: español (es-MX).

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

| Archivo | Qué cambia |
| --- | --- |
| `src/data/site.ts` | Nombre, tagline, correo y WhatsApp |
| `src/data/empresas.ts` | Directorio de empresas (nombre, sector, presencia, ciudad, sitio, correo, teléfono) |

El directorio es un listado inicial de 35 empresas. Si `email` o `phone` valen exactamente `no público`, no se muestran en la interfaz.

Opcional: define la URL canónica del sitio.

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## Despliegue

1. Sube el repositorio a GitHub.
2. Impórtalo en [Vercel](https://vercel.com) (u otro host compatible con Next.js).
3. Framework preset: **Next.js**. Build: `npm run build`.
4. Configura `NEXT_PUBLIC_SITE_URL` y actualiza los placeholders en `src/data/site.ts`.
