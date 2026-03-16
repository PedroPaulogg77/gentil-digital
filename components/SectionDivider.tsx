import { ChevronDown } from 'lucide-react';

export function SectionDivider() {
  return (
    <div className="absolute top-0 left-0 w-full flex items-end justify-center z-20 pointer-events-none -mt-[24px]">
      <div className="flex-grow h-[1px] bg-border-default"></div>
      <div className="relative flex justify-center items-end shrink-0">
        <svg 
          width="120" 
          height="25" 
          viewBox="0 0 120 25" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-border-default"
        >
          <path 
            d="M0 24.5 C35 24.5 35 0.5 60 0.5 C85 0.5 85 24.5 120 24.5" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="#050505" 
          />
        </svg>
        <div className="absolute bottom-[6px] text-white">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      <div className="flex-grow h-[1px] bg-border-default"></div>
    </div>
  );
}
