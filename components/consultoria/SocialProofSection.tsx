'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionDivider } from '@/components/SectionDivider';

export function SocialProofSection() {
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
            Empresas que já estruturaram seu marketing <span className="text-primary">com a Gentil</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-xs font-bold tracking-widest uppercase text-text-muted mb-8">
            Empresas que já cresceram com diagnóstico e estrutura
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
