export interface BrandConfig {
  name: string;
  owner: string;
  slogan: string;
  description: string;
  positioning: string;
}

export interface ContactConfig {
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  hours: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
}

export interface ThemeConfig {
  colors: {
    primary: string;
    primaryDark: string;
    black: string;
    grayDeep: string;
    grayLight: string;
    white: string;
    borders: string;
  };
  typography: {
    headlines: string;
    body: string;
  };
  visualDirection: string;
  contrastSystem: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
  primaryCta: {
    label: string;
    href: string;
    isExternal: boolean;
  };
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  badges: string[];
  image: string;
}

export interface ProductImages {
  heroBanner: { src: string; alt: string };
  hero: { src: string; alt: string };
  pack: { src: string; alt: string };
  lifestyle: { src: string; alt: string };
}

export interface ProductItem {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  description: string;
  presentation: string;
  servingSize: string;
  preparation: string;
  yieldText: string;
  flavorProfile: string;
  storage: string;
  shelfLife: string;
  boxQuantity: number;
  labels: string[];
  featured: boolean;
  label?: string;
  cta: { label: string; href: string };
  images: ProductImages;
}

export interface ProductsConfig {
  title: string;
  subtitle: string;
  featuredProduct: string;
  groupImage: { src: string; alt: string };
  items: ProductItem[];
}

export interface ValueItem {
  title: string;
  description: string;
  iconIdentifier: string;
}

export interface ValueConfig {
  title: string;
  subtitle: string;
  items: ValueItem[];
}

export interface BrandStoryConfig {
  title: string;
  subtitle: string;
  content: string[];
  highlights: string[];
}

export interface UseCaseItem {
  title: string;
  description: string;
  status: 'confirmed' | 'pending_confirmation';
}

export interface UseCasesConfig {
  title: string;
  subtitle: string;
  items: UseCaseItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqConfig {
  title: string;
  items: FaqItem[];
}

export interface FinalCtaConfig {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface FooterConfig {
  description: string;
  links: NavigationItem[];
  legalText: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  contact: ContactConfig;
  seo: SeoConfig;
  theme: ThemeConfig;
  navigation: NavigationConfig;
  hero: HeroConfig;
  products: ProductsConfig;
  value: ValueConfig;
  brandStory: BrandStoryConfig;
  useCases: UseCasesConfig;
  faq: FaqConfig;
  finalCta: FinalCtaConfig;
  footer: FooterConfig;
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "KALICHE'S",
    owner: "Kaliches",
    slogan: "Kaliches es para todos",
    description: "Marca moderna de cappuccino e instantáneos saborizados. La alternativa indulgente, cremosa y lista al instante.",
    positioning: "Cappuccino instantáneo cremoso sabor caramelo, listo al instante, con gran rendimiento y estilo de marca propio."
  },
  contact: {
    phone: "+523113768591",
    whatsapp: "+523113768591",
    whatsappMessage: "Hola, me interesa conocer más sobre los productos de Kaliche's y los puntos de venta.",
    address: "Loma de Rosales 31",
    neighborhood: "Fracc. Lomas del Encanto",
    city: "Tepic",
    state: "Nayarit",
    hours: "Lunes a viernes de 9:00 am a 6:00 pm"
  },
  seo: {
    title: "KALICHE'S | Cappuccino Caramelo Instantáneo Cremoso",
    description: "Cappuccino instantáneo sabor caramelo, cremoso, delicioso y listo al instante. Bolsa de 300g que rinde hasta 13 tazas.",
    h1: "Cappuccino instantáneo cremoso sabor caramelo",
    keywords: [
      "cappuccino caramelo instantáneo",
      "capuchino cremoso instantáneo",
      "café soluble sabor caramelo",
      "cappuccino en bolsa 300g",
      "capuchino cremoso de bolsa mexicano"
    ]
  },
  theme: {
    colors: {
      primary: "#E31E24",
      primaryDark: "#B71518",
      black: "#0F0F0F",
      grayDeep: "#1A1A1A",
      grayLight: "#F5F5F5",
      white: "#FFFFFF",
      borders: "#E8E8E8"
    },
    typography: {
      headlines: "Barlow Condensed",
      body: "DM Sans"
    },
    visualDirection: "Campaña cinematográfica full-screen. Producto protagonista enmarcado, atmósfera visual inmersiva por sabor.",
    contrastSystem: [
      "Sección 1: Cinemático / Full-screen (Hero Campaign)",
      "Sección 2: Blanco Puro (Todos los Productos Fichas Comerciales)",
      "Sección 3: Gris Suave (Propuesta de valor y pilares)",
      "Sección 4: Oscuro Profundo (Bloque editorial de marca)",
      "Sección 5: Blanco Puro (Usos y canales)",
      "Sección 6: Rojo Kaliche's (Bloque de conversión final)",
      "Sección 7: Claro (Footer institucional)"
    ]
  },
 navigation: {
    items: [
      { label: "Inicio", href: "/" },
      { label: "Productos", href: "#productos" },
      { label: "Propuesta de Valor", href: "#valores" },
      { label: "Nuestra Historia", href: "#historia" },
      // CORRECCIÓN: Enlace directo y limpio a WhatsApp con mensaje predeterminado
      { 
        label: "Contacto", 
        href: "https://wa.me/523113768591?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20productos%20de%20Kaliche's" 
      }
    ],
    primaryCta: {
      label: "Ver tienda",
      href: "https://wa.me/523113768591?text=Hola, me interesa comprar productos Kaliche's",
      isExternal: true
    }
  },
  hero: {
    title: "Cappuccino instantáneo cremoso sabor caramelo",
    subtitle: "Cremoso, delicioso y listo al instante. Bolsa de 300g que rinde hasta 13 tazas.",
    primaryCta: {
      label: "Comprar ahora",
      href: "https://wa.me/523113768591?text=Hola, quiero comprar Kaliche's"
    },
    secondaryCta: {
      label: "Escríbenos por WhatsApp",
      href: "https://wa.me/523113768591?text=Hola, me interesa conocer más sobre Kaliche's"
    },
    badges: ["Bolsa de 300g", "Rinde hasta 13 tazas", "Sabor Caramelo", "Listo al instante"],
    image: "/images/products/cappuccino-caramelo/hero.webp"
  },
  products: {
    title: "Nuestra Línea de Productos",
    subtitle: "Explora la gama completa desarrollada bajo estrictos estándares de sabor e indulgencia, listos para disfrutar en cualquier momento.",
    featuredProduct: "cappuccino-caramelo",
    groupImage: {
      src: "/images/products/group/all-products-lineup.webp",
      alt: "Línea completa de productos en polvo Kaliche's"
    },
    items: [
      {
        slug: "cafe-con-leche",
        name: "Café con Leche",
        shortName: "Café con Leche",
        seoTitle: "Café con Leche Instantáneo en Polvo | Kaliche's",
        seoDescription: "Mezcla instantánea equilibrada de café soluble con lácteos que aporta un sabor cremoso, aroma característico y preparación rápida.",
        tagline: "El balance perfecto de tu mañana, suave y cremoso",
        description: "Bebida en polvo para preparar café con leche. Mezcla balanceada de café soluble seleccionado con bases lácteas que aporta un sabor terso y un perfil reconfortante ideal para el consumo diario.",
        presentation: "Bolsa de 300g",
        servingSize: "2 cucharadas (25g) por taza",
        preparation: "Agregar dos cucharadas (25g) en 150 ml de agua caliente, mezclar y disfrutar.",
        yieldText: "Rinde hasta 12 tazas",
        flavorProfile: "Café claro, notas dulces y cremosas provenientes de la leche, con un sutil toque amargo propio del café tostado.",
        storage: "Consérvese en un lugar fresco y seco",
        shelfLife: "12 meses",
        boxQuantity: 6,
        labels: ["Exceso de calorías", "Exceso de azúcares"],
        featured: false,
        cta: { label: "Comprar ahora", href: "https://wa.me/523113768591?text=Hola, quiero comprar Café con Leche Kaliche's" },
        images: {
          heroBanner: { src: "/images/products/cafe-con-leche/hero-banner.jpg", alt: "Café con Leche Kaliche's" },
          hero: { src: "/images/products/cafe-con-leche/hero.webp", alt: "Taza de Café con Leche Kaliche's humeante" },
          pack: { src: "/images/products/cafe-con-leche/pack.webp", alt: "Empaque de Café con Leche Kaliche's 300g" },
          lifestyle: { src: "/images/products/cafe-con-leche/lifestyle.webp", alt: "Momento de consumo de Café con Leche por la mañana" }
        }
      },
      {
        slug: "cafe-frio",
        name: "Café Frío",
        shortName: "Café Frío",
        seoTitle: "Café Soluble Fino para Agua o Leche Fría | Kaliche's",
        seoDescription: "Disfruta un café refrescante con Café Frío Kaliche's. Disolución instantánea en frío, aroma tostado intenso y notas amargas agradables.",
        tagline: "Intensidad y frescura que se disuelven al instante en frío",
        description: "Café soluble finamente procesado para una disolución óptima en líquidos a baja temperatura. Destaca por su color oscuro profundo y aroma tostado característico de un buen grano.",
        presentation: "Bolsa de 120g",
        servingSize: "2 cucharadas (3g) por porción",
        preparation: "Agregar dos cucharadas (3g) en 150 ml de agua o leche fría, mezclar y disfrutar.",
        yieldText: "Rinde de forma óptima",
        flavorProfile: "Café soluble fino de color oscuro, sabor amargo característico bien definido, olor intenso y tostado.",
        storage: "Consérvese en un lugar fresco y seco",
        shelfLife: "12 meses",
        boxQuantity: 6,
        labels: [],
        featured: false,
        cta: { label: "Comprar ahora", href: "https://wa.me/523113768591?text=Hola, quiero comprar Café Frío Kaliche's" },
        images: {
          heroBanner: { src: "/images/products/cafe-frio/hero-banner.jpg", alt: "Café Frío Kaliche's" },
          hero: { src: "/images/products/cafe-frio/hero.webp", alt: "Vaso de Café Frío Kaliche's con hielos" },
          pack: { src: "/images/products/cafe-frio/pack.webp", alt: "Empaque de Café Frío Kaliche's 120g" },
          lifestyle: { src: "/images/products/cafe-frio/lifestyle.webp", alt: "Bebida de Café Frío disfrutándose en una tarde de calor" }
        }
      },
      {
        slug: "cappuccino",
        name: "Cappuccino Clásico",
        shortName: "Cappuccino",
        seoTitle: "Mezcla de Cappuccino Instantáneo Cremoso | Kaliche's",
        seoDescription: "Prepara un cappuccino clásico en segundos. Mezcla instantánea en polvo con la espuma perfecta y un sutil balance lácteo y amargo.",
        tagline: "La espuma densa y tradicional del cappuccino en tu taza",
        description: "Mezcla instantánea en polvo diseñada minuciosamente para recrear la textura y el cuerpo de un cappuccino tradicional con una corona de espuma consistente y aroma envolvente a café.",
        presentation: "Bolsa de 300g",
        servingSize: "2 cucharadas (25g) por taza",
        preparation: "Agregar dos cucharadas (25g) en 150 ml de agua caliente, mezclar y disfrutar.",
        yieldText: "Rinde hasta 12 tazas",
        flavorProfile: "Notas ligeramente dulces y cremosas provenientes de la base láctea, en armonía con un toque amargo propio del café.",
        storage: "Consérvese en un lugar fresco y seco",
        shelfLife: "12 meses",
        boxQuantity: 6,
        labels: ["Exceso de calorías", "Exceso de azúcares"],
        featured: false,
        cta: { label: "Comprar ahora", href: "https://wa.me/523113768591?text=Hola, quiero comprar Cappuccino Clásico Kaliche's" },
        images: {
          heroBanner: { src: "/images/products/cappuccino/hero-banner.jpg", alt: "Cappuccino Clásico Kaliche's" },
          hero: { src: "/images/products/cappuccino/hero.webp", alt: "Taza transparente de Cappuccino Clásico Kaliche's" },
          pack: { src: "/images/products/cappuccino/pack.webp", alt: "Empaque de Cappuccino Clásico Kaliche's 300g" },
          lifestyle: { src: "/images/products/cappuccino/lifestyle.webp", alt: "Taza de cappuccino en un espacio de escritorio" }
        }
      },
      {
        slug: "cappuccino-caramelo",
        name: "Cappuccino Caramelo",
        shortName: "Caramelo",
        seoTitle: "Cappuccino Instantáneo Cremoso Sabor Caramelo | Kaliche's",
        seoDescription: "El producto estrella de Kaliche's. Disfruta un cappuccino de caramelo ultra cremoso, dulce e indulgente. Bolsa de 300g para 13 tazas.",
        tagline: "Cremoso, delicioso y listo al instante. Nuestro producto estrella",
        description: "Mezcla instantánea gourmet en polvo diseñada para preparar un Cappuccino Caramelo de alta densidad. Su fórmula equilibra perfectamente la fuerza del café con la indulgencia aromática del caramelo dulce.",
        presentation: "Bolsa de 300g",
        servingSize: "2 cucharadas (25g) por taza",
        preparation: "Agregar dos cucharadas (25g) en 150 ml de agua caliente, mezclar y disfrutar.",
        yieldText: "Rinde hasta 13 tazas",
        flavorProfile: "Notas muy dulces y cremosas provenientes de la leche, balanceadas con el toque amargo del café y un marcado sabor a caramelo de repostería.",
        storage: "Consérvese en un lugar fresco y seco",
        shelfLife: "12 meses",
        boxQuantity: 6,
        labels: ["Exceso de calorías", "Exceso de azúcares"],
        featured: true,
        label: "Producto estrella",
        cta: { label: "Comprar ahora", href: "https://wa.me/523113768591?text=Hola, quiero comprar Cappuccino Caramelo Kaliche's" },
        images: {
          heroBanner: { src: "/images/products/cappuccino-caramelo/hero-banner.jpg", alt: "Cappuccino Caramelo Kaliche's" },
          hero: { src: "/images/products/cappuccino-caramelo/hero.webp", alt: "Cappuccino Caramelo Kaliche's con hilos de caramelo visuales" },
          pack: { src: "/images/products/cappuccino-caramelo/pack.webp", alt: "Bolsa de 300g de Cappuccino Caramelo Kaliche's" },
          lifestyle: { src: "/images/products/cappuccino-caramelo/lifestyle.webp", alt: "Taza de Cappuccino Caramelo servida en una mesa familiar" }
        }
      },
      {
        slug: "cappuccino-sin-azucar",
        name: "Cappuccino Sin Azúcar",
        shortName: "Sin Azúcar",
        seoTitle: "Cappuccino Instantáneo Sin Azúcar Añadida | Kaliche's",
        seoDescription: "Disfruta de toda la cremosidad de un cappuccino tradicional sin azúcares añadidos. Todo el sabor lácteo con un toque sutil amargo.",
        tagline: "Cremosidad plena sin azúcares añadidos",
        description: "Mezcla instantánea en polvo formulada especialmente para quienes buscan limitar el consumo de azúcares sin sacrificar el cuerpo, la espuma densa ni la textura láctea característica de un excelente cappuccino.",
        presentation: "Bolsa de 300g",
        servingSize: "2 cucharadas (25g) por taza",
        preparation: "Agregar dos cucharadas (25g) en 150 ml de agua caliente, mezclar y disfrutar.",
        yieldText: "Rinde hasta 12 tazas",
        flavorProfile: "Cremoso proveniente de la leche, con el toque amargo característico y propio del café soluble bien balanceado.",
        storage: "Consérvese en un lugar fresco y seco",
        shelfLife: "12 meses",
        boxQuantity: 6,
        labels: ["Exceso de calorías"],
        featured: false,
        cta: { label: "Comprar ahora", href: "https://wa.me/523113768591?text=Hola, quiero comprar Cappuccino Sin Azúcar Kaliche's" },
        images: {
          heroBanner: { src: "/images/products/cappuccino-sin-azucar/hero-banner.jpg", alt: "Cappuccino Sin Azúcar Kaliche's" },
          hero: { src: "/images/products/cappuccino-sin-azucar/hero.webp", alt: "Cappuccino Sin Azúcar Kaliche's en taza de porcelana" },
          pack: { src: "/images/products/cappuccino-sin-azucar/pack.webp", alt: "Empaque de Cappuccino Sin Azúcar Kaliche's 300g" },
          lifestyle: { src: "/images/products/cappuccino-sin-azucar/lifestyle.webp", alt: "Momento de consumo de cappuccino en la oficina" }
        }
      },
      {
        slug: "cappuccino-vainilla",
        name: "Cappuccino Vainilla",
        shortName: "Vainilla",
        seoTitle: "Cappuccino Instantáneo Sabor Vainilla | Kaliche's",
        seoDescription: "Deliciosa combinación de café con notas dulces y fragantes de vainilla. Cappuccino en polvo instantáneo, cremoso y suave.",
        tagline: "Un toque clásico de vainilla suave, aromático e indulgente",
        description: "Mezcla instantánea en polvo diseñada para preparar una bebida reconfortante que fusiona la suavidad de la crema láctea, el carácter equilibrado del café soluble y el aroma de la vainilla dulce.",
        presentation: "Bolsa de 300g",
        servingSize: "2 cucharadas (25g) por taza",
        preparation: "Agregar dos cucharadas (25g) en 150 ml de agua caliente, mezclar y disfrutar.",
        yieldText: "Rinde hasta 12 tazas",
        flavorProfile: "Notas dulces y cremosas provenientes de la leche, toque amargo balanceado propio del café y un claro y sofisticado aroma a vainilla.",
        storage: "Consérvese en un lugar fresco y seco",
        shelfLife: "12 meses",
        boxQuantity: 6,
        labels: ["Exceso de calorías", "Exceso de azúcares"],
        featured: false,
        cta: { label: "Comprar ahora", href: "https://wa.me/523113768591?text=Hola, quiero comprar Cappuccino Vainilla Kaliche's" },
        images: {
          heroBanner: { src: "/images/products/cappuccino-vainilla/hero-banner.jpg", alt: "Cappuccino Vainilla Kaliche's" },
          hero: { src: "/images/products/cappuccino-vainilla/hero.webp", alt: "Taza de Cappuccino Vainilla Kaliche's con detalles de espuma" },
          pack: { src: "/images/products/cappuccino-vainilla/pack.webp", alt: "Empaque de Cappuccino Vainilla Kaliche's 300g" },
          lifestyle: { src: "/images/products/cappuccino-vainilla/lifestyle.webp", alt: "Taza de cappuccino en una merienda por la tarde" }
        }
      }
    ]
  },
  value: {
    title: "¿Por qué el mundo prefiere Kaliche's?",
    subtitle: "Rompemos la monotonía del café instantáneo plano con una fórmula que prioriza el cuerpo y la indulgencia en cada taza.",
    items: [
      { title: "Cremoso", description: "Olvida los cafés solubles aguados. Kaliche's entrega una capa densa y deliciosa de crema en cada preparación.", iconIdentifier: "sparkles" },
      { title: "Delicioso", description: "El balance perfecto entre el café seleccionado y notas intensas a caramelo dulce.", iconIdentifier: "heart" },
      { title: "Listo al instante", description: "Sin necesidad de cafeteras complejas ni procesos tardados. Disuelve, mezcla y disfruta.", iconIdentifier: "clock" },
      { title: "Máximo rendimiento", description: "Cada bolsa de 300g rinde de forma óptima hasta para 13 tazas llenas de sabor.", iconIdentifier: "trending-up" }
    ]
  },
  brandStory: {
    title: "Nacido para romper lo establecido",
    subtitle: "Kaliches es para todos",
    content: [
      "El mercado del café instantáneo ha estado dominado durante años por las mismas opciones de siempre: solubles planos, precios altos por taza y una notable falta de textura cremosa.",
      "Kaliche's nace bajo la premisa de cambiar las reglas. Creemos firmemente que disfrutar de un cappuccino cremoso y delicioso sabor caramelo no debe ser un lujo de cafetería gourmet, ni una opción costosa de supermercado. Debe ser una experiencia diaria accesible para todos, veloz y con una identidad fuerte que represente el retail moderno de consumo."
    ],
    highlights: ["Alternativa contemporánea a marcas tradicionales", "Fórmula enfocada en la cremosidad real", "Orgullosamente mexicano con visión de escalabilidad"]
  },
  useCases: {
    title: "Kaliche's en cada rincón",
    subtitle: "Una solución versátil para diferentes momentos del día y canales comerciales.",
    items: [
      { title: "Para el Hogar", description: "Eleva tus mañanas o tardes con un antojo dulce listo en menos de un minuto sin usar máquinas.", status: "confirmed" },
      { title: "Para la Oficina", description: "El boost de productividad ideal para tus colaboradores. Fácil de almacenar y preparar en áreas comunes.", status: "confirmed" },
      { title: "Cafeterías y Restaurantes", description: "Optimiza tus tiempos de servicio e integra una opción de cappuccino saborizado de alta consistencia.", status: "pending_confirmation" },
      { title: "Distribuidores y Retail", description: "Suma a tu catálogo un producto de alta rotación con un margen competitivo y demanda creciente.", status: "pending_confirmation" }
    ]
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      { question: "¿Cuántas tazas rinde una bolsa de 300g?", answer: "Nuestra bolsa de 300g de Cappuccino Caramelo rinde de manera excelente hasta 13 tazas de cappuccino cremoso, y las demás presentaciones de 300g rinden hasta 12 tazas llenas de sabor." }
    ]
  },
  finalCta: {
    title: "¿Listo para cambiar tu café de siempre?",
    subtitle: "Prueba el verdadero sabor y cremosidad del Cappuccino Caramelo. Disponible ahora.",
    primaryCta: { label: "Ver tienda online", href: "https://wa.me/523113768591?text=Hola, quiero comprar productos Kaliche's" },
    secondaryCta: { label: "Preguntar por WhatsApp", href: "https://wa.me/523113768591?text=Hola, tengo una pregunta sobre Kaliche's" }
  },
  footer: {
    description: "Kaliche's - Marca de consumo de cappuccino instantáneo cremoso. Elevando los estándares del café diario.",
    links: [{ label: "Inicio", href: "/" }, { label: "Productos", href: "#productos" }, { label: "Contacto", href: "#contacto" }],
    legalText: "© 2026 KALICHE'S. Todos los derechos reservados. Propiedad de Kaliches. Loma de Rosales 31, Fracc. Lomas del Encanto, Tepic, Nayarit."
  }
};