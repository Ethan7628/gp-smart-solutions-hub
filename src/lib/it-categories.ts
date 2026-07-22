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
  },
];

export const getCategory = (slug: string) => itCategories.find((c) => c.slug === slug);
