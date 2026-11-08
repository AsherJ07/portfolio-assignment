export type IllustrationType = "diagnostics" | "creator" | "research";

type ProjectMedia =
  | {
      kind: "illustration";
      type: IllustrationType;
      caption: string;
    }
  | {
      kind: "screenshot";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
    };

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  result: string;
  technologies: readonly string[];
  evidence: readonly { value: string; label: string }[];
  visual: ProjectMedia;
  link?: { href: string; label: string };
};

export type SkillGroup = {
  title: string;
  description: string;
  items: readonly { name: string; context: string }[];
};

export const featuredProjects: readonly Project[] = [
  {
    slug: "warp-diagnostic-analysis",
    eyebrow: "Product management · Applied AI",
    title: "Turning fragmented diagnostics into a faster first answer",
    summary:
      "A product-led effort to automate analysis across complex WARP diagnostic data and help support teams begin investigations with stronger evidence.",
    problem:
      "Customer escalations required investigators to interpret more than 90 log and configuration files, while historical cases took about 18 days to resolve on average.",
    contribution:
      "Owned requirements, customer interviews, competitive research, success metrics, and rollout. Developed and evaluated an AI diagnosis system against historical escalations.",
    result:
      "Reached 76% root-cause accuracy across 232 historical escalations and shipped as an internal Cloudflare support tool serving roughly 270 WARP cases per month.",
    technologies: ["Product requirements", "Customer discovery", "AI evaluation", "WARP"],
    evidence: [
      { value: "232", label: "historical escalations evaluated" },
      { value: "76%", label: "root-cause accuracy" },
      { value: "~270", label: "cases served monthly" },
    ],
    visual: {
      kind: "illustration",
      type: "diagnostics",
      caption: "Original illustrative visual—not a product screenshot.",
    },
  },
  {
    slug: "creator-intelligence-platform",
    eyebrow: "Data science · Product analytics",
    title: "Finding useful creator signals in a crowded content landscape",
    summary:
      "A creator-intelligence platform that transformed large-scale video data into focused, personalized content recommendations.",
    problem:
      "Creator teams needed a structured way to understand topics, outliers, and opportunity patterns across a large and fast-moving content ecosystem.",
    contribution:
      "Led development of the analysis workflow, combining topic modeling, Gemini, and custom outlier scoring, then translated the results into a production-ready Streamlit experience.",
    result:
      "Analyzed more than 30,000 videos across 500-plus YouTube channels and presented recommendation insights biweekly to Google partners and Purdue faculty.",
    technologies: ["Python", "BERTopic", "Gemini", "Streamlit"],
    evidence: [
      { value: "30K+", label: "videos analyzed" },
      { value: "500+", label: "channels represented" },
      { value: "Biweekly", label: "partner insight reviews" },
    ],
    visual: {
      kind: "screenshot",
      src: "/images/projects/creator-intelligence-platform.png",
      width: 1800,
      height: 913,
      alt: "YouTube Creator Insights benchmarking interface with category, channel, and publication filters plus summary metrics for videos, channels, views, median views, and public interaction.",
    },
    link: {
      href: "https://github.com/AsherJ07/purdue-youtube-ip-new",
      label: "View project repository",
    },
  },
  {
    slug: "multilingual-fact-checking",
    eyebrow: "AI research · Data engineering",
    title: "Testing what confidence really means across languages and models",
    summary:
      "A multilingual fact-checking study designed to examine model generalization, robustness, bias, and the gap between confidence and accuracy.",
    problem:
      "AI fact-checking performance can look convincing while varying across model size, prompting strategy, language, and region.",
    contribution:
      "Led the data-handling team, built a Python ETL pipeline for real-world claims, and benchmarked four prompting strategies across GPT-4, LLaMA, Mistral, and Mixtral.",
    result:
      "Curated more than 300,000 claims, surfaced a measurable confidence-accuracy trade-off, and co-authored the resulting peer-reviewed Scientific Reports paper.",
    technologies: ["Python", "ETL", "LLM evaluation", "Google Fact Check API"],
    evidence: [
      { value: "300K+", label: "claims curated" },
      { value: "4", label: "prompting strategies" },
      { value: "4", label: "model families compared" },
    ],
    visual: {
      kind: "illustration",
      type: "research",
      caption: "Original illustrative visual—not a product screenshot.",
    },
  },
  {
    slug: "ai-fashion-trend-radar",
    eyebrow: "AI agents · Trend intelligence",
    title: "Turning fragmented fashion signals into a structured trend brief",
    summary:
      "An agent workflow that organizes signals from TikTok, Google Trends, and Pinterest into a repeatable view of momentum, saturation, and emerging fashion themes.",
    problem:
      "Fashion signals are distributed across platforms and move at different speeds, making it difficult to compare whether a term is accelerating, saturated, or worth investigating further.",
    contribution:
      "Designed a visual workflow that parses category, region, timeframe, and brand inputs; generates a taxonomy; iterates through search terms; evaluates platform signals; and aggregates the findings into a report.",
    result:
      "Produced an end-to-end report pipeline that makes the signal-gathering logic inspectable and repeatable. Current evidence demonstrates the working workflow, not a validated commercial outcome.",
    technologies: ["AI agents", "TikTok signals", "Google Trends", "GPT-4o"],
    evidence: [
      { value: "3", label: "trend signal sources modeled" },
      { value: "Multi-stage", label: "agent workflow" },
      { value: "Report", label: "structured final output" },
    ],
    visual: {
      kind: "screenshot",
      src: "/images/projects/ai-fashion-trend-radar.png",
      width: 1646,
      height: 380,
      alt: "AI Fashion Trend Radar workflow connecting input parsing, taxonomy generation, term extraction, TikTok and Google Trends analysis, trend comparison, aggregation, and report generation.",
    },
  },
];

export const skillGroups = [
  {
    title: "Product craft",
    description: "Used to move from ambiguity to a decision teams can build around.",
    items: [
      { name: "Product requirements", context: "Owned in a production internship" },
      { name: "Customer discovery", context: "Used to define scope and rollout" },
      { name: "Success metrics", context: "Defined for AI product evaluation" },
      { name: "Experimentation", context: "Applied in targeting and model studies" },
    ],
  },
  {
    title: "Data & AI",
    description: "Applied across production, research, coursework, and shipped projects.",
    items: [
      { name: "Python", context: "Production, research, and graduate work" },
      { name: "SQL & BigQuery", context: "Analytics and market-expansion projects" },
      { name: "LLM evaluation", context: "Peer-reviewed and product contexts" },
      { name: "Machine learning", context: "Modeling, classification, and prediction" },
    ],
  },
  {
    title: "Delivery & communication",
    description: "The connective work that turns analysis into shared action.",
    items: [
      { name: "Cross-functional leadership", context: "Product, research, and team settings" },
      { name: "Data storytelling", context: "Executive and partner-facing presentations" },
      { name: "Technical prototyping", context: "Streamlit, React Native, and AI agents" },
      { name: "Teaching & mentorship", context: "Supported 160+ university students" },
    ],
  },
] as const satisfies readonly SkillGroup[];

export const experience = [
  {
    organization: "Cloudflare",
    role: "Product Management Intern",
    period: "May – August 2026",
  },
  {
    organization: "Google Industry Practicum",
    role: "Data Scientist",
    period: "January – May 2026",
  },
  {
    organization: "Softaims",
    role: "Data Analyst",
    period: "July 2024 – July 2025",
  },
  {
    organization: "CSaLT Lab, LUMS",
    role: "Data Handling Team Lead",
    period: "June 2023 – October 2024",
  },
] as const;

export const education = [
  {
    school: "Purdue University",
    degree: "MS, Business Analytics & Information Management",
    detail: "Expected December 2026 · 4.0/4.0 GPA",
  },
  {
    school: "Lahore University of Management Sciences",
    degree: "BS, Computer Science",
    detail: "High Distinction · 3.9/4.0 GPA · June 2024",
  },
] as const;
