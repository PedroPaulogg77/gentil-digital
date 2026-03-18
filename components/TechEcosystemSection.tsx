'use client';

import { motion, AnimatePresence } from 'motion/react';
import { SectionDivider } from './SectionDivider';
import Image from 'next/image';

const ALL_TOOLS = [
  // Inner track (4 tools)
  { name: "HubSpot", image: "/LOGOS PARCEIROS/CRM/HUBSPOT.png", track: 0 },
  { name: "RD Station", image: "/LOGOS PARCEIROS/CRM/RD STATION.png", track: 0 },
  { name: "Google Ads", image: "/LOGOS PARCEIROS/MIDIA E PERFOMANCE/GOOGLE ADS.png", track: 0 },
  { name: "Meta Ads", image: "/LOGOS PARCEIROS/MIDIA E PERFOMANCE/META ADS.png", track: 0 },
  
  // Outer track (6 tools)
  { name: "Agendor", image: "/LOGOS PARCEIROS/CRM/Agendor.png", track: 1 },
  { name: "Asana", image: "/LOGOS PARCEIROS/GESTAO/ASANA.png", track: 1 },
  { name: "Notion", image: "/LOGOS PARCEIROS/GESTAO/NOTION.png", track: 1 },
  { name: "LinkedIn Ads", image: "/LOGOS PARCEIROS/MIDIA E PERFOMANCE/LINKEDIN ADS.png", track: 1 },
  { name: "GA4", image: "/LOGOS PARCEIROS/ANALYTICS/GA4.webp", track: 1 },
  { name: "Looker Studio", image: "/LOGOS PARCEIROS/ANALYTICS/LOOKER.png", track: 1 }
];

export function TechEcosystemSection() {
  const innerTools = ALL_TOOLS.filter(t => t.track === 0);
  const outerTools = ALL_TOOLS.filter(t => t.track === 1);

  return (
    <section id="ecossistema" className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
      <SectionDivider />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit-cw {
          0% {
            transform: translate(-50%, -50%) rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle)));
          }
          100% {
            transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) + 360deg)));
          }
        }
        @keyframes orbit-ccw {
          0% {
            transform: translate(-50%, -50%) rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle)));
          }
          100% {
            transform: translate(-50%, -50%) rotate(calc(var(--start-angle) - 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) - 360deg)));
          }
        }
      `}} />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ecossistema tecnológico <span className="text-primary">integrado</span>
          </h2>
          <p className="font-body text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A Gentil conecta marketing e vendas através de plataformas que permitem gestão de dados, automação e inteligência comercial.
          </p>
        </motion.div>

        {/* Orbit Animation Core */}
        <div className="relative w-full max-w-[600px] h-[500px] mx-auto flex items-center justify-center mt-10">
          {/* Center Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-bg-card border border-primary/30 shadow-[0_0_30px_rgba(232,123,28,0.2)] flex items-center justify-center z-10">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20"></div>
            <span className="font-display font-bold text-xl text-white tracking-tight relative z-10">Gentil</span>
          </div>

          {/* Orbit Tracks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] max-w-[80vw] max-h-[80vw] rounded-full border border-white/5 border-dashed pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] max-w-[95vw] max-h-[95vw] rounded-full border border-white/5 border-dashed pointer-events-none" />

          {/* Decorative Nodes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" style={{ animation: `orbit-cw 15s linear infinite`, '--start-angle': `45deg`, '--radius': `min(130px, 40vw)` } as React.CSSProperties} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/30" style={{ animation: `orbit-ccw 25s linear infinite`, '--start-angle': `180deg`, '--radius': `min(210px, 47vw)` } as React.CSSProperties} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" style={{ animation: `orbit-cw 20s linear infinite`, '--start-angle': `300deg`, '--radius': `min(130px, 40vw)` } as React.CSSProperties} />

          {/* Orbiting Tools */}
          <AnimatePresence mode="popLayout">
            {innerTools.map((tool, index) => {
              const angle = (360 / innerTools.length) * index;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  className="absolute top-1/2 left-1/2 z-20 group cursor-pointer"
                  style={{
                    animation: `orbit-cw 25s linear infinite`,
                    '--start-angle': `${angle}deg`,
                    '--radius': `min(130px, 40vw)`,
                    willChange: 'transform',
                  } as React.CSSProperties}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md shadow-lg border border-white/10 hover:scale-110 transition-transform duration-300 overflow-hidden relative p-2">
                    <Image src={tool.image} alt={tool.name} fill sizes="(max-width: 768px) 56px, 56px" className="object-contain p-2" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-elevated border border-border-light text-text-primary text-xs font-body px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
                    {tool.name}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-bg-elevated border-b border-r border-border-light rotate-45"></div>
                  </div>
                </motion.div>
              );
            })}

            {outerTools.map((tool, index) => {
              const angle = (360 / outerTools.length) * index;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: (innerTools.length + index) * 0.1, type: "spring" }}
                  className="absolute top-1/2 left-1/2 z-20 group cursor-pointer"
                  style={{
                    animation: `orbit-ccw 35s linear infinite`,
                    '--start-angle': `${angle}deg`,
                    '--radius': `min(210px, 47vw)`,
                    willChange: 'transform',
                  } as React.CSSProperties}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-md shadow-lg border border-white/10 hover:scale-110 transition-transform duration-300 overflow-hidden relative p-2">
                    <Image src={tool.image} alt={tool.name} fill sizes="(max-width: 768px) 64px, 64px" className="object-contain p-2" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-elevated border border-border-light text-text-primary text-xs font-body px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
                    {tool.name}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-bg-elevated border-b border-r border-border-light rotate-45"></div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

