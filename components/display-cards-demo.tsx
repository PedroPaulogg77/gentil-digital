"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Expand, ShieldCheck, UserPlus, Component } from "lucide-react";

const myCards = [
  {
    icon: <Expand className="size-5 text-orange-500" />,
    title: "Escala operacional",
    description: "Aumente a capacidade de execução sem ampliar headcount.",
    className:
      "[grid-area:stack] hover:-translate-y-16 hover:-translate-x-16 transition-all duration-500 before:absolute before:w-full before:h-full before:bg-black/60 before:rounded-xl before:transition-opacity before:duration-500 hover:before:opacity-0 hover:z-50 z-10",
  },
  {
    icon: <ShieldCheck className="size-5 text-orange-500" />,
    title: "Governança",
    description: "Processos, rituais e indicadores claros.",
    className:
      "[grid-area:stack] translate-x-6 translate-y-6 hover:-translate-y-8 hover:-translate-x-4 transition-all duration-500 before:absolute before:w-full before:h-full before:bg-black/40 before:rounded-xl before:transition-opacity before:duration-500 hover:before:opacity-0 hover:z-50 z-20",
  },
  {
    icon: <UserPlus className="size-5 text-orange-500" />,
    title: "Especialistas sob demanda",
    description: "Profissionais técnicos alocados conforme a necessidade do projeto.",
    className:
      "[grid-area:stack] translate-x-12 translate-y-12 hover:-translate-y-0 hover:translate-x-4 transition-all duration-500 before:absolute before:w-full before:h-full before:bg-black/20 before:rounded-xl before:transition-opacity before:duration-500 hover:before:opacity-0 hover:z-50 z-30",
  },
  {
    icon: <Component className="size-5 text-orange-500" />,
    title: "Integração marketing e vendas",
    description: "Mais previsibilidade comercial e inteligência de dados.",
    className:
      "[grid-area:stack] translate-x-18 translate-y-18 hover:translate-y-8 hover:translate-x-16 transition-all duration-500 hover:z-50 z-40",
  },
];

export function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[600px] w-full items-center justify-center py-20 overflow-hidden">
      <div className="w-full max-w-3xl flex items-center justify-center">
        <DisplayCards cards={myCards} />
      </div>
    </div>
  );
}
