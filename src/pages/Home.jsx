import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SolucoesSection from '@/components/landing/SolucoesSection';
import MetodoSection from '@/components/landing/MetodoSection';
import PalestrasSection from '@/components/landing/PalestrasSection';
import ContatoSection from '@/components/landing/ContatoSection';
import Footer from '@/components/landing/Footer';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a22da4c17e9662b46f5b518/8b5148f4d_generated_c7b0bef4.png';
const PALESTRAS_IMAGE = 'https://media.base44.com/images/public/6a22da4c17e9662b46f5b518/4d9415cba_generated_498c28aa.png';

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <SolucoesSection />
      <MetodoSection />
      <PalestrasSection palestrasImage={PALESTRAS_IMAGE} />
      <ContatoSection />
      <Footer />
    </div>
  );
}