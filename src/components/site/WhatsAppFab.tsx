import { MessageCircle } from "lucide-react";
import { BUSINESS_WHATSAPP } from "@/lib/seo";

export function WhatsAppFab() {
  const href = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
    "Hello GP Smart Solutions, I would like to talk to an IT expert.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GP Smart Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
