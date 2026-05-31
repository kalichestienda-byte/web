import { MetadataRoute } from 'next';

// TODO: reemplazar con dominio final de producción.
const PRODUCTION_URL = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PRODUCTION_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // No se agregan rutas adicionales (/productos, /recetas) ya que no existen físicamente en esta iteración.
  ];
}