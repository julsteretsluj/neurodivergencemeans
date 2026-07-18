export type ResourceLink = {
  title: string;
  description: string;
  href: string;
  type: "Organization" | "Guide" | "Helpline" | "Reading" | "Tool";
  region: string;
  country: string;
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
    title: "🧠 ABI/TBI Diagnosis Resources",
    shortTitle: "ABI/TBI Diagnosis",
    intro:
      "🧠 Acquired Brain Injury (ABI) covers any brain injury that happens after birth — including stroke, infection, tumors, and hypoxia. Traumatic Brain Injury (TBI) is a type of ABI caused by an external force, like a fall, crash, or blow to the head. These resources can help you understand how ABI/TBI is diagnosed and where to find support.",
    note: "⚠️ If you think you or someone you know may have a brain injury, including a concussion, contact a medical professional as soon as possible. This page is informational and not a substitute for medical care.",
    links: [
      {
        title: "Brain Injury Association of America (BIAA)",
        description:
          "Local resource maps for finding diagnostic centers and neuro-rehabilitation clinics. National Helpline: 1-800-444-6443.",
        href: "https://biausa.org/",
        type: "Helpline",
        region: "🌎 North America & The Caribbean",
        country: "🇺🇸 United States",
      },
      {
        title: "BrainLine",
        description:
          "Medical expert-written articles, video guides, and symptom checklists outlining clinical diagnosis criteria.",
        href: "https://www.brainline.org/",
        type: "Guide",
        region: "🌎 North America & The Caribbean",
        country: "🇺🇸 United States",
      },
      {
        title: "Brain Injury Canada",
        description:
          "A national portal explaining clinical testing for mild traumatic brain injuries, including concussions, and severe acquired brain injuries.",
        href: "https://braininjurycanada.ca/",
        type: "Organization",
        region: "🌎 North America & The Caribbean",
        country: "🇨🇦 Canada",
      },
      {
        title: "BC Medical Journal — Education, support services, and community resources for patients with mild TBI",
        description:
          "A clinical guide detailing the multidisciplinary team involved in formal cognitive diagnosis and follow-up care.",
        href: "https://bcmj.org/",
        type: "Reading",
        region: "🌎 North America & The Caribbean",
        country: "🇨🇦 Canada",
      },
      {
        title: "CENETEC — Manejo inicial del traumatismo craneoencefálico en el adulto",
        description:
          "Mexico's official clinical practice guidance for medical personnel diagnosing and initially managing adult head trauma.",
        href: "https://www.gob.mx/salud/cenetec",
        type: "Guide",
        region: "🌎 North America & The Caribbean",
        country: "🇲🇽 Mexico",
      },
      {
        title: "Revista de la Asociación Mexicana de Medicina Crítica y Terapia Intensiva",
        description:
          "Diagnostic articles covering pediatric and adult intracranial-pressure testing protocols and critical care.",
        href: "https://www.medigraphic.com/cgi-bin/new/publicaciones.cgi?IDREVISTA=8",
        type: "Reading",
        region: "🌎 North America & The Caribbean",
        country: "🇲🇽 Mexico",
      },
      {
        title: "Sociedade Brasileira de Neurocirurgia (SBN)",
        description:
          "Brazil's leading medical authority for neuro-trauma diagnostic standards and directories of accredited neurological specialists.",
        href: "https://sbn.com.br/",
        type: "Organization",
        region: "🌎 Central & South America",
        country: "🇧🇷 Brazil",
      },
      {
        title: "Epidemiologia do traumatismo cranioencefálico no Brasil",
        description:
          "A research review of hospital intake metrics, CT and MRI imaging data, and diagnostic challenges across Brazil's public health sectors.",
        href: "https://search.scielo.org/?q=Epidemiologia+do+traumatismo+cranioencefalico+no+Brasil",
        type: "Reading",
        region: "🌎 Central & South America",
        country: "🇧🇷 Brazil",
      },
      {
        title: "Fundación INECO",
        description:
          "A specialist institute for cognitive neurology and human neuroscience providing diagnostic neuropsychological evaluations after acquired brain injury.",
        href: "https://www.fundacionineco.org/",
        type: "Organization",
        region: "🌎 Central & South America",
        country: "🇦🇷 Argentina",
      },
      {
        title: "Asociación Neuropsiquiátrica Argentina (ANA)",
        description:
          "Clinical guidance and clinician networks for evaluating secondary cognitive deficits following brain injury.",
        href: "https://ana.org.ar/",
        type: "Organization",
        region: "🌎 Central & South America",
        country: "🇦🇷 Argentina",
      },
      {
        title: "Asociación Colombiana de Neurología (ACN)",
        description:
          "Public information, clinical consensus documents, and patient-family referral directories for neuro-trauma injuries.",
        href: "https://acnweb.org/",
        type: "Organization",
        region: "🌎 Central & South America",
        country: "🇨🇴 Colombia",
      },
      {
        title: "Traumatismo craneoencefálico grave — Ciencia Latina",
        description:
          "A medical study of emergency diagnostic criteria, including the vital “golden hour” clinical-assessment framework.",
        href: "https://ciencialatina.org/",
        type: "Reading",
        region: "🌎 Central & South America",
        country: "🇨🇴 Colombia",
      },
      {
        title: "Headway — The Brain Injury Association",
        description:
          "Downloadable factsheets for navigating NHS clinical pathways. Helpline: 0808 800 2244.",
        href: "https://www.headway.org.uk/",
        type: "Helpline",
        region: "🌍 Europe & The United Kingdom",
        country: "🇬🇧 United Kingdom",
      },
      {
        title: "NHS — Severe head injury guide",
        description:
          "Public guidance detailing the imaging methods, including CT and MRI, and Glasgow Coma Scale rules used in hospital diagnosis.",
        href: "https://www.nhs.uk/conditions/severe-head-injury/",
        type: "Guide",
        region: "🌍 Europe & The United Kingdom",
        country: "🇬🇧 United Kingdom",
      },
      {
        title: "Acquired Brain Injury Ireland",
        description:
          "Localized help navigating clinical and neuropsychological diagnostic pathways. Contact: +353 1 280 4164.",
        href: "https://www.abiireland.ie/",
        type: "Organization",
        region: "🌍 Europe & The United Kingdom",
        country: "🇮🇪 Ireland",
      },
      {
        title: "Headway Ireland",
        description:
          "A free support line helping callers connect with Health Service Executive medical teams. Helpline: 1800 400 478.",
        href: "https://headway.ie/",
        type: "Helpline",
        region: "🌍 Europe & The United Kingdom",
        country: "🇮🇪 Ireland",
      },
      {
        title: "ZNS — Hannelore Kohl Stiftung",
        description:
          "Regional neuro-rehabilitation clinic referrals and specialized diagnostic counseling. Helpline: 0228 978450.",
        href: "https://www.zns-stiftung.de/",
        type: "Helpline",
        region: "🌍 Europe & The United Kingdom",
        country: "🇩🇪 Germany",
      },
      {
        title: "BDH Bundesverband Rehabilitation",
        description:
          "Clinical orientation materials, diagnostic support, and institutional networking for neurological disorders.",
        href: "https://www.bdh-reha.de/",
        type: "Organization",
        region: "🌍 Europe & The United Kingdom",
        country: "🇩🇪 Germany",
      },
      {
        title: "UNAFTC / AFTC Île-de-France Paris",
        description:
          "A regional family network offering advice on navigating formal diagnostic assessments after head injury. Contact: 01 40 44 43 94.",
        href: "https://www.aftcidfparis.org/",
        type: "Helpline",
        region: "🌍 Europe & The United Kingdom",
        country: "🇫🇷 France",
      },
      {
        title: "ONISEP public directory",
        description:
          "Contact details, institutional mapping, and care services for people managing an acquired cerebral lesion (lésion cérébrale acquise).",
        href: "https://www.onisep.fr/",
        type: "Guide",
        region: "🌍 Europe & The United Kingdom",
        country: "🇫🇷 France",
      },
      {
        title: "Brain Injury Australia",
        description:
          "Guidance on establishing clinical diagnostic evidence for the National Disability Insurance Scheme. Helpline: 1800 BRAIN1 (1800 272 461).",
        href: "https://www.braininjuryaustralia.org.au/",
        type: "Helpline",
        region: "🌏 Oceania",
        country: "🇦🇺 Australia",
      },
      {
        title: "Synapse — Australia's Brain Injury Organisation",
        description:
          "An educational series explaining how specialists assess physical and cognitive deficits. Helpline: 1800 673 074.",
        href: "https://synapse.org.au/",
        type: "Helpline",
        region: "🌏 Oceania",
        country: "🇦🇺 Australia",
      },
      {
        title: "Brain Injury New Zealand (BIANZ)",
        description:
          "Regional associations and local Liaison Officers who guide patients through medical testing pathways.",
        href: "https://brain-injury.nz/",
        type: "Organization",
        region: "🌏 Oceania",
        country: "🇳🇿 New Zealand",
      },
      {
        title: "ACC — Concussion Services",
        description:
          "Clinical assessment criteria and funded placement in authorized regional concussion diagnostic clinics.",
        href: "https://www.acc.co.nz/",
        type: "Guide",
        region: "🌏 Oceania",
        country: "🇳🇿 New Zealand",
      },
      {
        title: "NIMHANS — Neurotrauma care",
        description:
          "India's leading public apex center for neuro-trauma care, advanced neuropsychological evaluation, and imaging diagnosis.",
        href: "https://nimhans.ac.in/",
        type: "Organization",
        region: "🌏 Asia",
        country: "🇮🇳 India",
      },
      {
        title: "PACE Hospitals — Traumatic Brain Injury treatment guide",
        description:
          "An online clinical overview of emergency-department triage, CT scanning rules, and long-term cognitive-care assessment in India.",
        href: "https://www.pacehospital.com/traumatic-brain-injury-tbi-treatment",
        type: "Reading",
        region: "🌏 Asia",
        country: "🇮🇳 India",
      },
      {
        title: "Japan Society of Neurotraumatology",
        description:
          "National protocols, severe-TBI management guidelines, and credentialing information for neurological specialists.",
        href: "https://www.jsnt.jp/",
        type: "Organization",
        region: "🌏 Asia",
        country: "🇯🇵 Japan",
      },
      {
        title: "Current Status of Neurocritical Care for Traumatic Brain Injury in Japan",
        description:
          "A peer-reviewed account of the Japan Neurotrauma Data Bank and localized hospital diagnostic practices.",
        href: "https://thejns.org/",
        type: "Reading",
        region: "🌏 Asia",
        country: "🇯🇵 Japan",
      },
      {
        title: "Singapore National Stroke Association (SNSA)",
        description:
          "Support and guidance for connecting with public-hospital acute neurology and community neuro-rehabilitation programs.",
        href: "https://snsa.org.sg/",
        type: "Organization",
        region: "🌏 Asia",
        country: "🇸🇬 Singapore",
      },
      {
        title: "Singapore capacity and work-injury documentation frameworks",
        description:
          "Official legal frameworks covering capacity assessments and the medical documentation needed to establish a brain injury.",
        href: "https://sso.agc.gov.sg/Act/MCA2008",
        type: "Guide",
        region: "🌏 Asia",
        country: "🇸🇬 Singapore",
      },
      {
        title: "Headway Gauteng",
        description:
          "Counselor-guided resource mapping to neurology testing clinics in public and private health sectors. Contact: +27 11 442 5733.",
        href: "https://headwaygauteng.co.za/",
        type: "Helpline",
        region: "🌍 Africa & The Middle East",
        country: "🇿🇦 South Africa",
      },
      {
        title: "SAMJ — Guidelines for the Management of Traumatic Brain Injury",
        description:
          "Emergency triage and CT-evaluation guidance for traumatic brain injury across South African hospitals.",
        href: "https://samajournals.co.za/index.php/samj",
        type: "Reading",
        region: "🌍 Africa & The Middle East",
        country: "🇿🇦 South Africa",
      },
      {
        title: "Egyptian Society of Neurology, Psychiatry and Neurosurgery (ESNPN)",
        description:
          "Clinical research and a professional network for finding specialists qualified to provide neuroimaging diagnosis.",
        href: "https://esnpn.eg.net/",
        type: "Organization",
        region: "🌍 Africa & The Middle East",
        country: "🇪🇬 Egypt",
      },
      {
        title: "Egyptian Journal of Neurosurgery",
        description:
          "Open-access research on local diagnostic criteria for skull fractures, traumatic hemorrhages, and related injuries.",
        href: "https://ejns.springeropen.com/",
        type: "Reading",
        region: "🌍 Africa & The Middle East",
        country: "🇪🇬 Egypt",
      },
      {
        title: "Neurological Society of Kenya (NSK)",
        description:
          "A professional network for finding neuro-specialists and hospitals equipped with functional CT and MRI diagnostics.",
        href: "https://nsk.or.ke/",
        type: "Organization",
        region: "🌍 Africa & The Middle East",
        country: "🇰🇪 Kenya",
      },
      {
        title: "African Journal of Neurological Sciences (AJNS)",
        description:
          "Case studies documenting triage, neuro-imaging constraints, and clinical-assessment parameters across sub-Saharan clinics.",
        href: "https://ajns.paans.org/",
        type: "Reading",
        region: "🌍 Africa & The Middle East",
        country: "🇰🇪 Kenya",
      },
      {
        title: "International Brain Injury Association (IBIA)",
        description:
          "A worldwide umbrella network connecting medical professionals, clinical advocates, consumers, and country-specific brain-injury associations.",
        href: "https://www.internationalbrain.org/",
        type: "Organization",
        region: "🌐 Global Finders",
        country: "🌐 Worldwide",
      },
      {
        title: "World Federation for NeuroRehabilitation (WFNR)",
        description:
          "An international network of regional societies supporting neurological diagnostic standards, research, and post-acute care.",
        href: "https://www.wfnr.co.uk/",
        type: "Organization",
        region: "🌐 Global Finders",
        country: "🌐 Worldwide",
      },
    ],
  },
];

export function getResourcePage(slug: string): ResourcePage | undefined {
  return resourcePages.find((page) => page.slug === slug);
}
