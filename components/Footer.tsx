import Image from 'next/image';
import { SectionDivider } from './SectionDivider';

interface FooterProps {
  tagline?: string;
}

export function Footer({ tagline = 'Marketing as a Service' }: FooterProps) {
  return (
    <footer className="relative py-12 px-6 text-center bg-bg-primary">
      <SectionDivider />
      <div className="flex justify-center mb-4">
        <div className="relative w-40 h-12">
          <Image
            src="/logo gentil/horizontal.png"
            alt="Gentil Digital"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-gradient font-body text-sm mb-8">
        {tagline}
      </div>
      <p className="font-body text-xs text-text-tertiary">
        © {new Date().getFullYear()} Gentil Digital. Todos os direitos reservados.
      </p>
    </footer>
  );
}
