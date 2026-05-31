"use client";

import React, { useState } from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Badge from '../ui/Badge';

const faqImages: Record<number, { src: string; alt: string }> = {
  0:  { src: '/images/products/cappuccino-caramelo/hero.webp',        alt: "Cappuccino Caramelo Kaliche's" },
  1:  { src: '/images/products/cafe-con-leche/lifestyle.webp',        alt: "Preparación Kaliche's" },
  2:  { src: '/images/products/cappuccino-vainilla/lifestyle.webp',   alt: "Cappuccino Vainilla con leche vegetal" },
  3:  { src: '/images/products/cappuccino-caramelo/lifestyle.webp',   alt: "Cappuccino Caramelo en receta" },
  4:  { src: '/images/products/cafe-frio/hero.webp',                  alt: "Café Frío Kaliche's con hielos" },
  5:  { src: '/images/products/cappuccino-sin-azucar/lifestyle.webp', alt: "Cappuccino Sin Azúcar" },
  6:  { src: '/images/products/cappuccino-sin-azucar/pack.webp',      alt: "Sellos NOM-051 Kaliche's" },
  7:  { src: '/images/products/cafe-con-leche/pack.webp',             alt: "Bolsa Kaliche's conservación" },
  8:  { src: '/images/products/cappuccino/hero.webp',                 alt: "Cappuccino Clásico Kaliche's" },
  9:  { src: '/images/products/group/all-products-lineup.webp',       alt: "Línea completa Kaliche's" },
  10: { src: '/images/products/cafe-frio/lifestyle.webp',             alt: "Envíos Kaliche's a todo México" },
  11: { src: '/images/products/group/all-products-lineup.webp',       alt: "Caja 6 bolsas Kaliche's" },
  12: { src: '/images/products/cappuccino/lifestyle.webp',            alt: "Kaliche's en cafetería" },
  13: { src: '/images/products/cappuccino-caramelo/pack.webp',        alt: "Distribuidor Kaliche's México" },
  14: { src: '/images/products/cafe-con-leche/hero.webp',             alt: "Distribución Kaliche's México" },
  15: { src: '/images/products/cappuccino-vainilla/hero.webp',        alt: "Kaliche's hecho en México" },
  16: { src: '/images/products/cappuccino-sin-azucar/hero.webp',      alt: "Nuevos sabores Kaliche's" },
};

const defaultImage = {
  src: '/images/products/group/all-products-lineup.webp',
  alt: "Línea completa Kaliche's",
};

const faqItems = [
  // PREPARACIÓN
  { question: "¿Cuántas tazas rinde una bolsa?", answer: "La bolsa de 300g rinde hasta 13 tazas en el Cappuccino Caramelo y hasta 12 tazas en el resto de la línea. La bolsa de Café Frío de 120g rinde 6 porciones. La porción base es de 25g — puedes ajustarla según la intensidad que prefieras." },
  { question: "¿Cómo se prepara Kaliche's?", answer: "Agrega dos cucharadas (25g) en 150 ml de agua o leche caliente, mezcla bien y disfruta. Para versiones frías como el Café Frío, usa agua o leche fría y agita hasta disolver completamente. No necesitas cafetera ni equipo especial." },
  { question: "¿Se puede preparar con leche vegetal?", answer: "Sí, funciona perfectamente con leche de avena, almendra, soya o coco. La textura puede variar ligeramente según el tipo, pero el sabor se mantiene. Recomendamos leche de avena para los cappuccinos — complementa bien el perfil cremoso." },
  { question: "¿Se puede usar en recetas además de como bebida?", answer: "Completamente. Los sabores de Kaliche's funcionan como base para postres, mousses, rellenos de crepes y repostería en general. El Cappuccino Caramelo y el Cappuccino Vainilla son especialmente versátiles para preparaciones dulces." },
  // PRODUCTO
  { question: "¿Kaliche's contiene cafeína?", answer: "Sí. Los productos de la línea de cappuccino y café contienen cafeína proveniente del café soluble incluido en la mezcla. La cantidad es moderada, equivalente a una taza de café de intensidad media. El Cappuccino Sin Azúcar también contiene cafeína." },
  { question: "¿El Cappuccino Sin Azúcar es apto para personas con diabetes?", answer: "La versión Sin Azúcar está formulada sin azúcar añadida. Sin embargo, recomendamos consultar con tu médico o nutriólogo antes de incluirlo en un plan alimenticio específico para el control glucémico, ya que contiene otros ingredientes que pueden impactar." },
  { question: "¿Los productos tienen sellos de advertencia?", answer: "Sí, conforme a la norma oficial mexicana NOM-051. La mayoría de los productos llevan sellos de Exceso de Calorías y/o Exceso de Azúcares. El Café Frío no lleva sellos. El Cappuccino Sin Azúcar lleva únicamente el sello de Exceso de Calorías." },
  { question: "¿Cuánto tiempo dura el producto una vez abierto?", answer: "Una vez abierta la bolsa recomendamos consumirla en un máximo de 3 meses. Guárdala en un lugar fresco, seco y alejado de la luz solar directa. Todos los productos tienen una vida de anaquel de 12 meses cerrados." },
  { question: "¿Los productos de Kaliche's contienen gluten?", answer: "Las fórmulas no contienen ingredientes con gluten de forma intencional. Sin embargo, se producen en instalaciones que también procesan otros ingredientes, por lo que no podemos garantizar ausencia total de trazas. Si tienes celiaquía, consulta la ficha técnica del producto específico." },
  // COMPRA Y DISTRIBUCIÓN
  { question: "¿Dónde puedo comprar Kaliche's?", answer: "Kaliche's está disponible en nuestra tienda en línea con envío a todo México. También puedes contactarnos directamente por WhatsApp al +52 311 376 8591 para conocer los distribuidores autorizados y puntos de venta más cercanos a ti." },
  { question: "¿Hacen envíos a todo México?", answer: "Sí, realizamos envíos a toda la república mexicana. Para pedidos o consultas sobre tiempos de entrega y costos de envío a tu ciudad, contáctanos por WhatsApp y te damos la información actualizada al momento." },
  { question: "¿Puedo comprar por caja para mi negocio?", answer: "Sí. Cada caja contiene 6 bolsas del sabor que elijas. Es el formato ideal para cafeterías, oficinas, restaurantes y tiendas de abarrotes. Para volumen y condiciones comerciales escríbenos directamente — tenemos esquemas de distribuidor para negocios con demanda regular." },
  // CANALES COMERCIALES
  { question: "¿Puedo integrar Kaliche's en mi cafetería o restaurante?", answer: "Sí, tenemos una línea orientada específicamente a cafeterías y restaurantes. Ofrecemos consistencia de sabor, tiempos de preparación mínimos y presentaciones de volumen. Contáctanos por WhatsApp para hablar sobre condiciones, muestras y logística de abastecimiento." },
  { question: "¿Cómo puedo convertirme en distribuidor de Kaliche's?", answer: "Kaliche's está en expansión activa en México. Si te interesa distribuir la marca en tu ciudad o región, escríbenos al WhatsApp +52 311 376 8591 con el asunto 'Distribuidor' y un asesor se pondrá en contacto contigo para explicarte el esquema comercial." },
  { question: "¿En qué estados de México tienen distribución actualmente?", answer: "Actualmente tenemos distribución en varios estados de la república y seguimos expandiéndonos. Para verificar cobertura en tu zona específica y conocer el punto de venta más cercano, contáctanos por WhatsApp — te damos información precisa y actualizada." },
  // MARCA
  { question: "¿Dónde está fabricado Kaliche's?", answer: "Kaliche's es una marca 100% mexicana, con sede en Tepic, Nayarit. Nuestras fórmulas están desarrolladas y producidas bajo estrictos estándares de calidad e inocuidad alimentaria, con ingredientes cuidadosamente seleccionados." },
  { question: "¿Planean lanzar nuevos sabores?", answer: "Sí. Kaliche's está en desarrollo continuo de nuevas fórmulas. Actualmente la línea incluye 6 sabores y seguimos trabajando para ampliarla. La mejor forma de enterarte primero de los lanzamientos es seguirnos en redes sociales o estar en contacto con nosotros por WhatsApp." },
];



export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const currentImage = faqImages[activeIndex] ?? defaultImage;

  return (
    <Section id="faq" variant="soft" className="border-t border-b border-[#E8E8E8]">
      <div className="flex flex-col gap-12">

        {/* ── ENCABEZADO ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="space-y-3">
            <Badge variant="outline">Resolviendo Dudas</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0F0F0F] leading-[0.95]">
              {siteConfig.faq.title}
            </h2>
          </div>
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#AAAAAA] whitespace-nowrap">
            {faqItems.length} preguntas
          </span>
        </div>

        {/* ── BODY ── */}
        {/*
          DESKTOP: flex row — imagen fija izquierda + acordeón derecha
          MÓVIL:   columna única — acordeón solo, imagen oculta
          
          La clave del sticky: el padre flex necesita align-items: start
          para que la imagen no se estire y el sticky funcione.
        */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* ── IMAGEN STICKY — solo desktop ── */}
          <div className="hidden lg:block w-[380px] xl:w-[420px] flex-shrink-0 sticky top-8 self-start">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0F0F0F]">

              {/* Marco decorativo */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 border border-[#E31E24]/25 z-0 pointer-events-none" />

              {/* Imagen */}
              <div className="absolute inset-0 z-10 overflow-hidden">
                <img
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                  style={{ animation: 'kalFade 0.45s ease-in-out' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/75 via-transparent to-transparent" />
              </div>

              {/* Contador */}
              <div className="absolute top-4 right-4 z-20">
                <span className="font-sans text-[11px] font-black tracking-[0.2em] text-white/35">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(faqItems.length).padStart(2, '0')}
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#E31E24] flex-shrink-0" />
                  <span className="font-sans text-[10px] font-black uppercase tracking-[0.16em] text-white/40 line-clamp-1">
                    {currentImage.alt}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── ACORDEÓN ── */}
          <div className="flex-1 min-w-0">
            <div className="divide-y divide-[#E8E8E8] border-t border-b border-[#E8E8E8]">
              {faqItems.map((item, globalIdx) => {
                const isActive = activeIndex === globalIdx;

                return (
                  <div
                    key={globalIdx}
                    className={`transition-colors duration-150 ${
                      isActive ? 'bg-white' : 'bg-transparent hover:bg-white/70'
                    }`}
                  >
                    {/* Trigger */}
                    <button
                      onClick={() => setActiveIndex(isActive ? -1 : globalIdx)}
                      className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 sm:py-5 text-left focus:outline-none cursor-pointer"
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        {/* Número */}
                        <span className={`font-sans text-[10px] font-black tracking-[0.16em] flex-shrink-0 transition-colors duration-150 ${
                          isActive ? 'text-[#E31E24]' : 'text-[#CCCCCC]'
                        }`}>
                          {String(globalIdx + 1).padStart(2, '0')}
                        </span>
                        {/* Pregunta */}
                        <h3 className={`font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-wide leading-snug transition-colors duration-150 ${
                          isActive ? 'text-[#0F0F0F]' : 'text-[#444444]'
                        }`}>
                          {item.question}
                        </h3>
                      </div>

                      {/* Botón + / × */}
                      <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border transition-all duration-200 ${
                        isActive
                          ? 'bg-[#E31E24] border-[#E31E24]'
                          : 'border-[#E0E0E0] hover:border-[#BBBBBB]'
                      }`}>
                        <span className={`font-bold text-[14px] leading-none transition-all duration-200 inline-block ${
                          isActive ? 'text-white rotate-45' : 'text-[#0F0F0F]'
                        }`}>
                          +
                        </span>
                      </div>
                    </button>

                    {/* Respuesta */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 sm:px-5 pb-5 pl-[2.75rem] sm:pl-[3.75rem]">
                        <div className="border-l-2 border-[#E31E24] pl-3 sm:pl-4">
                          <p className="font-sans text-[13px] sm:text-[14px] text-[#555555] leading-[1.85]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Animación fade imagen */}
      <style jsx>{`
        @keyframes kalFade {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </Section>
  );
}