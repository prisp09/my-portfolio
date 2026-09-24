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

export const skills = {
  languages: [
    "Go",
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "SQL (PostgreSQL, MySQL)",
    "Bash",
    "HTML",
    "CSS",
  ],
  frameworks: [
    "Gin Gonic",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Spring Boot",
  ],
  devOpsTools: [
    "Docker",
    "AWS (S3, EC2)",
    "Microsoft Azure",
    "Azure Functions",
    "GitHub Actions",
    "MongoDB Atlas",
  ],
  concepts: [
    "REST API Design",
    "Microservices",
    "OOP",
    "Agile",
    "Unit Testing",
    "Swagger",
    "Cloud Architecture",
  ],
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
      "Implemented Azure Communication Services in a Go backend (without SDK support), enabling encrypted, government-compliant doctor–patient chat and calls.",
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
    "Designed and deployed RESTful APIs using Go (Gin Gonic) and PostgreSQL, improving scalability and reducing API response times by 50%.",
    "Built responsive frontends with React.js, TypeScript, and Tailwind CSS, improving UX and accessibility across doctor and admin portals.",
    "Integrated Azure Communication Services and AWS S3 for secure, compliant cloud communication and file transfer.",
    "Containerized backend microservices using Docker, improving deployment consistency and CI/CD reliability.",
    "Partnered with product, design, and QA to deliver major features 15% faster by optimizing team workflows.",
    "Trained junior developers and contributed to architecture decisions across backend services.",
    "Cut Skinopathy OS production releases through 2026 (cycles 16 to 49) across frontend, backend, scheduler, and email, and wrote the clinician-facing release notes.",
    "Reviewed 184 pull requests, from 11 in 2023 to around 45 a year since 2024.",
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

/** Scale of the Skinopathy work, from GitHub and Linear (Feb 2023 – Sep 2026) */
export const metrics = [
  { value: "315", label: "pull requests authored on Skinopathy OS" },
  { value: "184", label: "pull requests reviewed for teammates" },
  { value: "197+", label: "tickets shipped" },
  { value: "16–49", label: "production release cycles cut in 2026" },
];

export const platformSummary =
  "Skinopathy OS is the EMR dermatology clinics use in Canada and Malaysia. I own clinical workflows across a Next.js frontend, Go APIs, PostgreSQL, a Go scheduler, and a Python Azure Function for OHIP claims.";

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
