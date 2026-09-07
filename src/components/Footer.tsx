import { nav, site } from "@/data/site";
import { DualFlagBars, FlagPair } from "./Flags";
import { FacebookIcon, InstagramIcon, LogoMark } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink text-foam">
      <DualFlagBars />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark idPrefix="footer-logo" className="h-8 w-12" />
            <p className="font-display text-xl">{site.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-foam/70">
            De Chile al corazón de México. Comunidad, eventos y una mesa con
            espacio de más.
          </p>
          <FlagPair idPrefix="footer" size="sm" tone="dark" className="mt-5" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foam">
            Navegar
          </p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-foam/80 transition-colors hover:text-foam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foam"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foam">
            Redes
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={site.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foam/80 hover:text-foam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foam"
              >
                <InstagramIcon className="h-4 w-4" />
                {site.social.instagram.label}
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foam/80 hover:text-foam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foam"
              >
                <FacebookIcon className="h-4 w-4" />
                {site.social.facebook.label}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-foam/80 hover:text-foam focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foam"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-foam/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}. Hecho con cariño.</p>
          <p>Sitio de comunidad — no oficial de ningún gobierno.</p>
        </div>
      </div>
    </footer>
  );
}
