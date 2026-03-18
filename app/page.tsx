import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const GovernanceSection = dynamic(() =>
  import('@/components/GovernanceSection').then(m => ({ default: m.GovernanceSection }))
);
const IdentificationSection = dynamic(() =>
  import('@/components/IdentificationSection').then(m => ({ default: m.IdentificationSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const ModelSection = dynamic(() =>
  import('@/components/ModelSection').then(m => ({ default: m.ModelSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const BenefitsSection = dynamic(() =>
  import('@/components/BenefitsSection').then(m => ({ default: m.BenefitsSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const TalentsSection = dynamic(() =>
  import('@/components/TalentsSection').then(m => ({ default: m.TalentsSection })),
  { loading: () => <div className="min-h-[500px]" /> }
);
const TechEcosystemSection = dynamic(() =>
  import('@/components/TechEcosystemSection').then(m => ({ default: m.TechEcosystemSection })),
  { loading: () => <div className="min-h-[600px]" /> }
);
const SocialProofSection = dynamic(() =>
  import('@/components/SocialProofSection').then(m => ({ default: m.SocialProofSection })),
  { loading: () => <div className="min-h-[700px]" /> }
);
const ConversionSection = dynamic(() =>
  import('@/components/ConversionSection').then(m => ({ default: m.ConversionSection })),
  { loading: () => <div className="min-h-[400px]" /> }
);
const Footer = dynamic(() =>
  import('@/components/Footer').then(m => ({ default: m.Footer }))
);

export default function Home() {
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
      <HeroSection />
      <GovernanceSection />
      <IdentificationSection />
      <ModelSection />
      <BenefitsSection />
      <TalentsSection />
      <TechEcosystemSection />
      <SocialProofSection />
      <ConversionSection />
      <Footer />
    </main>
  );
}
