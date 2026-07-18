export type Post = {
  id: string;
  /** Public Instagram post or reel permalink */
  instagramUrl: string;
  caption: string;
  categorySlugs: string[];
  publishedAt: string;
  /** Soft visual cue used if an Instagram embed cannot load */
  tone: "sage" | "amber" | "sky" | "clay" | "moss";
};

/**
 * Public posts from @neurodivergencemeans.
 * The site renders these with Instagram's official embed script.
 */
export const posts: Post[] = [
  {
    id: "DZCEB7hk4j1",
    instagramUrl: "https://www.instagram.com/p/DZCEB7hk4j1/",
    caption:
      "Introducing Neurodivergence Means — a safe, informative, and inclusive space dedicated to breaking down what neurodivergence truly means, beyond the common talking points.",
    categorySlugs: ["autism", "adhd", "language"],
    publishedAt: "2026-05-31",
    tone: "amber",
  },
  {
    id: "Dapfz6RE4Lk",
    instagramUrl: "https://www.instagram.com/p/Dapfz6RE4Lk/",
    caption:
      "What is Neurodivergence? Neurodivergence is not a medical condition or a restricting label — it is a sociopolitical term that describes those of us whose brains work differently from the norm.",
    categorySlugs: ["language", "autism", "adhd"],
    publishedAt: "2026-07-12",
    tone: "moss",
  },
];

export function postsByCategory(slug: string): Post[] {
  return posts.filter((post) => post.categorySlugs.includes(slug));
}
