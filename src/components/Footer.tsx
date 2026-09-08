import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-ink-soft">
        <p>{site.name}</p>
      </div>
    </footer>
  );
}
