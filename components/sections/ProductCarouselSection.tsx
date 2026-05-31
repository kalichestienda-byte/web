import React from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function ProductCarouselSection() {
  const { products } = siteConfig;

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
          {/* Contador de productos — detalle editorial */}
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#AAAAAA] whitespace-nowrap">
            {products.items.length} sabores disponibles
          </span>
        </div>

        {/* ── GRILLA DE PRODUCTOS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.items.map((product, idx) => (
            <div
              key={product.slug}
              className="group flex flex-col bg-white border border-[#E8E8E8] hover:border-[#0F0F0F] hover:shadow-[4px_4px_0px_#0F0F0F] transition-all duration-200 relative"
            >
              {/* Número de producto — detalle de catálogo */}
              <span className="absolute top-4 left-4 z-10 font-sans text-[10px] font-black text-[#CCCCCC] tracking-[0.15em]">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* ── PACKSHOT ── */}
              <div className="relative w-full aspect-square bg-[#F7F7F7] border-b border-[#E8E8E8] flex items-center justify-center overflow-hidden p-8">
                {product.featured && (
                  <Badge
                    variant="red"
                    className="absolute top-4 right-4 z-10"
                  >
                    {product.label}
                  </Badge>
                )}

                {/* Sellos sanitarios */}
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
                  className="max-h-[82%] w-auto object-contain transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </div>

              {/* ── FICHA ── */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                <div className="space-y-3">

                  {/* Nombre + presentación */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-lg font-black uppercase tracking-tight text-[#0F0F0F] leading-tight">
                      {product.name}
                    </h3>
                    <span className="flex-shrink-0 font-sans text-[10px] font-bold bg-[#0F0F0F] text-white px-2 py-1 tracking-wide uppercase mt-0.5">
                      {product.presentation}
                    </span>
                  </div>

                  {/* Rendimiento */}
                  <p className="font-sans text-[11px] font-bold text-[#E31E24] uppercase tracking-wider">
                    {product.yieldText} · {product.servingSize}
                  </p>

                  {/* Descripción */}
                  <p className="font-sans text-[13px] text-[#555555] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Datos técnicos */}
                  <div className="pt-3 border-t border-[#F0F0F0] grid grid-cols-2 gap-x-4 gap-y-1.5">
                    <div>
                      <span className="block font-sans text-[9px] font-black uppercase tracking-[0.15em] text-[#AAAAAA] mb-0.5">
                        Caja
                      </span>
                      <span className="font-sans text-[12px] text-[#1A1A1A] font-medium">
                        {product.boxQuantity} bolsas
                      </span>
                    </div>
                    <div>
                      <span className="block font-sans text-[9px] font-black uppercase tracking-[0.15em] text-[#AAAAAA] mb-0.5">
                        Conservación
                      </span>
                      <span className="font-sans text-[12px] text-[#1A1A1A] font-medium line-clamp-1">
                        {product.storage}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="block font-sans text-[9px] font-black uppercase tracking-[0.15em] text-[#AAAAAA] mb-0.5">
                        Perfil
                      </span>
                      <span className="font-sans text-[12px] text-[#1A1A1A] italic line-clamp-1">
                        {product.flavorProfile}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3 border-t border-[#F0F0F0]">
                  <Button
                    href={product.cta.href}
                    variant="secondary"
                    size="sm"
                    className="w-full font-bold justify-center"
                  >
                    Adquirir →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── IMAGEN GRUPAL / LÍNEA COMPLETA ── */}
        <div className="border-t-2 border-[#0F0F0F] pt-12">
          <div className="relative bg-[#0F0F0F] overflow-hidden">

            {/* Línea roja decorativa izquierda */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E31E24]" />

            <div className="flex flex-col lg:flex-row items-stretch">

              {/* Imagen grupal */}
              <div className="w-full lg:w-[55%] aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={products.groupImage.src}
                  alt={products.groupImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Copy */}
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
                    className="bg-white/10 border-white text-white font-bold hover:bg-white hover:text-[#0F0F0F] backdrop-blur-sm"                  >
                    Consultar canales comerciales →
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}