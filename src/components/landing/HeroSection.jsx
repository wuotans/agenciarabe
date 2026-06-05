import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Headset, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection({ heroImage }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState('center');
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const updateImagePosition = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setImagePosition('35% 25%'); // celular pequeno
      } else if (width < 768) {
        setImagePosition('40% 20%'); // celular grande
      } else if (width < 1024) {
        setImagePosition('center'); // tablet
      } else {
        setImagePosition('center'); // desktop
      }
    };
    
    updateImagePosition();
    window.addEventListener('resize', updateImagePosition);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateImagePosition);
    };
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background Image com Parallax e correção mobile */}
      <motion.div 
        style={{ y, opacity }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src={heroImage}
            alt="Equipe colaborando em ambiente corporativo"
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
          {/* Gradient Overlays responsivos */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent lg:via-obsidian/30" />
          <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
        </div>
      </motion.div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-32 h-32 bg-bronze/5 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Watermark - AJUSTE AQUI OS VALORES */}
      <motion.span
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        animate={{ opacity: 0.15, x: 0, rotate: 0 }}
        transition={{ duration: 2, delay: 1, type: "spring" }}
        className="absolute font-heading font-black text-alabaster leading-none select-none pointer-events-none overflow-visible whitespace-nowrap"
        style={{
          right: '300px',      // ← MUDE: distancia da direita
          bottom: '100px',    // ← MUDE: distancia de baixo (mobile)
          fontSize: '20rem',  // ← MUDE: tamanho
          opacity: 0.15
        }}
      >
        rabe
      </motion.span>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full pb-16 pt-32 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-bronze text-[0.6rem] sm:text-[0.7rem] tracking-[0.25em] font-semibold uppercase mb-4 sm:mb-6 inline-flex items-center gap-2 text-center lg:text-left justify-center lg:justify-start">
              <Sparkles className="w-3 h-3 animate-pulse" />
              GESTÃO DE ENDOMARKETING & SOCIAL
              <Sparkles className="w-3 h-3 animate-pulse" />
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold text-alabaster leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 text-center lg:text-left"
          >
            Conexão interna
            <br />
            que gera cultura,
            <br />
            engajamento e
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1, type: "spring" }}
              className="font-display italic text-bronze inline-block"
            >
              resultados.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-concrete text-xs sm:text-sm lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0 mb-6 sm:mb-10 text-center lg:text-left"
          >
            Apoiamos profissionais de RH na construção de experiências que fortalecem pessoas, alinham propósitos e impulsionam a performance do negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <motion.a
              href="https://wa.me/556581560892"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-alabaster text-obsidian px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-semibold w-full sm:w-fit hover:bg-bronze hover:text-obsidian transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(37, 211, 102, 0)",
                  "0 0 0 10px rgba(37, 211, 102, 0.3)",
                  "0 0 0 0 rgba(37, 211, 102, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </motion.div>
              FALAR NO WHATSAPP
            </motion.a>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-concrete text-[0.6rem] sm:text-xs">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Headset className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </motion.div>
              <span>Atendimento rápido e personalizado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}