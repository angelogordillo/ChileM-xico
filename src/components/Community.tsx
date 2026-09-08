import { site } from "@/data/site";

export function Community() {
  return (
    <section
      id="comunidad"
      className="border-t border-line px-6"
      aria-labelledby="comunidad-title"
    >
      <div className="mx-auto max-w-2xl py-20 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-chile-red">
          Comunidad
        </p>
        <h2
          id="comunidad-title"
          className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl"
        >
          Un lugar para encontrarnos.
        </h2>
        <p className="mt-6 text-base leading-8 text-ink-soft">
          Chile en México es una comunidad abierta para quienes viven acá, para
          quienes acaban de llegar y para quien se siente cerca de ambas
          culturas. Nos escribimos, nos recomendamos y nos juntamos cuando hay
          ganas de mesa compartida.
        </p>
        <div className="mt-10">
          <p className="font-display text-xl tracking-tight text-ink">
            {site.rinconDeChile.name}
          </p>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            Restaurante chileno en México: un lugar para comer rico y sentirse
            un poco más en casa.
          </p>
          <a
            href={site.rinconDeChile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-chile-red underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
          >
            unrincondechile.com.mx
          </a>
        </div>
      </div>
    </section>
  );
}
