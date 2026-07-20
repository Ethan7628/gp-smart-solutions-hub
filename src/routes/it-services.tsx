import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Wifi, Cable, Server, Lock, Cpu, Shield, HeadphonesIcon, Check, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import itImg from "@/assets/it-showcase.jpg";
import itPoster from "@/assets/it-services-poster.jpg";
import wifiInstall from "@/assets/wifi-install.jpg";
import teamAntenna from "@/assets/team-antenna.jpg";
import cctvMonitoring from "@/assets/cctv-monitoring.jpg";
import servicesFlyer from "@/assets/services-flyer.jpg";
import itEngineerOffice from "@/assets/it-engineer-office.jpg";

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

const productCategories = [
  {
    title: "CCTV & Surveillance",
    desc: "Dome, bullet, PTZ, turret, IP, thermal, ANPR, AI smart cameras and floodlight cameras for residential, commercial, industrial and retail sites.",
    items: [
      { src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop&auto=format&q=80", alt: "Modern outdoor CCTV bullet camera mounted on a building wall" },
      { src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=800&h=600&fit=crop&auto=format&q=80", alt: "Dome CCTV security camera installed on a ceiling" },
      { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop&auto=format&q=80", alt: "Multi-screen CCTV monitoring wall in a security control room" },
      { src: "https://images.unsplash.com/photo-1614064548237-096d7f4c1f14?w=800&h=600&fit=crop&auto=format&q=80", alt: "PTZ camera pointing across a corporate parking lot at night" },
    ],
  },
  {
    title: "Recording & Storage",
    desc: "DVR, NVR and hybrid recorders, surveillance-grade hard drives, rack-mounted recorders and cloud surveillance systems.",
    items: [
      { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80", alt: "Rack-mounted network video recorder units in a server room" },
      { src: "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=800&h=600&fit=crop&auto=format&q=80", alt: "Surveillance-grade hard drives stacked for NVR deployment" },
      { src: "https://images.unsplash.com/photo-1580983230786-9bb1a4c3c67c?w=800&h=600&fit=crop&auto=format&q=80", alt: "Enterprise storage array powering cloud surveillance recording" },
    ],
  },
  {
    title: "Networking Equipment",
    desc: "WiFi routers, mesh systems, PoE and managed switches, firewalls, patch panels, fiber optic runs, SFP modules and structured cabling accessories.",
    items: [
      { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&auto=format&q=80", alt: "Neatly organized network patch panel with color-coded ethernet cables" },
      { src: "https://images.unsplash.com/photo-1606904825846-f6eb4d21e0b0?w=800&h=600&fit=crop&auto=format&q=80", alt: "Enterprise WiFi router with multiple antennas on an office desk" },
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format&q=80", alt: "Rows of managed network switches glowing inside a data center" },
      { src: "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?w=800&h=600&fit=crop&auto=format&q=80", alt: "Fiber optic cables terminating into a patch panel with lit connectors" },
    ],
  },
  {
    title: "Smart Home & Access Control",
    desc: "Smart door locks, fingerprint and face-recognition access, RFID card systems, video doorbells, motion detectors and smart alarms.",
    items: [
      { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&auto=format&q=80", alt: "Smart fingerprint door lock installed on a modern office door" },
      { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop&auto=format&q=80", alt: "Video doorbell with high-definition camera mounted at an entrance" },
      { src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop&auto=format&q=80", alt: "Smart home security alarm control panel on an interior wall" },
    ],
  },
  {
    title: "Telephony & Communication",
    desc: "PABX systems, IP and VoIP phones, office desk phones, conference phones, telephone switchboards and full call-center setups.",
    items: [
      { src: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop&auto=format&q=80", alt: "IP desk phone on a clean modern office desk" },
      { src: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=600&fit=crop&auto=format&q=80", alt: "Conference room speakerphone on a boardroom table" },
      { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&auto=format&q=80", alt: "Call center workstation with headset and dual monitors" },
    ],
  },
  {
    title: "Installation & Field Services",
    desc: "Certified technicians handling cabling, fiber installs, router configuration, access point mounting, smart lock deployment and network troubleshooting.",
    items: [
      { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&auto=format&q=80", alt: "IT technician configuring a network switch in a server room" },
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format&q=80", alt: "Structured network cabling terminated inside a wall-mounted cabinet" },
      { src: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&h=600&fit=crop&auto=format&q=80", alt: "Engineer testing ethernet connections with a professional cable tester" },
      { src: "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=800&h=600&fit=crop&auto=format&q=80", alt: "Field technician mounting a wireless access point on an office ceiling" },
    ],
  },
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
              src={wifiInstall}
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
            src={itPoster}
            alt="Range of security and networking equipment installed by GP Smart Solutions: Hikvision CCTV cameras, biometric access control, IP PBX phones, WiFi routers and network cabling"
            width={1280} height={720} loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Field team + Client testimonial */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-border bg-card"
          >
            <img src={teamAntenna} alt="GP Smart Solutions field engineers installing a rooftop antenna and network equipment in Kampala"
              width={1320} height={780} loading="lazy" className="w-full h-64 object-cover" />
            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">On the ground</p>
              <h3 className="mt-2 text-2xl font-bold">Certified engineers, safety-first installs</h3>
              <p className="mt-3 text-muted-foreground">
                Our uniformed team handles rooftop antenna mounts, ISP links, CCTV rigging and
                structured cabling with full safety gear — from survey to sign-off.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-border bg-card"
          >
            <img src={cctvMonitoring} alt="Client reviewing multi-camera CCTV monitoring dashboard installed by GP Smart Solutions"
              width={1320} height={780} loading="lazy" className="w-full h-64 object-cover" />
            <div className="p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Client feedback</p>
              <h3 className="mt-2 text-2xl font-bold">“Excellent CCTV installation work.”</h3>
              <p className="mt-3 text-muted-foreground">
                Businesses across Kampala rely on our CCTV & remote-viewing setups for round-the-clock
                visibility of their premises — configured for phone, tablet and control room.
              </p>
            </div>
          </motion.div>
        </div>

        {/* IT Engineer feature */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-elegant border border-border"
          >
            <img
              src={itEngineerOffice}
              alt="GP Smart Solutions IT Engineer at the branded technical department — CCTV monitoring, networking rack, coding workstation and certified IT & network solutions expert"
              width={1200} height={1400} loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Meet the Engineer</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Certified expertise behind every deployment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our Technical Department is led by certified IT & Network Solutions engineers with
              deep hands-on experience across CCTV, structured networking, fiber optic, IT support
              and smart-office infrastructure. Every project is scoped, deployed and monitored by a
              named engineer — so you always know who owns the uptime of your systems.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Certified IT & Network Solutions Expert",
                "Live CCTV monitoring & multi-site visibility",
                "Enterprise networking, servers and racks",
                "Professional on-site & remote IT support",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3 text-foreground/90">
                  <Check className="h-5 w-5 text-success mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
                <Link to="/contact">Talk to an Engineer <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>


        {/* Services flyer */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              One call. Every smart-office service.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              CCTV cameras, smart door locks, Airtel & MTN internet connections, attendance system
              configuration and password reset, PABX systems, POS machines and full IT support —
              delivered by one accountable team.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
                <a href="tel:+256789877929"><Phone className="mr-2 h-4 w-4" /> Call +256 789 877 929</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-border"
          >
            <img src={servicesFlyer} alt="GP Smart Solutions services flyer: CCTV, smart door locks, Airtel & MTN internet, attendance, PABX, POS and IT support"
              width={1400} height={900} loading="lazy" className="w-full h-auto object-cover" />
          </motion.div>
        </div>




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
