import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SolucoesSection from '@/components/landing/SolucoesSection';
import MetodoSection from '@/components/landing/MetodoSection';
import PalestrasSection from '@/components/landing/PalestrasSection';
import ContatoSection from '@/components/landing/ContatoSection';
import Footer from '@/components/landing/Footer';

// Usando suas imagens locais
const HERO_IMAGE = '/Pessoas_Reuniao_Colegas_de_Trabalho_Conversa_Descontraida_no_Escritorio.jpeg';
const LOGO_BRANCA = '/logo_rabe_branca.png';
const LOGO_PRETA = '/logo_rabe_sem_fundo.png';
const PALESTRAS_IMAGE = '/Planejamento-ADPV2-3.png'; // ← ALTERE AQUI

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar logoBranca={LOGO_BRANCA} logoPreta={LOGO_PRETA} />
      <HeroSection heroImage={HERO_IMAGE} />
      <div id="solucoes">
        <SolucoesSection />
      </div>
      <div id="metodo">
        <MetodoSection />
      </div>
      <div id="palestras">
        <PalestrasSection palestrasImage={PALESTRAS_IMAGE} />
      </div>
      <div id="contato">
        <ContatoSection />
      </div>
      <Footer logoBranca={LOGO_BRANCA} />
    </div>
  );
}