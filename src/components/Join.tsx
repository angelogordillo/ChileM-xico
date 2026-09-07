import { site } from "@/data/site";
import { MailIcon, WhatsAppIcon } from "./Icons";

export function Join() {
  return (
    <section
      id="unirse"
      className="border-t border-ink/8 bg-cream"
      aria-labelledby="join-title"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
            Unirse / Contacto
          </p>
          <h2
            id="join-title"
            className="font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            La puerta está abierta.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink-soft sm:text-lg">
            Escríbenos y te pasamos el grupo, el próximo encuentro y lo que
            necesites para llegar sin vueltas. Da igual si vienes por un rato
            o para quedarte: hay mesa.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group rounded-[1.8rem] border border-ink/8 bg-foam p-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine sm:p-8"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/12 text-forest">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl tracking-tight text-ink">
              WhatsApp
            </h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              El camino más rápido para unirte al grupo y preguntar por el
              próximo asado.
            </p>
            <p className="mt-6 text-sm font-semibold text-forest group-hover:underline">
              Escribir por WhatsApp
            </p>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="card-lift group rounded-[1.8rem] border border-ink/8 bg-foam p-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine sm:p-8"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-wine/10 text-wine">
              <MailIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-3xl tracking-tight text-ink">
              Correo
            </h3>
            <p className="mt-3 text-base leading-7 text-ink-soft">
              Para presentarte, proponer un evento o pedir información con
              calma.
            </p>
            <p className="mt-6 text-sm font-semibold text-wine group-hover:underline">
              {site.email}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
