import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mic, ExternalLink } from 'lucide-react';

export default function PalestrasSection({ palestrasImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="palestras" className="py-20 lg:py-32 bg-obsidian border-t border-white/5" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-card border border-white/5 rounded-3xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image + Title */}
            <div className="lg:w-2/5 relative overflow-hidden">
              <div className="p-8 lg:p-12 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-bronze/10 flex items-center justify-center mb-6">
                  <Mic className="w-7 h-7 text-bronze" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-alabaster leading-tight">
                  Palestras que
                  <br />
                  inspiram{' '}
                  <span className="font-display italic text-bronze">mudanças</span>
                  <br />
                  <span className="font-display italic text-bronze">reais</span>
                </h2>
              </div>
              {/* Subtle image background */}
              <div className="absolute inset-0 opacity-10">
                <img src={palestrasImage} alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right: Description + CTA */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
              <p className="text-concrete text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
                Palestras com base científica e conduzidas por profissionais qualificados, que geram reflexão, engajamento e transformação no ambiente de trabalho.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-3 border border-alabaster/20 text-alabaster px-6 py-3 rounded-full text-sm font-semibold w-fit hover:bg-alabaster hover:text-obsidian transition-all duration-300 group"
              >
                CONHECER PALESTRAS
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}