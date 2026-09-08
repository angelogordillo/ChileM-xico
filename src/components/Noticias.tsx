import { formatNoticiaDate, noticias } from "@/data/noticias";

export function Noticias() {
  return (
    <section
      id="noticias"
      className="border-t border-line px-6"
      aria-labelledby="noticias-title"
    >
      <div className="mx-auto max-w-5xl py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-chile-blue">
            Noticias
          </p>
          <h2
            id="noticias-title"
            className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Lo que se mueve en la comunidad.
          </h2>
        </div>

        {noticias.length === 0 ? (
          <p className="mt-12 text-sm text-ink-soft">
            Pronto publicaremos notas por aquí.
          </p>
        ) : (
          <ul className="mt-14 divide-y divide-line border-y border-line">
            {noticias.map((noticia) => (
              <li key={noticia.id}>
                <article className="py-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                    <time dateTime={noticia.date}>
                      {formatNoticiaDate(noticia.date)}
                    </time>
                    {noticia.source ? ` · ${noticia.source}` : null}
                  </p>
                  <h3 className="mt-3 font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {noticia.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
                    {noticia.summary}
                  </p>
                  {noticia.url ? (
                    <a
                      href={noticia.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm text-chile-red underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
                    >
                      Leer más
                      <span className="sr-only">: {noticia.title}</span>
                    </a>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
