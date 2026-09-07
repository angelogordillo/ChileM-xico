const stats = [
  { value: "CDMX", label: "Y capítulos que nacen en otras ciudades" },
  { value: "Abierto", label: "Chilenas, chilenos y quien se sienta parte" },
  { value: "Todo el año", label: "Asados, onces, 18 y encuentros chicos" },
];

export function About() {
  return (
    <section
      id="quienes-somos"
      className="border-t border-ink/8 bg-foam"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-mexico-green">
            Quiénes somos
          </p>
          <h2
            id="about-title"
            className="font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            Un pedacito de casa, lejos de casa.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-ink-soft sm:text-lg">
            <p>
              Chile en México nació de conversaciones en la cocina, de extrañar
              la marraqueta y de querer un lugar donde decir «po» sin tener que
              explicar. Somos una comunidad abierta: da igual si llegaste ayer
              o llevas diez años, si eres chilena, mexicano con raíces en el
              sur, o alguien que se enamoró de ambas culturas.
            </p>
            <p>
              Nos juntamos para lo simple y lo importante: dar la bienvenida a
              quien acaba de aterrizar, compartir tips de la vida acá y
              celebrar juntas las fechas que nos recuerdan de dónde venimos.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-wine pl-5 font-display text-2xl italic leading-snug text-navy">
            «Aquí nadie llega de visita: se queda a la once.»
          </blockquote>
        </div>

        <div className="grid content-start gap-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-3xl border border-ink/8 bg-cream px-6 py-6"
            >
              <p className="font-display text-2xl text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
