import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Camera,
  Wifi,
  Cable,
  Server,
  Lock,
  Cpu,
  Headphones as HeadphonesIcon,
  Star,
  CircleCheck as CheckCircle2,
  Users,
  Clock,
  Trophy,
  Phone,
  Wrench,
  Radio,
  Signal,
  Network,
  Router,
  KeyRound,
  ShieldCheck,
  MonitorSmartphone,
  HardDrive,
  Video,
  PhoneCall,
  Settings,
  LifeBuoy,
  CalendarCheck,
  Briefcase,
  BadgeCheck,
  Zap,
  Award,
  Sparkle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-it.jpg";
import itImg from "@/assets/it-showcase.jpg";
import itEngineerOffice from "@/assets/it-engineer-office.jpg";
import cctvMonitoring from "@/assets/cctv-monitoring.jpg";
import wifiInstall from "@/assets/wifi-install.jpg";
import teamAntenna from "@/assets/team-antenna.jpg";
import instRack from "@/assets/eq/inst-rack.jpg";
import instCabling from "@/assets/eq/inst-cabling.jpg";
import netSwitch from "@/assets/eq/net-switch.jpg";
import netFiber from "@/assets/eq/net-fiber.jpg";

import accFingerprint from "@/assets/eq/acc-fingerprint.jpg";
import cctvBullet from "@/assets/eq/cctv-bullet.jpg";
import { faqJsonLd, pageMeta } from "@/lib/seo";

const faqs = [
  {
    question: "How long does CCTV installation take?",
    answer:
      "A typical 4–8 camera home or shop installation is completed within a single day. Larger commercial sites with 16+ cameras, cabling routes and NVR configuration usually take 2–4 days depending on the building layout.",
  },
  {
    question: "Do you install Wi-Fi for large offices?",
    answer:
      "Yes. We carry out a wireless site survey, then design and install enterprise access points, mesh coverage, hotspot billing systems and signal boosting so every floor, boardroom and warehouse gets stable coverage.",
  },
  {
    question: "Do you provide maintenance after installation?",
    answer:
      "Every installation includes a support period, and we offer Annual Maintenance Contracts (AMC) covering scheduled servicing, camera cleaning, firmware updates, network health checks and priority call-outs.",
  },
  {
    question: "Can you upgrade an existing security system?",
    answer:
      "We regularly upgrade analogue CCTV to IP, expand existing NVRs, add remote mobile viewing, replace failing hard drives and integrate old access control hardware with new smart locks.",
  },
  {
    question: "What brands do you supply and support?",
    answer:
      "We supply and support trusted brands including Hikvision, Dahua, Ubiquiti, TP-Link, Cisco, Mikrotik, Yeastar and Grandstream, along with certified structured cabling and fiber components.",
  },
  {
    question: "Do you offer emergency technical support?",
    answer:
      "Yes. Our technical team is reachable 24/7 for network outages, camera failures and access control lockouts, with remote diagnostics first and on-site response for critical faults.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "GP Smart Solutions — CCTV, Networking & IT Security Solutions in Uganda",
      description:
        "GP Smart Solutions delivers CCTV supply and installation, IP cameras, Wi-Fi solutions, structured cabling, fiber optics, smart door locks, PABX systems, servers and complete office IT support in Kampala, Uganda.",
      path: "/",
      keywords: [
        "CCTV Installation",
        "CCTV Supply",
        "Security Cameras",
        "Wi-Fi Installation",
        "Wi-Fi Hotspot Solutions",
        "Network Cabling",
        "Structured Cabling",
        "Fiber Installation",
        "Smart Door Locks",
        "PABX Systems",
        "Office IT Setup",
        "Network Solutions",
        "IT Support",
        "Security Solutions",
        "GP Smart Solutions",
      ],
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(faqs)),
      },
    ],
  }),
  component: LandingPage,
});

const services = [
  { icon: Camera, title: "CCTV Camera Supply", desc: "Genuine analogue, IP and AI cameras stocked and warrantied." },
  { icon: Wrench, title: "CCTV Installation", desc: "Clean, discreet camera mounting, cabling and NVR setup." },
  { icon: Settings, title: "CCTV Maintenance", desc: "Servicing, lens cleaning, firmware and storage checks." },
  { icon: Video, title: "IP Camera Systems", desc: "High-resolution IP surveillance with remote mobile viewing." },
  { icon: Network, title: "Network Camera Solutions", desc: "PoE camera networks engineered for reliable uptime." },
  { icon: Wifi, title: "Wi-Fi Installation", desc: "Enterprise access points sized to your floor plan." },
  { icon: Radio, title: "Wi-Fi Hotspot Setup", desc: "Guest portals, vouchers and hotspot billing systems." },
  { icon: Signal, title: "Wi-Fi Signal Boosting", desc: "Dead-zone elimination with surveys and repeaters." },
  { icon: Router, title: "Wireless Network Extension", desc: "Point-to-point links between blocks and branches." },
  { icon: Cable, title: "Structured Network Cabling", desc: "Certified Cat6/6A cabling, trunking and labelling." },
  { icon: Cable, title: "Data Cabling", desc: "Neat data runs, patch panels and tested terminations." },
  { icon: Zap, title: "Fiber Optic Installation", desc: "Pulling, splicing, termination and OTDR testing." },
  { icon: Briefcase, title: "Office Network Setup", desc: "Complete LAN, switching, routing and Wi-Fi rollout." },
  { icon: Lock, title: "Smart Door Lock Installation", desc: "Fingerprint, PIN, card and app-controlled locks." },
  { icon: KeyRound, title: "Smart Lock Configuration", desc: "User enrolment, schedules and audit trail setup." },
  { icon: ShieldCheck, title: "Password Reset Services", desc: "Secure recovery for locked devices and systems." },
  { icon: Shield, title: "Access Control Systems", desc: "Biometric, RFID, turnstiles and attendance reporting." },
  { icon: PhoneCall, title: "PABX Telephone Systems", desc: "IP PBX, extensions, IVR and call recording." },
  { icon: Server, title: "Server Installation", desc: "Rack-mount and tower servers installed and secured." },
  { icon: HardDrive, title: "Server Configuration", desc: "Roles, users, backups, RAID and remote access." },
  { icon: Cpu, title: "Network Infrastructure", desc: "Cabinets, UPS, switching and structured backbones." },
  { icon: MonitorSmartphone, title: "Computer Repairs", desc: "Hardware repair, upgrades and OS reinstallation." },
  { icon: HeadphonesIcon, title: "IT Support", desc: "On-site and remote support for homes and offices." },
  { icon: LifeBuoy, title: "Network Troubleshooting", desc: "Fast fault isolation for outages and slow links." },
  { icon: CalendarCheck, title: "Annual Maintenance Contracts", desc: "Scheduled AMC servicing with priority response." },
  { icon: BadgeCheck, title: "Business IT Consultancy", desc: "Practical advice on budgets, scaling and security." },
];

const whyChooseUs = [
  { icon: BadgeCheck, title: "Certified Technicians", desc: "Trained, vetted engineers who follow proper installation standards." },
  { icon: Zap, title: "Fast Installation", desc: "Most sites are surveyed, installed and handed over within days." },
  { icon: Award, title: "Quality Equipment", desc: "Genuine hardware from trusted global manufacturers only." },
  { icon: ShieldCheck, title: "Warranty Support", desc: "Documented warranty on equipment and workmanship." },
  { icon: Trophy, title: "Affordable Pricing", desc: "Transparent quotations with no hidden call-out charges." },
  { icon: Sparkle, title: "Modern Technology", desc: "AI cameras, smart locks and cloud-managed networking." },
  { icon: Users, title: "Reliable Customer Service", desc: "A named contact who answers and follows through." },
  { icon: Clock, title: "24/7 Technical Support", desc: "Emergency response for outages and security faults." },
];

const stats = [
  { icon: Trophy, target: 500, suffix: "+", decimals: 0, label: "Projects Delivered" },
  { icon: Users, target: 2000, suffix: "+", decimals: 0, label: "Clients Served" },
  { icon: Clock, target: 8, suffix: "+", decimals: 0, label: "Years Experience" },
  { icon: Star, target: 4.9, suffix: "", decimals: 1, label: "Average Rating" },
];

const portfolio = [
  { src: cctvMonitoring, alt: "Multi-screen CCTV monitoring wall installed by GP Smart Solutions for a commercial client" },
  { src: instRack, alt: "Neatly dressed server rack with switches and patch panels in an office data cabinet" },
  { src: instCabling, alt: "Structured network cabling and labelled patch panel termination in a network cabinet" },
  { src: netSwitch, alt: "Managed network switch with patched Ethernet uplinks in a business network cabinet" },
  { src: netFiber, alt: "Fiber optic cable termination and splicing tray during an office fiber installation" },
  { src: accFingerprint, alt: "Fingerprint access control reader installed at a secured office entrance" },
  { src: cctvBullet, alt: "Outdoor bullet security camera mounted on a building wall for perimeter surveillance" },
  { src: wifiInstall, alt: "GP Smart Solutions technician installing a wireless access point in a real estate office" },
  { src: teamAntenna, alt: "GP Smart Solutions technicians aligning an outdoor wireless link antenna on site" },
];

const testimonials = [
  {
    name: "Sarah N.",
    role: "Business Owner, Kampala",
    quote:
      "GP Smart set up our entire office network and CCTV in two days. Zero downtime, perfect cable finish, and the support team is always one call away.",
  },
  {
    name: "David M.",
    role: "Restaurant Chain",
    quote:
      "From fiber runs to biometric attendance, they handled everything with real professionalism. Best IT partner we've worked with in Uganda.",
  },
  {
    name: "Grace A.",
    role: "School Administrator",
    quote:
      "They covered our whole campus with Wi-Fi and installed 24 IP cameras. Parents notice the security, and our staff finally have reliable internet.",
  },
  {
    name: "Peter K.",
    role: "Retail Shop Owner",
    quote:
      "The smart door lock and camera system paid for itself in a month. Clear footage on my phone and quick help whenever I call.",
  },
  {
    name: "Ronald T.",
    role: "Corporate IT Manager",
    quote:
      "Our PABX migration and server configuration were delivered on schedule with proper documentation. Their AMC keeps everything running.",
  },
  {
    name: "Josephine B.",
    role: "Homeowner, Entebbe",
    quote:
      "Neat installation at home — cameras, Wi-Fi boosting and a smart lock. Polite technicians who explained everything before leaving.",
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
            alt="Network operations centre with server racks, structured cabling and a security dome camera"
            width={1920}
            height={1088}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-mesh" />
        </div>

        <div className="container-app py-20 md:py-32 lg:py-40">
          <motion.div {...fade} className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Trusted by 2,000+ homes and businesses across Uganda
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Professional <span className="gradient-text">IT & Security Solutions</span> for Homes
              and Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              GP Smart Solutions delivers CCTV surveillance, networking, Wi-Fi solutions, structured
              cabling, smart access control, PABX systems, and complete office IT infrastructure with
              professional installation and reliable support.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-brand hover:opacity-95 shadow-elegant h-12 px-6 text-base"
              >
                <Link to="/contact">
                  Get Free Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base border-2">
                <Link to="/it-services">Explore Services</Link>
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
                <div className="mt-3 text-3xl font-bold tracking-tight tabular-nums">
                  <Counter target={s.target} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-app py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div {...fade} className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={itEngineerOffice}
              alt="GP Smart Solutions IT engineer monitoring CCTV feeds and network systems at a branded workstation"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div {...fade}>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              About GP Smart Solutions
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Your trusted technology partner for security, networking and smart infrastructure.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              GP Smart Solutions Limited designs, supplies, installs and maintains the systems modern
              organisations depend on — surveillance, networks, Wi-Fi, structured cabling, access
              control, telephony and servers. From a single home camera to a multi-floor office
              rollout, we deliver work that is planned properly, installed cleanly and supported
              long after handover.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Professional technicians",
                "Reliable installations",
                "High-quality equipment",
                "Customer satisfaction",
                "Affordable pricing",
                "Modern technology",
                "Business-focused solutions",
                "Long-term support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-brand h-12 px-6 shadow-elegant">
                <Link to="/about">
                  More About Us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-2">
                <Link to="/contact">Talk to an IT Expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh opacity-70" />
        <div className="container-app">
          <motion.div {...fade} className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Engineered properly. Supported permanently.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We are chosen for the standard of our workmanship, the quality of the equipment we
              supply and the speed with which we answer when something needs attention.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-app py-16 md:py-24">
        <motion.div {...fade} className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Complete IT, networking and security services
            </h2>
          </div>
          <Button asChild variant="ghost" className="text-brand">
            <Link to="/it-services">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
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

      {/* FEATURED DIVISION CARD */}
      <section className="container-app pb-8">
        <motion.div {...fade}>
          <Link
            to="/it-services"
            className="group block relative overflow-hidden rounded-3xl shadow-elegant"
          >
            <img
              src={itImg}
              alt="Enterprise IT and security equipment supplied and installed by GP Smart Solutions"
              width={1600}
              height={800}
              loading="lazy"
              className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium">
                <Cpu className="h-3.5 w-3.5" /> Equipment & Systems
              </span>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold">Browse Our Equipment Catalogue</h3>
              <p className="mt-2 text-white/80 max-w-xl">
                CCTV, recording and storage, networking and fiber, smart access, telephony and
                installation services — with the exact hardware we supply and support.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                Explore IT Services <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-app py-20 md:py-24">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Work</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Installations delivered across Uganda
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            CCTV systems, office networks, server racks, patch panels, structured cabling, smart
            locks, Wi-Fi access points and switching — installed by our own technicians.
          </p>
        </motion.div>
        <div className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
          {portfolio.map((p, i) => (
            <motion.figure
              key={p.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group relative shrink-0 snap-start overflow-hidden rounded-2xl border border-border shadow-soft hover:shadow-elegant transition w-[78vw] max-w-[340px] sm:w-auto"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container-app pb-20 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Our Mission",
              body: "Deliver smart, reliable technology that keeps homes, offices and institutions across Uganda secure, connected and productive.",
            },
            {
              title: "Our Vision",
              body: "To be East Africa's most trusted provider of security, networking and smart business infrastructure.",
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
      <section className="container-app pb-20">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Testimonials</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by homes, offices, schools and retailers
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
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

      {/* FAQ */}
      <section className="container-app pb-20">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Questions we're asked before every project
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <motion.div
              key={f.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="font-semibold text-lg">{f.question}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-app pb-16">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Request a Free Consultation
              </h2>
              <p className="mt-3 text-white/85 text-lg max-w-md">
                Tell us about your site and we'll prepare a clear, itemised quotation — our team
                responds within minutes on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" variant="secondary" className="h-12 px-6">
                <Link to="/contact">Get a Quote</Link>
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
