'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionDivider } from './SectionDivider';

const STEPS = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <p className="font-body text-lg md:text-xl text-text-secondary mb-4 font-light max-w-2xl">
          Hoje existem milhares de designers, social medias e ferramentas de IA criando posts bonitos.
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          A estética deixou de <br className="hidden md:block"/> ser diferencial.
        </h2>
        <span className="inline-flex items-center gap-4 text-primary font-display font-bold text-2xl md:text-3xl mt-2">
          <span className="hidden md:block w-12 h-[3px] bg-primary rounded-full"></span>
          Virou commodity.
        </span>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white">
          Sem governança, o <br className="hidden md:block"/> marketing vira <span className="text-primary blur-[0.3px]">tentativa.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-3xl">
          <div className="bg-bg-card border border-border-default rounded-xl p-6 shadow-md w-full md:w-1/3 hover:border-primary/50 transition-colors">
            <span className="block text-primary text-sm font-bold mb-2">01</span>
            <span className="font-body text-lg md:text-xl text-text-secondary">Ações isoladas.</span>
          </div>
          <div className="bg-bg-card border border-border-default rounded-xl p-6 shadow-md w-full md:w-1/3 hover:border-primary/50 transition-colors">
            <span className="block text-primary text-sm font-bold mb-2">02</span>
            <span className="font-body text-lg md:text-xl text-text-secondary">Prioridades confusas.</span>
          </div>
          <div className="bg-bg-card border border-border-default rounded-xl p-6 shadow-md w-full md:w-1/3 hover:border-primary/50 transition-colors">
            <span className="block text-primary text-sm font-bold mb-2">03</span>
            <span className="font-body text-lg md:text-xl text-text-secondary">Resultados imprevisíveis.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
          Empresas maduras <br className="hidden md:block"/><span className="text-text-secondary font-light">não terceirizam posts.</span>
        </h2>
        <div className="flex items-center gap-4 font-display font-bold text-2xl md:text-4xl text-primary mt-4">
          Terceirizam governança.
        </div>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-16 w-full text-left px-4">
        <div className="md:w-1/2 text-center md:text-right">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mt-4 text-white">
            O que continua raro <br className="hidden md:block"/> é <span className="text-primary">estrutura.</span>
          </h2>
        </div>
        <div className="hidden md:block w-px h-32 bg-border-default/50"></div>
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="font-body text-xl md:text-2xl font-medium text-white">Metas claras</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/80" />
              <p className="font-body text-xl md:text-2xl font-medium text-white/90">Processo definido</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <p className="font-body text-xl md:text-2xl font-medium text-white/80">Integração com vendas</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <p className="font-body text-xl md:text-2xl font-medium text-white/70">Acompanhamento constante</p>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center relative w-full px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <h3 className="font-body text-lg md:text-xl text-primary font-bold tracking-widest uppercase mb-4 md:mb-6 relative z-10">
          Não somos agência.
        </h3>
        <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white relative z-10 leading-[1.1]">
          Somos uma operação de <br className="hidden md:block"/> marketing sob SLA.
        </h2>
      </div>
    )
  }
];

export function GovernanceSection() {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STEPS.length);
    }, 6000); // 6 seconds per slide allows time to read
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden flex flex-col items-center justify-center min-h-[500px] border-b border-border-default/30">
      
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Glow effect in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Carousel Container */}
        <div className="relative h-[350px] md:h-[400px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center will-change-[transform,opacity]"
            >
              {STEPS[currentStep].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls and Progress */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex space-x-3">
            {STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className="group relative flex items-center justify-center min-h-[48px] min-w-[48px] cursor-pointer"
                aria-label={`Ir para o slide ${index + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'w-8 bg-primary shadow-[0_0_10px_rgba(232,123,28,0.5)]'
                      : 'w-2 bg-text-muted hover:bg-text-secondary hover:w-4'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
