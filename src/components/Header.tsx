import { nav, site } from "@/data/site";
import { FlagPair } from "./Flags";

export function Header() {
  return (
    <header className="border-b border-line bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
        >
          <FlagPair idPrefix="header" size="sm" />
          <span className="font-display text-lg tracking-tight text-ink sm:text-xl">
            {site.name}
          </span>
        </a>
        <nav className="flex items-center gap-6" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
