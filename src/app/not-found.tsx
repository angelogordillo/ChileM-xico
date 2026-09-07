import Link from "next/link";
import { LogoMark } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center">
      <LogoMark idPrefix="not-found-logo" className="h-12 w-[4.5rem]" />
      <h1 className="mt-8 font-display text-4xl tracking-tight text-ink">
        Esta página no está.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
        Puede que el enlace esté viejo o que hayamos cambiado la casa de
        lugar. Volvamos al inicio.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-wine px-6 text-sm font-semibold text-foam hover:bg-wine-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine"
      >
        Ir a Chile en México
      </Link>
    </div>
  );
}
