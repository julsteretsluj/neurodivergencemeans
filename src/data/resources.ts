export type Resource = {
  title: string;
  description: string;
  href: string;
  type: "Guide" | "Tool" | "Organization" | "Reading";
  categorySlugs: string[];
};

export const resources: Resource[] = [];
