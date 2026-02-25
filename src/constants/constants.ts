/** Resume-derived data for portfolio */

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

export const keyProjects = [
  {
    id: "templater",
    title: "Templater Engine",
    org: "Skinopathy",
    description:
      "Built a dynamic note-templating engine using Slate.js, automating prescription linkage and patient data filling, improving encounter speed by 100%.",
    tags: ["Slate.js", "React", "EMR"],
  },
  {
    id: "encounter-notes",
    title: "Encounter Notes",
    org: "Skinopathy",
    description:
      "Developed the EMR's core note module integrating billing, orders, and prescriptions with TanStack Query and SRFax API, reducing documentation time from hours to minutes.",
    tags: ["TanStack Query", "SRFax API", "EMR"],
  },
  {
    id: "prescriptions",
    title: "Prescriptions Module",
    org: "Skinopathy",
    description:
      "Led development of an end-to-end prescriptions module with PostgreSQL fuzzy search (trigrams + tsvector), achieving sub-300ms query speeds across large datasets.",
    tags: ["PostgreSQL", "Go", "Full-text search"],
  },
  {
    id: "acs",
    title: "Azure Communication Services Integration",
    org: "Skinopathy",
    description:
      "Implemented Azure Communication Services in a Go backend (without SDK support), enabling encrypted, government-compliant doctor–patient chat and calls.",
    tags: ["Go", "Azure", "Compliance"],
  },
  {
    id: "s3-optimization",
    title: "S3 Performance Optimization",
    org: "Skinopathy",
    description:
      "Reduced dashboard load times by 80% through a thumbnail-generation pipeline for PDF previews, improving admin productivity.",
    tags: ["AWS S3", "Go", "Performance"],
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
  yearStart: 2023,
  yearEnd: null as number | null, // null = present
  highlights: [
    "Designed and deployed RESTful APIs using Go (Gin Gonic) and PostgreSQL, improving scalability and reducing API response times by 50%.",
    "Built responsive frontends with React.js, TypeScript, and Tailwind CSS, improving UX and accessibility across doctor and admin portals.",
    "Integrated Azure Communication Services and AWS S3 for secure, compliant cloud communication and file transfer.",
    "Containerized backend microservices using Docker, improving deployment consistency and CI/CD reliability.",
    "Partnered with product, design, and QA to deliver major features 15% faster by optimizing team workflows.",
    "Trained junior developers and contributed to architecture decisions across backend services.",
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

/** Timeline entries for Experience & Education, sorted by year (oldest first) */
export const timelineEntries = [
  {
    type: "education" as const,
    id: "education",
    yearStart: education.yearStart,
    yearEnd: education.yearEnd,
    period: education.period,
    title: education.degree,
    subtitle: education.school,
    location: education.location,
    details: [
      `Awards: ${education.awards.join(", ")}`,
      `Activities: ${education.activities.join(", ")}`,
    ],
  },
  {
    type: "experience" as const,
    id: "experience",
    yearStart: experience.yearStart,
    yearEnd: experience.yearEnd,
    period: experience.period,
    title: `${experience.role} · ${experience.company}`,
    subtitle: experience.location,
    location: experience.location,
    details: experience.highlights,
  },
].sort((a, b) => a.yearStart - b.yearStart);
