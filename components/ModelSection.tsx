'use client';

import { motion } from 'motion/react';
import { Target, BarChart3, PenTool, Workflow, Database } from 'lucide-react';
import Link from 'next/link';

export function ModelSection() {
  const components = [
    { icon: <Target className="w-3.5 h-3.5 md:w-4 md:h-4" />, title: "Estratégia e gestão" },
    { icon: <BarChart3 className="w-3.5 h-3.5 md:w-4 md:h-4" />, title: "Performance e mídia" },
    { icon: <PenTool className="w-3.5 h-3.5 md:w-4 md:h-4" />, title: "Conteúdo e branding" },
    { icon: <Workflow className="w-3.5 h-3.5 md:w-4 md:h-4" />, title: "CRM e automação" },
    { icon: <Database className="w-3.5 h-3.5 md:w-4 md:h-4" />, title: "Dados e inteligência" },
  ];

  return (
    <section id="modelo" className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-primary mb-6 w-fit">Marketing as a Service</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Marketing sob medida com <span className="text-primary">equipes gerenciadas</span>
            </h2>
            <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
              A Gentil atua como uma extensão da sua empresa. Montamos equipes especializadas e gerenciadas, integrando marketing, vendas e tecnologia para estruturar processos, campanhas e dados.
            </p>
            <p className="font-body text-base text-text-primary font-semibold mb-10">
              Tudo com gestão, metodologia e SLA definidos.
            </p>
            <Link href="#contato" className="btn-primary">
              Ver como montar um squad para minha empresa
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Visual Structure */}
            <div className="relative min-h-[550px] md:min-h-[450px] mt-10 md:mt-0 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center w-full max-w-[190px] md:max-w-[260px] relative z-10 py-10 md:py-0">
                
                {/* Cliente */}
                <div className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 text-center relative z-10 shadow-xl">
                  <span className="font-display font-medium text-base md:text-lg text-white/90">Cliente</span>
                </div>

                {/* Arrow Down 1 */}
                <div className="w-[1px] h-16 md:h-12 bg-gradient-to-b from-white/20 via-primary/50 to-primary relative z-0 -my-2" />

                {/* Gentil Squad */}
                <div className="w-full bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-5 md:p-6 text-center relative z-10 shadow-[0_0_40px_rgba(232,123,28,0.15)] backdrop-blur-md">
                  <span className="font-display font-bold text-xl md:text-2xl text-primary block">Gentil Squad</span>
                </div>

                {/* Arrow Down 2 */}
                <div className="w-[1px] h-16 md:h-12 bg-gradient-to-b from-primary via-primary/50 to-white/20 relative z-0 -my-2" />

                {/* Marketing + Vendas + Tecnologia */}
                <div className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 text-center relative z-10 shadow-xl">
                  <span className="font-body text-[9px] md:text-xs font-semibold tracking-[0.15em] uppercase text-white/80 leading-relaxed">
                    Marketing <span className="text-primary">+</span> Vendas <span className="text-primary">+</span> Tecnologia
                  </span>
                </div>
              </div>

              {/* Floating Notifications */}
              {components.map((comp, idx) => {
                const positionClasses = [
                  "top-[0%] left-1/2 -translate-x-1/2 md:translate-x-0 md:top-[-2%] md:left-[-8%]",
                  "top-[28%] right-[-2%] md:top-[22%] md:right-[-12%]",
                  "top-[58%] left-[-2%] md:top-auto md:bottom-[38%] md:left-[-10%]",
                  "bottom-[8%] right-[-2%] md:bottom-[15%] md:right-[-8%]",
                  "bottom-[0%] left-[5%] md:translate-x-0 md:bottom-[-5%] md:left-[15%]",
                ];
                
                const delay = idx * 0.3;
                const duration = 4 + (idx % 3);

                return (
                  <motion.div
                    key={idx}
                    className={`absolute z-20 flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1.5 pr-3 md:p-2 md:pr-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${positionClasses[idx]}`}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay,
                    }}
                  >
                    <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-[inset_0_0_10px_rgba(232,123,28,0.2)]">
                      {comp.icon}
                    </div>
                    <span className="font-body text-[9px] md:text-xs font-medium text-white/80 whitespace-nowrap tracking-wide">{comp.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
