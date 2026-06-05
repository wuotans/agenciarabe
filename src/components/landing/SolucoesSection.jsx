import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, MessageSquare, BarChart3 } from 'lucide-react';

const cards = [
  {
    icon: Heart,
    title: 'Cultura que se vive',
    description: 'Transformamos valores em mensagens que geram pertencimento e conexão.',
  },
  {
    icon: Users,
    title: 'Engajamento real',
    description: 'Criamos conexões que motivam, reconhecem e aumentam o envolvimento das pessoas.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação que conecta',
    description: 'Conteúdos estratégicos e campanhas que informam, alinham e inspiram com clareza.',
  },
  {
    icon: BarChart3,
    title: 'Resultados que importam',
    description: 'Ações com objetivos claros e indicadores relevantes para o RH e para o negócio.',
  },
];

export default function SolucoesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solucoes" className="py-20 lg:py-32 bg-obsidian border-t border-white/5" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16 mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl lg:text-4xl font-heading font-bold text-alabaster leading-tight lg:max-w-sm flex-shrink-0"
          >
            Soluções que
            <br />
            transformam
            <br />
            <span className="font-display italic text-bronze">comunicação</span>
            <br />
            em cultura.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-concrete text-sm lg:text-base leading-relaxed max-w-md lg:pt-2"
          >
            Estratégias de endomarketing e social que fortalecem vínculos, engajam equipes e tornam a comunicação parte do dia a dia da empresa.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-card border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-bronze/30 transition-all duration-500 group"
            >
              <div className="w-10 h-10 rounded-xl bg-bronze/10 flex items-center justify-center mb-5 group-hover:bg-bronze/20 transition-colors">
                <card.icon className="w-5 h-5 text-bronze" />
              </div>
              <h3 className="text-alabaster font-heading font-bold text-base mb-3">{card.title}</h3>
              <p className="text-concrete text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}