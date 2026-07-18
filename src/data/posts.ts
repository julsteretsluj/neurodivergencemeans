export type Post = {
  id: string;
  /** Public Instagram post or reel permalink */
  instagramUrl: string;
  caption: string;
  /** Creator-provided image descriptions, in carousel order */
  altText: string[];
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
    altText: [
      'ID: The slide features a solid, very pale pastel blue background with the word "Introducing" written at the top center in a large, bold, black sans-serif font. Directly underneath is a large, hand-painted infinity symbol decorated with a vibrant rainbow gradient transitioning from deep blue on the left to red-pink on the right, mimicking a textured watercolor or chalk brush effect. Handwritten black text nested inside the loops reads "Neurodivergence" and "M E A N S...", with a tiny artist credit reading @jules.ktoast curved along the upper-right loop. Below this central logo, a block of centered black text reads, "a Neurodivergence Information Account by a White, 16 year old, Level 1, LSN Autistic with ADHD, PDD, and GAD." The slide is anchored at the bottom by a two-column footer displaying account handles: "ND ACCOUNT @neurodivergencemeans" on the left and "MAIN ACCOUNT @jules.ktoast" on the right.',
      'ID: Set against a solid, very pale pastel blue background, this slide is topped with the word "IMPORTANT!" in a very large, bold, black sans-serif header. The core layout features four distinct, centered bullet points, each pairing a large bold declaration with smaller explanatory text enclosed in parentheses. The first point declares "• I am not a professional" and explains that the creator is neurodivergent, took AP Psychology, will fix mistakes, and will provide sources. The second point, "• I am very privileged", outlines advantages like being white, LSN, level 1, and economically stable, while pledging to uplift marginalized creators. The third point states "• Neurodivergence is NOT just ADHD or Autism" and defines it as any biological neurological difference, listing Tourettes, BPD, Schizophrenia, intellectual disabilities, TBI, and genetic-mental conditions. The fourth point reads "• I am a minor", noting openness to engagement but clarifying DM boundaries and demanding explicit consent for re-uploading content. A miniature version of the rainbow infinity symbol sits just above a bottom footer that repeats the account handles: "ND ACCOUNT @neurodivergencemeans" on the left and "MAIN ACCOUNT @jules.ktoast" on the right.',
      'ID: The slide features a solid, very pale pastel blue background with the title "Post Ideas" displayed in large, bold, black text in the upper-left corner. To the right of the title is a stylized graphic of stacked square social media post cards, where the top card features a vibrant, blurry yellow, blue, and pink gradient overlay and tiny gray interface icons along its bottom edge. Below the header is a centered list of five content concepts outlined with bold titles and smaller, parenthetical descriptions. The ideas include: "• What is Neurodivergence?", which aims to define the term and list conditions; "• SERIES: What is [Neurodivergent Condition]?", focusing on specific conditions like Autism, ADHD, BPD, PTSD, Epilepsy, Tourettes, ABI/TBI, and Bipolar; "• SERIES: Comorbidity within Neurodivergence", exploring correlations between conditions; "• SERIES: Myths and Misconceptions", tackling misinformation; and "• BIPOC MSN and HSN Autism Advocates", addressing systemic inequalities and the critical need to amplify middle and high support needs autistics of color. The page concludes with a small rainbow infinity icon centered above the standard bottom footer: "ND ACCOUNT @neurodivergencemeans" on the left and "MAIN ACCOUNT @jules.ktoast" on the right.',
      'ID: The final slide maintains the solid, very pale pastel blue background, featuring a large, bold, black sans-serif header at the top center that reads "Comment!" Centered directly below the title is the large, hand-painted rainbow infinity symbol from the first slide, containing the handwritten text "Neurodivergence M E A N S..." inside its colorful loops and the small @jules.ktoast signature curved along its top-right arch. Beneath this graphic, a block of centered, bold black text prompts the audience by saying, "Tell me what post ideas you’d prefer or give me more ideas for content to produce for this account!" The bottom edge of the slide is finished with the consistent two-column footer format: "ND ACCOUNT @neurodivergencemeans" on the left and "MAIN ACCOUNT @jules.ktoast" on the right.',
    ],
    categorySlugs: [],
    publishedAt: "2026-05-31",
    tone: "amber",
  },
  {
    id: "Dapfz6RE4Lk",
    instagramUrl: "https://www.instagram.com/p/Dapfz6RE4Lk/",
    caption:
      "What is Neurodivergence? Neurodivergence is not a medical condition or a restricting label — it is a sociopolitical term that describes those of us whose brains work differently from the norm.",
    altText: [
      "A light purple slide titled “What is Neurodivergence?” in large black text. Below the title, a bulleted list reads: Defining Neurodivergence, Implications of Neurodivergence, Origins of Neurodivergence, Neurodivergence Umbrella. In the center is a hand-drawn rainbow infinity loop with the words “Neurodivergence MEANS…” written inside and below it. The bottom of the slide lists the handles “@neurodivergencemeans” and “@jules.ktoast”.",
      "A light purple slide with the word “IMPORTANT!” written in massive black font at the top. Below, a series of bullet points outline the creator’s boundaries: “I am not a professional” (stating they are neurodivergent and took AP Psychology), “I am very privileged” (acknowledging their race, support level, and economic stability while aiming to uplift marginalized voices), “Neurodivergence is NOT just ADHD or Autism” (defining it as any biological difference in neurology), and “I am a minor” (stating boundaries around DMs and content sharing). The handles “@neurodivergencemeans” and “@jules.ktoast” are at the bottom.",
      "A light purple slide titled “Definition” in large bold text. It features a quote from the Cleveland Clinic defining neurodivergent as a non-medical term for people whose brains develop or work differently. A bulleted list of “Important points to remember” explains that it is a sociopolitical term, not a disability itself, looks different for everyone, isn’t visible, is neither superior nor inferior, and does not allow people to reclaim slurs. The handles “@neurodivergencemeans” and “@jules.ktoast” are at the bottom.",
      "A light purple slide titled “Implications” in large bold text. It lists bullet points of how neurodivergence can affect individuals, including sensory processing challenges (SPD), involuntary movements (Tourettes), fine-motor challenges (Dysgraphia), and social interaction challenges (ASD). The bottom half features a section titled “Discrimination” discussing the lack of inclusion and suppression of Black, Brown, Indigenous, and Asian (BBIA) individuals within neurodivergent and autistic spaces. The handles “@neurodivergencemeans” and “@jules.ktoast” are at the bottom.",
      "A light purple slide titled “Origins” in large bold text. The text explains that the term “neurodivergence” was coined by Kassiane Asasumasu in the late 1990s as a generalization for people whose cognitive functioning diverges from societal norms, whether from birth or acquired later via trauma or long covid. It also notes that the first collective conceptualization is linked to the Independent Living on the Autistic Spectrum mailing list in the mid 1990s, citing Botha et al. The handles “@neurodivergencemeans” and “@jules.ktoast” are at the bottom.",
      "A light purple slide with the word “Comment!” written in large bold letters at the top. The rainbow infinity loop graphic from the first slide sits in the center. Below the graphic, text reads: “Tell me what post ideas you’d prefer or give me more ideas for content to produce for this account!”. The handles “@neurodivergencemeans” and “@jules.ktoast” are at the bottom.",
    ],
    categorySlugs: [],
    publishedAt: "2026-07-12",
    tone: "moss",
  },
];

export function postsByCategory(slug: string): Post[] {
  return posts.filter((post) => post.categorySlugs.includes(slug));
}
