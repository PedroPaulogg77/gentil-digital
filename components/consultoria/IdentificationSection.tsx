'use client';

import { motion } from 'motion/react';
import { ArrowRight, Briefcase, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import { SectionDivider } from '@/components/SectionDivider';

export function IdentificationSection() {
  const blocks = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Faturamento acima de R$100 mil/mês",
      description: "Empresas com operação financeira sólida e capacidade de investir em estruturação de marketing."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Já investe em marketing",
      description: "Operações que já têm algum esforço de marketing em andamento e querem direcionar melhor o investimento."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Quer escalar com previsibilidade",
      description: "Negócios que buscam crescimento estruturado, não apenas resultados pontuais ou ações isoladas."
    }
  ];

  return (
    <section className="pb-24 pt-48 md:pt-64 px-6 bg-bg-secondary relative">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Para quem <span className="text-primary">faz sentido</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                {block.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-4">{block.title}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="#modelo" className="inline-flex items-center gap-2 font-body text-sm font-bold text-primary hover:text-primary-light transition-colors group">
            Quero agendar meu diagnóstico
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
