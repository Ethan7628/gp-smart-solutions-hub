import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GP Smart Solutions" },
      {
        name: "description",
        content:
          "Get in touch with GP Smart Solutions Limited. Request a quote, book a salon appointment or reach us on WhatsApp at +256 789 877 929.",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "contact GP Smart Solutions, IT quote Uganda, salon appointment Kampala, WhatsApp, CCTV quote, book salon",
      },
      { property: "og:title", content: "Contact — GP Smart Solutions" },
      {
        property: "og:description",
        content:
          "Request an IT quote, book a salon appointment, or reach us on WhatsApp at +256 789 877 929.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gpsmartsolutions.co.ug/contact" },
      { property: "og:site_name", content: "GP Smart Solutions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — GP Smart Solutions" },
      {
        name: "twitter:description",
        content: "Request a quote or book a salon appointment. WhatsApp +256 789 877 929.",
      },
    ],
    links: [{ rel: "canonical", href: "https://gpsmartsolutions.co.ug/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
  // Honeypot field — must be empty for legitimate submissions
  company: z.string().max(0, "Spam detected").optional(),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      formData.append("_subject", `New enquiry: ${values.subject}`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_replyto", values.email);

      const res = await fetch("https://formsubmit.co/ajax/gpsmartsolutions9@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");

      toast.success("Message sent!", {
        description: `Thanks ${values.name}, our team will reach out shortly.`,
      });
      reset();
    } catch {
      toast.error("Couldn't send your message", {
        description: "Please try again, or reach us on WhatsApp at +256 789 877 929.",
      });
    }
  };

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
          <span className="text-foreground font-medium">Contact</span>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
            Let's <span className="gradient-text">build</span> something great.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Request an IT quote, book a salon appointment, or ask us anything — we typically respond
            within minutes on WhatsApp.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Phone,
                title: "Call us",
                value: "+256 789 877 929",
                href: "tel:+256789877929",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "Chat with our team",
                href: "https://wa.me/256789877929",
              },
              {
                icon: Mail,
                title: "Email",
                value: "gpsmartsolutions9@gmail.com",
                href: "mailto:gpsmartsolutions9@gmail.com",
              },
              { icon: MapPin, title: "Location", value: "Kampala, Uganda" },
              { icon: Clock, title: "Hours", value: "Mon–Sat · 8:00 AM – 8:00 PM" },
            ].map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.title}
                  {...(c.href
                    ? {
                        href: c.href,
                        target: c.href.startsWith("http") ? "_blank" : undefined,
                        rel: "noopener",
                      }
                    : {})}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{c.value}</div>
                  </div>
                </Comp>
              );
            })}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
            noValidate
            aria-label="Contact form"
          >
            <h2 className="text-2xl font-bold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground" id="form-desc">
              We reply within one business hour.
            </p>

            {/* Honeypot field — visually hidden, accessible to screen readers */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="company">Company (leave blank)</label>
              <input
                id="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("company")}
              />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name")}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-danger" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-danger" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  placeholder="+256 700 000 000"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-danger" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="CCTV quote / Salon booking / …"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-danger" role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5 space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project or the service you'd like to book…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-danger" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-gradient-brand h-12 px-6 shadow-elegant"
              >
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send message
                  </>
                )}
              </Button>
              <Button
                asChild
                type="button"
                size="lg"
                variant="outline"
                className="h-12 px-6 border-2"
              >
                <a href="https://wa.me/256789877929" target="_blank" rel="noopener">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp instead
                </a>
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </SiteLayout>
  );
}
