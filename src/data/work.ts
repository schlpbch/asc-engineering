export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  href: string;
}

export const experience: Role[] = [
  {
    title: 'AI/ML Initiative Lead, Passenger Division',
    company: 'SBB',
    location: 'Bern, Switzerland',
    period: 'Dec 2025 – Present',
    bullets: [
      `Conceived, designed and implemented an ecosystem of 10+ domain-expert AI agents (trip planning, booking, weather, events, hotels) using MCP protocols and intelligent federation over dynamically discovered schema relationships.`,
      'Formalized operationalizing an agent ecosystem at scale: 1,000+ tool-to-tool dependencies managed deterministically, failure modes recoverable without human intervention.',
      `Rolled out Spec-Driven Development (SDD) to 25+ teams across Java/Spring, Next.js/Angular, iOS/Android, SAP, Snowflake and ServiceNow stacks.`,
      `Operationalizing AWS Bedrock for mission-critical use; member of SBB's AI/ML Centre of Competence.`,
    ],
  },
  {
    title: 'Lead System Architect for SBB.ch',
    company: 'SBB',
    location: 'Bern, Switzerland',
    period: 'Mar 2021 – Feb 2025',
    bullets: [
      `Designed and built the next generation of SBB's web presence, one of the three most visited sites in Switzerland.`,
      'Staffed and led three feature teams, one platform team and one design system team.',
      `Established a headless frontend stack (React/Next.js, Web Components) with cloud-edge infrastructure (AWS CloudFront, Lambda, WAF, Shield).`,
      `Consolidated frontend APIs from Adobe AEM, Adobe Commerce, SAP Sales Cloud, and ServiceNow into an enterprise GraphQL graph.`,
    ],
  },
  {
    title: 'OSDM API — Tech Lead & Product Owner',
    company: 'SBB / International',
    location: 'Switzerland',
    period: 'Jan 2016 – Present',
    bullets: [
      `Technical lead and Product Owner of the Open Sales and Distribution Model (OSDM), an international API standard for rail ticket distribution.`,
      `Standard adopted by all major European railways (DB, SNCF, Trenitalia, ÖBB) and leading global distribution systems (Amadeus, Sqills, Trainline, Sabre).`,
      'Built and grew an open-source community of technical experts across Europe.',
    ],
  },
  {
    title: 'Senior Enterprise Architect, Passenger Division',
    company: 'SBB',
    location: 'Bern, Switzerland',
    period: 'Oct 2017 – Present',
    bullets: [
      'Drove high-level architecture for myRIDE and the next-generation reservation system for Swiss public transportation.',
      `Initiated and conceptualised SBB's Swiss Mobility APIs and SAP Hybris Billing back-office covering accounting, billing, invoicing, and payment reconciliation.`,
      `Initiated and designed SBB's voice bot using Google Dialogflow and WeChat/AliPay apps for the Asian market.`,
    ],
  },
  {
    title: 'Senior Software Architect & Deputy Chief Architect',
    company: 'SBB',
    location: 'Bern, Switzerland',
    period: 'Apr 2013 – Dec 2018',
    bullets: [
      `Led architecture for SBB's omni-channel distribution renewal — 110+ FTEs across 12 distributed teams using a microservice approach.`,
      `Mapped business capabilities to application, data, and infrastructure architecture using a DDD-driven approach.`,
      'Organisational lead of 4 software architects and 5 developers; successful delivery.',
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C/C++'],
  Architecture: [
    'Microservices',
    'Event-Driven',
    'SOA',
    'GraphQL',
    'REST',
    'CQRS',
  ],
  Frontend: ['React', 'Next.js', 'Web Components', 'Astro', 'CSS'],
  Infrastructure: ['AWS', 'Docker', 'Kubernetes', 'OpenShift', 'Terraform'],
  'AI / ML': ['LLM Agents', 'MCP', 'AWS Bedrock', 'Google Dialogflow', 'RAG'],
  Process: ['SAFe', 'Scrum', 'Spec-Driven Dev', 'TOGAF'],
};

export const projects: Project[] = [
  {
    name: 'OSDM — Open Rail API Standard',
    description:
      'International open-source API standard for rail ticket distribution, now adopted by all major European railways and global distribution systems.',
    tech: ['OpenAPI', 'REST', 'Railway Standards', 'Open Source'],
    href: 'https://github.com/UnionInternationalCheminsdeFer/OSDM',
  },
  {
    name: 'SBB MCP Agent Ecosystem',
    description:
      'Ecosystem of 10+ domain-expert AI agents (trip planning, booking, weather, events) coordinated via MCP protocols with 1,000+ tool dependencies.',
    tech: ['MCP', 'TypeScript', 'AWS Bedrock', 'LLM Agents'],
    href: 'https://modelcontextprotocol.io/',
  },
  {
    name: 'khtml / WebKit Contributions',
    description:
      'Open-source contributions to the KDE HTML rendering engine (khtml), including substantial work on the CSS parser — now the foundation of WebKit, which powers Safari.',
    tech: ['C++', 'CSS Parser', 'KDE', 'Open Source'],
    href: 'https://webkit.org',
  },
  {
    name: 'SBB.ch Headless Rebuild',
    description:
      "Next-generation headless web presence for one of Switzerland's three most visited sites, with cloud-edge infrastructure and an enterprise GraphQL layer.",
    tech: ['Next.js', 'React', 'GraphQL', 'AWS CloudFront'],
    href: 'https://www.sbb.ch',
  },
];
