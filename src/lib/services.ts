import {
  Camera,
  Network,
  Wifi,
  Zap,
  Cable,
  Lock,
  PhoneCall,
  Headphones,
  Server,
  type LucideIcon,
} from "lucide-react";

import catCctv from "@/assets/cat-cctv.jpg";
import catNetworking from "@/assets/cat-networking.jpg";
import catAccess from "@/assets/cat-access.jpg";
import catTelephony from "@/assets/cat-telephony.jpg";
import catInstall from "@/assets/cat-install.jpg";
import catStorage from "@/assets/cat-storage.jpg";
import wifiInstall from "@/assets/wifi-install.jpg";
import netFiber from "@/assets/eq/net-fiber.jpg";
import instCabling from "@/assets/eq/inst-cabling.jpg";
import itSupportStaffAsset from "@/assets/it-support-staff.webp.asset.json";
const itSupportStaff = itSupportStaffAsset.url;

export type ServiceFaq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  /** Short label used in navigation, cards and dropdowns */
  name: string;
  /** Page H1 */
  heading: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  intro: string;
  includes: string[];
  benefits: string[];
  equipment: string[];
  process: { step: string; title: string; desc: string }[];
  industries: string[];
  faqs: ServiceFaq[];
  cta: { heading: string; body: string };
  keywords: string[];
};

const standardProcess = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Tell us what you need by phone, WhatsApp or the quote form and we confirm the requirements with you.",
  },
  {
    step: "02",
    title: "Site Assessment",
    desc: "Our technical team visits the site, takes measurements and reviews the existing setup before recommending anything.",
  },
  {
    step: "03",
    title: "Quotation",
    desc: "You receive a clear, itemised quotation covering equipment, labour and any accessories required.",
  },
  {
    step: "04",
    title: "Installation",
    desc: "Our technicians carry out the installation, cable routing, configuration and testing on agreed dates.",
  },
  {
    step: "05",
    title: "Support",
    desc: "We hand over with a walkthrough, then remain available for maintenance and technical assistance.",
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "cctv-installation",
    name: "CCTV Installation",
    heading: "CCTV Installation in Uganda",
    tagline: "Camera supply, installation, recording and remote monitoring",
    metaTitle: "CCTV Installation Uganda | Security Cameras Kampala — GP Smart Solutions",
    metaDescription:
      "CCTV installation in Kampala and across Uganda: IP and analogue cameras, NVR/DVR recording, remote phone viewing, maintenance and site assessment by GP Smart Solutions.",
    icon: Camera,
    image: catCctv,
    alt: "Outdoor CCTV camera installed on a commercial building wall",
    intro:
      "We design, supply and install CCTV systems for homes, shops, offices, schools and industrial sites. Every installation starts with a site assessment so cameras are positioned where they are actually useful, and finishes with remote viewing configured on your phone.",
    includes: [
      "Site assessment and camera position planning",
      "Supply of indoor, outdoor, IP, PTZ and AI cameras",
      "NVR / DVR installation and storage sizing",
      "Cable routing, trunking and power supply",
      "Remote viewing setup on phone and computer",
      "System testing, handover and user training",
      "Repairs, upgrades and maintenance of existing systems",
    ],
    benefits: [
      "Clear footage day and night with correctly positioned cameras",
      "View live and recorded video remotely from your phone",
      "Neat, protected cabling that survives weather and daily use",
      "Systems sized to your recording retention requirements",
      "Ongoing technical support after handover",
    ],
    equipment: [
      "Dome and turret cameras",
      "Outdoor bullet cameras",
      "PTZ zoom cameras",
      "AI and thermal cameras",
      "Wi-Fi and dual-lens cameras",
      "NVR / DVR recorders and surveillance hard drives",
    ],
    process: standardProcess,
    industries: [
      "Retail shops and supermarkets",
      "Corporate offices",
      "Schools and institutions",
      "Warehouses and industrial premises",
      "Hotels and hospitality",
      "Residential homes and apartments",
    ],
    faqs: [
      {
        question: "How long does a CCTV installation take?",
        answer:
          "A typical 4–8 camera home or shop installation is usually completed within a day. Larger sites with more cameras and longer cable routes take longer, and we confirm the timeline in the quotation.",
      },
      {
        question: "Can I view the cameras on my phone?",
        answer:
          "Yes. We configure remote viewing on your mobile phone and computer during handover, and show you how to review recorded footage.",
      },
      {
        question: "Can you work on a system installed by someone else?",
        answer:
          "Yes. We repair, expand and upgrade existing CCTV systems, including adding cameras, replacing recorders and restoring remote access.",
      },
    ],
    cta: {
      heading: "Need CCTV installation?",
      body: "Request a site assessment and we will quote the exact camera positions and equipment your premises needs.",
    },
    keywords: [
      "CCTV installation Uganda",
      "CCTV installation Kampala",
      "security cameras Uganda",
      "CCTV company Kampala",
    ],
  },
  {
    slug: "networking",
    name: "Networking",
    heading: "Business Networking Services in Uganda",
    tagline: "Office networks, switching, routing and troubleshooting",
    metaTitle: "Networking Services Uganda | Office Network Setup Kampala — GP Smart Solutions",
    metaDescription:
      "Business networking services in Kampala and Uganda: office LAN setup, switches, routers, VLANs, network troubleshooting and ongoing support from GP Smart Solutions.",
    icon: Network,
    image: catNetworking,
    alt: "Network switch and patch panel installed in an office network cabinet",
    intro:
      "We plan and build office networks that stay stable as your team grows — from a small office LAN to multi-floor switching with managed hardware, structured cabling and documented configuration.",
    includes: [
      "Network design and IP addressing plan",
      "Router, switch and firewall supply and configuration",
      "VLAN segmentation and guest network separation",
      "Cabinet, patch panel and rack installation",
      "Network troubleshooting and performance testing",
      "Documentation and handover",
    ],
    benefits: [
      "Stable connectivity for staff, printers, cameras and phones",
      "Segmented networks keep guest traffic away from business systems",
      "Managed hardware makes future faults quicker to diagnose",
      "Room to expand without rebuilding the network",
    ],
    equipment: [
      "Managed and PoE switches",
      "Business routers and firewalls",
      "Patch panels and network cabinets",
      "UPS and power protection",
    ],
    process: standardProcess,
    industries: [
      "Corporate offices",
      "Schools and universities",
      "Healthcare facilities",
      "Retail and hospitality",
      "Warehouses and industrial facilities",
      "Government and institutions",
    ],
    faqs: [
      {
        question: "Do you carry out a site survey before quoting?",
        answer:
          "Yes. Network quotations are based on a site assessment covering building layout, cable routes, user numbers and the equipment already in place.",
      },
      {
        question: "Can you take over support of an existing network?",
        answer:
          "Yes. We audit the current setup, document it, fix outstanding issues and then support it going forward.",
      },
    ],
    cta: {
      heading: "Planning an office network?",
      body: "Request a site assessment and we will design a network sized for your building and your team.",
    },
    keywords: [
      "networking services Uganda",
      "office network setup Kampala",
      "network installation Uganda",
      "network troubleshooting Kampala",
    ],
  },
  {
    slug: "wifi",
    name: "Wi-Fi Installation",
    heading: "Wi-Fi Installation in Kampala & Uganda",
    tagline: "Access points, coverage surveys and hotspot systems",
    metaTitle: "Wi-Fi Installation Kampala | Business Wi-Fi Uganda — GP Smart Solutions",
    metaDescription:
      "Wi-Fi installation in Kampala and Uganda: wireless site surveys, access point installation, mesh coverage, hotspot billing systems and dead-zone troubleshooting.",
    icon: Wifi,
    image: wifiInstall,
    alt: "Technician installing a wireless access point on an office wall",
    intro:
      "We survey your building, then install and configure access points so coverage reaches every room that matters — offices, boardrooms, guest areas, warehouses and outdoor spaces.",
    includes: [
      "Wireless coverage survey and dead-zone mapping",
      "Access point supply, mounting and configuration",
      "Mesh and multi-floor coverage design",
      "Guest Wi-Fi and hotspot voucher systems",
      "Point-to-point wireless links between buildings",
      "Signal boosting and Wi-Fi troubleshooting",
    ],
    benefits: [
      "Consistent coverage instead of patchy signal",
      "Separate guest access that protects internal systems",
      "Hotspot options for hostels, hotels and public areas",
      "Cleanly mounted equipment with tidy cabling",
    ],
    equipment: [
      "Indoor and outdoor access points",
      "PoE switches and injectors",
      "Hotspot controllers and routers",
      "Outdoor wireless bridges and antennas",
    ],
    process: standardProcess,
    industries: [
      "Hotels and hospitality",
      "Schools and universities",
      "Corporate offices",
      "Retail businesses",
      "Residential properties",
    ],
    faqs: [
      {
        question: "Why is my Wi-Fi slow in some rooms?",
        answer:
          "Usually because of wall materials, access point placement or too many devices on one radio. A coverage survey identifies the cause before any hardware is bought.",
      },
      {
        question: "Can you connect two buildings wirelessly?",
        answer:
          "Yes. Where line of sight allows, we install outdoor point-to-point wireless links between blocks or branches.",
      },
    ],
    cta: {
      heading: "Need better Wi-Fi?",
      body: "Book a wireless coverage survey and we will show you exactly where access points are needed.",
    },
    keywords: [
      "Wi-Fi installation Kampala",
      "WiFi installation Uganda",
      "hotspot setup Uganda",
      "business wifi Kampala",
    ],
  },
  {
    slug: "fiber-optic",
    name: "Fiber Optic",
    heading: "Fiber Optic Installation in Uganda",
    tagline: "Fiber pulling, splicing, termination and testing",
    metaTitle: "Fiber Optic Installation Uganda | Fiber Splicing Kampala — GP Smart Solutions",
    metaDescription:
      "Fiber optic installation in Uganda: fiber pulling, fusion splicing, termination, patch panels and link testing for offices, campuses and multi-building sites.",
    icon: Zap,
    image: netFiber,
    alt: "Fiber optic cable termination and patch panel in a network cabinet",
    intro:
      "Fiber gives long-distance, high-capacity links between buildings, floors and equipment rooms. We handle the full job — route planning, pulling, splicing, termination and testing.",
    includes: [
      "Fiber route survey and planning",
      "Indoor and outdoor fiber pulling",
      "Fusion splicing and pigtail termination",
      "Fiber patch panels, ODF and enclosures",
      "Link testing and fault location",
      "Media converters and fiber uplink configuration",
    ],
    benefits: [
      "Reliable links over distances copper cannot cover",
      "Higher capacity backbone between buildings and floors",
      "Immune to electrical interference",
      "Tested and documented links at handover",
    ],
    equipment: [
      "Single-mode and multi-mode fiber cable",
      "Fiber patch panels and ODF enclosures",
      "SFP modules and media converters",
      "Splice trays, pigtails and connectors",
    ],
    process: standardProcess,
    industries: [
      "Corporate campuses",
      "Schools and universities",
      "Warehouses and industrial facilities",
      "Hotels and large residential estates",
      "Government and institutions",
    ],
    faqs: [
      {
        question: "Do you test fiber links after installation?",
        answer:
          "Yes. Links are tested before handover and the results are shared with you along with the termination layout.",
      },
      {
        question: "Can you repair a broken fiber line?",
        answer:
          "Yes. We locate the fault, re-splice the affected section and re-test the link.",
      },
    ],
    cta: {
      heading: "Need a fiber link?",
      body: "Request a route survey and we will quote the fiber, splicing and terminations required.",
    },
    keywords: [
      "fiber optic installation Uganda",
      "fiber splicing Kampala",
      "fiber optic company Uganda",
    ],
  },
  {
    slug: "structured-cabling",
    name: "Structured Cabling",
    heading: "Structured Cabling in Uganda",
    tagline: "Cat6/Cat6A cabling, patch panels and cable management",
    metaTitle: "Structured Cabling Uganda | Cat6 Network Cabling Kampala — GP Smart Solutions",
    metaDescription:
      "Structured cabling in Kampala and Uganda: Cat6 and Cat6A data cabling, trunking, patch panels, labelling, testing and neat cabinet installation.",
    icon: Cable,
    image: instCabling,
    alt: "Labelled structured cabling terminated on a patch panel in a network cabinet",
    intro:
      "Good cabling is what makes everything else dependable. We install labelled, tested Cat6/Cat6A cabling with proper trunking, patch panels and cabinet management so faults are easy to trace later.",
    includes: [
      "Cable route planning and containment",
      "Cat6 / Cat6A data cabling installation",
      "Faceplates, patch panels and cabinet dressing",
      "Labelling and as-built documentation",
      "Cable testing and certification results",
      "Rework of untidy or failing existing cabling",
    ],
    benefits: [
      "Reliable data points that do not drop under load",
      "Faults traced quickly thanks to labelling and documentation",
      "Cabinets that stay tidy as new points are added",
      "A cabling base ready for cameras, phones and access control",
    ],
    equipment: [
      "Cat6 and Cat6A cable",
      "Patch panels, faceplates and keystone jacks",
      "Wall-mount and floor-standing cabinets",
      "Trunking, conduit and cable trays",
    ],
    process: standardProcess,
    industries: [
      "Corporate offices",
      "Schools and universities",
      "Healthcare facilities",
      "Retail businesses",
      "Warehouses and industrial facilities",
    ],
    faqs: [
      {
        question: "Cat6 or Cat6A — which do I need?",
        answer:
          "Cat6 suits most office data points. Cat6A is worth it for longer runs and higher-bandwidth backbones. We recommend based on your building and equipment.",
      },
      {
        question: "Do you provide test results?",
        answer:
          "Yes. Links are tested and labelled, and the results are handed over with the documentation.",
      },
    ],
    cta: {
      heading: "Planning a cabling installation?",
      body: "Request a site assessment for a clear, itemised cabling quotation.",
    },
    keywords: [
      "structured cabling Uganda",
      "Cat6 cabling Kampala",
      "data cabling Uganda",
      "network cabling Kampala",
    ],
  },
  {
    slug: "access-control",
    name: "Access Control",
    heading: "Access Control Installation in Uganda",
    tagline: "Smart locks, biometrics, RFID and attendance systems",
    metaTitle: "Access Control Installation Uganda | Biometric & Smart Locks — GP Smart Solutions",
    metaDescription:
      "Access control installation in Kampala and Uganda: biometric readers, RFID cards, smart door locks, attendance systems and door hardware fitted and configured.",
    icon: Lock,
    image: catAccess,
    alt: "Fingerprint access control reader installed beside a secured office door",
    intro:
      "We fit and configure door access systems that control who enters which area and keep a record of it — from a single smart lock to biometric readers and attendance reporting across several doors.",
    includes: [
      "Door survey and hardware selection",
      "Biometric, PIN, card and app-controlled locks",
      "RFID and card access systems",
      "Attendance and access reporting setup",
      "Electric strikes, magnetic locks and exit buttons",
      "User enrolment and administrator training",
    ],
    benefits: [
      "Control access without managing physical keys",
      "Records showing who entered and when",
      "Restricted areas stay restricted to authorised staff",
      "Attendance data pulled from the same hardware",
    ],
    equipment: [
      "Fingerprint and face recognition readers",
      "RFID card readers and cards",
      "Smart door locks and video doorbells",
      "Magnetic locks, electric strikes and exit devices",
    ],
    process: standardProcess,
    industries: [
      "Corporate offices",
      "Schools and institutions",
      "Healthcare facilities",
      "Warehouses and industrial facilities",
      "Residential properties",
      "Government and institutions",
    ],
    faqs: [
      {
        question: "Can access control work with our existing doors?",
        answer:
          "In most cases yes. A door survey confirms the frame, door type and power availability before hardware is selected.",
      },
      {
        question: "Can it handle staff attendance?",
        answer:
          "Yes. Biometric and card readers can log attendance and export reports for payroll or HR use.",
      },
    ],
    cta: {
      heading: "Need controlled door access?",
      body: "Request a door survey and we will quote the readers, locks and configuration required.",
    },
    keywords: [
      "access control installation Uganda",
      "biometric access control Kampala",
      "smart door locks Uganda",
      "attendance system Kampala",
    ],
  },
  {
    slug: "pabx",
    name: "PABX Systems",
    heading: "PABX & Office Telephone Systems in Uganda",
    tagline: "IP PBX, extensions, IVR and call recording",
    metaTitle: "PABX Installation Uganda | Office Phone Systems Kampala — GP Smart Solutions",
    metaDescription:
      "PABX and IP telephone system installation in Kampala and Uganda: IP PBX setup, extensions, IVR menus, call recording, IP phones and conference units.",
    icon: PhoneCall,
    image: catTelephony,
    alt: "IP desk phone and PABX telephony equipment in an office",
    intro:
      "We install office telephone systems that route calls properly — internal extensions, reception menus, call recording and desk phones configured for how your team actually works.",
    includes: [
      "IP PBX supply, installation and configuration",
      "Extension and reception call-flow setup",
      "IVR menus, voicemail and call queues",
      "Call recording and reporting",
      "IP desk phones and conference units",
      "Integration with existing lines and cabling",
    ],
    benefits: [
      "Calls reach the right person instead of one shared phone",
      "Free internal calls between extensions and branches",
      "Call recordings available for training and disputes",
      "A telephone setup that grows with your headcount",
    ],
    equipment: [
      "IP PBX systems",
      "IP desk phones",
      "Conference phones",
      "VoIP gateways and adapters",
    ],
    process: standardProcess,
    industries: [
      "Corporate offices",
      "Hotels and hospitality",
      "Healthcare facilities",
      "Retail businesses",
      "Government and institutions",
    ],
    faqs: [
      {
        question: "Can we keep our current phone numbers?",
        answer:
          "In most cases yes, depending on your provider. We confirm what is possible during the assessment.",
      },
      {
        question: "Do IP phones need separate cabling?",
        answer:
          "They use the same structured cabling as your computers, usually powered over Ethernet from a PoE switch.",
      },
    ],
    cta: {
      heading: "Upgrading your office phones?",
      body: "Talk to us about a PABX system sized for your extensions and call volume.",
    },
    keywords: [
      "PABX installation Uganda",
      "office phone system Kampala",
      "IP PBX Uganda",
      "VoIP installation Kampala",
    ],
  },
  {
    slug: "server-installation",
    name: "Server & Office Setup",
    heading: "Server Installation & Office IT Setup in Uganda",
    tagline: "Servers, cabinets, workstations and complete office IT",
    metaTitle: "Server Installation Uganda | Office IT Setup Kampala — GP Smart Solutions",
    metaDescription:
      "Server installation and complete office IT setup in Kampala and Uganda: servers, racks, UPS, workstations, shared storage, printing and network configuration.",
    icon: Server,
    image: catStorage,
    alt: "Server and storage equipment installed in a rack cabinet",
    intro:
      "Moving into a new office or replacing ageing equipment? We handle the whole technical fit-out — cabinet, server, network, workstations, printing and shared storage — so the office is ready to work on day one.",
    includes: [
      "Server supply, rack mounting and configuration",
      "Cabinet, UPS and power protection installation",
      "File sharing, users and backup configuration",
      "Workstation setup and software installation",
      "Network printing and shared devices",
      "Documentation and staff walkthrough",
    ],
    benefits: [
      "A single planned fit-out instead of piecemeal purchases",
      "Shared files and backups configured from the start",
      "Equipment protected by proper power and ventilation",
      "One team accountable for the whole setup",
    ],
    equipment: [
      "Tower and rack-mount servers",
      "Server racks and cabinets",
      "UPS units and power distribution",
      "NAS and shared storage",
    ],
    process: standardProcess,
    industries: [
      "Corporate offices",
      "Schools and universities",
      "Healthcare facilities",
      "Retail businesses",
      "Government and institutions",
    ],
    faqs: [
      {
        question: "Can you set up a new office from scratch?",
        answer:
          "Yes. We cover cabling, network, server, workstations, phones, cameras and access control as one coordinated fit-out.",
      },
      {
        question: "Do you configure backups?",
        answer:
          "Yes. Backup destinations and schedules are configured and demonstrated during handover.",
      },
    ],
    cta: {
      heading: "Setting up a new office?",
      body: "Request a site assessment and we will plan the full technical fit-out with you.",
    },
    keywords: [
      "server installation Uganda",
      "office IT setup Kampala",
      "office IT infrastructure Uganda",
    ],
  },
  {
    slug: "it-support",
    name: "IT Support",
    heading: "IT Support & Maintenance in Kampala",
    tagline: "On-site support, remote assistance and maintenance",
    metaTitle: "IT Support Kampala | IT Maintenance Services Uganda — GP Smart Solutions",
    metaDescription:
      "IT support and maintenance in Kampala and Uganda: on-site and remote support, troubleshooting, computer repairs, scheduled maintenance and IT consultancy.",
    icon: Headphones,
    image: itSupportStaff,
    alt: "GP Smart Solutions IT support staff member working with office IT equipment",
    intro:
      "Day-to-day technical assistance for offices and homes — troubleshooting, repairs, maintenance visits and practical advice, delivered remotely where possible and on site when needed.",
    includes: [
      "Remote and on-site technical support",
      "Network, camera and printer troubleshooting",
      "Computer repairs, upgrades and OS reinstallation",
      "Scheduled maintenance visits",
      "User and device management support",
      "IT consultancy on upgrades and budgets",
    ],
    benefits: [
      "A technical contact who knows your setup",
      "Faults handled before they interrupt the whole office",
      "Scheduled maintenance instead of emergency call-outs",
      "Honest advice on what needs replacing and what does not",
    ],
    equipment: [
      "Workstations and laptops",
      "Printers and shared office devices",
      "Network and Wi-Fi equipment",
      "Surveillance and access control systems",
    ],
    process: standardProcess,
    industries: [
      "Corporate offices",
      "Schools and institutions",
      "Retail businesses",
      "Healthcare facilities",
      "Residential properties",
    ],
    faqs: [
      {
        question: "Do you offer ongoing maintenance arrangements?",
        answer:
          "Yes. We offer scheduled maintenance covering servicing, checks and priority response, scoped to the size of your setup.",
      },
      {
        question: "Can support be handled remotely?",
        answer:
          "Many issues can be resolved remotely. Where hardware or cabling is involved, a technician attends the site.",
      },
    ],
    cta: {
      heading: "Need IT support?",
      body: "Talk to GP Smart Solutions about on-site and remote support for your office.",
    },
    keywords: [
      "IT support Kampala",
      "IT services Uganda",
      "IT maintenance Uganda",
      "IT company Kampala",
    ],
  },
];

export const serviceSlugs = servicePages.map((s) => s.slug);

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

/** Options for the quote form service dropdown */
export const quoteServiceOptions = [
  "CCTV",
  "Networking",
  "Wi-Fi",
  "Fiber Optic",
  "Structured Cabling",
  "Access Control",
  "PABX",
  "Server / Office Setup",
  "IT Support",
  "Other",
] as const;

/** Six primary categories shown on the homepage */
export const primaryServices = [
  {
    slug: "cctv-installation",
    icon: Camera,
    title: "CCTV & Security",
    image: catCctv,
    alt: "Outdoor CCTV camera installed on a commercial building",
    desc: "CCTV cameras, NVR/DVR recording, remote monitoring, installation and maintenance.",
    points: ["IP & analogue cameras", "NVR / DVR setup", "Remote phone viewing"],
  },
  {
    slug: "networking",
    icon: Network,
    title: "Networking & Wi-Fi",
    image: catNetworking,
    alt: "Managed network switch and patch panel in an office cabinet",
    desc: "Business networks, Wi-Fi installation, routers, switches, hotspots and troubleshooting.",
    points: ["Office LAN design", "Access points & hotspots", "Fault troubleshooting"],
  },
  {
    slug: "fiber-optic",
    icon: Zap,
    title: "Fiber & Structured Cabling",
    image: instCabling,
    alt: "Fiber and structured cabling terminated on a labelled patch panel",
    desc: "Fiber pulling, splicing, termination, Cat6/Cat6A cabling and network infrastructure.",
    points: ["Fiber splicing & testing", "Cat6 / Cat6A cabling", "Cabinets & patch panels"],
  },
  {
    slug: "access-control",
    icon: Lock,
    title: "Access Control",
    image: catAccess,
    alt: "Biometric access control reader at a secured office entrance",
    desc: "Smart locks, biometric systems, RFID, attendance systems and access management.",
    points: ["Biometric & RFID", "Smart door locks", "Attendance reporting"],
  },
  {
    slug: "server-installation",
    icon: Server,
    title: "Business IT Infrastructure",
    image: catInstall,
    alt: "Server rack and office IT infrastructure installation",
    desc: "Servers, office networks, PABX, computer systems and complete office IT setup.",
    points: ["Servers & racks", "PABX telephony", "Full office fit-out"],
  },
  {
    slug: "it-support",
    icon: Headphones,
    title: "IT Support & Maintenance",
    image: itSupportStaff,
    alt: "IT support technician assisting with office equipment",
    desc: "On-site support, remote support, troubleshooting, maintenance and IT consultancy.",
    points: ["On-site & remote support", "Scheduled maintenance", "IT consultancy"],
  },
];
