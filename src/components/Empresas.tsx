import { empresas } from "@/data/empresas";

export function Empresas() {
  return (
    <section
      id="empresas"
      className="border-t border-line px-6"
      aria-labelledby="empresas-title"
    >
      <div className="mx-auto max-w-5xl py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-mexico-green">
            Empresas
          </p>
          <h2
            id="empresas-title"
            className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl"
          >
            Empresas chilenas en México.
          </h2>
          <p className="mt-6 text-base leading-8 text-ink-soft">
            Un directorio de compañías chilenas con presencia en México. El
            listado se irá completando.
          </p>
        </div>

        {empresas.length === 0 ? (
          <p className="mt-12 text-sm text-ink-soft">
            El directorio se está armando. Vuelve pronto.
          </p>
        ) : (
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {empresas.map((empresa) => (
              <li key={empresa.id}>
                <article className="flex h-full flex-col border border-line bg-paper px-5 py-6">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                    {empresa.sector}
                  </p>
                  <h3 className="mt-3 font-display text-xl tracking-tight text-ink">
                    {empresa.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{empresa.city}</p>
                  <div className="mt-6 flex flex-col gap-2 text-sm">
                    {empresa.website ? (
                      <a
                        href={empresa.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-chile-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-blue"
                      >
                        Sitio web
                      </a>
                    ) : null}
                    {empresa.contact ? (
                      <a
                        href={
                          empresa.contact.includes("@")
                            ? `mailto:${empresa.contact}`
                            : empresa.contact
                        }
                        className="text-ink-soft underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
                      >
                        {empresa.contact}
                      </a>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
