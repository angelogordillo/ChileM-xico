import {
  empresas,
  firstEmail,
  isPublicContact,
  telHref,
} from "@/data/empresas";

function sameUrl(left: string, right: string) {
  return left.replace(/\/+$/, "") === right.replace(/\/+$/, "");
}

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
            Un directorio inicial de {empresas.length} empresas. ProChile cita
            cerca de 100 compañías chilenas con presencia en México; este
            listado no es exhaustivo.
          </p>
        </div>

        {empresas.length === 0 ? (
          <p className="mt-12 text-sm text-ink-soft">
            El directorio se está armando. Vuelve pronto.
          </p>
        ) : (
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {empresas.map((empresa) => {
              const showContactPage = !sameUrl(
                empresa.website,
                empresa.contactUrl,
              );

              return (
                <li key={empresa.id}>
                  <article className="flex h-full flex-col border border-line bg-paper px-5 py-6">
                    <h3 className="font-display text-xl tracking-tight text-ink">
                      {empresa.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">{empresa.cityMx}</p>
                    <p className="mt-4 text-sm leading-6 text-ink">
                      {empresa.sector}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink-soft">
                      {empresa.presence}
                    </p>
                    <div className="mt-6 flex flex-col gap-2 text-sm">
                      <a
                        href={empresa.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-chile-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-blue"
                      >
                        Sitio web
                      </a>
                      {showContactPage ? (
                        <a
                          href={empresa.contactUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-chile-blue underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-blue"
                        >
                          Contacto
                        </a>
                      ) : null}
                      {isPublicContact(empresa.email) ? (
                        <a
                          href={`mailto:${firstEmail(empresa.email)}`}
                          className="text-ink-soft underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
                        >
                          {empresa.email}
                        </a>
                      ) : null}
                      {isPublicContact(empresa.phone) ? (
                        <a
                          href={telHref(empresa.phone)}
                          className="text-ink-soft underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
                        >
                          {empresa.phone}
                        </a>
                      ) : null}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
