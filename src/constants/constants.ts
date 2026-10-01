/** Resume-derived data for portfolio */

/** SEO: single source of truth for meta and structured data (recruiter-friendly) */
export const seo = {
  siteUrl: "https://priyanshupatel.com",
  person: {
    firstName: "Priyanshu",
    lastName: "Patel",
    fullName: "Priyanshu Patel",
    jobTitle: "Software Engineer (Full Stack)",
    email: "priyanshu.sanjay.patel@gmail.com",
    phone: "647-568-9541",
    phoneHref: "tel:+16475689541",
    location: "Toronto, ON, Canada",
  },
  resumePath: "/Priyanshu-Patel-Resume.pdf",
  company: "Skinopathy Inc.",
  school: "York University, Lassonde School of Engineering",
  defaultTitle: "Priyanshu Patel | Full Stack Software Engineer",
  defaultDescription:
    "Priyanshu Patel — Full Stack Software Engineer at Skinopathy Inc. BSc Computer Science, York University (Lassonde). Go, React, Next.js, TypeScript, AWS, Azure. Toronto.",
  keywords: [
    "Priyanshu Patel",
    "Full Stack Software Engineer",
    "Software Engineer Toronto",
    "Skinopathy",
    "York University",
    "Lassonde School of Engineering",
    "Go",
    "Golang",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Azure",
    "Toronto developer",
  ],
  social: {
    github: "https://github.com/prisp09",
    linkedin: "https://www.linkedin.com/in/prisp09/",
    instagram: "https://instagram.com/pri.s.p",
  },
} as const;

/** Technical skills, grouped as on the résumé */
export const skills = {
  languages: ["Go", "TypeScript", "JavaScript", "Python", "SQL", "Java"],
  backend: [
    "Gin",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "Azure Functions",
    "REST APIs",
    "microservices",
    "OpenAPI/Swagger",
  ],
  frontend: ["React", "Next.js", "TanStack Query", "Tailwind CSS", "HTML/CSS"],
  data: ["PostgreSQL (full-text and trigram search)", "MySQL", "MongoDB"],
  cloudDevOps: ["Azure", "AWS (S3, EC2)", "Docker", "GitHub Actions", "CI/CD", "feature flags"],
  practices: [
    "Vitest",
    "Playwright",
    "Go testing",
    "code review",
    "release management",
    "Agile",
    "mentoring",
  ],
  aiTools: ["Claude", "Cursor", "GitHub Copilot"],
};

/**
 * Skinopathy OS work. Descriptions merge the résumé bullets with the GitHub and
 * Linear work record (~/playground/skinopathy-work.md, Feb 2023 – Sep 2026).
 */
export const keyProjects = [
  {
    id: "prescriptions",
    title: "Prescriptions Module → 2.0",
    org: "Skinopathy",
    description:
      "Led an end-to-end prescriptions module with PostgreSQL fuzzy search (trigrams + tsvector) at sub-300ms across large datasets. Then shipped Prescriptions 2.0 across the EMR and the patient web portal: prescriptions without an encounter, dosage and catalog strength on the PDF, pharmacy match on phone number, fax-to-pharmacy, and re-prescription from history.",
    tags: ["PostgreSQL", "Go", "Next.js", "Patient portal"],
    metric: "<300 ms",
    metricLabel: "fuzzy search · ~70 PRs",
  },
  {
    id: "templater",
    title: "Encounter Notes & Templater",
    org: "Skinopathy",
    description:
      "Built the note-templating engine (Slate.js) clinicians use during visits, doubling encounter speed. Added template versioning and drafts, appointment-linked notes, walk-in encounter plus appointment creation, and favorite templates.",
    tags: ["Slate.js", "React", "EMR"],
    metric: "2×",
    metricLabel: "encounter speed",
  },
  {
    id: "billing",
    title: "Billing, OHIP Claims & Inventory",
    org: "Skinopathy",
    description:
      "Delivered inventory and private-pay billing: drug and product catalog, invoice generation, and bills that open their appointment and encounter. Extended the OHIP claims Function App with fee-schedule parsing and claim submit and response handling.",
    tags: ["Python", "Azure Functions", "Go"],
    metric: "OHIP",
    metricLabel: "claims function app",
  },
  {
    id: "fax",
    title: "Chart Fax & PDF Pipeline",
    org: "Skinopathy",
    description:
      "Rebuilt outbound fax from the patient chart: multi-document bundles, cover letters, SRFax, clinic sender numbers and multi-doctor sends, plus the PDF pipeline that keeps chart documents printable.",
    tags: ["SRFax API", "react-pdf", "pdf-lib"],
    metric: "~30 PRs",
    metricLabel: "fax, documents & PDFs",
  },
  {
    id: "scheduling",
    title: "Appointments & Scheduler",
    org: "Skinopathy",
    description:
      "A shared appointment selector for billing and encounters, slot-duration and doctor-slot time fixes, multi-location doctor slots, and editable walk-in queue notes across the EMR and the Go scheduling service.",
    tags: ["Go", "Scheduler", "Next.js"],
    metric: "~28 PRs",
    metricLabel: "scheduling work",
  },
  {
    id: "acs",
    title: "Azure Communication Services",
    org: "Skinopathy",
    description:
      "Implemented Azure Communication Services in a Go backend (without SDK support), enabling encrypted doctor–patient chat and video calls.",
    tags: ["Go", "Azure", "Compliance"],
    metric: "No SDK",
    metricLabel: "built directly in Go",
  },
  {
    id: "s3-optimization",
    title: "S3 Performance Optimization",
    org: "Skinopathy",
    description:
      "Reduced dashboard load times by 80% through a thumbnail-generation pipeline for PDF previews, improving admin productivity.",
    tags: ["AWS S3", "Go", "Performance"],
    metric: "−80%",
    metricLabel: "dashboard load time",
  },
  {
    id: "getskinbeauty",
    title: "GetSkinBeauty Recommender",
    org: "Skinopathy",
    description:
      "An in-chart product recommender with favorites, an Excel-to-database catalog updater (SKU, price, skin concerns, product URLs), and recommendation-email metrics in the email service.",
    tags: ["Go", "Email service", "Data import"],
    metric: "Excel → DB",
    metricLabel: "catalog updater",
  },
];

export const otherProjects = [
  {
    id: "pdf-tools",
    title: "PDF Tools (Prototype)",
    org: "Skinopathy Interview Project",
    date: "January 2023",
    description:
      "Built a React.js prototype enabling PDF page rotation and annotation using pdfjs-dist and pdf-lib, later integrated into the Skinopathy production system after successful prototype delivery.",
    tags: ["React", "pdfjs-dist", "pdf-lib"],
    link: "https://skinopathy.com/",
  },
  {
    id: "plate-saver",
    title: "Plate-Saver",
    org: "DeltaHacks 8 — Winner (MyPalate Inc Challenge)",
    date: "January 2022",
    description:
      "Full-stack Android application in Java + SQLite connecting restaurants and shelters for food redistribution. Implemented backend APIs, real-time data sync, and intuitive UI. Awarded for best use of technology to build community-impactful software.",
    tags: ["Android", "Java", "SQLite"],
    link: "https://devpost.com/software/plate-saver",
    visit: "https://github.com/prisp09/Plate-Saver",
  },
  {
    id: "lassonde-games",
    title: "Lassonde Games",
    org: "Participant",
    date: "February 2022",
    description:
      "24-hour engineering triathlon. Implemented QR code scanning for digital answer submission and a web app for the Ontario Science Centre guided experience using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "QR"],
  },
];

export const experience = {
  role: "Software Engineer (Full Stack)",
  company: "Skinopathy Inc.",
  location: "Toronto, ON",
  period: "February 2023 – Present",
  startDate: "2023-02-01",
  yearStart: 2023,
  yearEnd: null as number | null, // null = present
  highlights: [
    "Cut API response times 50% by designing and deploying RESTful Go (Gin) services on PostgreSQL behind the EMR's clinical workflows.",
    "Delivered sub-300 ms prescription search over large datasets with PostgreSQL trigram and full-text indexing, then led Prescriptions 2.0 (~70 PRs) across the EMR and patient portal, including re-prescribing from history and fax-to-pharmacy.",
    "Cut clinician documentation time from hours to minutes and doubled encounter speed by building the encounter-note editor and Slate.js templating engine, used for 23,000+ encounter notes (~22 a day) at one clinic.",
    "Reduced admin dashboard load times 80% with an AWS S3 thumbnail-generation pipeline for PDF previews.",
    "Shipped encrypted doctor-patient chat and video calls by integrating Azure Communication Services into the Go backend without SDK support, for a practice where ~75% of visits are virtual.",
    "Introduced automated testing across the stack: Vitest and Playwright for the Next.js app (replacing Cypress) and Go unit tests for the backend and scheduling service.",
    "Built OHIP (Ontario health insurance) claim submission, response handling and fee-schedule parsing in a Python Azure Functions service, and delivered inventory and private-pay invoicing.",
    "Rebuilt outbound faxing from the patient chart on the SRFax API (multi-document bundles, cover letters, multi-recipient sends) and the react-pdf/pdf-lib pipeline behind printable chart documents (~30 PRs).",
    "Led 11+ production releases in 2026 across 4 services (frontend, backend, scheduler, email), assembling QA branches and writing clinician-facing release notes.",
    "Authored 315 PRs across 10 repositories, reviewed 184, completed 197+ tickets and mentored ~5 interns; helped the team ship major features 15% faster.",
  ],
};

export const education = {
  degree: "BSc. Computer Science",
  school: "York University — Lassonde School of Engineering",
  location: "Toronto, ON",
  period: "September 2018 – June 2022",
  yearStart: 2018,
  yearEnd: 2022,
  awards: ["Lassonde Entrance Scholarship", "Student Excellence Scholarship"],
  activities: ["Orientation Leader", "YUHacks Volunteer", "University Tour Guide"],
};

/** Outcomes from the Skinopathy work, shown first in the hero */
export const impact = [
  { value: "50%", label: "faster API response times" },
  { value: "80%", label: "faster admin dashboard loads" },
  { value: "<300 ms", label: "prescription search over large datasets" },
  { value: "2×", label: "encounter speed for clinicians" },
];

/** Scale of the Skinopathy work, from GitHub and Linear (Feb 2023 – Sep 2026) */
export const metrics = [
  { value: "315", label: "PRs authored across 10 repositories" },
  { value: "184", label: "PRs reviewed for teammates" },
  { value: "197+", label: "tickets completed" },
  { value: "11+", label: "production releases led in 2026" },
];

export const platformSummary =
  "Healthcare EMR for dermatology clinics in Canada and Malaysia · Next.js, Go, PostgreSQL, Python, Azure";

/**
 * Experience since a date, rounded down to the nearest half year,
 * e.g. 3.5 for Feb 2023 read in Sep 2026 and 4 from Feb 2027.
 */
export function yearsSince(isoDate: string, now: Date = new Date()) {
  // Parse as a local date; new Date("YYYY-MM-DD") is UTC and can land on the previous day
  const [y, m, d] = isoDate.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(Math.floor(months / 6) / 2, 0);
}
