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

export const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/it-services", priority: "0.9", changefreq: "monthly" },
  { path: "/beauty", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/it-services/cctv-surveillance", priority: "0.8", changefreq: "monthly" },
  { path: "/it-services/recording-storage", priority: "0.8", changefreq: "monthly" },
  { path: "/it-services/networking-fiber", priority: "0.8", changefreq: "monthly" },
  { path: "/it-services/smart-access", priority: "0.8", changefreq: "monthly" },
  { path: "/it-services/telephony", priority: "0.8", changefreq: "monthly" },
  { path: "/it-services/installation-services", priority: "0.8", changefreq: "monthly" },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description:
    "Premium IT services and luxurious salon experiences under one trusted brand in Kampala, Uganda. CCTV, networking, PABX, access control, fiber optics, plus haircuts, nails, and beauty treatments.",
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  image: `${SITE_URL}/assets/hero-fusion.jpg`,
  logo: `${SITE_URL}/favicon.ico`,
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
  openingHours: "Mo-Sa 08:00-20:00",
  areaServed: "Uganda",
  priceRange: "$$",
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

export function buildPageMeta({
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
