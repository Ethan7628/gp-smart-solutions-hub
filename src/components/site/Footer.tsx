import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const columns = [
  {
    title: "IT Services",
    links: [
      { to: "/it-services", label: "Overview" },
      { to: "/it-services", label: "CCTV Installation" },
      { to: "/it-services", label: "Networking & WiFi" },
      { to: "/it-services", label: "PABX & Telephony" },
      { to: "/it-services", label: "Access Control" },
      { to: "/it-services", label: "IT Support" },
    ],
  },
  {
    title: "Beauty & Salon",
    links: [
      { to: "/beauty", label: "Overview" },
      { to: "/beauty", label: "Haircuts & Styling" },
      { to: "/beauty", label: "Hair Treatment" },
      { to: "/beauty", label: "Nails & Pedicure" },
      { to: "/beauty", label: "Beard Grooming" },
      { to: "/beauty", label: "Cosmetics" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
      { to: "/contact", label: "Get a Quote" },
      { to: "/beauty", label: "Book Appointment" },
    ],
  },
];

// Simple TikTok glyph (lucide has no TikTok icon)
function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.09a4.85 4.85 0 0 1-1.84-.4Z" />
    </svg>
  );
}

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1935f6zmN6/" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/katongole2204?igsh=aXEwNjZqZjF5YmZl" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-katongole-a062633ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@GpsmartsolutionsLimited" },
  { Icon: TiktokIcon, label: "TikTok", href: "https://tiktok.com/@gpsmartsolutions" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-dark text-white/80">
      <div className="container-app py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-white font-bold text-lg">GP Smart Solutions</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-sm">
              Smart Technology. Professional Beauty. One trusted brand delivering premium IT
              solutions and a luxurious salon experience across Uganda.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-glow" /> +256 789 877 929</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-glow" /> gpsmartsolutions9@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-glow" /> Kampala, Uganda</li>
            </ul>

            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-white font-semibold text-sm tracking-wide uppercase">{c.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="text-sm text-white/60 hover:text-white transition">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} GP Smart Solutions Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
