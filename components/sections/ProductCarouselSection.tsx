"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function ProductCarouselSection() {
  const { products } = siteConfig;
  const [selectedProduct, setSelectedProduct] = useState<typeof products.items[0] | null>(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProduct]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <Section id="productos" variant="default" className="border-t border-[#E8E8E8]">
      <div className="flex flex-col space-y-16">

        {/* ── ENCABEZADO ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-8 border-b border-[#E8E8E8]">
          <div className="space-y-3 max-w-xl">
            <Badge variant="red">Exploración de Sabores</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0F0F0F] leading-[0.95]">
              {products.title}
            </h2>
            <p className="font-sans text-sm text-[#555555] leading-relaxed">
              {products.subtitle}
            </p>
          </div>
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#AAAAAA] whitespace-nowrap">
            {products.items.length} sabores disponibles
          </span>
        </div>

        {/* ── GRILLA ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.items.map((product, idx) => (
            <div
              key={product.slug}
              onClick={() => setSelectedProduct(product)}
              className="group flex flex-col bg-white border border-[#E8E8E8] hover:border-[#0F0F0F] hover:shadow-[4px_4px_0px_#0F0F0F] transition-all duration-200 relative cursor-pointer"
            >
              {/* Número */}
              <span className="absolute top-4 left-4 z-10 font-sans text-[10px] font-black text-[#CCCCCC] tracking-[0.15em]">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Badge producto estrella — esquina superior derecha */}
              {product.featured && (
                <Badge
                  variant="red"
                  className="absolute top-4 right-4 z-10"
                >
                  {product.label}
                </Badge>
              )}

              {/* Packshot */}
              <div className="relative w-full aspect-square bg-[#F7F7F7] border-b border-[#E8E8E8] flex items-center justify-center overflow-hidden p-8">
                {/* Sellos */}
                {product.labels.length > 0 && (
                  <div className="absolute bottom-4 right-4 flex flex-col gap-1 z-10 items-end">
                    {product.labels.map((labelName, lIdx) => (
                      <span
                        key={lIdx}
                        className="bg-[#0F0F0F] text-white text-[8px] font-black uppercase px-1.5 py-0.5 tracking-tight"
                      >
                        {labelName}
                      </span>
                    ))}
                  </div>
                )}

                <img
                  src={product.images.pack.src}
                  alt={product.images.pack.alt}
                  className="max-h-[100%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                />

                {/* Indicador "Ver más" en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200 flex items-center justify-center">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F0F0F] bg-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                    Ver detalle
                  </span>
                </div>
              </div>

              {/* Ficha */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-lg font-black uppercase tracking-tight text-[#0F0F0F] leading-tight">
                      {product.name}
                    </h3>
                    <span className="flex-shrink-0 font-sans text-[10px] font-bold bg-[#0F0F0F] text-white px-2 py-1 tracking-wide uppercase mt-0.5">
                      {product.presentation}
                    </span>
                  </div>

                  <p className="font-sans text-[11px] font-bold text-[#E31E24] uppercase tracking-wider">
                    {product.yieldText} · {product.servingSize}
                  </p>

                  <p className="font-sans text-[13px] text-[#555555] leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0F0F0]">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#E31E24]">
                    Ver información completa →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── IMAGEN GRUPAL ── */}
        <div className="border-t-2 border-[#0F0F0F] pt-12">
          <div className="relative bg-[#0F0F0F] overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E31E24]" />
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="w-full lg:w-[60%] aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={products.groupImage.src}
                  alt={products.groupImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center gap-6">
                <Badge variant="outline" className="border-white/20 text-white/60 w-fit">
                  Línea Unificada
                </Badge>
                <h3 className="font-sans text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-[0.95]">
                  Kaliche's es<br />
                  <span className="text-[#E31E24]">para todos</span>
                </h3>
                <p className="font-sans text-[13px] text-white/50 leading-relaxed max-w-sm">
                  Fórmulas balanceadas y empaquetadas en cajas de 6 bolsas para facilitar su almacenamiento y distribución. Diseñadas para retail, oficinas, cafeterías y hogar.
                </p>
                <div>
                  <Button
                    href={siteConfig.navigation.primaryCta.href}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white text-white font-bold hover:bg-white hover:text-[#0F0F0F] backdrop-blur-sm"
                  >
                    Consultar canales comerciales →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── MODAL DE PRODUCTO ── */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Contenido */}
          <div
            className="relative z-10 bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalIn 0.25s ease-out' }}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white border border-[#E8E8E8] hover:border-[#0F0F0F] transition-colors"
              aria-label="Cerrar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Layout */}
            <div className="flex flex-col lg:flex-row">

              {/* Imagen grande */}
              <div className="w-full lg:w-[45%] bg-[#F5F5F5] flex items-center justify-center p-8 lg:p-10 relative">
                {selectedProduct.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="red">{selectedProduct.label}</Badge>
                  </div>
                )}
                {selectedProduct.labels.length > 0 && (
                  <div className="absolute bottom-4 right-4 flex flex-col gap-1 items-end">
                    {selectedProduct.labels.map((label, i) => (
                      <span key={i} className="bg-[#0F0F0F] text-white text-[8px] font-black uppercase px-1.5 py-0.5 tracking-tight">
                        {label}
                      </span>
                    ))}
                  </div>
                )}
                <img
                  src={selectedProduct.images.pack.src}
                  alt={selectedProduct.images.pack.alt}
                  className="max-h-[300px] lg:max-h-[400px] w-auto object-contain"
                />
              </div>

              {/* Info completa */}
              <div className="w-full lg:w-[55%] p-6 sm:p-8 flex flex-col gap-5">

                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="font-sans text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F0F0F] leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <span className="flex-shrink-0 font-sans text-[10px] font-bold bg-[#0F0F0F] text-white px-2.5 py-1.5 tracking-wide uppercase mt-1">
                      {selectedProduct.presentation}
                    </span>
                  </div>
                  <p className="font-sans text-[12px] font-bold text-[#E31E24] uppercase tracking-wider">
                    {selectedProduct.yieldText} · {selectedProduct.servingSize}
                  </p>
                </div>

                {/* Tagline */}
                <p className="font-sans text-[13px] font-bold text-[#E31E24] uppercase tracking-wide">
                  {selectedProduct.tagline}
                </p>

                {/* Descripción completa */}
                <p className="font-sans text-[14px] text-[#444444] leading-[1.8]">
                  {selectedProduct.description}
                </p>

                {/* Datos técnicos */}
                <div className="border-t border-[#E8E8E8] pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block font-sans text-[9px] font-black uppercase tracking-[0.16em] text-[#AAAAAA] mb-1">Preparación</span>
                    <span className="font-sans text-[13px] text-[#333333] leading-relaxed">{selectedProduct.preparation}</span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-black uppercase tracking-[0.16em] text-[#AAAAAA] mb-1">Perfil de Sabor</span>
                    <span className="font-sans text-[13px] text-[#333333] leading-relaxed italic">{selectedProduct.flavorProfile}</span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-black uppercase tracking-[0.16em] text-[#AAAAAA] mb-1">Caja</span>
                    <span className="font-sans text-[13px] text-[#333333]">{selectedProduct.boxQuantity} bolsas</span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-black uppercase tracking-[0.16em] text-[#AAAAAA] mb-1">Conservación</span>
                    <span className="font-sans text-[13px] text-[#333333]">{selectedProduct.storage}</span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-black uppercase tracking-[0.16em] text-[#AAAAAA] mb-1">Vida de anaquel</span>
                    <span className="font-sans text-[13px] text-[#333333]">{selectedProduct.shelfLife}</span>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-black uppercase tracking-[0.16em] text-[#AAAAAA] mb-1">Porción</span>
                    <span className="font-sans text-[13px] text-[#333333]">{selectedProduct.servingSize}</span>
                  </div>
                </div>

                {/* Botones */}
                <div className="border-t border-[#E8E8E8] pt-5 flex flex-col sm:flex-row gap-3">
                  <Button
                    href={selectedProduct.cta.href}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto font-bold justify-center shadow-[0_6px_20px_rgba(227,30,36,0.25)]"
                  >
                    Comprar por WhatsApp
                  </Button>
                  <Button
                    href={"https://wa.me/" + siteConfig.contact.whatsapp.replace(/\D/g, '') + "?text=Hola, tengo dudas sobre " + selectedProduct.name}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto font-bold justify-center"
                    external
                  >
                    Preguntar sobre este producto
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* Animación modal */}
      <style jsx>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

    </Section>
  );
}