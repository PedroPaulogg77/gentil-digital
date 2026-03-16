'use client';

import { motion } from 'motion/react';

const marqueeItems = [
  "Marketing sob medida",
  "Terceirização de equipes gerenciadas",
  "Marketing & Vendas com tecnologia",
  "Amplie sua operação sem crescer a equipe interna"
];

// Duplicate items to ensure enough width for continuous scrolling
const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

export function MarqueeSection() {
  return (
    <section className="relative w-full h-0 z-30 flex flex-col items-center justify-center overflow-visible pointer-events-none mt-16 md:mt-24">
      
      {/* Background Band (Rotated Right, Moving Right) */}
      <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 -translate-y-6 md:-translate-y-8 rotate-[3deg] md:rotate-2 bg-[#0a0a0a] border-y border-white/5 py-1.5 md:py-3 flex overflow-hidden z-0 opacity-80 blur-[1px]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 240,
          }}
        >
          {/* We render two identical blocks to make the 50% translation seamless */}
          <div className="flex items-center">
            {repeatedItems.map((text, i) => (
              <div key={`bg-1-${i}`} className="flex items-center">
                <span className="text-white/60 font-display font-bold text-xs md:text-2xl uppercase tracking-wider mx-3 md:mx-6">
                  {text}
                </span>
                <span className="text-primary/60 text-xs md:text-xl mx-2 md:mx-2">•</span>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {repeatedItems.map((text, i) => (
              <div key={`bg-2-${i}`} className="flex items-center">
                <span className="text-white/60 font-display font-bold text-xs md:text-2xl uppercase tracking-wider mx-3 md:mx-6">
                  {text}
                </span>
                <span className="text-primary/60 text-xs md:text-xl mx-2 md:mx-2">•</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Foreground Band (Rotated Left, Moving Left) */}
      <div className="absolute w-[110vw] left-1/2 -translate-x-1/2 translate-y-6 md:translate-y-8 -rotate-[3deg] md:-rotate-2 bg-[#141414] border-y border-white/10 py-2 md:py-5 flex overflow-hidden z-10 shadow-2xl shadow-black">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 240,
          }}
        >
          <div className="flex items-center">
            {repeatedItems.map((text, i) => (
              <div key={`fg-1-${i}`} className="flex items-center">
                <span className="text-white font-display font-bold text-sm md:text-3xl uppercase tracking-wider mx-3 md:mx-6">
                  {text}
                </span>
                <span className="text-primary text-sm md:text-2xl mx-2 md:mx-2">•</span>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            {repeatedItems.map((text, i) => (
              <div key={`fg-2-${i}`} className="flex items-center">
                <span className="text-white font-display font-bold text-sm md:text-3xl uppercase tracking-wider mx-3 md:mx-6">
                  {text}
                </span>
                <span className="text-primary text-sm md:text-2xl mx-2 md:mx-2">•</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
