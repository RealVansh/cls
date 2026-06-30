import {
  FlaskConical,
  TestTube,
  AlertTriangle,
  Microscope,
  BookOpen,
  Package,
  Skull,
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
}

export const services: ServiceData[] = [
  {
    id: "extractables-leachables",
    title: "Extractables & Leachables",
    tagline: "Ensuring patient safety through rigorous packaging analysis.",
    icon: FlaskConical,
    businessChallenge:
      "Pharmaceutical packaging materials and Container Closure Systems (CCS) can release harmful chemical compounds into drug products. Regulatory agencies worldwide require comprehensive E&L profiling to ensure patient safety before any product reaches the market.",
    clsSolution:
      "CLS designs, develops, and executes complete E&L studies specifically for pharmaceutical packaging materials and Container Closure Systems. We perform sophisticated qualitative and quantitative analysis using advanced mass spectrometric techniques, delivering regulatory-ready data that supports your submissions.",
    benefits: [
      "Comprehensive extractable and leachable profiling",
      "Regulatory-ready reports for FDA and EMA submissions",
      "Advanced trace-level detection capabilities",
      "Support for both pharmaceutical and medical device packaging",
    ],
    applications: [
      "Pharmaceutical packaging materials",
      "Container Closure Systems (CCS)",
      "Medical device components",
      "Primary and secondary packaging",
    ],
    standards: ["NABL (ISO/IEC 17025)", "US FDA", "EMA"],
    equipment: ["LC-MS/MS", "HSGC-MS/MS", "ICP-MS"],
    cta: "Speak with an E&L Expert",
  },
  {
    id: "method-development",
    title: "Method Development & Validation",
    tagline: "Building robust, reproducible analytical methods you can trust.",
    icon: TestTube,
    businessChallenge:
      "Every pharmaceutical product requires validated analytical methods to ensure consistent quality. Without robust, ICH-compliant methods, your regulatory submissions face delays, rejections, or costly re-work — putting your product timeline at risk.",
    clsSolution:
      "CLS provides comprehensive analytical method development, verification, transfer, and validation services for pharmaceutical APIs and formulations. All work is conducted per ICH Q2, USP, and other regulatory guidelines, ensuring your methods are accepted by global regulatory bodies on the first submission.",
    benefits: [
      "ICH Q2 compliant validation protocols",
      "Methods accepted by FDA, EMA, and CDSCO",
      "Faster regulatory approvals",
      "Transferable methods for commercial manufacturing",
    ],
    applications: [
      "Pharmaceutical APIs and formulations",
      "Genotoxic impurity studies",
      "Extractables & Leachables studies",
      "Elemental impurity analysis (ICH Q3D)",
      "Raw material and excipient testing",
    ],
    standards: ["ICH Q2", "USP", "ICH Q3D", "EP", "BP", "JP"],
    equipment: ["LC-MS/MS", "HSGC-MS/MS", "ICP-MS"],
    cta: "Discuss Method Development",
  },
  {
    id: "nitrosamines",
    title: "Nitrosamines & NDSRIs",
    tagline: "Detecting trace-level genotoxic impurities with unparalleled sensitivity.",
    icon: AlertTriangle,
    businessChallenge:
      "Regulatory agencies now require extremely sensitive detection of nitrosamines and Nitrosamine Drug Substance Related Impurities (NDSRIs) to ensure patient safety. Non-compliance can lead to product recalls, market withdrawals, and severe reputational damage.",
    clsSolution:
      "CLS performs comprehensive genotoxic impurity evaluation including identification and quantification of nitrosamines and NDSRIs. Our team handles complete study design, method development, and validation to meet allowable maximum daily exposure targets set by global regulatory authorities.",
    benefits: [
      "Detection at parts-per-billion sensitivity",
      "Compliance with latest FDA and EMA guidelines",
      "Accurate quantification against exposure limits",
      "Complete study design through validated report",
    ],
    applications: [
      "Drug substance impurity profiling",
      "NDMA, NMBA, NDIPA detection",
      "Volatile organic compound analysis",
      "Regulatory compliance testing",
    ],
    standards: ["ICH M7 (R1)", "USFDA", "EMA", "NABL (ISO/IEC 17025)"],
    equipment: [
      "LC-MS/MS (Shimadzu 8045, 8060NX, 8060RX)",
      "HSGC-MS/MS (Agilent 7000D)",
      "ICP-MS (Agilent 7800)",
    ],
    cta: "Get a Nitrosamine Assessment",
  },
  {
    id: "analytical-testing",
    title: "Analytical Testing",
    tagline: "Comprehensive analytical services under one roof.",
    icon: Microscope,
    businessChallenge:
      "Pharmaceutical companies often need to work with multiple laboratories for different analytical requirements — creating coordination overhead, inconsistent data formats, and delayed timelines. A single, qualified laboratory partner dramatically reduces complexity.",
    clsSolution:
      "CLS serves as your comprehensive analytical and research service partner, offering a complete suite of testing capabilities from a single NABL-accredited facility. From impurity profiling to medical device testing, we deliver consistent, high-quality results across all analytical disciplines.",
    benefits: [
      "Single laboratory for all analytical needs",
      "Consistent data quality and reporting",
      "Reduced coordination overhead",
      "NABL accredited and US FDA inspected",
    ],
    applications: [
      "Extractables & Leachables studies",
      "Impurity profiling and unknown identification",
      "Elemental impurity studies (ICH Q3D)",
      "Medical device testing (ISO 10993-7)",
      "EO sterilization residuals",
      "Protein content and residual accelerator testing",
    ],
    standards: [
      "USP", "EP", "BP", "JP", "FCC", "ACS", "IP",
      "ICH Q3D", "EMA", "ISO 10993-7",
    ],
    equipment: ["LC-MS/MS", "HSGC-MS/MS", "ICP-MS", "UV-Vis", "FTIR"],
    cta: "Explore Our Testing Capabilities",
  },
  {
    id: "compendial-testing",
    title: "Pharmacopeia Compendial Testing",
    tagline: "Monograph testing across every major global pharmacopeia.",
    icon: BookOpen,
    businessChallenge:
      "Products destined for global markets must comply with multiple pharmacopeial standards. Testing against the wrong monograph or using a non-accredited laboratory can invalidate your entire submission — costing months of regulatory delay.",
    clsSolution:
      "CLS performs monograph testing as per all major global pharmacopeias from a single NABL-accredited facility. Our laboratory holds US FDA inspection clearance (EIR received 2023 and 2025) and CDSCO registration, ensuring your results are accepted worldwide.",
    benefits: [
      "Testing across USP, EP, BP, JP, IP, FCC, and ACS",
      "US FDA inspected facility (EIR 2023 & 2025)",
      "CDSCO registered (Form MD-40)",
      "Central/State Drug Control license (Form 37)",
    ],
    applications: [
      "Drug substance monograph testing",
      "Excipient compliance testing",
      "Multi-market regulatory submissions",
      "Product release testing",
    ],
    standards: ["USP", "EP", "BP", "JP", "FCC", "ACS", "IP", "NABL TC-9241"],
    equipment: ["LC-MS/MS", "HSGC-MS/MS", "ICP-MS"],
    cta: "Request Compendial Testing",
  },
  {
    id: "raw-material-testing",
    title: "Raw Material & Excipient Testing",
    tagline: "Ensuring the quality of every ingredient in your product.",
    icon: Package,
    businessChallenge:
      "The quality of your final pharmaceutical product is only as good as its raw materials. Undetected impurities in raw materials, Key Starting Materials (KSMs), or excipients can compromise product safety and trigger costly batch failures or recalls.",
    clsSolution:
      "CLS provides comprehensive analysis of raw materials, KSMs, intermediates, drug substances, and formulations. Our testing scope covers compendial testing, impurity profiling, elemental impurity studies, E&L studies, method development, and residual studies — ensuring every ingredient meets the highest quality standards.",
    benefits: [
      "Complete supply chain quality assurance",
      "Multi-pharmacopeial compliance",
      "Impurity profiling and degradation product identification",
      "Residual solvent and ethylene oxide testing",
    ],
    applications: [
      "Raw material qualification",
      "Key Starting Material (KSM) testing",
      "Intermediate and drug substance analysis",
      "Excipient compliance verification",
      "Residual solvent determination",
    ],
    standards: ["USP", "EP", "BP", "JP", "FCC", "ACS", "IP", "ICH Q3D", "EMA"],
    equipment: ["LC-MS/MS", "HSGC-MS/MS", "ICP-MS"],
    cta: "Discuss Material Testing",
  },
  {
    id: "genotoxic-impurities",
    title: "Genotoxic Impurities",
    tagline: "Protecting patients through ultra-sensitive impurity detection.",
    icon: Skull,
    businessChallenge:
      "Genotoxic impurities, even at trace levels, pose serious risks to patient safety. Regulatory agencies demand rigorous identification and quantification against allowable maximum daily exposure targets — requiring sophisticated analytical capabilities most laboratories cannot provide.",
    clsSolution:
      "CLS specializes in the identification and quantification of genotoxic impurities, including volatile organic compounds and specific nitrosamines (NDMA, NMBA, NDIPA). Our advanced instrumentation and experienced scientists ensure detection at the sensitivity levels required by ICH M7 and global regulatory guidelines.",
    benefits: [
      "Ultra-sensitive detection and quantification",
      "ICH M7 (R1) compliant methodologies",
      "Coverage of volatile and non-volatile genotoxic impurities",
      "Expert scientific interpretation of results",
    ],
    applications: [
      "Drug substance genotoxic screening",
      "Nitrosamine impurity profiling",
      "Volatile organic compound analysis",
      "Regulatory compliance assessments",
    ],
    standards: ["ICH M7 (R1)", "USFDA", "EMA"],
    equipment: ["LC-MS/MS", "GC-MS/MS", "HS-GC-MS", "ICP-MS", "HPLC", "GC"],
    cta: "Talk to Our Scientists",
  },
];
