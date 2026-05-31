import { MetadataRoute } from 'next';

// TODO: reemplazar con dominio final de producción.
const PRODUCTION_URL = 'https://example.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/api/'],
    },
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
  };
}