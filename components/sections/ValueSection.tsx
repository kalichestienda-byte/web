import React from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Badge from '../ui/Badge';

// SVG icons inline — sin dependencias externas, tamaño 24px
const icons: Record<string, React.ReactNode> = {
  sparkles: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
      <path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z"/>
      <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z"/>
    </svg>
  ),
  heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  'trending-up': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
};

const fallbackIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function ValueSection() {
  const { value } = siteConfig;

  return (
    <Section id="valores" variant="soft" className="border-t border-[#E8E8E8]">
      <div className="flex flex-col space-y-14">

        {/* ── ENCABEZADO ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <Badge variant="outline">Propuesta de Valor</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0F0F0F] leading-[0.95]">
              {value.title}
            </h2>
          </div>
          <p className="font-sans text-sm text-[#555555] leading-relaxed max-w-sm lg:text-right">
            {value.subtitle}
          </p>
        </div>

        {/* ── GRID DE ATRIBUTOS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E8E8]">
          {value.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 flex flex-col gap-5 hover:bg-[#0F0F0F] transition-colors duration-300 cursor-default"
            >
              {/* Ícono */}
              <div className="w-11 h-11 flex items-center justify-center border border-[#E8E8E8] group-hover:border-[#E31E24] group-hover:bg-[#E31E24] text-[#0F0F0F] group-hover:text-white transition-all duration-300">
                {icons[item.iconIdentifier] ?? fallbackIcon}
              </div>

              {/* Número */}
              <span className="font-sans text-[10px] font-black tracking-[0.2em] text-[#CCCCCC] group-hover:text-white/30 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Título */}
              <h3 className="font-sans text-base font-black uppercase tracking-wide text-[#0F0F0F] group-hover:text-white leading-tight transition-colors duration-300">
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="font-sans text-[13px] text-[#666666] group-hover:text-white/55 leading-relaxed transition-colors duration-300">
                {item.description}
              </p>

              {/* Línea roja inferior — aparece en hover */}
              <div className="mt-auto pt-4 border-t border-[#F0F0F0] group-hover:border-[#E31E24]/30 transition-colors duration-300">
                <div className="w-0 group-hover:w-8 h-[2px] bg-[#E31E24] transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}