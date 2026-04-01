import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/consultoria/HeroSection';
import { TickerSection } from '@/components/consultoria/TickerSection';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diagnóstico Estratégico de Marketing | Gentil Digital',
  description: 'Em uma conversa estratégica com a liderança da Gentil, analisamos sua operação e mostramos os gargalos e oportunidades para crescer com previsibilidade.',
};

const GovernanceSection = dynamic(() =>
  import('@/components/consultoria/GovernanceSection').then(m => ({ default: m.GovernanceSection }))
);
const BenefitsSection = dynamic(() =>
  import('@/components/consultoria/BenefitsSection').then(m => ({ default: m.BenefitsSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const SocialProofSection = dynamic(() =>
  import('@/components/consultoria/SocialProofSection').then(m => ({ default: m.SocialProofSection })),
  { loading: () => <div className="min-h-[700px]" /> }
);
const IdentificationSection = dynamic(() =>
  import('@/components/consultoria/IdentificationSection').then(m => ({ default: m.IdentificationSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const TalentsSection = dynamic(() =>
  import('@/components/consultoria/TalentsSection').then(m => ({ default: m.TalentsSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const ModelSection = dynamic(() =>
  import('@/components/consultoria/ModelSection').then(m => ({ default: m.ModelSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const NextStepSection = dynamic(() =>
  import('@/components/consultoria/NextStepSection').then(m => ({ default: m.NextStepSection })),
  { loading: () => <div className="min-h-[300px]" /> }
);
const CTASection = dynamic(() =>
  import('@/components/consultoria/CTASection').then(m => ({ default: m.CTASection })),
  { loading: () => <div className="min-h-[300px]" /> }
);
const ConversionSection = dynamic(() =>
  import('@/components/consultoria/ConversionSection').then(m => ({ default: m.ConversionSection })),
  { loading: () => <div className="min-h-[400px]" /> }
);
const Footer = dynamic(() =>
  import('@/components/Footer').then(m => ({ default: m.Footer }))
);

export default function Consultoria() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-center items-center h-[80px] pointer-events-none">
        <Link href="/" className="relative w-36 h-12 pointer-events-auto">
          <Image
            src="/logo gentil/horizontal.png"
            alt="Gentil Digital"
            fill
            priority
            fetchPriority="high"
            className="object-contain"
          />
        </Link>
      </header>
      {/* 1. HERO */}
      <HeroSection />
      {/* Ticker de benefícios */}
      <TickerSection />
      {/* 2. EXPLICAÇÃO */}
      <GovernanceSection />
      {/* 3. O QUE VOCÊ RECEBE */}
      <BenefitsSection />
      {/* 4. PARA QUEM FAZ SENTIDO */}
      <IdentificationSection />
      {/* 5. PROVA SOCIAL */}
      <SocialProofSection />
      {/* 6. QUEM CONDUZ */}
      <TalentsSection />
      {/* 7. COMO FUNCIONA */}
      <ModelSection />
      {/* 8. PRÓXIMO PASSO */}
      <NextStepSection />
      {/* 9. CTA FINAL */}
      <CTASection />
      {/* 10. FORMULÁRIO */}
      <ConversionSection />
      <Footer tagline="Diagnóstico Estratégico de Marketing" />
    </main>
  );
}
