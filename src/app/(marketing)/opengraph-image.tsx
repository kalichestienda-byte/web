import { ImageResponse } from 'next/og';
import { siteConfig } from '../../../content/site.config';

export const runtime = 'edge';

export const alt = "KALICHE'S | Cappuccino Caramelo Instantáneo";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0F0F0F', // Negro profundo aprobado
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Contraste geométrico rojo de retail moderno */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '450px',
            height: '100%',
            backgroundColor: '#E31E24', // Rojo Kaliche's
            display: 'flex',
            transform: 'skewX(-12deg) translateX(100px)',
          }}
        />

        {/* Bloque Superior: Marca */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              fontFamily: 'sans-serif',
              fontSize: '48px',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
            }}
          >
            {siteConfig.brand.name}
          </div>
        </div>

        {/* Bloque Medio: Mensaje e Indulgencia Comercial */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '700px', zIndex: 2 }}>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              color: '#E31E24',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '16px',
            }}
          >
            Producto Estrella
          </span>
          <h1
            style={{
              fontFamily: 'sans-serif',
              fontSize: '64px',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            {siteConfig.seo.h1}
          </h1>
          <p
            style={{
              fontFamily: 'sans-serif',
              fontSize: '24px',
              color: '#F5F5F5',
              marginTop: '20px',
              lineHeight: 1.4,
            }}
          >
            {siteConfig.brand.description}
          </p>
        </div>

        {/* Bloque Inferior: Badges de Validación */}
        <div style={{ display: 'flex', gap: '16px', zIndex: 2 }}>
          <div
            style={{
              backgroundColor: '#1A1A1A',
              padding: '12px 24px',
              border: '1px solid #E8E8E8',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Bolsa 300g
          </div>
          <div
            style={{
              backgroundColor: '#E31E24',
              padding: '12px 24px',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Rinde 13 Tazas
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}