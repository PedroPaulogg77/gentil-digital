'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 h-[70px] bg-bg-primary/80 backdrop-blur-md border-b border-border-default"
    >
      <Link href="/" className="flex items-center">
        <div className="relative w-32 h-10">
          <Image 
            src="https://drive.google.com/uc?export=view&id=16PeG-d1FfWIPARx8sI-1XmlD73bYP7a0"
            alt="Gentil Digital"
            fill
            className="object-contain object-left"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="#modelo" className="font-body text-xs font-semibold tracking-widest text-text-secondary uppercase hover:text-text-primary transition-colors">
          O Modelo
        </Link>
        <Link href="#beneficios" className="font-body text-xs font-semibold tracking-widest text-text-secondary uppercase hover:text-text-primary transition-colors">
          Benefícios
        </Link>
        <Link href="#ecossistema" className="font-body text-xs font-semibold tracking-widest text-text-secondary uppercase hover:text-text-primary transition-colors">
          Ecossistema
        </Link>
        <Link href="#contato" className="btn-primary h-[36px] px-5 text-[0.65rem]">
          Agendar Conversa
        </Link>
      </div>
    </motion.nav>
  );
}
