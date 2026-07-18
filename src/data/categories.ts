export type Category = {
  slug: string;
  title: string;
  summary: string;
  accent: string;
};

export const categories: Category[] = [];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
