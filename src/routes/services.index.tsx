import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { servicePages } from "@/lib/services";
import { BUSINESS_WHATSAPP, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

const title = "IT Services in Uganda | CCTV, Networking, Fiber & Support — GP Smart Solutions";
const description =
  "Explore GP Smart Solutions services in Uganda: CCTV installation, networking and Wi-Fi, fiber optic, structured cabling, access control, PABX, server setup and IT support.";

export const Route = createFileRoute("/services/")({
  head: () => {
    const base = pageMeta({
      title,
      description,
      path: "/services",
      keywords: [
        "IT services Uganda",
        "CCTV installation Kampala",
        "networking company Uganda",
        "fiber optic installation Uganda",
        "IT support Kampala",
      ],
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        },
      ],
    };
  },
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <SiteLayout>
      <section className="container-app py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
          IT, Networking &amp; Security Services in Uganda
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every service below includes a site assessment, an itemised quotation, professional
          installation by our technicians and technical support after handover.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition hover:shadow-elegant"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h2 className="font-semibold">{s.name}</h2>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.includes.slice(0, 3).map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    View service <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border/60 bg-muted/40 p-8 text-center">
          <h2 className="text-2xl font-bold">Not sure which service you need?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Tell us about your site and our technical team will recommend the right setup and give
            you a clear quotation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-gradient-brand shadow-elegant">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp an IT Expert
              </a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
