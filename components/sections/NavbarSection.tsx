"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../content/site.config';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function NavbarSection() {
  const { brand, navigation } = siteConfig;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all border-b ${scrolled ? 'border-[#E8E8E8] shadow-sm' : 'border-transparent'}`}>
        <Container>
          <div className="flex h-20 items-center justify-between gap-4">

            {/* Logotipo */}
            <a href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#E31E24]">
              <img
                src="/images/logo/icono.png"
                alt={`Logo de ${brand.name}`}
                className="h-10 w-auto object-contain"
              />
              <span className="font-sans font-black text-xl tracking-tighter text-[#0F0F0F] sm:text-2xl">
                {brand.name}
              </span>
            </a>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-sans text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#E31E24] transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Button
                href={navigation.primaryCta.href}
                variant="primary"
                size="sm"
                className="text-xs font-bold"
              >
                {navigation.primaryCta.label}
              </Button>

              {/* Hamburger — solo móvil */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
                aria-label="Abrir menu"
              >
                <span className={`block w-5 h-[2px] bg-[#0F0F0F] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-5 h-[2px] bg-[#0F0F0F] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block w-5 h-[2px] bg-[#0F0F0F] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </button>
            </div>

          </div>
        </Container>
      </header>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-50 w-[75vw] max-w-[320px] bg-white flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header drawer */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#E8E8E8] flex-shrink-0">
          <img
            src="/images/logo/icono.png"
            alt={`Logo de ${brand.name}`}
            className="h-8 w-auto object-contain"
          />
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center text-[#0F0F0F] hover:text-[#E31E24] transition-colors"
            aria-label="Cerrar menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 px-6 py-8 gap-1 overflow-y-auto">
          {navigation.items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={closeMenu}
              className="font-sans text-[13px] font-bold uppercase tracking-[0.16em] text-[#1A1A1A] hover:text-[#E31E24] py-4 border-b border-[#F0F0F0] transition-colors duration-150 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + contacto */}
        <div className="px-6 pb-8 flex-shrink-0">
          <a
            href={navigation.primaryCta.href}
            onClick={closeMenu}
            className="block w-full bg-[#E31E24] text-white text-center font-sans text-xs font-bold uppercase tracking-widest py-4 hover:bg-[#B71518] transition-colors duration-200"
          >
            {navigation.primaryCta.label}
          </a>
          <div className="mt-5 pt-5 border-t border-[#F0F0F0]">
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#AAAAAA] mb-1">
              WhatsApp
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`}
              className="font-sans text-[13px] font-bold text-[#0F0F0F] hover:text-[#E31E24] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>

      </div>
    </>
  );
}