import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ContatoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contato" className="py-20 lg:py-28 bg-card border-t border-white/5" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          {/* Left */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-heading font-bold text-alabaster leading-tight">
                Vamos transformar a cultura da sua empresa?
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
            <p className="text-concrete text-sm leading-relaxed max-w-sm">
              Fale com a gente e descubra como podemos fortalecer o engajamento, a comunicação interna e gerar resultados reais.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-[#20BD5C] transition-all duration-300 group flex-shrink-0"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}