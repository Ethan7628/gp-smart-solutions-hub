import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Phone, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import itImg from "@/assets/it-showcase.jpg";
import { itCategories } from "@/lib/it-categories";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/it-services/")({
  head: () => ({
    ...pageMeta({
      title: "Hardware & Equipment Catalogue Uganda — GP Smart Solutions",
      description:
        "Browse CCTV cameras, recorders, networking hardware, access control and telephony equipment in Uganda. Ask GP Smart Solutions about models, specifications and pricing.",
      path: "/it-services",
      keywords: [
        "CCTV installation Uganda",
        "networking Kampala",
        "PABX telephony",
        "access control",
        "fiber optics",
        "office setup",
        "IT support Uganda",
        "WiFi installation",
        "smart door locks",
      ],
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Equipment", path: "/it-services" },
          ]),
        ),
      },
    ],
  }),
  component: ITServicesPage,
});

const productCategories = itCategories.map((c) => ({
  slug: c.slug,
  title: c.title,
  desc: c.shortDesc,
  image: c.image,
  alt: c.alt,
}));

export function ITServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={itImg}
            alt=""
            width={1400}
            height={1000}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute inset-0 bg-mesh" />
        </div>
        <div className="container-app py-20 md:py-28">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-brand transition">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Equipment</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Cpu className="h-3.5 w-3.5 text-brand" /> Hardware & Equipment
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Hardware & <span className="gradient-text">Equipment Catalogue</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Cameras, recorders, network hardware, smart access and office telephony —
              find the right equipment for your premises, then ask us for a model-specific quotation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-2">
                <a href="tel:+256789877929" aria-label="Call +256 789 877 929">
                  <Phone className="mr-2 h-4 w-4" /> +256 789 877 929
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container-app pb-24">
        {/* Equipment & product gallery */}
        <div>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Equipment & Products
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Everything we supply & install
            </h2>
            <p className="mt-4 text-muted-foreground">
              Browse equipment types and their capabilities. Model specifications, availability and
              pricing are confirmed with your quotation.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
              >
                <Link
                  to="/it-services/$category"
                  params={{ category: cat.slug }}
                  className="group block h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-brand transition">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View equipment <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold">Need installation rather than hardware?</h2>
            <p className="mt-3 text-muted-foreground">Explore CCTV installation, networking, cabling and IT support, with scope, process and after-sales care.</p>
          </div>
          <Button asChild variant="outline" size="lg"><Link to="/services">Explore Installation Services <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
