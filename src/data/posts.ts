export type Post = {
  id: string;
  /** Instagram post or reel URL — replace with real permalinks from your account */
  instagramUrl: string;
  caption: string;
  categorySlugs: string[];
  publishedAt: string;
  /** Soft visual cue used until live Instagram embeds load */
  tone: "sage" | "amber" | "sky" | "clay" | "moss";
};

/**
 * Curated feed shown on the site.
 * Swap each `instagramUrl` for a real post from @neurodivergencemeans —
 * the homepage embeds them with Instagram’s official embed script.
 */
export const posts: Post[] = [
  {
    id: "1",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "Neurodivergence means your nervous system may need different recovery time after social effort — not that you “failed” at being present.",
    categorySlugs: ["autism", "sensory", "language"],
    publishedAt: "2026-07-12",
    tone: "sage",
  },
  {
    id: "2",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "ADHD can mean knowing exactly what to do and still watching the start line move further away. That’s friction, not laziness.",
    categorySlugs: ["adhd", "work-life"],
    publishedAt: "2026-07-08",
    tone: "amber",
  },
  {
    id: "3",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "Sensory overload isn’t drama. It’s your body reporting that the room has too many simultaneous inputs.",
    categorySlugs: ["sensory", "autism"],
    publishedAt: "2026-07-03",
    tone: "sky",
  },
  {
    id: "4",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "“High functioning” often just means people can’t see the cost. Functioning is not a personality trait.",
    categorySlugs: ["language", "autism", "adhd"],
    publishedAt: "2026-06-28",
    tone: "clay",
  },
  {
    id: "5",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "A good routine isn’t rigid perfection. It’s a soft rail you can grab when executive function dips.",
    categorySlugs: ["adhd", "work-life"],
    publishedAt: "2026-06-22",
    tone: "moss",
  },
  {
    id: "6",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "Special interests aren’t “too much.” They’re a reliable way some brains learn, regulate, and connect.",
    categorySlugs: ["autism", "language"],
    publishedAt: "2026-06-16",
    tone: "sage",
  },
  {
    id: "7",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "Masking can look like competence from the outside and exhaustion from the inside. Both can be true.",
    categorySlugs: ["autism", "work-life", "language"],
    publishedAt: "2026-06-10",
    tone: "amber",
  },
  {
    id: "8",
    instagramUrl: "https://www.instagram.com/neurodivergencemeans/",
    caption: "Time blindness isn’t a calendar problem alone — it’s how urgency, interest, and body cues interact.",
    categorySlugs: ["adhd", "work-life"],
    publishedAt: "2026-06-04",
    tone: "sky",
  },
];

export function postsByCategory(slug: string): Post[] {
  return posts.filter((post) => post.categorySlugs.includes(slug));
}
