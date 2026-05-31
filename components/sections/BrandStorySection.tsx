import React from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Badge from '../ui/Badge';

export default function BrandStorySection() {
  const { brandStory } = siteConfig;

  // Imagen editorial de marca — usa el hero de cappuccino caramelo
  // que es el producto estrella y tiene la iluminación más editorial
  const imageSrc = "/images/products/cappuccino-caramelo/hero.webp";

  return (
    <Section id="historia" variant="dark" className="relative overflow-hidden">

      {/* Detalle decorativo — línea roja vertical izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E31E24]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── BLOQUE DE TEXTO ── */}
        <div className="flex flex-col items-start space-y-7 lg:col-span-7">

          <Badge variant="red">{brandStory.subtitle}</Badge>

          <h2 className="font-sans text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[0.92]">
            {brandStory.title}
          </h2>

          <div className="space-y-4 font-sans text-[14px] sm:text-[15px] text-white/65 leading-[1.85] max-w-2xl">
            {brandStory.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights con acento rojo */}
          <div className="pt-2 space-y-3 w-full max-w-lg">
            {brandStory.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 group"
              >
                {/* Punto rojo + línea */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                  <div className="w-6 h-px bg-[#E31E24]/40" />
                </div>
                <span className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-white/80">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── IMAGEN EDITORIAL ── */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] overflow-hidden group">

            {/* Marco decorativo desplazado — da profundidad */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#E31E24]/25 z-0" />

            {/* Imagen */}
            <div className="absolute inset-0 z-10 overflow-hidden">
              <img
                src={imageSrc}
                alt="Cappuccino Caramelo Kaliche's — composición editorial de marca"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Vignette inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent" />
            </div>

            {/* Label flotante abajo */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                Kaliche's · Desde México
              </span>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}