"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Mobile3DCarouselProps {
  cards: CarouselCardProps[];
}

export function Mobile3DCarousel({ cards }: Mobile3DCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Container viewport */}
      <div className="relative w-full max-w-[300px] h-[260px] flex items-center justify-center perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => {
            // Determine position relative to active card
            let offset = index - activeIndex;
            // Handle wrap-around math for smooth infinite visual (optional, keeping it simple for now)
            if (offset < -1) offset += cards.length;
            if (offset > 1) offset -= cards.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // Only render center, immediate left, and immediate right cards
            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={index}
                className={cn(
                  "absolute flex h-full w-full select-none flex-col justify-start gap-4 rounded-xl border bg-neutral-950 px-6 py-6 shadow-2xl",
                  isCenter ? "border-primary/50 shadow-primary/20" : "border-white/10 shadow-black/50 cursor-pointer"
                )}
                initial={false}
                animate={{
                  x: isCenter ? 0 : isLeft ? "-65%" : "65%",
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 30 : 20,
                  rotateY: isCenter ? 0 : isLeft ? 15 : -15, // Subtle 3D tilt
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 50;
                  if (offset.x < -swipeThreshold || velocity.x < -500) {
                    handleNext();
                  } else if (offset.x > swipeThreshold || velocity.x > 500) {
                    handlePrev();
                  }
                }}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
              >
                {/* Overlay to dim non-active cards */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/40 rounded-xl z-10 pointer-events-none" />
                )}

                <div className="relative z-20">
                  <span className="relative flex items-center justify-center h-12 w-12 rounded-lg border border-primary/30 bg-primary/10 mb-4 text-primary">
                    {card.icon}
                  </span>
                  <p className="text-xl font-bold mb-2 font-display text-white">{card.title}</p>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-body relative z-20">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-border-card bg-bg-card/50 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {cards.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                idx === activeIndex ? "bg-primary w-6" : "bg-border-card"
              )}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-border-card bg-bg-card/50 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
