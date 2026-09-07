import { events } from "@/data/events";
import { ClockIcon, PinIcon } from "./Icons";

const categoryTone: Record<string, string> = {
  Bienvenida: "bg-clay/12 text-clay",
  Tradición: "bg-wine/10 text-wine",
  Encuentro: "bg-navy/10 text-navy",
  "Aire libre": "bg-forest/10 text-forest",
};

export function Events() {
  return (
    <section
      id="eventos"
      className="border-t border-ink/8"
      aria-labelledby="events-title"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-wine">
            Eventos
          </p>
          <h2
            id="events-title"
            className="font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            Encuentros para verse, comer y pertenecer.
          </h2>
          <p className="mt-5 text-base leading-8 text-ink-soft sm:text-lg">
            Esta es una muestra de la programación. Las fechas y lugares se
            confirman en el grupo; si quieres proponer un encuentro en tu
            ciudad, escríbenos.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {events.map((event) => (
            <li key={event.id}>
              <article className="card-lift flex h-full flex-col rounded-[1.7rem] border border-ink/8 bg-foam p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-navy">
                      {event.dateLabel}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-ink-soft">
                      <ClockIcon className="h-4 w-4" />
                      {event.time} hrs
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryTone[event.category] ?? "bg-linen text-ink"}`}
                  >
                    {event.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {event.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">
                  {event.summary}
                </p>
                <p className="mt-5 flex items-start gap-2 text-sm font-medium text-ink">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <span>
                    {event.venue} · {event.city}
                  </span>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
