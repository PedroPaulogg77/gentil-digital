'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SectionDivider } from './SectionDivider';

export function ConversionSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  return (
    <section id="contato" className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
      <SectionDivider />
      {/* Animated Border Card Effect */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-[#FFD093] to-primary-light p-[2px] animate-[borderGlow_4s_linear_infinite] bg-[length:300%_300%]">
          <div className="absolute inset-[2px] bg-bg-card rounded-[calc(1.5rem-2px)]" />
        </div>

        <div className="relative z-10 p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Vamos estruturar a operação de marketing da <span className="text-primary">sua empresa?</span>
              </h2>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-8">
                Realizamos uma conversa estratégica para entender o momento da sua operação e avaliar como um squad Gentil pode apoiar seu time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setErro(null);
                  setLoading(true);
                  const form = e.currentTarget;
                  const data = {
                    nome: (form.elements.namedItem('nome') as HTMLInputElement).value,
                    empresa: (form.elements.namedItem('empresa') as HTMLInputElement).value,
                    email: (form.elements.namedItem('email') as HTMLInputElement).value,
                    whatsapp: (form.elements.namedItem('whatsapp') as HTMLInputElement).value,
                    faturamento: (form.elements.namedItem('faturamento') as HTMLSelectElement).value,
                    segmento: (form.elements.namedItem('segmento') as HTMLSelectElement).value,
                    momento: (form.elements.namedItem('momento') as HTMLSelectElement).value,
                  };
                  try {
                    const res = await fetch('https://api.web3forms.com/submit', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        access_key: 'b4ff9600-4177-4be4-b144-79547af42034',
                        subject: 'Novo lead do site - Gentil Digital',
              from_name: 'Gentil Digital - Site',
              ...data,
                      }),
                    });
              const result = await res.json();
              if (!result.success) {
                      throw new Error(result.message || 'Erro ao enviar formulário.');
                    }
              router.push('/obrigado');
                  } catch (err) {
                setErro(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.');
              setLoading(false);
                  }
                }}
              >
              <div className="relative">
                <input
                  type="text"
                  id="nome"
                  required
                  placeholder=" "
                  className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                />
                <label htmlFor="nome" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                  Nome
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="empresa"
                  required
                  placeholder=" "
                  className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                />
                <label htmlFor="empresa" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                  Empresa
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder=" "
                  className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                />
                <label htmlFor="email" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  placeholder=" "
                  className="w-full h-14 px-5 pt-4 pb-2 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all peer"
                />
                <label htmlFor="whatsapp" className="absolute left-5 top-1/2 -translate-y-1/2 font-body text-sm text-text-muted pointer-events-none transition-all peer-focus:top-3.5 peer-focus:text-[0.6rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary peer-not-placeholder-shown:top-3.5 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:uppercase peer-not-placeholder-shown:tracking-wider peer-not-placeholder-shown:text-text-secondary">
                  WhatsApp
                </label>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="faturamento" className="font-body text-sm font-bold tracking-wider uppercase text-text-secondary text-[0.6rem]">
                  Qual o faturamento mensal da sua empresa?
                </label>
                <div className="relative">
                  <select
                    id="faturamento"
                    required
                    defaultValue=""
                    className="w-full h-14 px-5 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Até 100 mil">Até 100 mil</option>
                    <option value="De 101 mil à 200 mil">De 101 mil a 200 mil</option>
                    <option value="De 201 mil à 400 mil">De 201 mil a 400 mil</option>
                    <option value="De 401 mil à 1 milhão">De 401 mil a 1 milhão</option>
                    <option value="De 1 a 4 milhões">De 1 a 4 milhões</option>
                    <option value="De 4 a 16 milhões">De 4 a 16 milhões</option>
                    <option value="De 16 a 40 milhões">De 16 a 40 milhões</option>
                    <option value="Mais de 40 milhões">Mais de 40 milhões</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="segmento" className="font-body text-sm font-bold tracking-wider uppercase text-text-secondary text-[0.6rem]">
                  Qual é seu segmento?
                </label>
                <div className="relative">
                  <select
                    id="segmento"
                    required
                    defaultValue=""
                    className="w-full h-14 px-5 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Industria">Indústria</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Agro">Agro</option>
                    <option value="Educação">Educação</option>
                    <option value="Varejo">Varejo</option>
                    <option value="SAAS">SaaS</option>
                    <option value="OUTRO">Outro</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="momento" className="font-body text-sm font-bold tracking-wider uppercase text-text-secondary text-[0.6rem]">
                  Qual é o seu momento?
                </label>
                <div className="relative">
                  <select
                    id="momento"
                    required
                    defaultValue=""
                    className="w-full h-14 px-5 bg-bg-input border border-border-default rounded-md text-text-primary font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Já tenho um responsável interno de marketing">Já tenho um responsável interno de marketing</option>
                    <option value="Já tenho uma equipe interna de marketing">Já tenho uma equipe interna de marketing</option>
                    <option value="Ainda não tenho depto nem responsável de marketing internos">Ainda não tenho depto nem responsável de marketing internos</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted" />
                    </svg>
                  </div>
                </div>
              </div>

              {erro && (
                <p className="text-red-500 text-sm text-center">{erro}</p>
              )}
              <button type="submit" disabled={loading} className="btn-primary w-full mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? 'Enviando...' : 'Agendar conversa estratégica'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
    </section >
  );
}
