'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Pronto para estruturar{' '}
            <span className="text-gradient">seu marketing?</span>
          </h2>
          <Link href="#contato" className="btn-primary inline-flex">
            Agendar diagnóstico estratégico
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
