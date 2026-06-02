"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../content/site.config';
import Section from '../ui/Section';
import Button from '../ui/Button';
import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';

const GEO_URL = "/data/mexico-states.json";

const distributionStatesMap: Record<string, boolean> = {
  'Aguascalientes': true,
  'Nayarit': true,
  'Sinaloa': true,
  'Sonora': true,
  'Baja California': true,
  'Chihuahua': true,
  'Nuevo León': true,
  'Jalisco': true,
  'Colima': true,
  'Guanajuato': true,
  'Querétaro': true,
  'México': true,
  'Distrito Federal': true,
};

const distributionStates = [
  'Aguascalientes', 'Nayarit', 'Sinaloa', 'Sonora',
  'Baja California', 'Chihuahua', 'Nuevo León', 'Jalisco',
  'Colima', 'Guanajuato', 'Querétaro', 'EDOMEX', 'CDMX',
];

// Sabores del catálogo oficial — presentación 2kg para cafeterías y restaurantes
const flavors: Record<string, string[]> = {
  'Bases': [
    'Base Neutra',
    'Base Neutra sabor Vainilla',
    'Base Cristal',
    'Coco',
    'Chocolate Blanco',
    'Chocolate Tradicional',
    'Taro',
    'Taro/Coco',
    'Matcha Latte',
  ],
  'Base Frappé': [
    'Frappé Café',
    'Frappé Descafeinado',
    'Frappé Deslactosado',
    'Frappé Avellana',
    'Frappé Caramelo',
    'Frappé Horchata',
    'Frappé Mazapán',
    'Frappé Moka',
    'Frappé Oreo',
    'Frappé Vainilla Francesa',
  ],
  'Chai de Especialidad': [
    'Caramelo',
    'Leche Dorada',
    'Original',
    'Frambuesa',
    'Frutos Rojos',
    'Guayaba',
    'Manzana Canela',
    'Matcha Chai',
    'Pumpkin Spice',
    'Vainilla',
    'Verde',
  ],
  'Malteadas': [
    'Chocolate',
    'Vainilla',
  ],
};

function MexicoMap() {
  const [paths, setPaths] = useState<{ d: string; name: string; active: boolean }[]>([]);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(GEO_URL)
      .then((res) => res.json())
      .then((topology) => {
        const width = 800;
        const height = 500;
        const objectName = Object.keys(topology.objects)[0];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const geojson = topojson.feature(topology as any, topology.objects[objectName]) as any;
        const projection = d3.geoMercator().fitSize([width, height], geojson);
        const pathGenerator = d3.geoPath().projection(projection);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const statePaths = geojson.features.map((feature: any) => {
          const props = feature.properties || {};
          const name = props.name_1 || props.NAME_1 || props.name || props.NAME || '';
          const d = pathGenerator(feature) || '';
          const active = distributionStatesMap[name] === true;
          return { d, name, active };
        });

        setPaths(statePaths);
        setLoaded(true);
      })
      .catch((err) => console.error('Error cargando mapa:', err));
  }, []);

  return (
    <div className="w-full bg-[#F7F7F7] border border-[#E8E8E8] rounded-sm overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 w-full h-full"
          aria-label="Mapa de distribución Kaliche's en México"
        >
          {!loaded && (
            <text x="400" y="250" textAnchor="middle" fill="#CCCCCC" fontSize="14" fontFamily="sans-serif">
              Cargando mapa...
            </text>
          )}
          {paths.map((state, idx) => (
            <path
              key={idx}
              d={state.d}
              fill={
                state.name === hoveredState
                  ? state.active ? '#B71518' : '#BBBBBB'
                  : state.active ? '#E31E24' : '#D8D8D8'
              }
              stroke="#FFFFFF"
              strokeWidth="1"
              style={{ cursor: 'pointer', transition: 'fill 0.15s ease' }}
              onMouseEnter={() => setHoveredState(state.name)}
              onMouseLeave={() => setHoveredState(null)}
            />
          ))}
        </svg>
      </div>

      <div className="h-6 flex items-center justify-center">
        {hoveredState ? (
          <span className="font-sans text-[11px] font-bold text-[#555555]">
            {hoveredState}
            {distributionStatesMap[hoveredState] && (
              <span className="ml-2 text-[#E31E24]">• Disponible</span>
            )}
          </span>
        ) : (
          <span className="font-sans text-[11px] text-[#CCCCCC]">
            Pasa el cursor sobre un estado
          </span>
        )}
      </div>

      <div className="flex items-center justify-center gap-6 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#E31E24]" />
          <span className="font-sans text-[11px] text-[#555555]">Con distribución</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[#D8D8D8]" />
          <span className="font-sans text-[11px] text-[#555555]">Próximamente</span>
        </div>
      </div>
    </div>
  );
}

export default function DistributorsSection() {
  return (
    <Section id="distribuidores" variant="default" className="border-t border-[#E8E8E8]">
      <div className="flex flex-col gap-16">

        {/* ── CTA CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative bg-[#F5F5F5] border border-[#E8E8E8] p-8 flex flex-col justify-between gap-6 group hover:border-[#0F0F0F] hover:shadow-[4px_4px_0px_#0F0F0F] transition-all duration-200">
            <div className="space-y-2">
              <h3 className="font-sans text-xl font-black uppercase tracking-tight text-[#0F0F0F] leading-tight">
                K's vende en todo el país,<br />únete a nuestra expansión
              </h3>
              <p className="font-sans text-xs text-[#555555]">
                Vende <span className="font-bold text-[#0F0F0F]">Kaliche's</span>
              </p>
            </div>
            <Button
              href={"https://wa.me/" + siteConfig.contact.whatsapp.replace(/\D/g, '') + "?text=Hola, me interesa ser distribuidor de Kaliche's"}
              variant="primary"
              size="sm"
              className="font-bold w-fit"
            >
              Más información
            </Button>
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-[#E31E24]/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#E31E24] flex items-center justify-center">
                <span className="text-white font-black text-[10px]">K's</span>
              </div>
            </div>
          </div>

          <div className="relative bg-[#F5F5F5] border border-[#E8E8E8] p-8 flex flex-col justify-between gap-6 group hover:border-[#0F0F0F] hover:shadow-[4px_4px_0px_#0F0F0F] transition-all duration-200">
            <div className="space-y-2">
              <h3 className="font-sans text-xl font-black uppercase tracking-tight text-[#0F0F0F] leading-tight">
                K's tiene sabores especiales para cafeterías y restaurantes
              </h3>
              <p className="font-sans text-xs text-[#555555]">
                Vende <span className="font-bold text-[#0F0F0F]">Kaliche's</span>
              </p>
            </div>
            <Button
              href={"https://wa.me/" + siteConfig.contact.whatsapp.replace(/\D/g, '') + "?text=Hola, me interesa integrar Kaliche's en mi cafetería"}
              variant="primary"
              size="sm"
              className="font-bold w-fit"
            >
              Más información
            </Button>
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-[#E31E24]/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#E31E24] flex items-center justify-center">
                <span className="text-white font-black text-[10px]">K's</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CATÁLOGO PARA CAFETERÍAS Y RESTAURANTES ── */}
        <div id="catalogo-cafeterias" className="border-t border-[#E8E8E8] pt-12">

          {/* Título principal */}
          <div className="text-center mb-4 space-y-2">
            <span className="font-sans text-[11px] font-black uppercase tracking-[0.22em] text-[#E31E24]">
              Catálogo especializado para cafeterías y restaurantes
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F0F0F]">
              Lista de Sabores
            </h2>
            <p className="font-sans text-sm text-[#555555] max-w-lg mx-auto">
              Presentación en bolsa de 2.00 kg — formato profesional para volumen de servicio
            </p>
          </div>

          {/* Grid de sabores */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {Object.entries(flavors).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h4 className="font-sans text-[11px] font-black uppercase tracking-[0.18em] text-[#E31E24] border-b border-[#E8E8E8] pb-2">
                  {category}
                </h4>
                <ul className="space-y-1.5">
                  {items.map((flavor) => (
                    <li key={flavor} className="flex items-start gap-2">
                      <span className="text-[#E31E24] mt-[3px] flex-shrink-0 text-[10px]">•</span>
                      <span className="font-sans text-[12px] sm:text-[13px] text-[#333333] leading-snug">
                        {flavor}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mensaje de sabores personalizados */}
          <div className="mt-10 border-t border-[#E8E8E8] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-[14px] text-[#333333] leading-relaxed max-w-md">
              <span className="font-bold text-[#0F0F0F]">¿No encuentras el sabor que buscas?</span>
              <br />
              Mándanos mensaje, te lo podemos fabricar.
            </p>
            <Button
              href={"https://wa.me/" + siteConfig.contact.whatsapp.replace(/\D/g, '') + "?text=Hola, busco un sabor personalizado de Kaliche's para mi negocio"}
              variant="primary"
              size="sm"
              className="font-bold flex-shrink-0"
            >
              Solicitar sabor personalizado
            </Button>
          </div>
        </div>

        {/* ── MAPA DE DISTRIBUCIÓN ── */}
        <div className="border-t border-[#E8E8E8] pt-12">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-sans text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0F0F0F]">
              Mapa de Distribución
            </h2>
            <p className="font-sans text-sm text-[#555555]">
              Estados donde encontrarás{' '}
              <span className="font-bold text-[#0F0F0F]">Kaliche's</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

            <div className="w-full max-w-2xl flex-shrink-0">
              <MexicoMap />
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <h3 className="font-sans text-[11px] font-black uppercase tracking-[0.2em] text-[#AAAAAA] mb-5">
                Cobertura actual
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-8">
                {distributionStates.map((state) => (
                  <li key={state} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#E31E24] flex-shrink-0" />
                    <span className="font-sans text-[13px] sm:text-[14px] font-medium text-[#333333]">
                      {state}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E8E8E8]">
                <p className="font-sans text-[12px] text-[#888888] mb-4 leading-relaxed">
                  ¿Tu estado no aparece?<br />
                  Contáctanos — seguimos expandiendo.
                </p>
                <Button
                  href={"https://wa.me/" + siteConfig.contact.whatsapp.replace(/\D/g, '') + "?text=Hola, me interesa saber si Kaliche's llega a mi zona"}
                  variant="primary"
                  size="sm"
                  className="font-bold"
                >
                  Consultar cobertura
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
}