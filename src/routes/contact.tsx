import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GP Smart Solutions" },
      { name: "description", content: "Get in touch with GP Smart Solutions Limited. Request a quote, book a salon appointment or reach us on WhatsApp at +256 789 877 929." },
      { property: "og:title", content: "Contact — GP Smart Solutions" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  subject: z.string().trim().min(3, "Add a short subject").max(120),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
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
      // FormSubmit config
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Contact</p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight">
            Let's <span className="gradient-text">build</span> something great.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Request an IT quote, book a salon appointment, or ask us anything — we typically
            respond within minutes on WhatsApp.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: "Call us", value: "+256 789 877 929", href: "tel:+256789877929" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with our team", href: "https://wa.me/256789877929" },
              { icon: Mail, title: "Email", value: "gpsmartsolutions9@gmail.com", href: "mailto:gpsmartsolutions9@gmail.com" },
              { icon: MapPin, title: "Location", value: "Kampala, Uganda" },
              { icon: Clock, title: "Hours", value: "Mon–Sat · 8:00 AM – 8:00 PM" },
            ].map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp key={c.title} {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener" } : {})}
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
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
            noValidate
          >
            <h2 className="text-2xl font-bold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">We reply within one business hour.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Jane Doe" {...register("name")} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-danger">{errors.name.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" {...register("email")} aria-invalid={!!errors.email} />
                {errors.email && <p className="text-xs text-danger">{errors.email.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+256 700 000 000" {...register("phone")} aria-invalid={!!errors.phone} />
                {errors.phone && <p className="text-xs text-danger">{errors.phone.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="CCTV quote / Salon booking / …" {...register("subject")} aria-invalid={!!errors.subject} />
                {errors.subject && <p className="text-xs text-danger">{errors.subject.message}</p>}
              </div>
            </div>

            <div className="mt-5 space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} placeholder="Tell us about your project or the service you'd like to book…" {...register("message")} aria-invalid={!!errors.message} />
              {errors.message && <p className="text-xs text-danger">{errors.message.message}</p>}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="submit" size="lg" disabled={isSubmitting} className="bg-gradient-brand h-12 px-6 shadow-elegant">
                {isSubmitting ? "Sending…" : (<><Send className="mr-2 h-4 w-4" /> Send message</>)}
              </Button>
              <Button asChild type="button" size="lg" variant="outline" className="h-12 px-6 border-2">
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
