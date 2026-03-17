import Image from 'next/image';
import { SectionDivider } from './SectionDivider';

export function Footer() {
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
        Marketing as a Service
      </div>
      <p className="font-body text-xs text-text-muted">
        © {new Date().getFullYear()} Gentil Digital. Todos os direitos reservados.
      </p>
    </footer>
  );
}
