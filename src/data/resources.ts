export type Resource = {
  title: string;
  description: string;
  href: string;
  type: "Guide" | "Tool" | "Organization" | "Reading";
  categorySlugs: string[];
};

export const resources: Resource[] = [
  {
    title: "ADHD self-advocacy checklist",
    description: "A short list of workplace and school accommodations people commonly request — use it as a starting point, not a script.",
    href: "https://www.instagram.com/neurodivergencemeans/",
    type: "Guide",
    categorySlugs: ["adhd", "work-life"],
  },
  {
    title: "Sensory audit for home",
    description: "Walk through light, sound, texture, and smell — note what steadies you and what drains you.",
    href: "https://www.instagram.com/neurodivergencemeans/",
    type: "Tool",
    categorySlugs: ["sensory", "autism"],
  },
  {
    title: "Autistic Self Advocacy Network",
    description: "Community-led advocacy, policy work, and resources written by autistic people.",
    href: "https://autisticadvocacy.org/",
    type: "Organization",
    categorySlugs: ["autism", "language"],
  },
  {
    title: "CHADD — ADHD education",
    description: "Evidence-based ADHD information, local chapters, and support resources.",
    href: "https://chadd.org/",
    type: "Organization",
    categorySlugs: ["adhd"],
  },
  {
    title: "Words that help vs. words that flatten",
    description: "A plain-language glossary for talking about neurodivergence without medicalizing every moment.",
    href: "https://www.instagram.com/neurodivergencemeans/",
    type: "Reading",
    categorySlugs: ["language"],
  },
  {
    title: "Burnout recovery scaffolding",
    description: "Low-demand steps for when capacity is thin: rest, food, one trusted contact, defer decisions.",
    href: "https://www.instagram.com/neurodivergencemeans/",
    type: "Guide",
    categorySlugs: ["work-life", "autism", "adhd"],
  },
];
