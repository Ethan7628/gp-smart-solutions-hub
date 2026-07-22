import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Trophy, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import engineerDesk from "@/assets/it-engineer-desk.jpg";
import teamOffice from "@/assets/team-office.jpg";
import salonTeam from "@/assets/salon-team.jpg";
import { breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — GP Smart Solutions" },
      {
        name: "description",
        content:
          "GP Smart Solutions Limited unites premium IT services and a luxurious salon experience under one trusted brand serving Uganda. Meet our certified engineers and senior stylists.",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "GP Smart Solutions, about us, IT company Uganda, salon Kampala, certified IT engineers, senior stylists, Uganda technology company",
      },
      { property: "og:title", content: "About Us — GP Smart Solutions" },
      {
        property: "og:description",
        content:
          "Premium IT services and luxurious salon experiences under one trusted brand in Uganda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gpsmartsolutions.co.ug/about" },
      { property: "og:site_name", content: "GP Smart Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us — GP Smart Solutions" },
      {
        name: "twitter:description",
        content: "One trusted brand delivering premium IT and luxury salon services in Uganda.",
      },
    ],
    links: [{ rel: "canonical", href: "https://gpsmartsolutions.co.ug/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-app py-16 md:py-24">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link to="/" className="hover:text-brand transition">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">About</span>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">About Us</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
            One brand. <span className="gradient-text">Two crafts.</span> <br />
            <span className="gradient-text-beauty">Uncompromising quality.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            GP Smart Solutions Limited is a Uganda-based company that brings enterprise IT
            infrastructure and a luxurious salon experience under one trusted roof. We built the
            business on the belief that whether you're securing an office network or booking a hair
            treatment, you deserve the same level of care, precision and professionalism.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              body: "Deliver smart, reliable technology and premium beauty experiences that elevate everyday life for businesses and individuals.",
            },
            {
              icon: Eye,
              title: "Vision",
              body: "To be East Africa's most trusted dual-service brand — where enterprise IT and luxury salon craftsmanship live under one standard.",
            },
            {
              icon: Award,
              title: "Values",
              body: "Quality first, transparent pricing, punctual delivery, honest advice, and long-term partnerships with every client we serve.",
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
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the team */}
      <section className="container-app pb-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our People</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            The team behind the brand.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Certified IT engineers and senior stylists working under one roof — united by a shared
            standard of quality, courtesy and craft.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              src: engineerDesk,
              alt: "GP Smart Solutions IT engineer at workstation with CCTV monitoring wall",
              tag: "IT Engineering",
            },
            {
              src: teamOffice,
              alt: "GP Smart Solutions IT department staff member at Kampala office",
              tag: "IT Support",
            },
            { src: salonTeam, alt: "GP Unisex Salon stylists serving clients", tag: "Salon Team" },
          ].map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-soft hover:shadow-elegant transition"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={800}
                height={1000}
                loading="lazy"
                className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full glass px-3 py-1 text-xs font-semibold">
                {p.tag}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="container-app pb-24">
        <div className="rounded-3xl bg-mesh border border-border p-10 md:p-14">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Trophy, value: "500+", label: "Projects Delivered" },
              { icon: Users, value: "2,000+", label: "Happy Clients" },
              { icon: Clock, value: "8+", label: "Years Experience" },
              { icon: Award, value: "50+", label: "Enterprise Partners" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="h-6 w-6 text-brand" />
                <div className="mt-3 text-4xl font-bold tracking-tight">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
            <Link to="/contact">
              Work With Us <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-6 border-2">
            <Link to="/it-services">Explore Services</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
