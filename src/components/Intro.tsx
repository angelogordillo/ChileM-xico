import { site } from "@/data/site";
import { FlagPair } from "./Flags";

export function Intro() {
  return (
    <section
      id="inicio"
      className="px-6"
      aria-labelledby="intro-title"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-2 py-24 text-center sm:py-32">
        <FlagPair idPrefix="intro" size="xl" priority />
        <h1
          id="intro-title"
          className="mt-10 font-display text-4xl tracking-tight text-ink sm:text-5xl"
        >
          {site.name}
        </h1>
        <p className="mt-5 max-w-md text-base leading-8 text-ink-soft sm:text-lg">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
