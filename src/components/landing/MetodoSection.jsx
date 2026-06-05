import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    description: 'Análise da cultura, comunicação atual e riscos psicossociais conforme diretrizes da NR-1.',
  },
  {
    num: '02',
    title: 'Estratégia',
    description: 'Planejamento estratégico com foco em bem-estar, engajamento e performance.',
  },
  {
    num: '03',
    title: 'Criação',
    description: 'Desenvolvimento de conteúdos e campanhas com base em ciência e comportamento humano.',
  },
  {
    num: '04',
    title: 'Implementação',
    description: 'Execução com profissionais qualificados e processos estruturados.',
  },
  {
    num: '05',
    title: 'Acompanhamento',
    description: 'Mensuração de resultados, ajustes contínuos e prevenção conforme a NR-1.',
  },
];

export default function MetodoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metodo" className="py-20 lg:py-32 bg-obsidian border-t border-white/5" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:max-w-sm flex-shrink-0"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-alabaster leading-tight mb-4">
              Nosso método é
              <br />
              baseado na <span className="font-display italic text-bronze">NR-1</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-concrete text-sm lg:text-base leading-relaxed max-w-lg"
          >
            Unimos estratégia, ciência e propósito para transformar comunicação em resultados sustentáveis, sempre em conformidade com as diretrizes da NR-1.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="relative group"
            >
              {/* Number circle */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-bronze/40 flex items-center justify-center group-hover:border-bronze group-hover:bg-bronze/10 transition-all duration-500">
                  <span className="text-bronze font-heading font-bold text-sm">{step.num}</span>
                </div>
                {/* Connecting line (hidden on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-[1px] bg-white/10 group-hover:bg-bronze/20 transition-colors" />
                )}
              </div>

              <h3 className="text-alabaster font-heading font-bold text-base mb-2">{step.title}</h3>
              <p className="text-concrete text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}