import Link from "next/link";
import { FlagPair } from "@/components/Flags";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center">
      <FlagPair idPrefix="not-found" size="lg" />
      <h1 className="mt-10 font-display text-4xl tracking-tight text-ink">
        Esta página no está.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
        El enlace no existe. Volvamos al inicio.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm text-chile-red underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chile-red"
      >
        Ir a Chile en México
      </Link>
    </div>
  );
}
