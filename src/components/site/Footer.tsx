import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { itCategories } from "@/lib/it-categories";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, BUSINESS_WHATSAPP } from "@/lib/seo";
import logo from "@/assets/logo.png";

const beautyLinks = [
  { to: "/beauty", label: "Overview" },
  { to: "/beauty", label: "Haircuts & Styling" },
  { to: "/beauty", label: "Hair Treatment" },
  { to: "/beauty", label: "Nails & Pedicure" },
  { to: "/beauty", label: "Beard Grooming" },
  { to: "/beauty", label: "Cosmetics & Makeup" },
] as const;

const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/contact", label: "Get a Quote" },
  { to: "/beauty", label: "Book Appointment" },
] as const;

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.09a4.85 4.85 0 0 1-1.84-.4Z" />
    </svg>
  );
}

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1935f6zmN6/" },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/katongole2204?igsh=aXEwNjZqZjF5YmZl",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-katongole-a062633ab?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@GpsmartsolutionsLimited" },
  { Icon: TiktokIcon, label: "TikTok", href: "https://tiktok.com/@gpsmartsolutions" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60 bg-dark text-white/80">
      <div className="container-app py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2" aria-label="GP Smart Solutions home">
              <img src={logo} alt="GP Smart Solutions logo" className="h-10 w-18" />
              <span className="text-white font-bold text-lg">GP Smart Solutions</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-sm">
              Smart Technology. Professional Beauty. One trusted brand delivering premium IT
              solutions and a luxurious salon experience across Uganda.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+${BUSINESS_WHATSAPP}`}
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Phone className="h-4 w-4 text-brand-glow" /> {BUSINESS_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <Mail className="h-4 w-4 text-brand-glow" /> {BUSINESS_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-glow" /> Kampala, Uganda
              </li>
            </ul>

            <nav className="mt-6 flex gap-3" aria-label="Social media">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit GP Smart Solutions on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>

          <nav aria-label="IT services navigation">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
              IT Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/it-services"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Overview
                </Link>
              </li>
              {itCategories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/it-services/$category"
                    params={{ category: c.slug }}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Beauty and salon navigation">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">
              Beauty &amp; Salon
            </h3>
            <ul className="mt-4 space-y-2.5">
              {beautyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/60 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {year} GP Smart Solutions Limited. All rights reserved.</p>
          <p>Smart Technology. Professional Beauty.</p>
        </div>
      </div>
    </footer>
  );
}
