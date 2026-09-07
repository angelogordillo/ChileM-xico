import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — comunidad chilena en México`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Chile",
    "México",
    "comunidad chilena",
    "CDMX",
    "eventos",
    "chilenos en México",
    "Fiestas Patrias",
  ],
  openGraph: {
    title: `${site.name} — comunidad y eventos`,
    description: site.description,
    locale: site.locale,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
