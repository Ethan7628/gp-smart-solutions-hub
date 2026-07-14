import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Sparkles, Palette, Heart, Star, Clock, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import beautyImg from "@/assets/beauty-showcase.jpg";
import salonPoster from "@/assets/salon-poster.jpg";
import salonTeam from "@/assets/salon-team.jpg";
import salonTeamBack from "@/assets/salon-team-back.jpg";
import gpUnixesManicure from "@/assets/gp-unixes-manicure.jpg.asset.json";

export const Route = createFileRoute("/beauty")({
  head: () => ({
    meta: [
      { title: "Beauty & Salon — GP Smart Solutions" },
      { name: "description", content: "Luxurious salon experience in Kampala: haircuts, styling, hair treatments, nail care, beard grooming, facials and premium cosmetics." },
      { property: "og:title", content: "Beauty & Salon — GP Smart Solutions" },
      { property: "og:description", content: "Haircuts, treatments, nails, beard grooming and premium cosmetics." },
      { property: "og:url", content: "/beauty" },
    ],
    links: [{ rel: "canonical", href: "/beauty" }],
  }),
  component: BeautyPage,
});

const categories = [
  { icon: Scissors, title: "Haircuts & Styling", desc: "Precision cuts, blow-dry, updos and event styling.", price: "from UGX 25,000" },
  { icon: Sparkles, title: "Hair Treatment", desc: "Deep conditioning, keratin, scalp therapy, coloring.", price: "from UGX 60,000" },
  { icon: Palette, title: "Nails & Pedicure", desc: "Manicure, pedicure, gel, acrylic and nail art.", price: "from UGX 30,000" },
  { icon: Heart, title: "Beard Grooming", desc: "Sharp beard designs, hot towel and facial care.", price: "from UGX 20,000" },
  { icon: Sparkles, title: "Facials & Skincare", desc: "Cleansing, exfoliation, masks and glow treatments.", price: "from UGX 45,000" },
  { icon: Palette, title: "Cosmetics & Makeup", desc: "Bridal, event and everyday makeup by senior stylists.", price: "from UGX 80,000" },
];

export function BeautyPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={beautyImg} alt="" width={1400} height={1000} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>
        <div className="container-app py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--beauty)" }} /> Beauty & Salon Division
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
              A <span className="gradient-text-beauty">signature experience</span>, every visit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From precision haircuts to luxurious treatments, our senior stylists deliver a
              premium salon experience tailored to how you want to look and feel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 shadow-beauty text-white bg-gradient-beauty hover:opacity-95">
                <Link to="/contact"><Calendar className="mr-2 h-4 w-4" /> Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-2">
                <a href="https://wa.me/256789877929" target="_blank" rel="noopener">WhatsApp Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-app pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.article key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-3xl bg-card p-7 shadow-soft hover:shadow-beauty hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-beauty text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-5 flex items-center justify-between pt-5 border-t border-border">
                <span className="text-sm font-semibold gradient-text-beauty">{c.price}</span>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Book <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Style gallery / poster */}
      <section className="container-app pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--beauty)" }}>
            Style Gallery
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Aura. Style. Confidence.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A glimpse of the cuts, styles and finishes crafted by our senior stylists — for men,
            women and kids. Home service is available on request.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-3xl shadow-beauty border border-border"
        >
          <img
            src={salonPoster}
            alt="God's Plan Unisex Salon showcase: professional haircuts, beard trimming, ladies hair styling, nail cutting and cosmetics"
            width={1600} height={900} loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { src: salonTeam, alt: "GP Unisex Salon stylists working on clients — barbering, braiding and blow-dry" },
            { src: salonTeamBack, alt: "GP Unisex Salon team wearing branded uniforms — GP Unisex Saloon 0784 084301" },
          ].map((p, i) => (
            <motion.figure key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border shadow-beauty"
            >
              <img src={p.src} alt={p.alt} width={1400} height={800} loading="lazy"
                className="w-full h-72 md:h-80 object-cover" />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* GP Unixes Saloon feature */}
      <section className="container-app pb-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-beauty border border-border"
          >
            <img
              src={gpUnixesManicure.url}
              alt="GP Unixes Saloon professional performing a precision manicure with black gloves and branded apron in a luxury salon setting"
              width={1200} height={1500} loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--beauty)" }}>
              Precision. Hygiene. Elegance.
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              A luxury nail experience by <span className="gradient-text-beauty">GP Unixes Saloon</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our senior nail technicians deliver flawless manicures, pedicures, gel and acrylic
              finishes in a spotless, high-end studio. Every appointment uses sterilized tools,
              premium products and single-use gloves — because your beauty deserves the highest
              standard of care.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90">
              {[
                "Certified senior nail technicians",
                "Sterilized tools & single-use gloves",
                "Premium gel, acrylic & nail art finishes",
                "Relaxing, appointment-based service",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "var(--beauty)" }} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" className="h-12 px-6 shadow-beauty text-white bg-gradient-beauty hover:opacity-95">
                <Link to="/contact"><Calendar className="mr-2 h-4 w-4" /> Book Your Appointment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>




      <section className="container-app pb-24">

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Star, title: "Senior Stylists", desc: "Trained professionals with years of styling experience." },
            { icon: Clock, title: "On-Time Service", desc: "Punctual appointments — your time is respected." },
            { icon: Sparkles, title: "Premium Products", desc: "Only trusted, professional-grade beauty products." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <f.icon className="h-6 w-6" style={{ color: "var(--beauty)" }} />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
