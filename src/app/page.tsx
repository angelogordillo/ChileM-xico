import { About } from "@/components/About";
import { Community } from "@/components/Community";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
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
        className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-full bg-wine px-4 py-2 text-sm font-semibold text-foam transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Events />
        <Community />
        <Join />
      </main>
      <Footer />
    </>
  );
}
