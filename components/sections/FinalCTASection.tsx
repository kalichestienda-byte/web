import React from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function FinalCTASection() {
  const { finalCta } = siteConfig;

  // Imagen de fondo — línea completa de productos, da escala institucional al CTA
  const bgImageSrc = "/images/products/group/all-products-lineup.webp";

  return (
    <Section
      variant="red"
      className="relative overflow-hidden !py-0"
    >
      {/* ── IMAGEN DE FONDO — línea completa difuminada ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageSrc}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-10"
        />
        {/* Vignette para que la imagen no compita con el copy */}
        <div className="absolute inset-0 bg-[#E31E24]/60" />
      </div>

      {/* Línea roja oscura superior — detalle de marca */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#B71518] z-10" />

      {/* ── CONTENIDO ── */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center py-20 md:py-28 px-4 space-y-8">

        {/* Eyebrow */}
        <span className="font-sans text-[11px] font-black uppercase tracking-[0.28em] text-white/50">
          Kaliche's · ES PARA TODOS
        </span>

        {/* Headline */}
        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[0.92]">
          {finalCta.title}
        </h2>

        {/* Línea divisoria roja oscura */}
        <div className="w-12 h-[3px] bg-[#B71518]" />

        {/* Subheadline */}
        <p className="font-sans text-[15px] md:text-[17px] text-white/75 max-w-xl leading-[1.75] font-light">
          {finalCta.subtitle}
        </p>

        {/* ── BOTONES ── */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2 w-full sm:w-auto">

          {/* Primario — negro sólido, máximo contraste sobre rojo */}
          <Button
            href={finalCta.primaryCta.href}
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            {finalCta.primaryCta.label}
          </Button>

          {/* Secundario — outline blanco legible sobre rojo */}
          <Button
            href={finalCta.secondaryCta.href}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white/10 border-white text-white font-bold hover:bg-white hover:text-[#E31E24] backdrop-blur-sm transition-all duration-200"
            external
          >
            {finalCta.secondaryCta.label}
          </Button>

        </div>

      </div>

      {/* Línea roja oscura inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B71518] z-10" />

    </Section>
  );
}