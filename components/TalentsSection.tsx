'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function TalentsSection() {
  return (
    <section className="py-24 px-6 bg-bg-primary relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image 
                src="/talents.png" 
                alt="Plataformas de talentos como LinkedIn e Workana" 
                fill 
                className="object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Acesso aos <span className="text-primary">melhores profissionais</span> do mercado
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
              A Gentil opera com um modelo híbrido de talentos. Além do nosso squad fixo, utilizamos processos estruturados de recrutamento e parcerias com plataformas especializadas para selecionar profissionais técnicos e sêniores para cada projeto.
            </p>
            <div className="p-4 border-l-2 border-primary bg-primary/5 rounded-r-lg">
              <p className="font-body text-sm text-text-primary font-medium">
                Isso permite montar equipes flexíveis e altamente qualificadas, adaptadas ao momento e às necessidades de cada cliente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
