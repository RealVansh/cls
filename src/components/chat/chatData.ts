// All conversation data for the CLS chatbot — rule-based flows

export interface ChatOption {
  label: string;
  emoji: string;
  nextId: string;
}

export interface ChatNode {
  id: string;
  messages: string[];
  options?: ChatOption[];
  isLeadCapture?: boolean;
  isServiceList?: boolean;
}

export const chatNodes: Record<string, ChatNode> = {
  welcome: {
    id: "welcome",
    messages: [
      "Welcome to CLS Private Limited! 👋",
      "I'm your virtual assistant. I can help you explore our analytical testing services, learn about our accreditations, or connect you with our team.",
      "How can I help you today?",
    ],
    options: [
      { label: "Our Services", emoji: "🔬", nextId: "services" },
      { label: "About CLS", emoji: "🏢", nextId: "about" },
      { label: "Accreditations", emoji: "📜", nextId: "accreditations" },
      { label: "FAQs", emoji: "❓", nextId: "faq" },
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
    ],
  },

  // ─── SERVICES ──────────────────────────────────────────────
  services: {
    id: "services",
    messages: [
      "We offer 7 specialized analytical testing services across pharmaceuticals, packaging, and medical devices. Tap any service to learn more:",
    ],
    isServiceList: true,
    options: [
      { label: "Nitrosamines & NDSRI", emoji: "🧪", nextId: "svc-nitrosamines" },
      { label: "Extractable & Leachable", emoji: "🧫", nextId: "svc-enl" },
      { label: "Elemental Impurities", emoji: "⚗️", nextId: "svc-elemental" },
      { label: "Method Dev & Validation", emoji: "📊", nextId: "svc-method" },
      { label: "Genotoxic Impurities", emoji: "🔬", nextId: "svc-genotoxic" },
      { label: "ETO Residual Testing", emoji: "🏥", nextId: "svc-eto" },
      { label: "Residual Analysis — Medical Devices", emoji: "🩺", nextId: "svc-residual" },
      { label: "Back to Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-nitrosamines": {
    id: "svc-nitrosamines",
    messages: [
      "🧪 **Nitrosamines & NDSRI Evaluations**",
      "Complete evaluation, identification, and quantification of nitrosamines and NDSRIs against allowable maximum daily exposure targets.",
      "We follow ICH M7, USFDA, and EMA guidelines with ultra-trace sensitivity using our advanced LC-MS/MS systems.",
      "Applications include drug substance impurity profiling, NDSRI screening in formulations, and regulatory compliance testing.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-enl": {
    id: "svc-enl",
    messages: [
      "🧫 **Extractable & Leachable (E&L) Studies**",
      "Sophisticated qualitative/quantitative profiling of packaging materials, Container Closure Systems, and medical device components.",
      "We comply with USP 1663/1664, ICH, PQRI, and ISO 10993 using advanced LC-MS/MS and GC-MS/MS for regulatory-ready submissions.",
      "We test pharmaceutical packaging, CCS, medical device components, and primary & secondary packaging materials.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-elemental": {
    id: "svc-elemental",
    messages: [
      "⚗️ **Elemental Impurity Studies**",
      "High-sensitivity elemental profiling at parts-per-billion (ppb) level using our Agilent 7800 ICP-MS system.",
      "Fully compliant with ICH Q3D, USP <232>/<233>, and EP 5.20 guidelines.",
      "We test drug substances, excipients, finished products, dietary supplements, and packaging extractables.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-method": {
    id: "svc-method",
    messages: [
      "📊 **Method Development & Validation**",
      "Full-spectrum development, verification, transfer, and validation for APIs, formulations, and medical devices.",
      "We follow ICH, USP, EP, and ISO standards to deliver globally accepted, ICH-compliant methods for faster regulatory approvals.",
      "Applications include APIs, drug formulations, medical device testing, genotoxic impurity studies, and raw material testing.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-genotoxic": {
    id: "svc-genotoxic",
    messages: [
      "🔬 **Genotoxic Impurities (GTIs) Evaluations**",
      "Ultra-sensitive detection and quantification of volatile and non-volatile genotoxic impurities.",
      "We use LC-MS/MS and GC-MS/MS following ICH M7 (R1), USFDA, and EMA guidelines.",
      "Applications include active substance screening, process impurity profiling, and degradation product analysis.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-eto": {
    id: "svc-eto",
    messages: [
      "🏥 **ETO Residual Testing**",
      "Validated GC-MS/MS-FID methods ensuring Ethylene Oxide (EO) and Ethylene Chlorohydrin (ECH) residue levels fall safely below ISO 10993-7 limits.",
      "We test sterilized medical devices, surgical instruments, implants, catheters, and packaging materials.",
      "Rapid turnaround to prevent supply chain delays for medical device manufacturers.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "svc-residual": {
    id: "svc-residual",
    messages: [
      "🩺 **Residual Analysis for Medical Devices**",
      "Custom extraction and detection protocols using ASTM and ISO methods to identify chemical residues from manufacturing.",
      "We test orthopedic implants, cardiovascular devices, reusable surgical tools, and polymeric components.",
      "Our custom extraction protocols handle even complex device geometries for comprehensive residue screening.",
    ],
    options: [
      { label: "Enquire About This", emoji: "📝", nextId: "lead-capture" },
      { label: "Other Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  // ─── ABOUT ─────────────────────────────────────────────────
  about: {
    id: "about",
    messages: [
      "🏢 **About CLS Private Limited**",
      "Established in July 2019, we are a NABL-accredited and US FDA-inspected analytical testing laboratory located at TICEL Bio Park, Chennai — India's premier life sciences hub.",
      "Led by **Dr. B Philip Ashok** (30+ years of pharmaceutical industry experience), our team specializes in mass spectrometry and trace analysis.",
      "📊 **Key Numbers:**\n• 200+ Projects Delivered\n• 50+ Customers Across India\n• 10+ Global Customers\n• 40% Cost Savings vs. conventional labs\n• 10-15 Days Standard Turnaround",
    ],
    options: [
      { label: "Our Equipment", emoji: "🖥️", nextId: "equipment" },
      { label: "Our Services", emoji: "🔬", nextId: "services" },
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  equipment: {
    id: "equipment",
    messages: [
      "🖥️ **Our Analytical Equipment**",
      "**Mass Spectrometry Systems:**\n• Shimadzu LCMS-8045 (LC-MS/MS)\n• Shimadzu LCMS-8060NX (High Sensitivity)\n• Shimadzu LCMS-8060RX (Rapid Polarity Switching)\n• Agilent 7800 ICP-MS with SPS 4 Autosampler\n• Agilent 8890, 7000D GC/TQ (GC-MS/MS-FID)",
      "**Spectroscopy & Characterization:**\n• Shimadzu UV-Visible Spectrophotometer\n• Shimadzu FTIR Spectrophotometer",
      "All instruments are maintained under strict 21 CFR Part 11 compliant data integrity systems.",
    ],
    options: [
      { label: "Our Services", emoji: "🔬", nextId: "services" },
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  // ─── ACCREDITATIONS ────────────────────────────────────────
  accreditations: {
    id: "accreditations",
    messages: [
      "📜 **Our Accreditations & Certifications**",
      "✅ **NABL Accredited** (ISO/IEC 17025:2017) — Certificate No. TC-9241\n\n✅ **US FDA Inspected** — EIR received in 2023 & 2025 (DUNS: 87-756-6409)\n\n✅ **Drug License Form 37** — License No. TN00004704\n\n✅ **CDSCO Registered** — Medical Device Testing (Form MD-40)\n\n✅ **21 CFR Part 11 Compliant** — Full electronic data integrity\n\n✅ **ISO 9001:2015** — Quality Management System",
    ],
    options: [
      { label: "View Certificates", emoji: "🔗", nextId: "view-certs" },
      { label: "Our Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "view-certs": {
    id: "view-certs",
    messages: [
      "You can view all our certificates and detailed accreditation information on our Accreditations page.",
      "Visit: [cls.net.in/accreditations](/accreditations)",
    ],
    options: [
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  // ─── FAQ ───────────────────────────────────────────────────
  faq: {
    id: "faq",
    messages: [
      "Here are some frequently asked questions. Tap one to learn more:",
    ],
    options: [
      { label: "Turnaround Time?", emoji: "⏱️", nextId: "faq-tat" },
      { label: "Pricing & Costs?", emoji: "💰", nextId: "faq-pricing" },
      { label: "Sample Requirements?", emoji: "📦", nextId: "faq-samples" },
      { label: "Regulatory Reports?", emoji: "📄", nextId: "faq-reports" },
      { label: "Confidentiality?", emoji: "🔒", nextId: "faq-nda" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "faq-tat": {
    id: "faq-tat",
    messages: [
      "⏱️ **Turnaround Time**",
      "Our standard turnaround time is **10-15 business days** depending on method complexity and sample volume.",
      "Expedited testing is available for time-sensitive projects — just let our team know your timeline!",
    ],
    options: [
      { label: "More FAQs", emoji: "❓", nextId: "faq" },
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "faq-pricing": {
    id: "faq-pricing",
    messages: [
      "💰 **Pricing & Costs**",
      "Pricing is project-specific and depends on the scope, method complexity, and number of samples.",
      "We offer up to **40% cost savings** compared to conventional testing providers.",
      "Share your requirements and we'll provide a detailed quote within 24 hours!",
    ],
    options: [
      { label: "Get a Quote", emoji: "📝", nextId: "lead-capture" },
      { label: "More FAQs", emoji: "❓", nextId: "faq" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "faq-samples": {
    id: "faq-samples",
    messages: [
      "📦 **Sample Requirements**",
      "Sample size requirements depend on the matrix and analytical method being used.",
      "Specific guidance is provided during your initial technical consultation with our team. We'll tell you exactly what we need!",
    ],
    options: [
      { label: "Talk to Our Team", emoji: "📞", nextId: "contact" },
      { label: "More FAQs", emoji: "❓", nextId: "faq" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "faq-reports": {
    id: "faq-reports",
    messages: [
      "📄 **Regulatory-Ready Reports**",
      "Yes! All our analytical reports are fully validated, QA-reviewed, and formatted for direct submission to regulatory bodies worldwide.",
      "We support submissions to **US FDA, EMA, CDSCO**, and other global health authorities.",
    ],
    options: [
      { label: "More FAQs", emoji: "❓", nextId: "faq" },
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "faq-nda": {
    id: "faq-nda",
    messages: [
      "🔒 **Confidentiality & Data Security**",
      "Absolutely. All operations are executed under strict Non-Disclosure Agreements (NDAs).",
      "Our data management systems are fully **21 CFR Part 11 compliant** with audit trails, restricted access controls, and automated electronic backups.",
    ],
    options: [
      { label: "More FAQs", emoji: "❓", nextId: "faq" },
      { label: "Contact Us", emoji: "📞", nextId: "contact" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  // ─── CONTACT ───────────────────────────────────────────────
  contact: {
    id: "contact",
    messages: [
      "📞 **Get In Touch**",
      "Choose how you'd like to connect with us:",
    ],
    options: [
      { label: "Chat on WhatsApp", emoji: "💬", nextId: "whatsapp" },
      { label: "Leave Your Details", emoji: "📝", nextId: "lead-capture" },
      { label: "View Contact Info", emoji: "📋", nextId: "contact-info" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  whatsapp: {
    id: "whatsapp",
    messages: [
      "💬 You can reach us directly on WhatsApp for the fastest response!",
      "📱 **+91 75021 33888**",
      "Click here to start chatting: [Open WhatsApp](https://wa.me/917502133888)",
    ],
    options: [
      { label: "Leave Your Details Instead", emoji: "📝", nextId: "lead-capture" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  "contact-info": {
    id: "contact-info",
    messages: [
      "📋 **CLS Private Limited**",
      "📍 Modules 313 & 314, Phase I, TICEL Bio Park Limited, CSIR Road, Taramani, Chennai-600113, Tamil Nadu",
      "📞 +91 75021 33888 | +91 88258 79073\n📧 info@cls.net.in | philip@cls.net.in",
    ],
    options: [
      { label: "Chat on WhatsApp", emoji: "💬", nextId: "whatsapp" },
      { label: "Leave Your Details", emoji: "📝", nextId: "lead-capture" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },

  // ─── LEAD CAPTURE ──────────────────────────────────────────
  "lead-capture": {
    id: "lead-capture",
    messages: [
      "We'd love to connect you with our team! 🤝",
      "Please share your name and phone number, and we'll reach out to you shortly.",
    ],
    isLeadCapture: true,
  },

  "lead-success": {
    id: "lead-success",
    messages: [
      "Thank you! ✅ Our team will contact you shortly.",
      "You can also reach us directly on WhatsApp at **+91 75021 33888** for an instant response. 📱",
    ],
    options: [
      { label: "Explore Services", emoji: "🔬", nextId: "services" },
      { label: "Main Menu", emoji: "🏠", nextId: "welcome" },
    ],
  },
};
