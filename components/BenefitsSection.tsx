'use client';

import { motion } from 'motion/react';
import { Maximize, ShieldCheck, UserPlus, Combine } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import DisplayCards from '@/components/ui/display-cards';
import { Mobile3DCarousel } from '@/components/ui/mobile-3d-carousel';

export function BenefitsSection() {
  const cards = [
    {
      icon: <Maximize className="size-5 text-primary" />,
      title: "Escala operacional",
      description: "Aumente a capacidade de execução sem ampliar headcount.",
      className:
        "[grid-area:stack] -translate-y-24 -translate-x-6 hover:-translate-y-32 hover:-translate-x-12 transition duration-700 before:absolute before:w-full before:h-full before:bg-black/60 before:rounded-xl before:transition-opacity before:duration-700 hover:before:opacity-0 hover:z-50 z-10",
    },
    {
      icon: <ShieldCheck className="size-5 text-primary" />,
      title: "Governança",
      description: "Processos, rituais e indicadores claros.",
      className:
        "[grid-area:stack] -translate-y-4 hover:-translate-y-12 hover:-translate-x-4 transition duration-700 before:absolute before:w-full before:h-full before:bg-black/40 before:rounded-xl before:transition-opacity before:duration-700 hover:before:opacity-0 hover:z-50 z-20",
    },
    {
      icon: <UserPlus className="size-5 text-primary" />,
      title: "Especialistas",
      description: "Profissionais técnicos alocados conforme necessidade.",
      className:
        "[grid-area:stack] translate-x-6 translate-y-16 hover:translate-y-8 hover:translate-x-4 transition duration-700 before:absolute before:w-full before:h-full before:bg-black/20 before:rounded-xl before:transition-opacity before:duration-700 hover:before:opacity-0 hover:z-50 z-30",
    },
    {
      icon: <Combine className="size-5 text-primary" />,
      title: "Integração total",
      description: "Mais previsibilidade comercial e inteligência de dados.",
      className:
        "[grid-area:stack] translate-x-12 translate-y-36 hover:translate-y-24 hover:translate-x-12 transition duration-700 hover:z-50 z-40",
    },
  ];

  return (
    <section id="beneficios" className="relative py-24 px-6 bg-bg-secondary border-t border-border-default overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <BackgroundPaths />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="badge-primary mb-6 w-fit">Capacidade Produtiva</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Amplie sua operação sem crescer a <span className="text-primary">equipe interna</span>
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
              Escute da nossa diretoria técnica e de operações como garantimos que o seu negócio escale através da orquestração de profissionais experientes, processos maduros e tecnologia de ponta.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center lg:min-h-[500px]"
          >
            {/* Desktop View: Stacked display cards */}
            <div className="hidden lg:flex w-full justify-center">
              <DisplayCards cards={cards} />
            </div>

            {/* Mobile View: 3D Carousel */}
            <div className="flex lg:hidden w-full justify-center mt-0">
              <Mobile3DCarousel cards={cards} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
