import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";

interface JsonLdScriptProps {
  data: Record<string, unknown>;
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function LocalBusinessJsonLd() {
  return <JsonLdScript data={localBusinessJsonLd as unknown as Record<string, unknown>} />;
}

export { SITE_URL };
