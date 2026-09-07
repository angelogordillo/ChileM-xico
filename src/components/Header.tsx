"use client";

import { useEffect, useId, useState } from "react";
import { nav, site } from "@/data/site";
import { DualFlagBars } from "./Flags";
import { CloseIcon, LogoMark, MenuIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/80 backdrop-blur-xl">
      <DualFlagBars />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
        >
          <LogoMark idPrefix="header-logo" className="h-8 w-12 sm:h-9 sm:w-[3.35rem]" />
          <span className="font-display text-lg tracking-tight text-ink sm:text-xl">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#unirse"
            className="inline-flex h-11 items-center rounded-full bg-wine px-5 text-sm font-semibold text-foam transition-colors hover:bg-wine-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          >
            Unirse
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-foam text-ink lg:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-ink/8 bg-cream px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-medium text-ink hover:bg-linen focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#unirse"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-wine text-base font-semibold text-foam hover:bg-wine-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
            >
              Unirse a la comunidad
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
