// Single source of truth for portfolio content. Edit here to update the site.

export const profile = {
  name: "Muhammad Hassnain",
  role: "Software Developer & Startup COO",
  email: "hassnain2275@gmail.com",
  github: "https://github.com/rj-hassnain",
  linkedin: "https://www.linkedin.com/in/muhammad-hassnain-9759a2379/",
  location: "Pakistan",
  siteUrl: "https://muhammad-hassnain-portfolio.vercel.app",
};

export type Category = "Client Project" | "Personal Project" | "Academic Project";

export interface Project {
  id: string;
  title: string;
  category: Category;
  status: string;
  summary: string;
  problem: string;
  built: string[];
  tech: string[];
  links: { label: string; url: string }[];
  /** Real screenshots in /public/projects. Leave empty to show a placeholder. */
  images: { src: string; alt: string }[];
  /** 'landscape' for web/desktop screenshots, default is phone-style portrait */
  orientation?: "portrait" | "landscape";
  placeholderNote?: string;
  confidentialNote?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "sap-sfa",
    title: "SAP Business One — SFA Mobile Application",
    category: "Client Project",
    status: "Completed · Not deployed",
    summary:
      "A field sales mobile app connected to SAP Business One, with the Flutter client, backend API, middleware and a .NET integration bridge built end to end.",
    problem:
      "Field-sales operations such as orders, attendance and expenses needed to flow between a mobile app and SAP Business One. This project connects those two worlds through a mobile client, an API layer and an SAP integration bridge.",
    built: [
      "Flutter mobile application and interface",
      "Backend API development (Node.js / Express)",
      "Middleware layer between the app and SAP",
      ".NET DI API integration bridge for SAP Business One",
      "Data synchronization between the app, databases and SAP",
      "Business workflows for orders, attendance, expenses and related operations",
    ],
    tech: ["Flutter", "Dart", "Node.js", "Express.js", ".NET Framework", "C#", "SAP Business One", "SQL Server", "PostgreSQL", "REST APIs"],
    links: [{ label: "Backend on GitHub", url: "https://github.com/hassnain2275-ship-it/sfa-backend" }],
    images: [
      { src: "/projects/sfa-home.jpg", alt: "SFA app home screen showing field work and planning modules" },
      { src: "/projects/sfa-attendance.jpg", alt: "SFA app attendance screen with check-in and attendance photo upload" },
      { src: "/projects/sfa-sales.jpg", alt: "SFA app sales order entry screen" },
      { src: "/projects/sfa-photos.jpg", alt: "SFA app screen for capturing time- and location-stamped photos" },
    ],
    confidentialNote:
      "Screens are from a demo session with no real customer data. Credentials, customer data and internal records are not shown.",
  },
  {
    id: "shopify-booking",
    title: "Shopify Photo Booth Booking System",
    category: "Client Project",
    status: "Client project",
    summary:
      "A custom booking and reservation experience on Shopify for a photo booth rental business, with date, duration and delivery selection straight to checkout.",
    problem:
      "A rental business needs customers to pick a date, a rental duration and a delivery location, and needs to avoid double bookings, which standard Shopify product pages do not handle on their own.",
    built: [
      "Custom booking experience built in Shopify Liquid and JavaScript",
      "Date and rental-duration selection",
      "Delivery location selection",
      "Dynamic pricing driven by Shopify metafields",
      "Configurable rental durations and time slots",
      "Direct-to-checkout booking flow using the AJAX Cart API",
      "Availability checks through Cloudflare Workers to help prevent double reservations",
    ],
    tech: ["Shopify Liquid", "JavaScript", "Shopify AJAX Cart API", "Shopify Metafields", "Shopify Custom Data", "Cloudflare Workers"],
    links: [{ label: "Watch demo on LinkedIn", url: "https://lnkd.in/p/dc7kwaiX" }],
    images: [],
    placeholderNote: "Demo video available on LinkedIn",
  },
  {
    id: "ai-learning",
    title: "AI-Powered Interactive Learning Platform",
    category: "Academic Project",
    status: "Final Year Project · In development",
    summary:
      "An interactive mobile learning platform that introduces second-grade students to foundational AI literacy through age-appropriate activities.",
    problem:
      "Young children rarely get a gentle, hands-on introduction to what AI is. This project explores simple AI literacy concepts through a child-friendly mobile experience.",
    built: [
      "Direction: simple AI literacy concepts for young children",
      "Direction: interactive learning activities",
      "Direction: child-friendly mobile experience",
      "Direction: Urdu voice interaction features",
      "Early build: \"Robo's AI Path\" with 9 lessons across 4 stages (Meet the AI World, How AI Works, AI Explorer, Safe AI User)",
      "Early build: star-based lesson progress and a friendly robot guide, Robo",
      "Early build: read-aloud voice settings with English / Urdu and speed options",
    ],
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB"],
    links: [],
    orientation: "landscape",
    images: [
      { src: "/projects/fyp-home.jpg", alt: "Robo's AI Path home screen with the Robo guide and Stage 1 lessons" },
      { src: "/projects/fyp-lessons.jpg", alt: "Lesson stages: How AI Works and AI Explorer" },
      { src: "/projects/fyp-voice.jpg", alt: "Robo's voice settings with English and Urdu language options" },
    ],
    placeholderNote: "In development",
    confidentialNote: "Screenshots are from the early in-development build. Features and content may change.",
  },
];

export const otherProjects: {
  title: string;
  category: Category;
  type: string;
  links: { label: string; url: string }[];
}[] = [
  { title: "Real Estate UAE App", category: "Personal Project", type: "Live website", links: [{ label: "Live", url: "https://real-estate-uae-app.vercel.app/" }] },
  { title: "E-Commerce Website", category: "Personal Project", type: "Live website", links: [{ label: "Live", url: "https://next-e-com.vercel.app/" }] },
  { title: "Crime Reporting System", category: "Personal Project", type: "Live website", links: [{ label: "Live", url: "https://crime-reporting-system-one.vercel.app/" }] },
  { title: "Banking App", category: "Personal Project", type: "Source code", links: [{ label: "GitHub", url: "https://github.com/rj-hassnain/Banking-app" }] },
  { title: "Travel App", category: "Personal Project", type: "Source code", links: [{ label: "GitHub", url: "https://github.com/rj-hassnain/Travel-App/tree/main/temp_project" }] },
];

export const experience = [
  {
    org: "Innoletics",
    role: "Chief Operating Officer (COO)",
    period: "Founding team",
    description:
      "Part of the founding team of a developing software company offering digital solutions to businesses. I help build the company and run its operations.",
    tags: ["Web development", "Mobile apps", "AI automation", "Shopify solutions"],
  },
  {
    org: "FlyRank",
    role: "Remote · Accepted / Participating",
    period: "Ongoing",
    description:
      "Currently participating in the program. Learning areas include automation workflows, n8n, Claude-based automation and MCP fundamentals.",
    tags: ["n8n", "Claude-based automation", "MCP fundamentals"],
  },
  {
    org: "GAO Tek",
    role: "Remote experience",
    period: "Approx. 3 months",
    description: "Remote experience with the GAO Tek team.",
    tags: [],
  },
  {
    org: "Digital Empowerment Pakistan",
    role: "Web Developer",
    period: "June – July 2024",
    description:
      "Worked on website development tasks and gained practical MERN-stack experience across frontend and backend work.",
    tags: ["MERN stack", "Frontend", "Backend"],
  },
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "JavaScript", "HTML & CSS", "Tailwind CSS", "Redux", "Vite"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL"] },
  { title: "Mobile", items: ["Flutter", "Dart"] },
  { title: "Enterprise & Integrations", items: ["SAP Business One", ".NET Framework", "C#", "SQL Server", "DI API integration"] },
  { title: "E-Commerce", items: ["Shopify", "Shopify Liquid", "Shopify Metafields", "Shopify AJAX API", "Cloudflare Workers"] },
  { title: "AI & Automation", note: "Currently learning", items: ["n8n", "Claude-based automation", "MCP fundamentals", "AI-assisted workflows"] },
];
