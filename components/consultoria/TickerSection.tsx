'use client';

const items = [
  'Sem custo inicial',
  'Entrega prática já na primeira conversa',
  'Para empresas com operação ativa',
];

export function TickerSection() {
  return (
    <div className="bg-bg-secondary border-y border-white/5 py-10 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Desktop: linha horizontal com pontos */}
        <div className="hidden md:block relative">
          {/* Linha contínua */}
          <div className="absolute top-[7px] left-[calc(16.666%)] right-[calc(16.666%)] h-px bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" />

          <div className="flex items-start">
            {items.map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4">
                {/* Ponto de destaque */}
                <div className="w-3.5 h-3.5 rounded-full bg-primary ring-[5px] ring-primary/20 shadow-[0_0_12px_rgba(232,123,28,0.5)] relative z-10" />
                {/* Texto */}
                <p className="font-body text-sm font-medium text-white/80 text-center leading-snug max-w-[180px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: linha vertical com pontos */}
        <div className="flex md:hidden flex-col items-start gap-0 pl-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 relative">
              {/* Linha vertical */}
              {i < items.length - 1 && (
                <div className="absolute left-[6px] top-[14px] w-px h-full bg-gradient-to-b from-primary/60 to-primary/20" />
              )}
              {/* Ponto */}
              <div className="w-3.5 h-3.5 rounded-full bg-primary ring-[5px] ring-primary/20 shadow-[0_0_12px_rgba(232,123,28,0.5)] shrink-0 mt-0.5 relative z-10" />
              {/* Texto */}
              <p className="font-body text-sm font-medium text-white/80 leading-snug pb-6">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
