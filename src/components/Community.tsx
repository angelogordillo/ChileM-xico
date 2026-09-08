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
      </div>
    </section>
  );
}
