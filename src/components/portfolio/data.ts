export const PROFILE = {
  name: "Zanezinhle Nondumiso Mkwanazi",
  shortName: "Zanezinhle Mkwanazi",
  title:
    "Computer Engineering Graduate | Software Development | Networking | Artificial Intelligence | Emerging Technologies",
  location: "Cape Town, South Africa",
  email: "zanezinhlemkhwanazi@gmail.com",
  linkedin: "https://www.linkedin.com/in/zanezinhle-mkwanazi-6b1362332/",
  github: "#github-placeholder",
  cv: "#cv-placeholder",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai-journey", label: "AI Journey" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
] as const;

export const OPPORTUNITIES = [
  "Graduate Programmes",
  "Internships",
  "Learnerships",
  "Junior IT Roles",
  "Software Development",
  "Networking",
  "Cloud Computing",
  "AI Opportunities",
  "Graduate Engineering",
];

export type Tone = "primary" | "net" | "elec" | "ai";

export const SKILL_GROUPS: {
  title: string;
  tone: Tone;
  level: "Foundational" | "Developing" | "Practical";
  items: string[];
}[] = [
  {
    title: "Software Development",
    tone: "primary",
    level: "Practical",
    items: [
      "Java",
      "Python",
      "Programming",
      "Software Development",
      "Systems Analysis",
      "Database Fundamentals",
    ],
  },
  {
    title: "Networking",
    tone: "net",
    level: "Foundational",
    items: [
      "Computer Networking",
      "Digital Communications",
      "Network Troubleshooting",
      "TCP/IP Concepts",
    ],
  },
  {
    title: "Engineering & Electronics",
    tone: "elec",
    level: "Foundational",
    items: [
      "Electronics",
      "Digital Systems",
      "Microprocessors",
      "Process Control",
      "Engineering Mathematics",
    ],
  },
  {
    title: "Artificial Intelligence",
    tone: "ai",
    level: "Developing",
    items: [
      "Artificial Intelligence",
      "Generative AI",
      "Prompt Engineering",
      "AI Tools",
      "Emerging Technologies",
    ],
  },
];

export type Project = {
  title: string;
  category: "Software" | "Networking" | "Engineering" | "Electronics" | "AI";
  tone: Tone;
  description: string;
  tech: string[];
  status: "Completed" | "In Development" | "Planned";
};

export const PROJECTS: Project[] = [
  {
    title: "AI Career Assistant",
    category: "AI",
    tone: "ai",
    description:
      "An assistant concept that helps graduates structure applications, tailor CVs and prepare for technical interviews using generative AI.",
    tech: ["Generative AI", "Prompt Engineering", "Python"],
    status: "In Development",
  },
  {
    title: "Network Troubleshooting Assistant",
    category: "Networking",
    tone: "net",
    description:
      "A guided diagnostic tool that walks through common connectivity faults using TCP/IP fundamentals and structured troubleshooting steps.",
    tech: ["TCP/IP", "Networking", "Python"],
    status: "Planned",
  },
  {
    title: "Java Software Development Project",
    category: "Software",
    tone: "primary",
    description:
      "Academic software project applying object-oriented design, systems analysis and database fundamentals.",
    tech: ["Java", "OOP", "Databases"],
    status: "Completed",
  },
  {
    title: "Smart Campus Technology Solution",
    category: "Engineering",
    tone: "primary",
    description:
      "Concept for connecting campus systems and sensors into a single monitoring interface across software, hardware and networks.",
    tech: ["Systems Analysis", "IoT Concepts", "Networking"],
    status: "Planned",
  },
  {
    title: "Digital Systems & Electronics Project",
    category: "Electronics",
    tone: "elec",
    description:
      "Academic work in digital systems, microprocessors and electronics — circuit design, logic and embedded control.",
    tech: ["Digital Systems", "Microprocessors", "Electronics"],
    status: "Completed",
  },
];

export const LABS: { title: string; tone: Tone; note: string }[] = [
  { title: "Networking Lab", tone: "net", note: "Topologies, IP addressing and troubleshooting drills." },
  { title: "AI Lab", tone: "ai", note: "Prompt engineering experiments and generative AI tooling." },
  { title: "Software Lab", tone: "primary", note: "Java & Python exercises, small applications, clean code." },
  { title: "Electronics Lab", tone: "elec", note: "Digital logic, microprocessors and circuit exploration." },
  { title: "Cloud Lab", tone: "primary", note: "Cloud fundamentals and deployment learning path." },
];

export const AI_JOURNEY = [
  { step: "AI Learning", note: "AI Skills Acceleration programme — core concepts and tooling." },
  { step: "AI Certifications", note: "Working towards AI-related credentials." },
  { step: "AI Experiments", note: "Hands-on prompt engineering and generative AI experiments." },
  { step: "AI Projects", note: "Applying AI to practical career and engineering problems." },
  { step: "Continuous Growth", note: "Ongoing study of emerging technologies." },
];

export const COURSEWORK: { group: string; tone: Tone; items: string[] }[] = [
  {
    group: "Software & Computing",
    tone: "primary",
    items: ["Software Development", "Computer Programming", "Systems Analysis", "Database Systems"],
  },
  {
    group: "Networking & Communications",
    tone: "net",
    items: ["Computer Networks", "Digital Communications"],
  },
  { group: "Engineering", tone: "primary", items: ["Engineering Mathematics", "Process Control"] },
  {
    group: "Electronics & Hardware",
    tone: "elec",
    items: ["Electronics", "Microprocessors", "Digital Systems"],
  },
];

export const HIGHLIGHTS = [
  { title: "Diploma", note: "Computer Engineering — CPUT" },
  { title: "Technical Projects", note: "Academic & personal projects" },
  { title: "AI Learner", note: "AI Skills Acceleration programme" },
  { title: "Problem Solver", note: "Analytical & creative" },
  { title: "Team Player", note: "Communication & collaboration" },
  { title: "Fast Learner", note: "Continuous growth" },
];
