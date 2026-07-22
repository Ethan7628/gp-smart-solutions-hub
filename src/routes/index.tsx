import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Camera, Wifi, Cable, Server, Lock, Cpu, Headphones as HeadphonesIcon, Scissors, Sparkles, Palette, Heart, Star, CircleCheck as CheckCircle2, Users, Clock, Trophy, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-fusion.jpg";
import itImg from "@/assets/it-showcase.jpg";
import beautyImg from "@/assets/beauty-showcase.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GP Smart Solutions Limited — Smart Technology. Professional Beauty." },
      {
        name: "description",
        content:
          "Premium IT services and luxurious salon experiences under one trusted brand. CCTV, networking, PABX, access control, plus haircuts, nails, and beauty treatments in Kampala, Uganda.",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "IT services Uganda, CCTV installation Kampala, networking WiFi, PABX telephony, access control, fiber optics, salon Uganda, haircuts, nails, beauty treatments, GP Smart Solutions",
      },
      {
        property: "og:title",
        content: "GP Smart Solutions Limited — Smart Technology. Professional Beauty.",
      },
      {
        property: "og:description",
        content:
          "Premium IT services and luxurious salon experiences under one trusted brand in Kampala, Uganda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gpsmartsolutions.co.ug/" },
      { property: "og:site_name", content: "GP Smart Solutions" },
      { property: "og:locale", content: "en_UG" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "GP Smart Solutions Limited — Smart Technology. Professional Beauty.",
      },
      {
        name: "twitter:description",
        content: "Premium IT services and luxurious salon experiences in Kampala, Uganda.",
      },
    ],
    links: [{ rel: "canonical", href: "https://gpsmartsolutions.co.ug/" }],
  }),
  component: LandingPage,
});

const itServices = [
  {
    icon: Camera,
    title: "CCTV Installation",
    desc: "Indoor, outdoor, IP cameras with 24/7 remote monitoring.",
  },
  {
    icon: Wifi,
    title: "Networking & WiFi",
    desc: "Enterprise WiFi, mesh, switches, and cable management.",
  },
  {
    icon: Cable,
    title: "Fiber Optics",
    desc: "Pulling, splicing, testing and maintenance of fiber runs.",
  },
  {
    icon: Server,
    title: "PABX & Telephony",
    desc: "IP PBX, VoIP, extensions and full office telephony.",
  },
  {
    icon: Lock,
    title: "Access Control",
    desc: "Biometric, RFID, smart door locks and attendance systems.",
  },
  {
    icon: Cpu,
    title: "Full Office Setup",
    desc: "Structured cabling, servers, cabinets, workstations.",
  },
  {
    icon: Shield,
    title: "Software Installation",
    desc: "Windows, Office, drivers, antivirus and optimization.",
  },
  {
    icon: HeadphonesIcon,
    title: "IT Support",
    desc: "Home, office, remote support and maintenance contracts.",
  },
];

const beautyServices = [
  {
    icon: Scissors,
    title: "Haircuts & Styling",
    desc: "Precision cuts and modern styling for every look.",
  },
  {
    icon: Sparkles,
    title: "Hair Treatment",
    desc: "Deep conditioning, keratin, and scalp therapy.",
  },
  {
    icon: Palette,
    title: "Nails & Pedicure",
    desc: "Manicure, pedicure, nail art and premium finishes.",
  },
  { icon: Heart, title: "Beard & Grooming", desc: "Sharp beard designs and full men's grooming." },
];

const stats = [
  { icon: Trophy, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "2,000+", label: "Happy Clients" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Sarah N.",
    role: "Business Owner, Kampala",
    quote:
      "GP Smart set up our entire office network and CCTV in two days. Zero downtime, perfect finish, and the support team is always one call away.",
  },
  {
    name: "David M.",
    role: "Restaurant Chain",
    quote:
      "From fiber runs to biometric attendance, they handled everything with real professionalism. Best IT partner we've worked with in Uganda.",
  },
  {
    name: "Amina R.",
    role: "Salon Client",
    quote:
      "Their salon experience feels like a five-star spa. My hair treatment and nails are always immaculate — I never book anywhere else.",
  },
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function LandingPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-mesh" />
        </div>

        <div className="container-app py-20 md:py-32 lg:py-40">
          <motion.div {...fade} className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Trusted by 2,000+ clients across Uganda
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Smart <span className="gradient-text">Technology.</span>
              <br />
              Beauty <span className="gradient-text-beauty">Professionals.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              One trusted brand delivering enterprise-grade IT infrastructure and a luxurious salon
              experience. Precision, care and premium quality in everything we do.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-brand hover:opacity-95 shadow-elegant h-12 px-6 text-base"
              >
                <Link to="/it-services">
                  Explore IT Services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base border-2">
                <Link to="/beauty">Book Salon Appointment</Link>
              </Button>
            </div>
          </motion.div>

          {/* Floating stat cards */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 shadow-soft"
              >
                <s.icon className="h-5 w-5 text-brand" />
                <div className="mt-3 text-3xl font-bold tracking-tight">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO DIVISIONS */}
      <section className="container-app py-20 md:py-28">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Two Divisions. One Standard.
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Built on precision. Delivered with care.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Whether you're securing a business network or booking a signature hair treatment, you
            get the same commitment to quality, punctuality and detail.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* IT Card */}
          <motion.div {...fade}>
            <Link
              to="/it-services"
              className="group block relative overflow-hidden rounded-3xl shadow-elegant"
            >
              <img
                src={itImg}
                alt="IT services"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium">
                  <Cpu className="h-3.5 w-3.5" /> IT & Technology
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-bold">Enterprise IT Solutions</h3>
                <p className="mt-2 text-white/80 max-w-md">
                  CCTV, networking, PABX, access control, fiber and full office setups — engineered
                  for uptime and scale.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Explore IT Services <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Beauty Card */}
          <motion.div {...fade}>
            <Link
              to="/beauty"
              className="group block relative overflow-hidden rounded-3xl shadow-beauty"
            >
              <img
                src={beautyImg}
                alt="Beauty salon"
                width={1400}
                height={1000}
                loading="lazy"
                className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium">
                  <Sparkles className="h-3.5 w-3.5" /> Beauty & Salon
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-bold">Luxury Beauty Experience</h3>
                <p className="mt-2 text-white/80 max-w-md">
                  Haircuts, styling, treatments, nails and premium cosmetics — a signature
                  experience in every visit.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Book an Appointment <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* IT SERVICES GRID */}
      <section className="container-app py-16 md:py-24">
        <motion.div {...fade} className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">IT Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Complete technology infrastructure
            </h2>
          </div>
          <Button asChild variant="ghost" className="text-brand">
            <Link to="/it-services">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {itServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEAUTY GRID */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh opacity-70" />
        <div className="container-app">
          <motion.div {...fade} className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "var(--beauty)" }}
              >
                Beauty & Salon
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                A signature experience, every visit
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-brand">
              <Link to="/beauty">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beautyServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-card p-7 shadow-soft hover:shadow-beauty hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-beauty text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container-app py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Our Mission",
              body: "Deliver smart, reliable technology and premium beauty experiences that elevate the everyday for businesses and individuals across Uganda.",
            },
            {
              title: "Our Vision",
              body: "To be East Africa's most trusted dual-service brand — where enterprise IT and luxury salon craftsmanship live under one standard.",
            },
            {
              title: "Our Promise",
              body: "Punctual delivery, transparent pricing, honest advice, and quality workmanship backed by ongoing support.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <CheckCircle2 className="h-8 w-8 text-brand" />
              <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-app py-20">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Testimonials</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Loved by clients who value quality
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-app py-16">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-beauty/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to get started?
              </h2>
              <p className="mt-3 text-white/85 text-lg max-w-md">
                Request a free IT quote or book your next salon session — our team responds within
                minutes on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6">
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" className="h-12 px-6 bg-white text-brand hover:bg-white/90">
                <a href="tel:+256789877929" aria-label="Call +256 789 877 929">
                  <Phone className="mr-2 h-4 w-4" /> +256 789 877 929
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
