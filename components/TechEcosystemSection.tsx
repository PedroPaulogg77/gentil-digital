'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Zap, LayoutDashboard, Megaphone, LineChart } from 'lucide-react';
import { SectionDivider } from './SectionDivider';

import Image from 'next/image';

const CATEGORIES = [
  { id: 'CRM', label: 'CRM', icon: Database },
  { id: 'Automação', label: 'Automação', icon: Zap },
  { id: 'Gestão', label: 'Gestão', icon: LayoutDashboard },
  { id: 'Mídia e performance', label: 'Mídia e performance', icon: Megaphone },
  { id: 'Analytics', label: 'Analytics', icon: LineChart },
];

const TOOLS_DATA = {
  "CRM": [
    { name: "HubSpot", image: "/LOGOS PARCEIROS/CRM/HUBSPOT.png" },
    { name: "RD Station", image: "/LOGOS PARCEIROS/CRM/RD STATION.png" },
    { name: "Agendor", image: "/LOGOS PARCEIROS/CRM/Agendor.png" }
  ],
  "Automação": [
    { name: "RD Station", image: "/LOGOS PARCEIROS/AUTOMACAO/RD STATION.png" },
    { name: "HubSpot", image: "/LOGOS PARCEIROS/AUTOMACAO/HUBSPOT.png" }
  ],
  "Gestão": [
    { name: "Asana", image: "/LOGOS PARCEIROS/GESTAO/ASANA.png" },
    { name: "Notion", image: "/LOGOS PARCEIROS/GESTAO/NOTION.png" }
  ],
  "Mídia e performance": [
    { name: "Google Ads", image: "/LOGOS PARCEIROS/MIDIA E PERFOMANCE/GOOGLE ADS.png" },
    { name: "Meta Ads", image: "/LOGOS PARCEIROS/MIDIA E PERFOMANCE/META ADS.png" },
    { name: "LinkedIn Ads", image: "/LOGOS PARCEIROS/MIDIA E PERFOMANCE/LINKEDIN ADS.png" }
  ],
  "Analytics": [
    { name: "GA4", image: "/LOGOS PARCEIROS/ANALYTICS/GA4.webp" },
    { name: "Looker Studio", image: "/LOGOS PARCEIROS/ANALYTICS/LOOKER.png" }
  ]
};

export function TechEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState('CRM');

  const activeTools = TOOLS_DATA[activeCategory as keyof typeof TOOLS_DATA];

  return (
    <section id="ecossistema" className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
      <SectionDivider />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle)));
          }
          100% {
            transform: translate(-50%, -50%) rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) + 360deg)));
          }
        }
      `}} />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ecossistema tecnológico <span className="text-primary">integrado</span>
          </h2>
          <p className="font-body text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            A Gentil conecta marketing e vendas através de plataformas que permitem gestão de dados, automação e inteligência comercial.
          </p>
        </motion.div>

        {/* Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 relative z-20">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 border ${
                  isActive 
                    ? 'bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(232,123,28,0.15)]' 
                    : 'bg-bg-card border-border-card text-text-secondary hover:text-text-primary hover:border-border-light'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-text-muted'}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Orbit Animation Core */}
        <div className="relative w-full max-w-[600px] h-[500px] mx-auto flex items-center justify-center mt-10">
          {/* Center Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-bg-card border border-primary/30 shadow-[0_0_30px_rgba(232,123,28,0.2)] flex items-center justify-center z-10">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-20"></div>
            <span className="font-display font-bold text-xl text-white tracking-tight relative z-10">Gentil</span>
          </div>

          {/* Orbit Tracks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-white/5 border-dashed pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-white/5 border-dashed pointer-events-none" />

          {/* Decorative Nodes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" style={{ animation: `orbit 15s linear infinite`, '--start-angle': `45deg`, '--radius': `130px` } as React.CSSProperties} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/30" style={{ animation: `orbit 25s linear infinite`, '--start-angle': `180deg`, '--radius': `210px` } as React.CSSProperties} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" style={{ animation: `orbit 20s linear infinite`, '--start-angle': `300deg`, '--radius': `130px` } as React.CSSProperties} />

          {/* Orbiting Tools */}
          <AnimatePresence mode="popLayout">
            {activeTools.map((tool, index) => {
              const total = activeTools.length;
              const angle = (360 / total) * index;
              const radius = index % 2 === 0 ? 130 : 210; // 130px for inner (260/2), 210px for outer (420/2)
              const duration = 20 + (index % 2 === 0 ? 0 : 10); // Inner rotates faster than outer

              return (
                <motion.div
                  key={tool.name + activeCategory}
                  initial={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                  className="absolute top-1/2 left-1/2 z-20 group cursor-pointer"
                  style={{
                    animation: `orbit ${duration}s linear infinite`,
                    '--start-angle': `${angle}deg`,
                    '--radius': `${radius}px`,
                  } as React.CSSProperties}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-lg border border-white/10 hover:scale-110 transition-transform duration-300 overflow-hidden relative p-2`}>
                    <Image src={tool.image} alt={tool.name} fill className="object-contain p-2" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-elevated border border-border-light text-text-primary text-xs font-body px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
                    {tool.name}
                    {/* Tooltip Arrow */}
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

