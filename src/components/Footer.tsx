import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>{site.name}</p>
        <nav className="flex flex-wrap gap-5" aria-label="Pie">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
