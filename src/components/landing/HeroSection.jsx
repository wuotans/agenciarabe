import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Headset, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection({ heroImage }) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y, opacity }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src={heroImage}
            alt="Equipe colaborando em ambiente corporativo"
            className="
              w-full
              h-full
              object-cover
              object-[70%_center]
              sm:object-[65%_center]
              md:object-[60%_center]
              lg:object-center
            "
          />

          {/* GRADIENTES MAIS CLAROS - SEM ESCURECER O ROSTO */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent lg:from-obsidian/60 lg:via-transparent" />
          <div className="absolute inset-0 bg-black/10 lg:bg-transparent" />
        </div>
      </motion.div>

      {/* Mouse Glow */}
      <motion.div
        className="fixed w-32 h-32 bg-bronze/5 rounded-full blur-3xl pointer-events-none z-0 hidden lg:block"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Watermark - RESPONSIVO */}
      <motion.span
        initial={{
          opacity: 0,
          x: 100,
          rotate: 10,
        }}
        animate={{
          opacity: 0.12,
          x: 0,
          rotate: 0,
        }}
        transition={{
          duration: 2,
          delay: 1,
          type: 'spring',
        }}
        className="
          absolute
          font-heading
          font-black
          text-white
          leading-none
          select-none
          pointer-events-none
          whitespace-nowrap
          hidden
          lg:block
        "
        style={{
          right: 'clamp(100px, 10vw, 250px)',
          bottom: 'clamp(40px, 8vh, 80px)',
          fontSize: 'clamp(8rem, 10vw, 18rem)',
        }}
      >
        rabe
      </motion.span>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 w-full pb-24 pt-36 lg:py-0">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <p className="text-bronze text-[0.6rem] sm:text-[0.7rem] tracking-[0.25em] font-semibold uppercase mb-4 sm:mb-6 inline-flex items-center gap-2 text-center lg:text-left justify-center lg:justify-start">
              <Sparkles className="w-3 h-3 animate-pulse" />
              GESTÃO DE ENDOMARKETING & SOCIAL
              <Sparkles className="w-3 h-3 animate-pulse" />
            </p>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[3.5rem]
              xl:text-6xl
              font-heading
              font-bold
              text-white
              leading-[1.1]
              mb-4
              sm:mb-6
              text-center
              lg:text-left
            "
          >
            Conexão interna
            <br />
            que gera cultura,
            <br />
            engajamento e
            <br />
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
                type: 'spring',
              }}
              className="font-display italic text-bronze inline-block"
            >
              resultados.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="
              text-concrete
              text-xs
              sm:text-sm
              lg:text-base
              leading-relaxed
              max-w-md
              mx-auto
              lg:mx-0
              mb-6
              sm:mb-10
              text-center
              lg:text-left
            "
          >
            Apoiamos profissionais de RH na construção de experiências que
            fortalecem pessoas, alinham propósitos e impulsionam a performance
            do negócio.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="flex flex-col items-center lg:items-start gap-3"
          >
            <motion.a
              href="https://wa.me/556581560892"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-white
                text-black
                px-8
                py-4
                rounded-full
                text-sm
                font-semibold
                shadow-xl
                hover:bg-[#C9A26B]
                hover:text-white
                transition-all
                duration-300
              "
            >
              <MessageCircle className="w-5 h-5" />
              FALAR NO WHATSAPP
            </motion.a>

            <div className="flex items-center gap-2 text-concrete text-xs">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Headset className="w-3.5 h-3.5" />
              </motion.div>

              <span>Atendimento rápido e personalizado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}