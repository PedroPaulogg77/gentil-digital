'use client';

import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { SectionDivider } from './SectionDivider';

export function SocialProofSection() {
  const videos = [1, 2, 3, 4];
  
  // Real logos from Google Drive
  const clientLogos = [
    "https://drive.google.com/uc?export=view&id=1wTokPo7ie-ZTganXvnWEJ2-snumue1C2",
    "https://drive.google.com/uc?export=view&id=1MRQ4E-P_F9fwCwHyPI6YN92aqgMYN81L",
    "https://drive.google.com/uc?export=view&id=13oiGgt5l6vDgzRVj5KS6erYufEcqd0Ui",
    "https://drive.google.com/uc?export=view&id=1DpPTqOT16KpUzKLWm1UoCNxXnIaPtQsL",
    "https://drive.google.com/uc?export=view&id=1me1WuTz4VuXZEwbXwNuDCjUsfjUO8oW0",
    "https://drive.google.com/uc?export=view&id=1qpYuyDSt20hXWfmVkrPJgJy5wFX3yc6Y",
    "https://drive.google.com/uc?export=view&id=14lVt1stCT5dCuY9vzM4SV_mSz0oqYxYN",
    "https://drive.google.com/uc?export=view&id=1YaomcLf-di-o6yPl8yOfvBdgcgoKmBwT",
    "https://drive.google.com/uc?export=view&id=1HAgEoAcuG5SWL8Ye8YUMVWdMtDZ94zwv",
    "https://drive.google.com/uc?export=view&id=1kCRldND9kcpMuXUey9HE61tBVgkRKrHi",
    "https://drive.google.com/uc?export=view&id=1h69Ux00Edbcc8TeR7d7XGJL_OS9NaVAP",
    "https://drive.google.com/uc?export=view&id=1oKam6iwuPzh9X_ng83K-QCCKs4t23USI"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {videos.map((vid, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-[9/16] bg-bg-card rounded-2xl overflow-hidden border border-border-card group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <Image 
                src={`https://picsum.photos/seed/gentil${vid}/400/700`} 
                alt={`Depoimento ${vid}`}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(232,123,28,0.5)]">
                  <Play className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="font-body text-sm font-bold text-white">Depoimento {vid}</p>
              </div>
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
