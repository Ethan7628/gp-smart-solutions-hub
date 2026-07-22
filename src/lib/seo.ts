export const SITE_URL = "https://gpsmartsolutions.co.ug";
export const SITE_NAME = "GP Smart Solutions Limited";
export const SITE_TAGLINE = "Smart Technology. Professional Beauty.";
export const BUSINESS_EMAIL = "gpsmartsolutions9@gmail.com";
export const BUSINESS_PHONE = "+256789877929";
export const BUSINESS_PHONE_DISPLAY = "+256 789 877 929";
export const BUSINESS_WHATSAPP = "256789877929";
export const BUSINESS_ADDRESS_LOCALITY = "Kampala";
export const BUSINESS_ADDRESS_COUNTRY = "UG";
export const BUSINESS_LAT = 0.3476;
export const BUSINESS_LNG = 32.5825;

export const SITEMAP_PATH = "/sitemap.xml";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/it-services", label: "IT Services" },
  { to: "/beauty", label: "Beauty & Salon" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#business`,
  name: SITE_NAME,
  description:
    "Premium IT services and luxurious salon experiences under one trusted brand in Kampala, Uganda. CCTV, networking, PABX, access control, fiber optics, plus haircuts, nails, and beauty treatments.",
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  image: `${SITE_URL}/assets/hero-fusion.jpg`,
  logo: `${SITE_URL}/favicon.ico`,
  priceRange: "$$",
  areaServed: "Uganda",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_ADDRESS_LOCALITY,
    addressCountry: BUSINESS_ADDRESS_COUNTRY,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_LAT,
    longitude: BUSINESS_LNG,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [
    "https://www.facebook.com/share/1935f6zmN6/",
    "https://www.instagram.com/katongole2204",
    "https://www.linkedin.com/in/emmanuel-katongole-a062633ab",
    "https://www.youtube.com/@GpsmartsolutionsLimited",
    "https://tiktok.com/@gpsmartsolutions",
  ],
  department: [
    {
      "@type": "ProfessionalService",
      name: "IT & Technology Division",
      description:
        "CCTV installation, networking, PABX telephony, access control, fiber optics, full office setups and IT support in Uganda.",
      url: `${SITE_URL}/it-services`,
    },
    {
      "@type": "HealthAndBeautyBusiness",
      name: "Beauty & Salon Division",
      description:
        "Haircuts, styling, hair treatments, nails, pedicure, beard grooming, facials and premium cosmetics in Kampala.",
      url: `${SITE_URL}/beauty`,
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/contact`,
    "query-input": "required name=search_term_string",
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    areaServed: "Uganda",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.facebook.com/share/1935f6zmN6/",
    "https://www.instagram.com/katongole2204",
    "https://www.linkedin.com/in/emmanuel-katongole-a062633ab",
    "https://www.youtube.com/@GpsmartsolutionsLimited",
    "https://tiktok.com/@gpsmartsolutions",
  ],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: "Uganda",
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function pageMeta({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { name: "author", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_UG" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (keywords && keywords.length > 0) {
    meta.push({ name: "keywords", content: keywords.join(", ") });
  }

  if (ogImage) {
    meta.push({ property: "og:image", content: ogImage });
    meta.push({ name: "twitter:image", content: ogImage });
  }

  return { meta, links: [{ rel: "canonical", href: url }] };
}
