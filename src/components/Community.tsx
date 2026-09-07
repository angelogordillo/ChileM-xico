const benefits = [
  {
    title: "Bienvenida de verdad",
    body: "Si acabas de llegar, te ayudamos a aterrizar: barrio, trámites, escuela, trabajo y con quién tomar el primer café.",
    span: "md:col-span-2",
  },
  {
    title: "Tips de la vida acá",
    body: "Dónde encontrar merquén, cómo abrir una cuenta y qué hacer cuando extrañas el mar.",
  },
  {
    title: "Cultura viva",
    body: "Cocinamos, bailamos cueca, armamos fonda y celebramos Navidad y Año Nuevo como en casa.",
  },
  {
    title: "Amistad, no solo un chat",
    body: "El grupo es la puerta. Lo que importa pasa en la mesa, en el parque y en los cumpleaños.",
  },
  {
    title: "Puente Chile–México",
    body: "También somos casa para mexicanas y mexicanos que quieren conocer Chile desde cerca.",
  },
];

export function Community() {
  return (
    <section
      id="comunidad"
      className="border-t border-ink/8 bg-navy text-foam"
      aria-labelledby="community-title"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Comunidad
          </p>
          <h2
            id="community-title"
            className="font-display text-4xl tracking-tight sm:text-5xl"
          >
            Lo que hacemos juntas y juntos.
          </h2>
          <p className="mt-5 text-base leading-8 text-foam/80 sm:text-lg">
            No somos un directorio ni una embajada. Somos personas que se
            eligen: para compartir un asado, resolver una duda o sentirse menos
            lejos.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className={`rounded-[1.6rem] border border-white/10 bg-white/6 p-6 ${benefit.span ?? ""}`}
            >
              <h3 className="font-display text-2xl tracking-tight">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foam/75">{benefit.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
