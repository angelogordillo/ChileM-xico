import { Community } from "@/components/Community";
import { Empresas } from "@/components/Empresas";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  areaServed: "MX",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#contenido"
        className="absolute left-4 top-4 z-[100] -translate-y-20 bg-chile-red px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Intro />
        <Community />
        <Empresas />
      </main>
      <Footer />
    </>
  );
}
