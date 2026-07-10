import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Wifi, Cable, Server, Lock, Cpu, Shield, HeadphonesIcon, Check, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import itImg from "@/assets/it-showcase.jpg";
import itPoster from "@/assets/it-services-poster.jpg";
import wifiInstall from "@/assets/wifi-install.jpg";

export const Route = createFileRoute("/it-services")({
  head: () => ({
    meta: [
      { title: "IT Services — GP Smart Solutions" },
      { name: "description", content: "Enterprise-grade IT services in Uganda: CCTV installation, networking, PABX, access control, fiber optics, full office setups and IT support." },
      { property: "og:title", content: "IT Services — GP Smart Solutions" },
      { property: "og:description", content: "CCTV, networking, PABX, access control, fiber and full office setups." },
      { property: "og:url", content: "/it-services" },
    ],
    links: [{ rel: "canonical", href: "/it-services" }],
  }),
  component: ITServicesPage,
});

const services = [
  { icon: Camera, title: "CCTV Camera Installation", items: ["Indoor & outdoor cameras", "IP cameras, DVR & NVR setup", "Remote viewing on mobile", "Maintenance & repair"] },
  { icon: Lock, title: "Access Control & Attendance", items: ["Biometric & fingerprint", "Face recognition", "Card & RFID access", "Employee attendance reports"] },
  { icon: Shield, title: "Smart Door Locks", items: ["Installation & configuration", "Mobile app setup", "Fingerprint & RFID locks", "Password reset & maintenance"] },
  { icon: Wifi, title: "Networking & WiFi", items: ["WiFi installation & mesh", "Access points & extenders", "Router & switch config", "Enterprise networking"] },
  { icon: Cable, title: "Optical Fiber", items: ["Fiber pulling & splicing", "OTDR testing", "Long-distance runs", "Maintenance contracts"] },
  { icon: Server, title: "PABX & Telephony", items: ["PABX & IP PBX", "VoIP & extensions", "Office telephony", "Configuration & support"] },
  { icon: Cpu, title: "Full Office Setup", items: ["Structured cabling", "Server & rack installation", "Network cabinets", "Printers & workstations"] },
  { icon: Shield, title: "Software Installation", items: ["Windows & Office", "Drivers & antivirus", "Utility software", "System optimization"] },
  { icon: HeadphonesIcon, title: "IT Support", items: ["Home & office support", "Remote troubleshooting", "Maintenance contracts", "Hardware & software"] },
];

export function ITServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={itImg} alt="" width={1400} height={1000} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute inset-0 bg-mesh" />
        </div>
        <div className="container-app py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <Cpu className="h-3.5 w-3.5 text-brand" /> IT & Technology Division
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
              Enterprise <span className="gradient-text">IT solutions</span> engineered for uptime.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From CCTV and access control to fiber, networking and full office setups — we design,
              deploy and support the infrastructure your business runs on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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

      <section className="container-app pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Featured project / equipment showcase */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-elegant"
          >
            <img
              src={wifiInstall.url}
              alt="GP Smart Solutions technician installing reliable WiFi access point at a real estate office"
              width={1080} height={1350} loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Featured Installation</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Reliable WiFi for real estate offices
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fast, secure, professional. Our certified technicians survey, cable and configure
              enterprise-grade access points for uninterrupted coverage across your workspace.
            </p>
            <ul className="mt-6 space-y-3">
              {["On-site survey & signal mapping", "Enterprise access points & mesh", "Secure VLAN & guest network setup", "Ongoing maintenance & support"].map((it) => (
                <li key={it} className="flex items-start gap-3 text-foreground/90">
                  <Check className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
                <Link to="/contact">Request a Site Survey <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Equipment we install */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-3xl border border-border shadow-elegant"
        >
          <img
            src={itPoster.url}
            alt="Range of security and networking equipment installed by GP Smart Solutions: Hikvision CCTV cameras, biometric access control, IP PBX phones, WiFi routers and network cabling"
            width={1280} height={720} loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.div>



        <div className="mt-16 rounded-3xl bg-gradient-brand p-10 md:p-14 text-white shadow-elegant">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Need a custom IT deployment?</h2>
              <p className="mt-3 text-white/85 max-w-md">Tell us about your site — we'll respond with a scoped quote and timeline.</p>
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
      </section>
    </SiteLayout>
  );
}
