'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionDivider } from './SectionDivider';
import { YouTubeFacade } from './YouTubeFacade';

export function SocialProofSection() {
  const youtubeVideos = [
    { id: "itBgl68axJI", title: "Depoimento Consultoria" },
    { id: "pZMN8OqQ7-4", title: "Depoimento Marketing" },
    { id: "DTf_qEbjfVs", title: "Depoimento Crescimento" }
  ];
  
  // Real logos from Google Drive
  const clientLogos = [
    "/logotipos CLIENTES/AGRO - INDUSTRIA/METALFORCE.png",
    "/logotipos CLIENTES/AGRO - INDUSTRIA/MOARA.png",
    "/logotipos CLIENTES/AGRO - INDUSTRIA/RAIZEN.png",
    "/logotipos CLIENTES/AGRO - INDUSTRIA/SAFE TRACE.png",
    "/logotipos CLIENTES/AGRO - INDUSTRIA/arbogen.png",
    "/logotipos CLIENTES/AGRO - INDUSTRIA/cinergis.png",
    "/logotipos CLIENTES/OUTROS/Stellantis.png",
    "/logotipos CLIENTES/OUTROS/TSO.png",
    "/logotipos CLIENTES/OUTROS/jhl.png",
    "/logotipos CLIENTES/TECNOLOGIA/ITALENTS.png",
    "/logotipos CLIENTES/TECNOLOGIA/MGITECH.png",
    "/logotipos CLIENTES/TECNOLOGIA/NGR.png",
    "/logotipos CLIENTES/TECNOLOGIA/TICWAY.png",
    "/logotipos CLIENTES/TECNOLOGIA/ULTRACON.png",
    "/logotipos CLIENTES/TECNOLOGIA/decola.png"
  ];

  return (
    <section className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      <SectionDivider />
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            O que nossos clientes dizem sobre o <span className="text-primary">modelo Gentil</span>
          </h2>
          <p className="font-body text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Empresas que já estruturaram suas operações de marketing com nosso suporte.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 mb-20 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-center">
          {youtubeVideos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-border-card shrink-0 w-[85vw] sm:w-[300px] md:w-auto snap-center shadow-2xl"
            >
              <YouTubeFacade videoId={vid.id} title={vid.title} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-xs font-bold tracking-widest uppercase text-text-muted mb-8">
            Times que já escalaram com nosso modelo
          </p>
          
          {/* Simple Marquee for Logos */}
          <div className="relative flex overflow-hidden w-full">
            <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center gap-16 px-8">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={idx} className="relative w-32 h-16 opacity-50 hover:opacity-100 transition-opacity flex-shrink-0">
                  <Image 
                    src={logo}
                    alt={`Cliente ${idx}`}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
