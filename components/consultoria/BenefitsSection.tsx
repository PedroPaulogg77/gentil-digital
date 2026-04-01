'use client';

import { motion } from 'motion/react';
import { Maximize, ShieldCheck, UserPlus, Combine } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

export function BenefitsSection() {
  const items = [
    { icon: <Maximize className="size-6 text-primary" />, title: 'Diagnóstico de marketing' },
    { icon: <ShieldCheck className="size-6 text-primary" />, title: 'Gargalos identificados' },
    { icon: <UserPlus className="size-6 text-primary" />, title: 'Direcionamento claro' },
    { icon: <Combine className="size-6 text-primary" />, title: 'Oportunidades imediatas' },
  ];

  return (
    <section id="beneficios" className="relative py-24 px-6 bg-bg-secondary border-t border-border-default overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <BackgroundPaths />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="badge-primary mb-6 w-fit mx-auto">Diagnóstico Estratégico</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            O que você leva na <span className="text-primary">primeira conversa</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-2xl bg-bg-card border border-border-default hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="font-body text-sm md:text-base font-semibold text-text-primary leading-snug">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
