import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  ChevronRight,
  Instagram,
  Linkedin,
  Menu,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Play,
  UsersRound,
  X,
} from 'lucide-react';

const WHATSAPP = 'https://wa.me/5565992455040';

const solutions = [
  {
    number: '01',
    title: 'APLICATIVOS\nE SISTEMAS',
    text: 'Desenvolvemos plataformas personalizadas que otimizam processos e elevam a experiência do seu cliente.',
    icon: Boxes,
    visual: 'cubes',
  },
  {
    number: '02',
    title: 'AUTOMAÇÃO\nCOM IA',
    text: 'Automatizamos tarefas, integramos processos e aplicamos inteligência artificial para gerar eficiência e escalabilidade.',
    icon: BrainCircuit,
    visual: 'brain',
  },
  {
    number: '03',
    title: 'SITES E LANDINGS\nDE ALTO IMPACTO',
    text: 'Sites rápidos, modernos e otimizados para converter visitantes em clientes e fortalecer sua presença digital.',
    icon: MonitorSmartphone,
    visual: 'screen',
  },
  {
    number: '04',
    title: 'SOCIAL MEDIA\nESTRATÉGICO',
    text: 'Planejamento, criação e gestão de conteúdo que conecta, engaja e posiciona sua marca onde seu público está.',
    icon: Megaphone,
    visual: 'megaphone',
  },
  {
    number: '05',
    title: 'DESIGN GRÁFICO\nE IDENTIDADE VISUAL',
    text: 'Criamos identidades visuais marcantes e materiais gráficos que comunicam profissionalismo e geram desejo.',
    icon: Palette,
    visual: 'pen',
  },
  {
    number: '06',
    title: 'ENDOMARKETING\nE COMUNICAÇÃO INTERNA',
    text: 'Soluções que fortalecem a cultura, engajam equipes e transformam colaboradores em protagonistas da sua marca.',
    icon: UsersRound,
    visual: 'people',
  },
];

const steps = [
  ['01', 'ESCUTA E\nDIAGNÓSTICO', 'Entendemos seu negócio, desafios e objetivos.'],
  ['02', 'ESTRATÉGIA\nPERSONALIZADA', 'Desenhamos a melhor rota com tecnologia e criatividade.'],
  ['03', 'DESENVOLVIMENTO\nE EXECUÇÃO', 'Transformamos ideias em soluções funcionais e escaláveis.'],
  ['04', 'LANÇAMENTO\nE ACOMPANHAMENTO', 'Entregamos, analisamos e evoluímos continuamente.'],
];

function BrandLogo({ className = '' }) {
  return <img src="/logo_rabe_branca.png" alt="Rabe" className={className} />;
}

function OrbitalBrand({ compact = false }) {
  return (
    <div className={`orbital-scene ${compact ? 'orbital-scene--compact' : ''}`} aria-hidden="true">
      <div className="orbital-glow" />
      <motion.div
        className="orbit-ring orbit-ring--back"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="brand-sphere"
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>rabe</span>
      </motion.div>
      <motion.div
        className="orbit-ring orbit-ring--front"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div className="small-sphere small-sphere--one" animate={{ y: [0, -14, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="small-sphere small-sphere--two" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="small-sphere small-sphere--three" animate={{ x: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity }} />
    </div>
  );
}

function AbstractVisual({ type, Icon }) {
  return (
    <div className={`solution-visual solution-visual--${type}`}>
      <div className="solution-visual__halo" />
      <Icon strokeWidth={1.15} />
      <span className="solution-visual__reflection" />
    </div>
  );
}

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#inicio" className="topbar__logo" aria-label="Voltar ao início">
          <BrandLogo />
        </a>

        <nav className="topbar__nav" aria-label="Navegação principal">
          <a href="#inicio">INÍCIO</a>
          <a href="#solucoes">SOLUÇÕES</a>
          <a href="#metodo">COMO FAZEMOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>

        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="outline-button topbar__cta">
          FALAR COM ESPECIALISTA
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <Menu />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={closeMenu} aria-label="Fechar menu"><X /></button>
            {['inicio', 'solucoes', 'metodo', 'sobre', 'contato'].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>{item === 'metodo' ? 'COMO FAZEMOS' : item.toUpperCase()}</a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="solid-button">FALAR COM ESPECIALISTA</a>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="inicio" className="hero section-width">
        <div className="hero__copy">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="eyebrow">
            RABE SOLUÇÕES DIGITAIS
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
            TECNOLOGIA.<br />
            CRIATIVIDADE.<br />
            RESULTADOS<br />
            REAIS.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            Transformamos ideias em soluções digitais inteligentes que conectam marcas, pessoas e resultados.
          </motion.p>
          <motion.div className="hero__actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="solid-button">
              VAMOS CONVERSAR <ArrowUpRight />
            </a>
            <a href="#solucoes" className="video-link"><span><Play fill="currentColor" /></span> ASSISTA AO VÍDEO</a>
          </motion.div>
        </div>
        <motion.div className="hero__art" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
          <OrbitalBrand />
        </motion.div>
      </section>

      <Reveal className="manifest section-width">
        <h2>SOLUÇÕES QUE<br />IMPULSIONAM.<br />PARCERIAS QUE<br />TRANSFORMAM.</h2>
        <p>Na Rabe, cada projeto nasce de um propósito: gerar valor de verdade para o seu negócio. Unimos estratégia, tecnologia e criatividade para entregar soluções digitais que fazem <strong>sua marca ir mais longe.</strong></p>
        <ul>
          <li>ESTRATÉGIA COM PROPÓSITO</li>
          <li>TECNOLOGIA QUE SIMPLIFICA</li>
          <li>CRIATIVIDADE QUE CONECTA</li>
          <li>RESULTADOS QUE PERDURAM</li>
        </ul>
      </Reveal>

      <section id="solucoes" className="solutions section-width content-section">
        <Reveal className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">NOSSAS SOLUÇÕES</span>
            <h2>TUDO O QUE SUA MARCA<br />PRECISA PARA EVOLUIR.</h2>
          </div>
          <p>Soluções completas, integradas e personalizadas para o seu negócio crescer com consistência no digital e no offline.</p>
        </Reveal>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <Reveal key={item.number} delay={(index % 3) * 0.08}>
              <article className="solution-card">
                <span className="solution-card__number">{item.number}</span>
                <AbstractVisual type={item.visual} Icon={item.icon} />
                <h3>{item.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <p>{item.text}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">SAIBA MAIS <ArrowUpRight /></a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="metodo" className="method section-width content-section">
        <Reveal className="section-heading section-heading--split">
          <div>
            <span className="eyebrow">COMO FAZEMOS</span>
            <h2>MÉTODO RABE.<br />SIMPLIFICAMOS O COMPLEXO.</h2>
          </div>
          <p>Um processo inteligente e colaborativo para transformar desafios em soluções digitais de alto impacto.</p>
        </Reveal>

        <Reveal className="steps-panel">
          {steps.map(([number, title, text], index) => (
            <div className="step" key={number}>
              <span className="step__number">{number}</span>
              <h3>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3>
              <p>{text}</p>
              {index < steps.length - 1 && <ChevronRight className="step__arrow" />}
            </div>
          ))}
        </Reveal>
      </section>

      <section id="sobre" className="why section-width content-section">
        <Reveal className="why__title">
          <span className="eyebrow">POR QUE RABE?</span>
          <h2>NÃO SOMOS MAIS<br />UMA AGÊNCIA.<br /><strong>SOMOS SEU HUB<br />DE CRESCIMENTO.</strong></h2>
        </Reveal>
        <Reveal className="why__panel" delay={0.1}>
          <ul>
            <li><strong>SOLUÇÕES COMPLETAS</strong><span>PARA TODAS AS NECESSIDADES DIGITAIS</span></li>
            <li><strong>EQUIPE MULTIDISCIPLINAR</strong><span>ESPECIALISTAS QUE ENTREGAM RESULTADOS</span></li>
            <li><strong>TECNOLOGIA E CRIATIVIDADE</strong><span>CONECTADAS AO SEU NEGÓCIO</span></li>
            <li><strong>FOCO TOTAL EM RESULTADOS</strong><span>ESTRATÉGIA, EXECUÇÃO E PERFORMANCE</span></li>
          </ul>
          <div className="why__cube"><Boxes /></div>
        </Reveal>
      </section>

      <Reveal className="final-cta section-width" id="contato">
        <h2>PRONTO PARA<br />TRANSFORMAR<br /><strong>SUA MARCA?</strong></h2>
        <div className="final-cta__copy">
          <p>Fale com um especialista e descubra como a Rabe pode levar seu negócio para o próximo nível no digital.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="solid-button">QUERO FALAR COM ESPECIALISTA <ArrowUpRight /></a>
        </div>
        <div className="final-cta__sphere" />
      </Reveal>

      <footer className="footer section-width">
        <div className="footer__brand">
          <BrandLogo />
          <p>Soluções digitais que conectam estratégia, criatividade e tecnologia para impulsionar negócios.</p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin /></a>
          </div>
        </div>
        <div className="footer__column"><strong>NAVEGAÇÃO</strong><a href="#inicio">Início</a><a href="#solucoes">Soluções</a><a href="#metodo">Como fazemos</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></div>
        <div className="footer__column"><strong>SOLUÇÕES</strong>{solutions.map((item) => <a key={item.number} href="#solucoes">{item.title.replace('\n', ' ')}</a>)}</div>
        <div className="footer__contact"><strong>FALE CONOSCO</strong><p>Vamos criar algo incrível juntos.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="outline-button">FALAR COM ESPECIALISTA <ArrowUpRight /></a><span>contato@rabe.com.br</span><span>(65) 99245-5040</span></div>
        <div className="footer__bottom"><span>© 2026 Rabe Soluções Digitais. Todos os direitos reservados.</span><span>Desenvolvido por Rabe</span></div>
      </footer>
    </main>
  );
}
