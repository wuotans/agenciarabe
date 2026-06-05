import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'SOLUÇÕES', href: '#solucoes' },
  { label: 'MÉTODO', href: '#metodo' },
  { label: 'PALESTRAS', href: '#palestras' },
  { label: 'SOBRE', href: '#sobre' },
  { label: 'CONTATO', href: '#contato' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#inicio" className="text-alabaster font-heading font-black text-2xl lg:text-3xl tracking-tight">
          rabe
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.7rem] tracking-[0.2em] text-concrete hover:text-alabaster transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop WhatsApp CTA */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 border border-alabaster/20 text-alabaster px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-alabaster hover:text-obsidian transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          FALAR NO WHATSAPP
        </a>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-alabaster/20 text-alabaster px-4 py-2 rounded-full text-[0.65rem] font-semibold tracking-wide"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            FALAR NO WHATSAPP
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-alabaster p-1">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-obsidian/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-xs tracking-[0.2em] text-concrete hover:text-alabaster transition-colors font-medium py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}