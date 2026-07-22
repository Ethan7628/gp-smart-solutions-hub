import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { getCategory, itCategories, type ITCategory } from "@/lib/it-categories";

export const Route = createFileRoute("/it-services/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found — GP Smart Solutions" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { category } = loaderData;
    const title = `${category.title} — GP Smart Solutions`;
    return {
      meta: [
        { title },
        { name: "description", content: category.shortDesc },
        { property: "og:title", content: title },
        { property: "og:description", content: category.shortDesc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: CategoryNotFound,
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <div className="container-app py-24">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Button className="mt-6" onClick={reset}>Try again</Button>
      </div>
    </SiteLayout>
  ),
});

function CategoryNotFound() {
  return (
    <SiteLayout>
      <div className="container-app py-24 text-center">
        <h1 className="text-3xl font-bold">Category not found</h1>
        <p className="mt-3 text-muted-foreground">The IT category you're looking for doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link to="/it-services">Back to IT Services</Link>
        </Button>
      </div>
    </SiteLayout>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: ITCategory };
  const Icon = category.icon;
  const others = itCategories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={category.image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
          <div className="absolute inset-0 bg-mesh" />
        </div>
        <div className="container-app py-16 md:py-24">
          <Link to="/it-services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition">
            <ArrowLeft className="h-4 w-4" /> All IT services
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Icon className="h-3.5 w-3.5 text-brand" /> IT & Technology Division
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text">{category.title}</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{category.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
                <Link to="/contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-2">
                <a href="tel:+256789877929"><Phone className="mr-2 h-4 w-4" /> +256 789 877 929</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment grid */}
      <section className="container-app pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Equipment we supply & install</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Systems in this category</h2>
          <p className="mt-4 text-muted-foreground">
            Every unit below is professionally deployed by our certified engineers, with
            configuration, testing and after-sales support included.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {category.equipment.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-success">
                  <Check className="h-4 w-4" /> Supplied • Installed • Supported
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-brand p-10 md:p-14 text-white shadow-elegant">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Need something specific?</h2>
              <p className="mt-3 text-white/85 max-w-md">Tell us your site, budget and timeline — we'll return a scoped quote with equipment recommendations.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" className="h-12 px-6 bg-white text-brand hover:bg-white/90">
                <a href="https://wa.me/256789877929" target="_blank" rel="noopener">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Other categories */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Explore other categories</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to="/it-services/$category"
                params={{ category: c.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src={c.image} alt={c.alt} loading="lazy" className="w-full h-40 object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-brand transition">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{c.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
