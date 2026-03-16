'use client';

import { motion } from 'motion/react';
import { SectionDivider } from './SectionDivider';

export function ConversionSection() {
  return (
    <section id="contato" className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
      <SectionDivider />
      {/* Animated Border Card Effect */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-[#FFD093] to-primary-light p-[2px] animate-[borderGlow_4s_linear_infinite] bg-[length:300%_300%]">
          <div className="absolute inset-[2px] bg-bg-card rounded-[calc(1.5rem-2px)]" />
        </div>
        
        <div className="relative z-10 p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Vamos estruturar a operação de marketing da <span className="text-primary">sua empresa?</span>
              </h2>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-8">
                Realizamos uma conversa estratégica para entender o momento da sua operação e avaliar como um squad Gentil pode apoiar seu time.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="text" 
                    id="nome"
                    placeholder=" "
                    className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                  />
                  <label htmlFor="nome" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                    Nome
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    id="empresa"
                    placeholder=" "
                    className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                  />
                  <label htmlFor="empresa" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                    Empresa
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    id="cargo"
                    placeholder=" "
                    className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                  />
                  <label htmlFor="cargo" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                    Cargo
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    placeholder=" "
                    className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                  />
                  <label htmlFor="email" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input 
                    type="tel" 
                    id="whatsapp"
                    placeholder=" "
                    className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                  />
                  <label htmlFor="whatsapp" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                    WhatsApp
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full mt-2">
                  Agendar conversa estratégica
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
