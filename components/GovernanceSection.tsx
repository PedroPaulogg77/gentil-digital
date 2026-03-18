'use client';

import { motion } from 'motion/react';
import { SectionDivider } from './SectionDivider';

export function GovernanceSection() {
  return (
    <section className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      <SectionDivider />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Glow effect in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="space-y-32 md:space-y-48">
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            <div className="md:w-3/4">
              <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed mb-6 font-light">
                Hoje existem milhares de designers, social medias e ferramentas de IA criando posts bonitos.
              </p>
              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
                A estética deixou de <br className="hidden md:block"/> ser diferencial.
              </h3>
              <div className="inline-flex items-center gap-4 text-primary font-display font-bold text-2xl md:text-3xl mt-4">
                <span className="hidden md:block w-12 h-[3px] bg-primary rounded-full"></span>
                Virou commodity.
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16"
          >
            <div className="md:w-3/4">
              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                Sem governança, o <br className="hidden md:block"/> marketing vira <span className="text-primary blur-[0.3px]">tentativa.</span>
              </h3>
              <ul className="space-y-5 font-body text-xl md:text-2xl text-text-secondary font-light">
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-bg-card border border-border-default flex items-center justify-center text-primary text-sm font-bold shadow-sm">01</div>
                  Ações isoladas.
                </li>
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-bg-card border border-border-default flex items-center justify-center text-primary text-sm font-bold shadow-sm">02</div>
                  Prioridades confusas.
                </li>
                <li className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-bg-card border border-border-default flex items-center justify-center text-primary text-sm font-bold shadow-sm">03</div>
                  Resultados imprevisíveis.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col items-center justify-center max-w-3xl mx-auto"
          >
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
              Empresas maduras <br className="hidden md:block"/><span className="text-text-secondary font-light">não terceirizam posts.</span>
            </h3>
            <div className="inline-flex flex-col items-center md:items-start gap-2 mt-4">
              <div className="flex items-center gap-4 font-display font-bold text-3xl md:text-5xl text-primary">
                Terceirizam governança.
              </div>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-12 md:pt-0 relative"
          >
            <div className="md:w-1/2">
              <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-4 text-white">
                O que continua raro <br className="hidden md:block"/> é <span className="text-primary">estrutura.</span>
              </h3>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-start">
              <div className="relative border-l-2 border-primary/20 pl-8 space-y-10 py-4">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                
                <div className="relative">
                  <div className="absolute left-[-2.45rem] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(232,123,28,0.8)]" />
                  <p className="font-body text-2xl md:text-3xl font-medium text-white">Metas claras</p>
                </div>
                <div className="relative">
                  <div className="absolute left-[-2.45rem] top-2 w-3 h-3 rounded-full bg-primary/80" />
                  <p className="font-body text-2xl md:text-3xl font-medium text-white/90">Processo definido</p>
                </div>
                <div className="relative">
                  <div className="absolute left-[-2.45rem] top-2 w-3 h-3 rounded-full bg-primary/60" />
                  <p className="font-body text-2xl md:text-3xl font-medium text-white/80">Integração com vendas</p>
                </div>
                <div className="relative">
                  <div className="absolute left-[-2.45rem] top-2 w-3 h-3 rounded-full bg-primary/40" />
                  <p className="font-body text-2xl md:text-3xl font-medium text-white/70">Acompanhamento constante</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 5 - Conclusion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center bg-bg-card border border-primary/20 rounded-3xl p-8 md:p-16 shadow-[0_0_40px_rgba(232,123,28,0.05)] relative overflow-hidden mt-16"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
            
            <h3 className="font-body text-xl md:text-2xl text-primary font-bold tracking-widest uppercase mb-6 relative z-10">
              Não somos agência.
            </h3>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white relative z-10 leading-[1.1]">
              Somos uma operação de <br className="hidden md:block"/> marketing sob SLA.
            </h2>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
