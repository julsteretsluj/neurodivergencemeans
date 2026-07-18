export type Category = {
  slug: string;
  title: string;
  summary: string;
  accent: string;
};

export const categories: Category[] = [
  {
    slug: "adhd",
    title: "ADHD",
    summary: "Attention, time, energy, and the systems that help (or hinder) daily life.",
    accent: "#e8a54b",
  },
  {
    slug: "autism",
    title: "Autism",
    summary: "Sensory worlds, social scripts, special interests, and communication styles.",
    accent: "#4f8f7a",
  },
  {
    slug: "sensory",
    title: "Sensory",
    summary: "Overload, seeking, shutdowns, and designing environments that feel safer.",
    accent: "#6b8cae",
  },
  {
    slug: "language",
    title: "Language & Identity",
    summary: "Words that clarify experience — and ones that flatten it.",
    accent: "#c46b5a",
  },
  {
    slug: "work-life",
    title: "Work & Life",
    summary: "Jobs, routines, burnout, and building days that match how brains actually work.",
    accent: "#2f6f62",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
