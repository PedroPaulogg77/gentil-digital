import { HeroSection } from '@/components/HeroSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { IdentificationSection } from '@/components/IdentificationSection';
import { ModelSection } from '@/components/ModelSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { TalentsSection } from '@/components/TalentsSection';
import { TechEcosystemSection } from '@/components/TechEcosystemSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { ConversionSection } from '@/components/ConversionSection';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-center items-center h-[80px] pointer-events-none">
        <Link href="/" className="relative w-36 h-12 pointer-events-auto">
          <Image 
            src="https://drive.google.com/uc?export=view&id=16PeG-d1FfWIPARx8sI-1XmlD73bYP7a0"
            alt="Gentil Digital"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
      </header>
      <HeroSection />
      <MarqueeSection />
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
