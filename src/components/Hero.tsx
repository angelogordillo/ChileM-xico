import { featuredEvent } from "@/data/events";
import { site } from "@/data/site";
import { ArrowIcon, PinIcon, SunMountains } from "./Icons";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 grain opacity-[0.07]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-clay/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-wine/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="reveal">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-wine">
            Comunidad chilena en México
          </p>
          <h1
            id="hero-title"
            className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Chile en{" "}
            <em className="font-display italic text-wine">México</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft sm:text-xl">
            {site.tagline} Asados, onces, Fiestas Patrias y una red para
            llegar, quedarse y pertenecer — de Arica a Magallanes, ahora en el
            Valle de México.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#eventos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-wine px-6 text-sm font-semibold text-foam transition-colors hover:bg-wine-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Ver próximo evento
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#unirse"
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink/12 bg-foam px-6 text-sm font-semibold text-ink transition-colors hover:border-ink/25 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Unirse a la comunidad
            </a>
          </div>
        </div>

        <div className="reveal-delay">
          <div className="overflow-hidden rounded-[2rem] border border-ink/8 bg-foam shadow-[0_24px_60px_-32px_rgb(28_22_20/0.35)]">
            <SunMountains className="h-auto w-full" />
            <div className="space-y-4 p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Próximo encuentro
                </p>
                <span className="rounded-full bg-linen px-3 py-1 text-xs font-semibold text-ink">
                  {featuredEvent.category}
                </span>
              </div>
              <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                {featuredEvent.title}
              </h2>
              <p className="text-sm leading-6 text-ink-soft">
                {featuredEvent.dateLabel} · {featuredEvent.time} hrs
              </p>
              <p className="flex items-start gap-2 text-sm text-ink-soft">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                <span>
                  {featuredEvent.venue}, {featuredEvent.city}
                </span>
              </p>
              <a
                href="#eventos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-wine hover:text-wine-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
              >
                Ver todos los eventos
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
