import React from 'react';
import NavbarSection from '../../../components/sections/NavbarSection';
import HeroSection from '../../../components/sections/HeroSection';
import ProductCarouselSection from '../../../components/sections/ProductCarouselSection';
import ValueSection from '../../../components/sections/ValueSection';
import BrandStorySection from '../../../components/sections/BrandStorySection';
import UseCasesSection from '../../../components/sections/UseCasesSection';
import FAQSection from '../../../components/sections/FAQSection';
import FinalCTASection from '../../../components/sections/FinalCTASection';
import FooterSection from '../../../components/sections/FooterSection';
import DistributorsSection from '../../../components/sections/DistributorsSection';


export default function HomePage() {
  return (
    <>
      {/* 1. Barra de Navegación Global */}
      <NavbarSection />

      <main>
        {/* 2. Hero Split: Impacto de Producto (Fondo Claro/Suave) */}
        <HeroSection />

        {/* 3. Carrusel / Módulo de Sabores (Fondo Blanco Puro) */}
        <ProductCarouselSection />

        {/* 4. Pilares y Propuesta de Valor (Fondo Gris Suave) */}
        <ValueSection />

        {/* 5. Bloque Editorial e Historia de Marca (Fondo Oscuro Profundo) */}
        <BrandStorySection />

        {/* 6. Segmentación de Usos y Canales (Fondo Claro) */}
        <UseCasesSection />
<DistributorsSection />

        {/* 7. Módulo de FAQ y SEO Long-Tail (Fondo Gris Suave) */}
        <FAQSection />

        {/* 8. Bloque Final de Conversión Directa (Fondo Rojo Kaliche's Dominante) */}
        <FinalCTASection />
      </main>

      {/* 9. Cierre Institucional Limpio */}
      <FooterSection />
    </>
  );
}