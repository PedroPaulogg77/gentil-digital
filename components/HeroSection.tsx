'use client';

import { Hero } from "@/components/ui/hero-1";

export function HeroSection() {
  return (
    <Hero 
      title={
        <div className="flex flex-col items-center leading-[1.05] text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-white/80 tracking-tight mb-1 md:mb-2">
            Arte bonita virou
          </span>
          <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-lg mb-4 md:mb-6">
            commodity.
          </span>
          <span className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter whitespace-nowrap text-gradient drop-shadow-lg pb-2">
            Operação estruturada não.
          </span>
        </div>
      }
      subtitle={
        <>
          Marketing sob medida com <strong className="text-white font-semibold">equipes gerenciadas alocadas no seu projeto</strong>,<br className="hidden md:block" /> integrando marketing, vendas e tecnologia para acelerar resultados sem sobrecarregar seu time interno.
        </>
      }
      eyebrow="Marketing as a Service"
      ctaLabel="Agendar uma conversa estratégica"
      ctaHref="#contato"
    />
  );
}
