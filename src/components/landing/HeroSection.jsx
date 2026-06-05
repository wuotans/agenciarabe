import { motion } from 'framer-motion';
import { MessageCircle, Headset } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Equipe colaborando em ambiente corporativo"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
      </motion.div>

      {/* Watermark */}
      <motion.span
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute right-0 bottom-12 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 text-[12rem] lg:text-[22rem] font-heading font-black text-alabaster leading-none select-none pointer-events-none hidden md:block overflow-visible whitespace-nowrap px-4"
        style={{ 
          overflow: 'visible',
          whiteSpace: 'nowrap',

          paddingRight: '390px'
        }}
      >
        rabe
      </motion.span>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pb-16 pt-32 lg:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-bronze text-[0.7rem] tracking-[0.25em] font-semibold uppercase mb-6"
          >
            GESTÃO DE ENDOMARKETING & SOCIAL
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold text-alabaster leading-[1.1] mb-6"
          >
            Conexão interna
            <br />
            que gera cultura,
            <br />
            engajamento e
            <br />
            <span className="font-display italic text-bronze">resultados.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-concrete text-sm lg:text-base leading-relaxed max-w-md mb-10"
          >
            Apoiamos profissionais de RH na construção de experiências que fortalecem pessoas, alinham propósitos e impulsionam a performance do negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col gap-3"
          >
            <a
              href="https://wa.me/556581560892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-alabaster text-obsidian px-8 py-4 rounded-full text-sm font-semibold w-fit hover:bg-bronze hover:text-obsidian transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              FALAR NO WHATSAPP
            </a>
            <div className="flex items-center gap-2 text-concrete text-xs">
              <Headset className="w-3.5 h-3.5" />
              <span>Atendimento rápido e personalizado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}