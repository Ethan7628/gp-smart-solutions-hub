import { Camera, Server, Wifi, Lock, Phone, Wrench, type LucideIcon } from "lucide-react";

import catCctv from "@/assets/cat-cctv.jpg";
import catStorage from "@/assets/cat-storage.jpg";
import catNetworking from "@/assets/cat-networking.jpg";
import catAccess from "@/assets/cat-access.jpg";
import catTelephony from "@/assets/cat-telephony.jpg";
import catInstall from "@/assets/cat-install.jpg";

import cctvDome from "@/assets/eq/cctv-dome.jpg";
import cctvBullet from "@/assets/eq/cctv-bullet.jpg";
import cctvPtz from "@/assets/eq/cctv-ptz.jpg";
import cctvThermal from "@/assets/eq/cctv-thermal.jpg";
import storeDvr from "@/assets/eq/store-dvr.jpg";
import storeNvr from "@/assets/eq/store-nvr.jpg";
import storeHdd from "@/assets/eq/store-hdd.jpg";
import storeCloud from "@/assets/eq/store-cloud.jpg";
import netAp from "@/assets/eq/net-ap.jpg";
import netSwitch from "@/assets/eq/net-switch.jpg";
import netFiber from "@/assets/eq/net-fiber.jpg";
import netFirewall from "@/assets/eq/net-firewall.jpg";
import accFingerprint from "@/assets/eq/acc-fingerprint.jpg";
import accFace from "@/assets/eq/acc-face.jpg";
import accRfid from "@/assets/eq/acc-rfid.jpg";
import accDoorbell from "@/assets/eq/acc-doorbell.jpg";
import telPabx from "@/assets/eq/tel-pabx.jpg";
import telIpphone from "@/assets/eq/tel-ipphone.jpg";
import telConf from "@/assets/eq/tel-conf.jpg";
import telVoip from "@/assets/eq/tel-voip.jpg";
import instCabling from "@/assets/eq/inst-cabling.jpg";
import instRack from "@/assets/eq/inst-rack.jpg";
import instAntenna from "@/assets/eq/inst-antenna.jpg";
import instSurvey from "@/assets/eq/inst-survey.jpg";

export type FaqItem = {
  question: string;
  answer: string;
};

export type EquipmentItem = {
  name: string;
  desc: string;
  image: string;
  alt: string;
};

export type ITCategory = {
  slug: string;
  title: string;
  shortDesc: string;
  intro: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  equipment: EquipmentItem[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  industries: string[];
  faqs: FaqItem[];
};

export const itCategories: ITCategory[] = [
  {
    slug: "cctv-surveillance",
    title: "CCTV & Surveillance",
    icon: Camera,
    image: catCctv,
    alt: "Professional outdoor CCTV bullet camera installed on a modern office building",
    shortDesc:
      "Dome, bullet, PTZ, turret, IP, thermal, ANPR, AI smart cameras and floodlight cameras for residential, commercial, industrial and retail sites.",
    intro:
      "We supply, install and maintain a full range of surveillance cameras — from single-camera residential setups to multi-site enterprise CCTV networks with remote viewing, motion analytics and AI intrusion detection.",
    equipment: [
      {
        name: "Indoor Dome Cameras",
        image: cctvDome,
        alt: "White dome CCTV camera mounted on an office ceiling",
        desc: "Discreet ceiling-mounted dome cameras with IR night vision, ideal for offices, retail floors, hotels and reception areas.",
      },
      {
        name: "Outdoor Bullet Cameras",
        image: cctvBullet,
        alt: "Weatherproof bullet CCTV camera mounted on a building wall",
        desc: "Weatherproof IP66 bullet cameras with long-range IR, perfect for perimeters, entrances, gates and outdoor car parks.",
      },
      {
        name: "PTZ Zoom Cameras",
        image: cctvPtz,
        alt: "Pan-tilt-zoom PTZ CCTV surveillance camera product shot",
        desc: "Pan-tilt-zoom cameras with optical zoom and preset patrols — deployed for warehouses, stadiums and large compounds.",
      },
      {
        name: "AI & Thermal Cameras",
        image: cctvThermal,
        alt: "AI thermal CCTV camera with sleek metallic housing",
        desc: "Smart AI cameras with people/vehicle detection, license plate recognition (ANPR) and thermal imaging for critical sites.",
      },
    ],
    benefits: [
      "24/7 remote monitoring from your phone, tablet or control room",
      "AI-powered motion detection reduces false alarms by up to 90%",
      "Insurance-compliant footage retention with encrypted storage",
      "Deterrent presence that reduces theft and vandalism incidents",
      "Scalable from 1 camera to multi-site enterprise networks",
    ],
    process: [
      {
        step: "01",
        title: "Site Survey",
        desc: "We visit your premises, map camera positions, identify blind spots and recommend the right camera types for each zone.",
      },
      {
        step: "02",
        title: "Design & Quote",
        desc: "You receive a detailed BOQ with camera models, storage sizing, cabling plan and a fixed-price quote — no hidden costs.",
      },
      {
        step: "03",
        title: "Professional Installation",
        desc: "Our certified engineers install cameras, run cabling, configure the NVR/DVR and set up remote viewing on your devices.",
      },
      {
        step: "04",
        title: "Testing & Handover",
        desc: "We test every camera angle, night vision and playback, train your team on the mobile app and provide after-sales support.",
      },
    ],
    industries: [
      "Retail shops & supermarkets",
      "Office buildings & corporate premises",
      "Warehouses & logistics hubs",
      "Hotels & hospitality",
      "Residential homes & apartment blocks",
      "Schools & institutions",
      "Construction sites",
      "Banks & financial institutions",
    ],
    faqs: [
      {
        question: "How much does CCTV installation cost in Uganda?",
        answer:
          "Pricing depends on the number of cameras, camera type (dome, bullet, PTZ, IP), storage requirements and cabling complexity. A basic 4-camera system starts from UGX 1,500,000 including installation. Contact us for a free site survey and detailed quote.",
      },
      {
        question: "Can I view my cameras remotely on my phone?",
        answer:
          "Yes. All our IP and DVR/NVR systems support remote viewing via mobile apps (Hik-Connect, iVMS, DMSS). You can watch live feeds, receive motion alerts and review recordings from anywhere with an internet connection.",
      },
      {
        question: "How long is the footage stored?",
        answer:
          "Storage duration depends on the hard drive size and recording settings. A typical 4-camera system with a 2TB drive stores 15–30 days of continuous footage. We size storage based on your compliance and retention requirements.",
      },
      {
        question: "Do you offer maintenance after installation?",
        answer:
          "Yes. We provide 12 months warranty on installation workmanship and offer optional maintenance contracts covering camera cleaning, firmware updates, storage health checks and prompt on-site callouts.",
      },
    ],
  },
  {
    slug: "recording-storage",
    title: "Recording & Storage",
    icon: Server,
    image: catStorage,
    alt: "Rack-mounted network video recorders and surveillance storage in a data center",
    shortDesc:
      "DVR, NVR and hybrid recorders, surveillance-grade hard drives, rack-mounted recorders and cloud surveillance systems.",
    intro:
      "Every camera system needs reliable recording. We size, supply and configure DVR/NVR appliances, surveillance-grade storage and cloud backup so your footage is always available when you need it.",
    equipment: [
      {
        name: "DVR Systems (4/8/16/32 CH)",
        image: storeDvr,
        alt: "16-channel DVR digital video recorder",
        desc: "Digital video recorders for analog HD (TVI/CVI/AHD) camera systems with local playback and mobile viewing.",
      },
      {
        name: "NVR Systems (IP)",
        image: storeNvr,
        alt: "32-channel NVR network video recorder",
        desc: "Network video recorders for IP cameras with PoE ports, 4K support, smart search and multi-site management.",
      },
      {
        name: "Surveillance Hard Drives",
        image: storeHdd,
        alt: "Purple surveillance grade WD hard drive",
        desc: "Purple-label 24/7 surveillance HDDs (1TB–18TB) engineered for continuous CCTV write cycles.",
      },
      {
        name: "Cloud & Rack Storage",
        image: storeCloud,
        alt: "Data center racks with blue LED lights",
        desc: "Rack-mounted NVR arrays and cloud video storage with encrypted off-site backup for multi-branch businesses.",
      },
    ],
    benefits: [
      "Reliable 24/7 recording with surveillance-grade hard drives built for continuous write cycles",
      "Flexible storage options from local NVR to encrypted cloud backup for multi-branch businesses",
      "Footage retention that meets insurance and regulatory requirements in Uganda",
      "Remote playback and download from anywhere via mobile apps and web portals",
      "Scalable storage that grows with your camera count — from 4 to 64+ channels",
    ],
    process: [
      {
        step: "01",
        title: "Site Survey & Storage Assessment",
        desc: "We assess your camera count, resolution, frame rate and retention needs to calculate the right storage capacity.",
      },
      {
        step: "02",
        title: "Equipment Selection & Quote",
        desc: "You receive a BOQ with recommended recorder models, hard drive sizes and cloud options at a fixed price.",
      },
      {
        step: "03",
        title: "Configuration & Installation",
        desc: "Our engineers install the recorder, configure recording schedules, motion detection and set up remote access.",
      },
      {
        step: "04",
        title: "Testing, Handover & Training",
        desc: "We verify playback quality, backup integrity and train your team on exporting footage for evidence.",
      },
    ],
    industries: [
      "Retail shops & supermarkets",
      "Banks & financial institutions",
      "Hotels & lodges",
      "Logistics warehouses",
      "Schools & universities",
      "Hospitals & clinics",
      "Corporate offices",
      "Government & parastatal bodies",
    ],
    faqs: [
      {
        question: "How long can my CCTV system record?",
        answer:
          "Recording duration depends on the number of cameras, resolution, frame rate and hard drive size. A 4-channel system with a 2TB drive typically stores 15–30 days of continuous footage. We size storage to meet your retention and compliance needs.",
      },
      {
        question: "Should I choose a DVR or NVR?",
        answer:
          "DVRs work with analog HD cameras, while NVRs are designed for IP cameras and offer higher resolution (up to 4K), PoE simplification and advanced smart search. We recommend based on your existing cameras and budget.",
      },
      {
        question: "Can I back up footage to the cloud?",
        answer:
          "Yes. We configure cloud and off-site backup for critical cameras so footage survives even if the recorder is stolen or damaged. Cloud plans are available with encrypted storage and flexible retention.",
      },
      {
        question: "What happens if my hard drive fails?",
        answer:
          "Surveillance drives are rated for 24/7 operation, but failures can occur. We offer maintenance contracts with proactive health checks, and all drives we supply come with a manufacturer warranty of up to 3 years.",
      },
    ],
  },
  {
    slug: "networking-fiber",
    title: "Networking & Fiber",
    icon: Wifi,
    image: catNetworking,
    alt: "Neatly organized network patch panel with color-coded ethernet cables in a data center rack",
    shortDesc:
      "WiFi routers, mesh systems, PoE and managed switches, firewalls, patch panels, fiber optic runs, SFP modules and structured cabling accessories.",
    intro:
      "From single-office WiFi to campus-wide fiber backbones — we design and build networks that are fast, secure and easy to manage, with vendor-neutral hardware and clean structured cabling.",
    equipment: [
      {
        name: "Enterprise WiFi Access Points",
        image: netAp,
        alt: "Ceiling-mounted WiFi access point in an office",
        desc: "Ubiquiti / TP-Link Omada / Ruijie enterprise access points and mesh systems with seamless roaming and VLANs.",
      },
      {
        name: "PoE & Managed Switches",
        image: netSwitch,
        alt: "48-port PoE managed network switch with cables",
        desc: "8 to 48-port PoE and managed L2/L3 switches for IP cameras, phones and access points — with VLAN and QoS.",
      },
      {
        name: "Fiber Optic Cabling",
        image: netFiber,
        alt: "Fiber optic cables glowing yellow and blue macro shot",
        desc: "Single-mode and multi-mode fiber runs, splicing, OTDR testing, patch panels and SFP modules for long-distance links.",
      },
      {
        name: "Firewalls & Routers",
        image: netFirewall,
        alt: "Rack-mounted enterprise firewall appliance",
        desc: "Business firewalls, VPN routers and gateway appliances with content filtering, guest networks and site-to-site VPN.",
      },
    ],
    benefits: [
      "Fast, reliable connectivity across your entire premises — from single office to campus",
      "Enterprise-grade WiFi with seamless roaming, guest networks and VLAN isolation",
      "Fiber optic backbones that deliver gigabit speeds over long distances without signal loss",
      "Secure firewalls and VPNs that protect your network from threats and unauthorized access",
      "Clean, labeled structured cabling that is easy to maintain and expand",
    ],
    process: [
      {
        step: "01",
        title: "Network Assessment & Site Survey",
        desc: "We map your premises, identify coverage gaps, count users and devices, and assess bandwidth requirements.",
      },
      {
        step: "02",
        title: "Network Design & Quote",
        desc: "You receive a network design with equipment list, cabling plan, IP scheme and a fixed-price quote.",
      },
      {
        step: "03",
        title: "Installation & Configuration",
        desc: "Our certified engineers install access points, switches, fiber runs and firewalls, then configure VLANs, VPNs and QoS.",
      },
      {
        step: "04",
        title: "Testing, Certification & Handover",
        desc: "We test and certify all cabling with Fluke tools, document the network and train your IT team.",
      },
    ],
    industries: [
      "Corporate offices & business parks",
      "Hotels & hospitality",
      "Schools & universities",
      "Hospitals & clinics",
      "Retail malls & supermarkets",
      "Banks & financial institutions",
      "Manufacturing plants",
      "Government & NGO offices",
    ],
    faqs: [
      {
        question: "How much does a business WiFi network cost in Uganda?",
        answer:
          "Cost depends on the coverage area, number of access points, switch capacity and cabling required. A typical small office setup starts from UGX 2,500,000. Contact us for a free site survey and detailed quote.",
      },
      {
        question: "Can you install fiber optic cabling?",
        answer:
          "Yes. We handle single-mode and multi-mode fiber runs, splicing, termination, OTDR testing and SFP module supply — ideal for linking buildings or campus sites over long distances.",
      },
      {
        question: "Do you configure VPNs and firewalls?",
        answer:
          "Yes. We deploy business firewalls with content filtering, guest networks, site-to-site VPN for branch offices and remote-access VPN for staff working from home.",
      },
      {
        question: "Can you upgrade my existing network?",
        answer:
          "Absolutely. We audit your current setup, identify bottlenecks and recommend upgrades — whether that's new access points, a managed switch, fiber backbone or a replacement firewall.",
      },
    ],
  },
  {
    slug: "smart-access",
    title: "Smart Access Control",
    icon: Lock,
    image: catAccess,
    alt: "Modern smart fingerprint biometric door lock installed on a sleek glass office door",
    shortDesc:
      "Smart door locks, fingerprint and face-recognition access, RFID card systems, video doorbells, motion detectors and smart alarms.",
    intro:
      "Control who enters your premises — and when. We install biometric, card and mobile access systems that integrate with your attendance records and CCTV.",
    equipment: [
      {
        name: "Fingerprint Smart Locks",
        image: accFingerprint,
        alt: "Smart fingerprint biometric door lock on a glass office door",
        desc: "Keypad + fingerprint smart locks with mobile app control, temporary PINs and audit logs for offices and homes.",
      },
      {
        name: "Face Recognition Terminals",
        image: accFace,
        alt: "Face recognition access terminal mounted next to office door",
        desc: "Face-recognition access and attendance terminals with mask detection and temperature sensing options.",
      },
      {
        name: "RFID Card Access",
        image: accRfid,
        alt: "RFID card access reader with a hand tapping a keycard",
        desc: "RFID / MIFARE card readers, electric strikes and magnetic locks integrated with staff attendance software.",
      },
      {
        name: "Video Doorbells & Alarms",
        image: accDoorbell,
        alt: "Smart video doorbell mounted next to a residential front door",
        desc: "Smart video doorbells, motion detectors, glass-break sensors and wireless alarm panels with mobile alerts.",
      },
    ],
    benefits: [
      "Know exactly who enters your premises and when with full audit trails",
      "Eliminate lost keys and shared PINs — biometrics can't be borrowed or stolen",
      "Integrate access control with attendance records and CCTV for complete security",
      "Remote unlock and temporary access codes for staff, guests and contractors",
      "Scalable from a single door to multi-door, multi-site enterprise systems",
    ],
    process: [
      {
        step: "01",
        title: "Site Assessment & Door Audit",
        desc: "We assess each door, gate and entry point, reviewing traffic, security level and integration needs.",
      },
      {
        step: "02",
        title: "System Design & Quote",
        desc: "You receive a design with recommended devices, wiring plan and a fixed-price quote covering hardware and installation.",
      },
      {
        step: "03",
        title: "Installation & Integration",
        desc: "Our technicians install readers, locks and controllers, then integrate with attendance software and CCTV where required.",
      },
      {
        step: "04",
        title: "Enrollment & Training",
        desc: "We enroll users (fingerprints, faces, cards), set access schedules and train your admin on managing the system.",
      },
    ],
    industries: [
      "Corporate offices & co-working spaces",
      "Banks & financial institutions",
      "Hospitals & clinics",
      "Hotels & serviced apartments",
      "Schools & universities",
      "Factories & manufacturing plants",
      "Government offices",
      "Data centers & server rooms",
    ],
    faqs: [
      {
        question: "How much does a biometric access control system cost?",
        answer:
          "Pricing depends on the number of doors, device type (fingerprint, face, RFID) and integration requirements. A single-door fingerprint lock starts from UGX 850,000. Contact us for a free assessment and quote.",
      },
      {
        question: "Can access control integrate with staff attendance?",
        answer:
          "Yes. Our biometric and RFID systems export attendance reports with clock-in/out times, late entries and absentee tracking — ideal for HR and payroll.",
      },
      {
        question: "What happens during a power outage?",
        answer:
          "Our systems include backup battery options and fail-safe release on fire alarm triggers. Magnetic locks can be configured to fail-safe (unlock) or fail-secure (stay locked) depending on your security policy.",
      },
      {
        question: "Can I grant temporary access to visitors?",
        answer:
          "Yes. You can issue temporary PINs, time-limited RFID cards or mobile-app unlock permissions for visitors, contractors and guests — all logged with date and time.",
      },
    ],
  },
  {
    slug: "telephony",
    title: "Telephony & Communication",
    icon: Phone,
    image: catTelephony,
    alt: "Professional IP desk phones and PABX telephony system on a modern office desk",
    shortDesc:
      "PABX systems, IP and VoIP phones, office desk phones, conference phones, telephone switchboards and full call-center setups.",
    intro:
      "Modern office telephony without the guesswork. We deploy PABX and IP-PBX systems, wire the extensions, port your numbers and train your team.",
    equipment: [
      {
        name: "PABX & IP-PBX Systems",
        image: telPabx,
        alt: "Rack-mounted PABX telephone exchange system",
        desc: "Grandstream / Yeastar / Panasonic PABX and IP-PBX systems supporting analog, SIP and mobile extensions.",
      },
      {
        name: "IP Desk Phones",
        image: telIpphone,
        alt: "Yealink IP desk phone on an office desk",
        desc: "Yealink and Fanvil IP desk phones with HD voice, multiple line keys, Bluetooth headsets and BLF.",
      },
      {
        name: "Conference Phones",
        image: telConf,
        alt: "Modern conference speakerphone on a boardroom table",
        desc: "360° conference speakerphones with echo cancellation for boardrooms and hybrid-meeting rooms.",
      },
      {
        name: "VoIP Gateways",
        image: telVoip,
        alt: "Small VoIP gateway device with FXS and ethernet ports",
        desc: "FXS / FXO VoIP gateways that bridge legacy analog phones and lines into your new IP-PBX.",
      },
    ],
    benefits: [
      "Cut telecom costs with VoIP calls over your existing internet connection",
      "Professional features — IVR, call recording, voicemail-to-email, call forwarding and conferencing",
      "Scale extensions effortlessly as your team grows — no rewiring required for IP phones",
      "Keep your existing numbers with seamless porting to the new system",
      "Remote extensions let staff make and receive calls from anywhere with an internet connection",
    ],
    process: [
      {
        step: "01",
        title: "Requirements & Site Survey",
        desc: "We assess your call volume, extension count, branch locations and integration needs (CRM, call recording).",
      },
      {
        step: "02",
        title: "System Design & Quote",
        desc: "You receive a telephony design with PABX model, phone types, gateway needs and a fixed-price quote.",
      },
      {
        step: "03",
        title: "Installation & Number Porting",
        desc: "We install the PABX, wire extensions, configure SIP trunks and port your existing numbers with minimal downtime.",
      },
      {
        step: "04",
        title: "Training & Handover",
        desc: "We configure IVR, voicemail and call groups, then train your team on using the phones and admin portal.",
      },
    ],
    industries: [
      "Corporate offices & business parks",
      "Hotels & hospitality",
      "Hospitals & clinics",
      "Banks & financial institutions",
      "Call centers & customer support",
      "Schools & universities",
      "NGOs & development organizations",
      "Government ministries & agencies",
    ],
    faqs: [
      {
        question: "How much does a PABX system cost in Uganda?",
        answer:
          "Cost depends on the number of extensions, PABX type (analog or IP) and features required. A basic 4-extension IP-PBX system starts from UGX 3,500,000 including phones. Contact us for a tailored quote.",
      },
      {
        question: "Can I keep my existing phone numbers?",
        answer:
          "Yes. We work with Ugandan telecom providers to port your existing numbers to the new PABX system, ensuring continuity for your customers and minimal downtime.",
      },
      {
        question: "What is VoIP and will it save me money?",
        answer:
          "VoIP (Voice over IP) routes calls over your internet connection instead of traditional phone lines. It reduces call costs — especially for inter-branch and international calls — and eliminates per-extension line rental.",
      },
      {
        question: "Can staff make calls remotely?",
        answer:
          "Yes. IP phones and softphone apps allow staff to make and receive office calls from home or any location with internet, appearing as if they're at their desk extension.",
      },
    ],
  },
  {
    slug: "installation-services",
    title: "Installation & Field Services",
    icon: Wrench,
    image: catInstall,
    alt: "GP Smart Solutions technician in uniform installing a WiFi access point on an office ceiling",
    shortDesc:
      "Certified technicians handling cabling, fiber installs, router configuration, access point mounting, smart lock deployment and network troubleshooting.",
    intro:
      "Products are only half the story. Our uniformed field engineers handle the physical install, cable management, testing and documentation — so your systems look tidy and stay up.",
    equipment: [
      {
        name: "Structured Cabling",
        image: instCabling,
        alt: "Technician running blue ethernet cabling through an office ceiling",
        desc: "CAT6 / CAT6A structured cabling, cable trays, containment and labeled patch panels certified with Fluke testing.",
      },
      {
        name: "Server Rack Installation",
        image: instRack,
        alt: "Technician installing equipment in a server rack",
        desc: "Server, network and CCTV cabinet installation with power distribution, cable management arms and thermal planning.",
      },
      {
        name: "Antenna & Rooftop Work",
        image: instAntenna,
        alt: "Technician installing a rooftop dish antenna with safety harness",
        desc: "Rooftop antenna, dish, wireless bridge and lightning-arrestor installs — completed with full safety gear and PPE.",
      },
      {
        name: "Site Surveys & Support",
        image: instSurvey,
        alt: "IT engineers conducting a site survey in an empty office",
        desc: "On-site surveys, signal mapping, BOQ scoping, commissioning and preventive maintenance contracts.",
      },
    ],
    benefits: [
      "Certified, uniformed technicians — clean, professional and safety-compliant",
      "Fluke-certified cabling with labeled patch panels for easy maintenance",
      "Proper cable management and containment that looks tidy and reduces faults",
      "Full documentation including as-built drawings, test reports and warranty",
      "Flexible maintenance contracts with priority callouts and SLA response times",
    ],
    process: [
      {
        step: "01",
        title: "Site Survey & Scoping",
        desc: "We visit your site, assess requirements, map cable routes and produce a BOQ with accurate quantities and fixed pricing.",
      },
      {
        step: "02",
        title: "Scheduling & Preparation",
        desc: "We schedule the works around your operations, procure materials and prepare tools, safety gear and access equipment.",
      },
      {
        step: "03",
        title: "Professional Installation",
        desc: "Our technicians execute the install — cabling, racks, antennas or devices — with clean workmanship and minimal disruption.",
      },
      {
        step: "04",
        title: "Testing, Certification & Handover",
        desc: "We test and certify every connection, document the installation, and hand over with warranty and maintenance options.",
      },
    ],
    industries: [
      "Corporate offices & business parks",
      "Retail shops & shopping malls",
      "Hotels & hospitality",
      "Schools & universities",
      "Hospitals & clinics",
      "Banks & financial institutions",
      "Manufacturing & industrial sites",
      "Government & NGO premises",
    ],
    faqs: [
      {
        question: "Do you provide installation outside Kampala?",
        answer:
          "Yes. We deploy field teams across Uganda — including Entebbe, Jinja, Mukono, Mbale, Mbarara, Gulu and Arua. Travel and accommodation costs are quoted transparently in the BOQ.",
      },
      {
        question: "Are your technicians certified?",
        answer:
          "Yes. Our engineers hold certifications in structured cabling, fiber splicing, CCTV and networking. All rooftop and height work is carried out with full PPE and safety harnesses.",
      },
      {
        question: "Do you offer maintenance contracts?",
        answer:
          "Yes. We offer preventive and reactive maintenance contracts with scheduled visits, priority callouts and defined SLA response times. Contracts cover CCTV, networks, access control and telephony systems.",
      },
      {
        question: "Can you work around our business hours?",
        answer:
          "Absolutely. We schedule installations after hours, on weekends or during shutdowns to minimize disruption to your operations. Just let us know your preferred times during the site survey.",
      },
    ],
  },
];

export const getCategory = (slug: string) => itCategories.find((c) => c.slug === slug);
