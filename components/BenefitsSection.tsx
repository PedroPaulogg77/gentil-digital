'use client';

import { motion } from 'motion/react';
import { Maximize, ShieldCheck, UserPlus, Combine } from 'lucide-react';
import { BackgroundPaths } from '@/components/ui/background-paths';

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Escala operacional",
      description: "Aumente a capacidade de execução sem ampliar headcount."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Governança",
      description: "Processos, rituais e indicadores claros."
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Especialistas sob demanda",
      description: "Profissionais técnicos alocados conforme a necessidade do projeto."
    },
    {
      icon: <Combine className="w-6 h-6" />,
      title: "Integração marketing e vendas",
      description: "Mais previsibilidade comercial e inteligência de dados."
    }
  ];

  return (
    <section id="beneficios" className="relative py-24 px-6 bg-bg-secondary border-t border-border-default overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundPaths />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl mx-auto">
            Amplie sua operação sem crescer a <span className="text-primary">equipe interna</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-bg-card/80 backdrop-blur-md border border-border-card rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(232,123,28,0.15)] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
