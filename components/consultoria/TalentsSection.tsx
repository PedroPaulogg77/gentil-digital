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
                src="/diretor.png"
                alt="Diretor da Gentil Digital"
                fill
                className="object-contain drop-shadow-2xl"
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
              Quem conduz o <span className="text-primary">diagnóstico</span>
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
              O diagnóstico é conduzido pelo diretor da Gentil Digital, com mais de 10 anos de atuação em projetos de estruturação de marketing e vendas para empresas como Stellantis, Raízen, Arborgen e outros clientes B2B de tecnologia, indústria e agronegócio.
            </p>
            <div className="p-4 border-l-2 border-primary bg-primary/5 rounded-r-lg">
              <p className="font-body text-sm text-text-primary font-medium">
                Não é uma conversa de vendas. É uma sessão técnica com quem já estruturou marketing em empresas de diferentes portes e setores.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
