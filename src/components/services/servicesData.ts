import {
  FlaskConical,
  TestTube,
  Beaker,
  Microscope,
  ShieldCheck,
  FileSearch,
  ClipboardList
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  businessChallenge: string;
  clsSolution: string;
  benefits: string[];
  applications: string[];
  standards: string[];
  equipment: string[];
  cta: string;
  totalProjects?: string;
  expertise?: string;
}

export const cuttingEdgeEquipment = [
  "LC-MS/MS (Shimadzu LCMS-8045)",
  "High Sensitivity LC-MS/MS (Shimadzu LCMS-8060NX)",
  "High Sensitivity LC-MS/MS (Shimadzu LCMS-8060RX)",
  "ICP-MS (Agilent 7800, SPS 4 Autosampler)",
  "GC-MS/MS-FID (Agilent 8890, 7000D GC/TQ)",
  "UV Visible Spectrophotometer (Shimadzu)",
  "FTIR Spectrophotometer (Shimadzu)"
];

export const services: ServiceData[] = [
  {
    id: "nitrosamines",
    title: "Nitrosamine and NDSRI",
    tagline: "Method development, Validation & Analysis",
    icon: Microscope,
    businessChallenge:
      "Regulatory agencies now require extremely sensitive detection of nitrosamines and Nitrosamine Drug Substance Related Impurities (NDSRIs). Non-compliance can lead to product recalls, market withdrawals, and severe reputational damage.",
    clsSolution:
      "CLS performs comprehensive evaluation, identification, and quantification of nitrosamines and NDSRIs. Our team handles complete study design, method development, and validation to meet allowable maximum daily exposure targets.",
    benefits: [
      "Detection at ultra-trace sensitivity",
      "Compliance with latest FDA and EMA guidelines",
      "Accurate quantification against exposure limits",
      "Complete study design through validated report",
    ],
    applications: [
      "Drug Products",
      "Oral Product (Tablets, Capsules, Ointment)",
      "Parental Product",
      "Ophthalmic Product",
    ],
    standards: ["ICH Q3A(R2) — Impurities in New Drug Substances", "ICH Q3B(R2) — Impurities in New Drug Products", "Health Canada — \"Guidance on Nitrosamine Impurities in Medications\"", "PMDA (Japan)"],
    equipment: cuttingEdgeEquipment,
    cta: "Get a Nitrosamine Assessment",
    totalProjects: "200+",
    expertise: "We have extensive expertise in <strong>nitrosamine impurity testing</strong> for a broad range of pharmaceutical dosage forms, <strong>including API’s. tablets, capsules, oral solutions, injectables, and other finished pharmaceutical products.</strong>Handled about 200 projects for the determination of nitrosamines covering both General nitrosamines and NDSRI’s.\nOur capabilities include the <strong>sensitive detection, identification, and quantitative determination of nitrosamine impurities</strong>, supporting pharmaceutical manufacturers in evaluating and controlling nitrosamine risks in accordance with applicable <strong>ICH, FDA, EMA, and other global regulatory expectations</strong>.\nOur analytical approach is designed to provide <strong>high sensitivity, accuracy, specificity, and reliable quantification</strong>, enabling robust assessment of nitrosamine impurities throughout pharmaceutical product development and quality control.",
  },
  {
    id: "extractables-leachables",
    title: "Extractable & Leachable",
    tagline: "USP 1663, 1664, ICH, PQRI, ISO 10993",
    icon: FlaskConical,
    businessChallenge:
      "Even widely used packaging materials can release unexpected compounds into pharmaceutical products, including oligomers, antioxidants, and degradation products detectable only at trace levels. As regulatory scrutiny around extractables and leachables (E&L), analytical laboratories face a growing challenge: identifying unknown migrants before they become a product safety issue.\n\n The increasing complexity of modern drug products, combined with the growing use of polymer-based packaging materials, single-use systems, and advanced delivery devices, has significantly expanded the scope of E&L testing. At the same time, regulatory agencies expect more comprehensive characterization of packaging-related risks throughout the product lifecycle.",
    clsSolution:
      "CLS has developed extensive methodologies for designing studies to identify extractables and leachables in drug products. We conduct extractable studies for a broad range of primary packaging materials, and leachable studies for parenteral and IV drug products. Volatile, semi-volatile, non-volatile compounds and elemental impurities are measured using different analytical techniques.",
    benefits: [
      "Comprehensive extractable and leachable profiling",
      "Regulatory-ready reports for FDA and EMA submissions",
      "Advanced trace-level detection capabilities",
      "Support for both pharmaceutical and medical device packaging",
    ],
    applications: [
      "Pharmaceutical packaging materials",
      "Container Closure Systems (CCS)",
      "Primary and secondary packaging",
      "Parental Product",
      "Ophthalmic Product",

    ],
    standards: ["USP 1663", "USP 1664", "ICH", "PQRI", "ISO 10993"],
    equipment: cuttingEdgeEquipment,
    cta: "Speak with an E&L Expert",
    totalProjects: "75+",
    expertise: "We bring <strong>over five years of specialized experience in Extractables and Leachables (E&L) studies for pharmaceutical container closure systems</strong>, performed in accordance with applicable <strong>USP requirements (USP&lt;1663&gt; and &lt;1664&gt; )and regulatory expectations</strong>.\nWe have successfully <strong>executed about 75 + E&L projects</strong>, covering various Container closure systems, Parental products and Primary and Secondary packing materials. Our expertise enables us to deliver <strong>scientifically robust, reliable, and regulatory-compliant analytical solutions</strong> to support pharmaceutical and medical device manufacturers throughout product development and regulatory submissions. \n\n A dedicated analytical team conducts these studies and interprets data from relevant analytical platforms.",
  },
  {
    id: "elemental-impurities",
    title: "Elemental Impurity Studies",
    tagline: "ICHQ3D, Heavy Metals, Residues etc.",
    icon: Beaker,
    businessChallenge:
      "Elemental impurities pose toxicological risks to patients and can interfere with drug efficacy. Global pharmacopeias require stringent testing to ensure these elements remain below permitted daily exposure (PDE) limits.",
    clsSolution:
      "We provide highly sensitive elemental impurity profiling in accordance with ICH Q3D guidelines. Using state-of-the-art ICP-MS technology, we screen, quantify, and validate the presence of heavy metals and other residues across a wide range of complex matrices.",
    benefits: [
      "Parts-per-billion (ppb) detection limits",
      "Full ICH Q3D compliance",
      "Rapid turnaround for critical release testing",
      "Expert sample preparation for difficult matrices",
    ],
    applications: [
      "Drug substances and excipients",
      "Finished pharmaceutical products",
      "Dietary supplements",
      "Extractables from packaging",
    ],
    standards: ["ICH Q3D", "USP 232/233", "EP 5.20"],
    equipment: cuttingEdgeEquipment,
    cta: "Request Elemental Analysis",
    totalProjects: "100+",
  },
    {
    id: "medical-device-residuals",
    title: "Chemical Characterization for Medical Devices",
    tagline: "ASTM Methods, EO Residue, ECH Residue etc...",
    icon: ClipboardList,
    businessChallenge:
      "To Understand Chemical Characterization to Ensue a Safe and Compliant Medical Device and In the medical device industry, ensuring safety and compliance with regulatory standards is paramount. Chemical characterization and biocompatibility testing are essential steps in this process, guided by frameworks such as ISO 10993. These evaluations help manufacturers understand the materials in their devices and assess potential health risks to patients.",
    clsSolution:
      "Our laboratory conducts rigorous Chemical Characterization for Medical Devices using recognized ASTM and ISO methods. We develop and validate custom extraction and detection methods to identify and quantify any residual chemicals from the manufacturing process.",
    benefits: [
      "Comprehensive screening for manufacturing residues",
      "Support for biocompatibility risk assessments",
      "Custom extraction protocols for complex devices",
      "High-sensitivity detection",
    ],
    applications: [
      "Orthopedic implants",
      "Cardiovascular devices",
      "Reusable surgical instruments",
      "Polymeric components",
    ],
    standards: ["ASTM", "ISO 10993"],
    equipment: cuttingEdgeEquipment,
    cta: "Request Device Analysis",
    totalProjects: "70+",
    expertise: "We provide <strong>comprehensive chemical characterization</strong> of medical devices in <strong>compliance with relevant ISO guidelines( 10993-12 and 18 )</strong> and standards.\nTo date, we have successfully <strong>executed about 70 + medical device chemical characterization projects</strong>, covering diverse materials, components, and product applications. Our expertise enables us to deliver <strong>scientifically robust, reliable, and regulatory-compliant analytical solutions</strong> to support pharmaceutical and medical device manufacturers throughout product development and regulatory submissions.",
  },
  {
    id: "method-development",
    title: "Method Development & Validation",
    tagline: "Both Pharma and Medical devices",
    icon: TestTube,
    businessChallenge:
      "Every pharmaceutical product requires validated analytical methods to ensure consistent quality. Without robust, compliant methods, your regulatory submissions face delays, rejections, or costly re-work.",
    clsSolution:
      "CLS provides comprehensive analytical method development, verification, transfer, and validation services for pharmaceutical APIs and medical devices. All work is conducted per regulatory guidelines, ensuring your methods are accepted by global regulatory bodies.",
    benefits: [
      "ICH compliant validation protocols",
      "Methods accepted by global regulators",
      "Faster regulatory approvals",
      "Transferable methods for commercial manufacturing",
    ],
    applications: [
      "Pharmaceutical APIs and formulations",
      "Medical device testing",
      "Genotoxic impurity studies",
      "Raw material and excipient testing",
    ],
    standards: ["ICH", "USP", "EP", "ISO"],
    equipment: cuttingEdgeEquipment,
    cta: "Discuss Method Development",
  },
  {
    id: "genotoxic-impurities",
    title: "Genotoxic Impurities Evaluations",
    tagline: "Method development, Validation & Analysis",
    icon: ShieldCheck,
    businessChallenge:
      "Genotoxic impurities (GTIs), even at trace levels, pose serious risks to patient safety. Regulators demand rigorous identification and quantification against strict exposure targets.",
    clsSolution:
      "CLS specializes in the identification and quantification of genotoxic impurities, including volatile organic compounds. Our advanced instrumentation ensures detection at the sensitivity levels required by ICH M7 guidelines.",
    benefits: [
      "Ultra-sensitive detection and quantification",
      "ICH M7 (R1) compliant methodologies",
      "Coverage of volatile and non-volatile impurities",
      "Expert scientific interpretation of results",
    ],
    applications: [
      "Drug substance genotoxic screening",
      "Process impurity profiling",
      "Degradation product analysis",
      "Regulatory compliance assessments",
    ],
    standards: ["ICH M7 (R1)", "USFDA", "EMA"],
    equipment: ["LC-MS/MS", "GC-MS/MS", "ICP-MS"],
    cta: "Talk to Our Scientists",
  },
  {
    id: "eto-residual",
    title: "ETO residual testing",
    tagline: "ISO 10993-7 Including Method development & Validation",
    icon: FileSearch,
    businessChallenge:
      "Ethylene Oxide (EO or ETO) is widely used for sterilizing medical devices, but its residues (EO and ECH) are toxic and carcinogenic. Medical device manufacturers must prove these residues fall below safe limits before products can be used on patients.",
    clsSolution:
      "We offer specialized residual testing for Ethylene Oxide (EO) and Ethylene Chlorohydrin (ECH) in strict accordance with ISO 10993-7. Our validated gas chromatography methods ensure accurate, rapid, and fully compliant residue analysis for all sterilized devices.",
    benefits: [
      "Strict adherence to ISO 10993-7 standards",
      "Accurate quantification of EO and ECH",
      "Rapid turnaround to prevent supply chain bottlenecks",
      "Comprehensive method development for novel devices",
    ],
    applications: [
      "Sterilized medical devices",
      "Surgical instruments",
      "Implants and catheters",
      "Packaging materials",
    ],
    standards: ["ISO 10993-7"],
    equipment: cuttingEdgeEquipment,
    cta: "Schedule ETO Testing",
  }
];
