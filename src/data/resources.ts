export type ResourceLink = {
  title: string;
  description: string;
  href: string;
  type: "Organization" | "Guide" | "Helpline" | "Reading" | "Tool";
  region?: string;
};

export type ResourcePage = {
  slug: string;
  title: string;
  /** Short label used in lists and navigation */
  shortTitle: string;
  intro: string;
  note?: string;
  links: ResourceLink[];
};

export const resourcePages: ResourcePage[] = [
  {
    slug: "abi-tbi-diagnosis",
    title: "ABI/TBI Diagnosis Resources",
    shortTitle: "ABI/TBI Diagnosis",
    intro:
      "Acquired Brain Injury (ABI) covers any brain injury that happens after birth — including stroke, infection, tumors, and hypoxia. Traumatic Brain Injury (TBI) is a type of ABI caused by an external force, like a fall, crash, or blow to the head. These resources can help you understand how ABI/TBI is diagnosed and where to find support.",
    note: "If you think you or someone you know may have a brain injury, including a concussion, contact a medical professional as soon as possible. This page is informational and not a substitute for medical care.",
    links: [
      {
        title: "Brain Injury Association of America — Diagnosing TBI",
        description:
          "Overview of how TBI is diagnosed, its possible effects, and the newer CBI-M framework (Clinical, Biomarker, Imaging, Modifier) that goes beyond “mild/moderate/severe” labels.",
        href: "https://biausa.org/types-of-brain-injury/traumatic-brain-injury",
        type: "Organization",
        region: "United States",
      },
      {
        title: "National Brain Injury Information Center (BIAA helpline)",
        description:
          "Call 1-800-444-6443 or email braininjuryinfo@biausa.org to speak with a specialist about diagnosis questions, local referrals, and support services.",
        href: "https://biausa.org/",
        type: "Helpline",
        region: "United States",
      },
      {
        title: "NINDS — Traumatic Brain Injury information page",
        description:
          "The National Institute of Neurological Disorders and Stroke's plain-language reference on TBI symptoms, medical tests, and research.",
        href: "https://www.ninds.nih.gov/health-information/disorders/traumatic-brain-injury-tbi",
        type: "Reading",
        region: "United States",
      },
      {
        title: "NINDS — The CBI-M classification framework",
        description:
          "How researchers are replacing the mild/moderate/severe scale with clinical tests, blood biomarkers, brain imaging, and individual modifiers for more accurate diagnosis.",
        href: "https://www.ninds.nih.gov/news-events/directors-messages/all-directors-messages/new-framework-classifying-traumatic-brain-injury-tbi-could-transform-patient-care",
        type: "Reading",
        region: "United States",
      },
      {
        title: "CDC — Traumatic Brain Injury & Concussion",
        description:
          "Public-health guidance on recognizing TBI and concussion symptoms, when to seek emergency care, and recovery basics.",
        href: "https://www.cdc.gov/traumatic-brain-injury/",
        type: "Guide",
        region: "United States",
      },
      {
        title: "Headway — the brain injury association",
        description:
          "UK charity supporting people affected by ABI, with information on diagnosis, effects of brain injury, rehabilitation, and a nurse-led helpline.",
        href: "https://www.headway.org.uk/",
        type: "Organization",
        region: "United Kingdom",
      },
      {
        title: "Synapse — Australia's Brain Injury Organisation",
        description:
          "Information and support services for people with ABI/TBI in Australia, including fact sheets on assessment and diagnosis.",
        href: "https://synapse.org.au/",
        type: "Organization",
        region: "Australia",
      },
      {
        title: "MSKTC — TBI Model Systems factsheets",
        description:
          "Plain-language, research-based factsheets on understanding TBI, common effects, and what to expect after diagnosis.",
        href: "https://msktc.org/tbi",
        type: "Guide",
        region: "United States",
      },
    ],
  },
];

export function getResourcePage(slug: string): ResourcePage | undefined {
  return resourcePages.find((page) => page.slug === slug);
}
