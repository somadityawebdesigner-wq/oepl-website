import Hero from '@/components/Hero';
import Pillars from '@/components/sections/Pillars';
import CoreStrength from '@/components/sections/CoreStrength';
// import ProductsSection from '@/components/sections/ProductsSection';
import Transforming from '@/components/sections/Transforming';
import TrainHeroSection from '@/components/sections/TrainHeroSection';
import Products from '@/components/sections/ProductsSection';
import Services from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Transforming />
      <Pillars />
      <CoreStrength />
    <Products variant="home" />
      <Services variant="home" />
      <TrainHeroSection />
    </>
  );
}