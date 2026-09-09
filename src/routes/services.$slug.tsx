import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { getServicePage, servicePages } from "@/lib/services";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_WHATSAPP,
  breadcrumbJsonLd,
  faqJsonLd,
  pageMeta,
  serviceJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServicePage(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = getServicePage(params.slug);
    if (!service) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/services/${service.slug}`;
    const base = pageMeta({
      title: service.metaTitle,
      description: service.metaDescription,
      path,
      keywords: service.keywords,
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceJsonLd({
              name: service.heading,
              description: service.metaDescription,
              path,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(service.faqs)),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = getServicePage(slug)!;
  const Icon = service.icon;
  const related = servicePages.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <SiteLayout>
      <article>
        <section className="container-app py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link to="/services" className="hover:text-foreground">
              Services
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-foreground">{service.name}</span>
          </nav>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium">
                <Icon className="h-4 w-4 text-primary" /> {service.name}
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
                {service.heading}
              </h1>
              <p className="mt-3 text-lg text-primary font-medium">{service.tagline}</p>
              <p className="mt-4 text-muted-foreground">{service.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-brand shadow-elegant">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
                      `Hello GP Smart Solutions, I would like a quote for ${service.name}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href={`tel:+${BUSINESS_WHATSAPP}`}>
                    <Phone className="mr-1 h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={service.image}
                alt={service.alt}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="container-app grid gap-8 pb-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-bold">What&apos;s included</h2>
            <ul className="mt-4 space-y-2.5">
              {service.includes.map((i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-bold">Benefits</h2>
            <ul className="mt-4 space-y-2.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-app py-12">
          <h2 className="text-2xl font-bold">Equipment we work with</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.equipment.map((e) => (
              <span
                key={e}
                className="rounded-full border border-border/60 bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground"
              >
                {e}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 py-14">
          <div className="container-app">
            <h2 className="text-2xl md:text-3xl font-bold">How we work</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {service.process.map((p) => (
                <li key={p.step} className="rounded-2xl border border-border/60 bg-card p-5">
                  <span className="text-sm font-bold text-primary">{p.step}</span>
                  <h3 className="mt-2 font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container-app py-14">
          <h2 className="text-2xl md:text-3xl font-bold">Who this is for</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.industries.map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-border/60 bg-card p-4 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {i}
              </div>
            ))}
          </div>
        </section>

        <section className="container-app pb-14">
          <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-border/60 rounded-2xl border border-border/60 bg-card">
            {service.faqs.map((f) => (
              <details key={f.question} className="group p-5">
                <summary className="cursor-pointer list-none font-medium">{f.question}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="container-app pb-16">
          <div className="rounded-2xl bg-gradient-brand p-8 text-center text-white md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold">{service.cta.heading}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/85">{service.cta.body}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild variant="secondary">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-1 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="container-app pb-16">
          <h2 className="text-xl font-bold">Other services</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group rounded-2xl border border-border/60 bg-card p-5 transition hover:shadow-soft"
              >
                <h3 className="font-semibold">{r.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
