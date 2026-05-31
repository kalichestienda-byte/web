import React from 'react';
import { siteConfig } from '../../content/site.config';
import Container from '../ui/Container';

export default function FooterSection() {
  const { brand, contact, footer } = siteConfig;

  return (
    <footer className="bg-white border-t border-[#E8E8E8] py-12 md:py-16 text-[#0F0F0F]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E8E8]">

          {/* Bloque 1: Identidad */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo/horizontal.png"
                alt={`Logo de ${brand.name}`}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="font-sans text-xs md:text-sm text-[#1A1A1A] max-w-sm leading-relaxed">
              {footer.description}
            </p>
            <p className="font-sans text-xs font-bold text-[#E31E24] uppercase tracking-wider">
              {brand.slogan}
            </p>
          </div>

          {/* Bloque 2: Navegación */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-black uppercase tracking-widest text-[#0F0F0F]">
              Contenidos
            </h4>
            <nav className="flex flex-col space-y-2">
              {footer.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-sans text-xs text-[#1A1A1A] hover:text-[#E31E24] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bloque 3: Contacto */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-black uppercase tracking-widest text-[#0F0F0F]">
              Contacto Comercial
            </h4>
            <div className="font-sans text-xs text-[#1A1A1A] space-y-2 leading-relaxed">
              <p>
                <span className="font-bold text-[#0F0F0F]">WhatsApp:</span> {contact.whatsapp}
              </p>
              <p>
                <span className="font-bold text-[#0F0F0F]">Horario:</span> {contact.hours}
              </p>
              <p>
                <span className="font-bold text-[#0F0F0F]">Ubicación:</span> {contact.address}, {contact.neighborhood}. {contact.city}, {contact.state}.
              </p>
            </div>
          </div>

        </div>

        {/* Bloque inferior legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#1A1A1A]">
          <p className="text-center sm:text-left leading-relaxed max-w-2xl">
            {footer.legalText}
          </p>

          {/* Hecho con amor por Somos Lázaro */}
          <a
            href="https://somoslazaro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 whitespace-nowrap group flex-shrink-0"
          >
            <span className="font-sans text-[11px] text-[#AAAAAA] group-hover:text-[#0F0F0F] transition-colors duration-150">
              Hecho con amor por
            </span>
            <span className="font-sans font-black text-[11px] uppercase tracking-wider text-[#0F0F0F] group-hover:text-[#E31E24] transition-colors duration-150">
              somoslazaro.com
            </span>
          </a>
        </div>

      </Container>
    </footer>
  );
}