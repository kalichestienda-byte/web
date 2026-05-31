import React from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Badge from '../ui/Badge';

// SVG icons inline para cada caso de uso — sin librerías externas
const useCaseIcons: Record<string, React.ReactNode> = {
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  office: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  cafe: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  store: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
};

// Fallback si no hay ícono mapeado
const defaultIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 8 12 12 14 14"/>
  </svg>
);

export default function UseCasesSection() {
  const { useCases } = siteConfig;

  // Imagen de uso cotidiano — lifestyle de café con leche (mañana en cocina)
  // Es la más versátil para representar múltiples contextos de consumo
  const imageSrc = "/images/products/cafe-con-leche/lifestyle.webp";

  return (
    <Section id="usos" variant="default" className="border-b border-[#E8E8E8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── IMAGEN CONTEXTUAL ── */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative w-full aspect-square overflow-hidden group">

            {/* Marco decorativo negro desplazado */}
            <div className="absolute inset-0 -translate-x-3 translate-y-3 border-2 border-[#0F0F0F] z-0" />

            <div className="absolute inset-0 z-10 overflow-hidden border-2 border-[#0F0F0F]">
              <img
                src={imageSrc}
                alt="Kaliche's preparado en casa o en la oficina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Vignette sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Tag flotante — detalle editorial */}
            <div className="absolute bottom-5 left-5 z-20 bg-[#0F0F0F] px-3 py-1.5">
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
                Consumo diario
              </span>
            </div>
          </div>
        </div>

        {/* ── CONTENIDO ── */}
        <div className="flex flex-col items-start space-y-8 lg:col-span-7 order-1 lg:order-2">

          <div className="space-y-3">
            <Badge variant="dark">Momento y Canales</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0F0F0F] leading-[0.95]">
              {useCases.title}
            </h2>
            <p className="font-sans text-[13px] sm:text-[14px] text-[#555555] leading-relaxed max-w-lg">
              {useCases.subtitle}
            </p>
          </div>

          {/* ── CARDS DE CASOS DE USO ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {useCases.items.map((item, index) => {
              const isConfirmed = item.status === 'confirmed';
              // Asignar ícono por índice — ajusta según tus datos reales
              const iconKeys = ['home', 'office', 'cafe', 'store'];
              const icon = useCaseIcons[iconKeys[index]] ?? defaultIcon;

              return (
                <div
                  key={index}
                  className={`relative p-5 flex flex-col gap-4 transition-all duration-200 group ${
                    isConfirmed
                      ? 'bg-white border-2 border-[#0F0F0F] hover:shadow-[3px_3px_0px_#0F0F0F]'
                      : 'bg-[#F7F7F7] border border-[#E8E8E8] hover:border-[#CCCCCC]'
                  }`}
                >
                  {/* Header: ícono + badge status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-9 h-9 flex items-center justify-center flex-shrink-0 ${
                      isConfirmed
                        ? 'bg-[#0F0F0F] text-white'
                        : 'bg-[#E8E8E8] text-[#888888]'
                    }`}>
                      {icon}
                    </div>
                    <span className={`font-sans text-[9px] font-black uppercase tracking-[0.18em] px-2 py-1 flex-shrink-0 ${
                      isConfirmed
                        ? 'bg-[#E31E24] text-white'
                        : 'bg-[#E8E8E8] text-[#999999]'
                    }`}>
                      {isConfirmed ? 'Disponible' : 'Consultar'}
                    </span>
                  </div>

                  {/* Texto */}
                  <div className="space-y-1.5">
                    <h3 className="font-sans text-[13px] font-black uppercase tracking-wide text-[#0F0F0F] leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[12px] text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Línea roja de acento — solo en confirmed, aparece en hover */}
                  {isConfirmed && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E31E24] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </Section>
  );
}