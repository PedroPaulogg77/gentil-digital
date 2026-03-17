"use client";

import { cn } from "@/lib/utils";
import { Expand, ShieldCheck, UserPlus, Component } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Expand className="size-5 text-primary" />,
  title = "Escala operacional",
  description = "Aumente a capacidade de execução sem ampliar headcount.",
  iconClassName = "text-primary",
  titleClassName = "text-white",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-56 w-[22rem] select-none flex-col justify-start gap-4 rounded-xl border border-white/10 bg-neutral-950 px-6 py-6 transition duration-700 hover:border-primary/50 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
    >
      <div>
        <span className="relative flex items-center justify-center h-12 w-12 rounded-lg border border-primary/30 bg-primary/10 mb-4 text-primary">
          {icon}
        </span>
        <p className={cn("text-xl font-bold mb-2 font-display", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed font-body">{description}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-12 before:absolute before:w-full before:h-full before:bg-black/40 before:rounded-xl before:transition-opacity before:duration-700 hover:before:opacity-0 hover:z-50 z-10",
    },
    {
      className: "[grid-area:stack] translate-x-6 translate-y-6 hover:-translate-y-6 before:absolute before:w-full before:h-full before:bg-black/40 before:rounded-xl before:transition-opacity before:duration-700 hover:before:opacity-0 hover:z-50 z-20",
    },
    {
      className: "[grid-area:stack] translate-x-12 translate-y-12 hover:-translate-y-0 before:absolute before:w-full before:h-full before:bg-black/40 before:rounded-xl before:transition-opacity before:duration-700 hover:before:opacity-0 hover:z-50 z-30",
    },
    {
      className: "[grid-area:stack] translate-x-18 translate-y-18 hover:translate-y-6 hover:z-50 z-40",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
