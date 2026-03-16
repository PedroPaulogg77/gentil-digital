'use client';
import { motion, Transition } from 'motion/react';
import { useEffect, useState } from 'react';

export type TextRollProps = {
  text1: string;
  text2: string;
  duration?: number;
  delay?: number;
  className?: string;
  transition?: Transition;
};

export function TextRoll({
  text1,
  text2,
  duration = 0.6,
  delay = 3000,
  className,
  transition = { ease: 'easeInOut' },
}: TextRollProps) {
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((s) => !s);
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);

  const letters1 = text1.split('');
  const letters2 = text2.split('');
  const maxLength = Math.max(letters1.length, letters2.length);
  
  const items = Array.from({ length: maxLength }).map((_, i) => ({
    l1: letters1[i] || '',
    l2: letters2[i] || '',
  }));

  return (
    <span className={className}>
      {items.map(({ l1, l2 }, i) => {
        return (
          <span
            key={i}
            className='relative inline-grid grid-cols-1 grid-rows-1 place-items-center [perspective:10000px] [transform-style:preserve-3d] [width:auto]'
            aria-hidden='true'
          >
            <motion.span
              className='col-start-1 row-start-1 inline-block [backface-visibility:hidden] [transform-origin:50%_50%]'
              initial={false}
              animate={{ 
                rotateX: isSwapped ? 90 : 0,
                opacity: isSwapped ? 0 : 1,
                y: isSwapped ? -10 : 0,
              }}
              transition={{
                ...transition,
                duration,
                delay: i * 0.03,
              }}
            >
              {l1 === ' ' ? '\u00A0' : l1}
            </motion.span>
            <motion.span
              className='col-start-1 row-start-1 inline-block [backface-visibility:hidden] [transform-origin:50%_50%]'
              initial={false}
              animate={{ 
                rotateX: isSwapped ? 0 : -90,
                opacity: isSwapped ? 1 : 0,
                y: isSwapped ? 0 : 10,
              }}
              transition={{
                ...transition,
                duration,
                delay: i * 0.03,
              }}
            >
              {l2 === ' ' ? '\u00A0' : l2}
            </motion.span>
            
            {/* Invisible placeholders to maintain width without layout jumps */}
            <span className='invisible col-start-1 row-start-1'>
              {l1 === ' ' ? '\u00A0' : l1}
            </span>
            <span className='invisible col-start-1 row-start-1'>
              {l2 === ' ' ? '\u00A0' : l2}
            </span>
          </span>
        );
      })}
      <span className='sr-only'>{isSwapped ? text2 : text1}</span>
    </span>
  );
}
