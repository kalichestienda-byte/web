"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../content/site.config';
import Button from '../ui/Button';

export default function HeroSection() {
  const products = siteConfig.products.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isHovered, products.length]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section
      className="relative w-full min-h-[50vh] sm:min-h-[55vh] lg:min-h-[65vh] xl:min-h-[72vh] max-h-[820px] overflow-hidden bg-[#0F0F0F]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {products.map((product, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={product.slug}
            className={`absolute inset-0 transition-opacity duration-[1.4s] ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* ── FONDO: las hero.webp originales ── */}
            <img
              src={product.images.hero.src}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[14s] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Gradiente lateral izquierdo — desktop */}
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background: 'linear-gradient(to right, rgba(15,15,15,0.97) 0%, rgba(15,15,15,0.85) 22%, rgba(15,15,15,0.55) 38%, rgba(15,15,15,0.15) 55%, transparent 72%)'
              }}
            />

            {/* Gradiente vertical — móvil y tablet */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background: 'linear-gradient(to top, rgba(15,15,15,0.95) 0%, rgba(15,15,15,0.75) 40%, rgba(15,15,15,0.35) 70%, transparent 100%)'
              }}
            />

            {/* Gradiente inferior — todas las pantallas */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.6) 20%, rgba(15,15,15,0.2) 40%, transparent 60%)'
              }}
            />

            {/* ── LAYOUT ── */}
            <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-end lg:items-center pb-14 sm:pb-12 lg:pb-0 pt-20 sm:pt-16 lg:pt-0">
              <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">

                {/* ── COPY ── */}
                <div
                  className={`w-full lg:w-[44%] xl:w-[42%] flex flex-col items-start transition-all duration-1000 delay-200 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-2 lg:mb-3">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#E31E24]">
                      {product.featured ? product.label : 'Línea Instantánea'}
                    </span>
                    <span className="text-white/25">·</span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {product.presentation}
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl xl:text-[3.6rem] 2xl:text-[4.2rem] font-black uppercase tracking-tighter text-white leading-[0.88] mb-2 lg:mb-3">
                    {product.name}
                  </h1>

                  {/* Tagline rojo */}
                  <p className="font-sans text-[10px] sm:text-[11px] font-bold text-[#E31E24] tracking-[0.22em] uppercase mb-3 lg:mb-4">
                    {product.tagline}
                  </p>

                  {/* Descripción — solo xl+ */}
                  <p className="hidden xl:block font-sans text-[13px] text-white/50 leading-[1.85] mb-5 font-light max-w-[340px] line-clamp-2">
                    {product.description}
                  </p>

                  {/* Panel técnico — solo xl+ */}
                  <div className="hidden xl:block bg-white/[0.04] border border-white/[0.07] p-4 w-full max-w-[320px] mb-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-start gap-3 mb-3 pb-3 border-b border-white/[0.07]">
                      <div className="w-1 h-1 rounded-full bg-[#E31E24] mt-[7px] flex-shrink-0" />
                      <div>
                        <span className="block font-sans text-[9px] font-black uppercase tracking-[0.18em] text-white/70 mb-1">
                          Preparación
                        </span>
                        <span className="font-sans text-[12px] text-white/45 leading-relaxed font-light">
                          {product.preparation}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-white/20 mt-[7px] flex-shrink-0" />
                      <div>
                        <span className="block font-sans text-[9px] font-black uppercase tracking-[0.18em] text-white/70 mb-1">
                          Perfil de Sabor
                        </span>
                        <span className="font-sans text-[12px] text-white/45 leading-relaxed italic font-light">
                          {product.flavorProfile}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="flex items-center gap-3">
                    <Button
                      href={product.cta.href}
                      variant="primary"
                      size="lg"
                      className="shadow-[0_6px_24px_rgba(227,30,36,0.32)]"
                    >
                      {product.cta.label}
                    </Button>
                    <Button
                      href={siteConfig.hero.secondaryCta.href}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white text-white font-bold hover:bg-white hover:text-[#0F0F0F] transition-all duration-200 hidden sm:inline-flex backdrop-blur-sm"
                      external
                    >
                      {siteConfig.hero.secondaryCta.label}
                    </Button>
                  </div>
                </div>

                {/* ── PEDESTAL: fotos nuevas hero-banner.jpg — solo lg+ ── */}
                <div
                  className={`hidden lg:flex lg:w-[46%] justify-center items-center transition-all duration-[1.2s] delay-500 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className="relative w-full max-w-[380px] xl:max-w-[440px] 2xl:max-w-[500px] aspect-[4/3] bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)]">
                    <img
                      src={product.images.heroBanner.src}
                      alt={product.images.heroBanner.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* ── CONTROLES ── */}
      <div className="absolute bottom-3 right-0 z-30 w-full pointer-events-none">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-end gap-3 pointer-events-auto">
          <div className="flex items-center gap-2">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-[2px] transition-all duration-700 ease-out rounded-full ${
                  idx === activeIndex
                    ? 'w-8 bg-[#E31E24]'
                    : 'w-3 bg-white/20 hover:bg-white/45'
                }`}
                aria-label={`Ver producto ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center border border-white/15 bg-black/25 backdrop-blur-sm text-white/55 hover:text-white hover:border-white/35 transition-all duration-200 rounded-full text-xs"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center border border-white/15 bg-black/25 backdrop-blur-sm text-white/55 hover:text-white hover:border-white/35 transition-all duration-200 rounded-full text-xs"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}