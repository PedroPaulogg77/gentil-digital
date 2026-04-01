'use client';

import { motion } from 'motion/react';

export function NextStepSection() {
  return (
    <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 md:p-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
            E depois do <span className="text-primary">diagnóstico?</span>
          </h2>
          <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
            Após a conversa, você terá clareza total sobre o que precisa ser feito.
          </p>
          <p className="font-body text-base text-text-secondary leading-relaxed">
            Para empresas que querem avançar, estruturamos um{' '}
            <strong className="text-white font-semibold">
              plano completo de marketing e vendas
            </strong>{' '}
            com base no cenário levantado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
