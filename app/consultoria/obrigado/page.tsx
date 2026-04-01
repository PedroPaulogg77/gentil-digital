import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-bg-primary text-white flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <BackgroundPaths />
      </div>

      {/* Header */}
      <header className="relative z-50 flex justify-center items-center h-[80px] mt-4">
        <div className="relative w-36 h-12">
          <Image
            src="/logo gentil/horizontal.png"
            alt="Gentil Digital"
            fill
            className="object-contain"
          />
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 mt-[-80px]">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/50 shadow-[0_0_30px_rgba(232,123,28,0.3)] animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Solicitação <span className="text-primary">Recebida!</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-text-secondary max-w-lg text-center leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Muito obrigado pelo seu interesse. Um consultor especialista da Gentil Digital analisará o seu perfil e entrará em contato com você em breve.
        </p>

        <Link
          href="/consultoria"
          className="group flex items-center gap-3 px-8 py-4 bg-bg-card border border-border-card rounded-xl text-white font-bold hover:border-primary/50 hover:bg-neutral-900 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
        >
          <ArrowLeft className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
