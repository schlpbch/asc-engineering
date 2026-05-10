export interface Contribution {
  name: string;
  role: string;
  period: string;
  url: string;
  tags: string[];
  description: string;
}

export const contributions: Contribution[] = [
  {
    name: 'Open Sales and Distribution Model (OSDM)',
    role: 'Technical Lead & Product Owner',
    period: '2018–present',
    url: 'https://osdm.org',
    tags: ['API Standard', 'OpenAPI', 'Rail', 'Interoperability'],
    description:
      'International open API standard for rail ticket distribution and fare calculation. Adopted by all major European railways (SBB, DB, SNCF, ÖBB, …) and leading global distribution systems. Defines the common data model and REST interfaces that enable cross-border booking across the European rail network.',
  },
  {
    name: 'WebKit — CSS Parser',
    role: 'Contributor',
    period: '2002–2005',
    url: 'https://webkit.org',
    tags: ['C++', 'CSS', 'Browser Engine'],
    description:
      "Contributed fixes and improvements to the CSS parser in WebKit (formerly KHTML). Work focused on standards-compliance for CSS selectors and property parsing, some of which flowed upstream into Apple's Safari browser.",
  },
  {
    name: 'KDE — KHTML Rendering Engine',
    role: 'Contributor',
    period: '2001–2004',
    url: 'https://kde.org',
    tags: ['C++', 'HTML', 'CSS', 'KDE'],
    description:
      "Contributed to the KHTML HTML/CSS rendering engine that shipped in KDE's Konqueror browser and later became the foundation for WebKit and Blink. Patches addressed CSS rendering correctness and layout edge cases.",
  },
  {
    name: 'Model Context Protocol (MCP) — Standardization Working Group',
    role: 'Contributor',
    period: '2025–present',
    url: 'https://modelcontextprotocol.io',
    tags: ['MCP', 'AI Agents', 'Standardization', 'Interoperability'],
    description:
      'Contributing to the official MCP standardization working group, which governs the open protocol for connecting AI assistants to external tools, data sources, and services. Work focuses on interoperability, schema design, and enterprise adoption patterns.',
  },
];
