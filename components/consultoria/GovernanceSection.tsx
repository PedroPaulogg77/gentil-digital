'use client';

import { motion } from 'motion/react';

const cards = [
  {
    number: '01',
    title: 'O problema não está na execução.',
    body: 'Está na falta de direção, estrutura e clareza. Sem isso, nada escala.',
  },
  {
    number: '02',
    title: 'Sem estrutura, marketing vira esforço disperso.',
    body: 'Ações isoladas, sem previsibilidade e sem escala real.',
  },
  {
    number: '03',
    title: 'Empresas maduras não investem às cegas.',
    body: 'Investem com clareza. Sabem onde estão os gargalos antes de agir.',
  },
  {
    number: '04',
    title: 'O que toda empresa precisa ter primeiro.',
    body: 'Diagnóstico real, gargalos mapeados, direção definida e próximos passos claros.',
  },
];

export function GovernanceSection() {
  return (
    <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden border-b border-border-default/30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white/90">
            Por que a maioria dos esforços de marketing não gera resultado?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-card border border-border-default rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <span className="block text-primary text-xs font-bold tracking-widest mb-3">{card.number}</span>
              <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
