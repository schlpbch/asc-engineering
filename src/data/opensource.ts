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
    name: 'ASC Engineering Design System',
    role: 'Author & Maintainer',
    period: '2025–present',
    url: 'https://github.com/schlpbch/asc-engineering-design-system',
    tags: ['Design System', 'Astro', 'Tailwind CSS', 'TypeScript', 'WCAG 2.1 AA'],
    description:
      'Comprehensive, accessible design system built for production with 29 reusable components (Button, Input, Card, Modal, Table, Tabs, and more). Full TypeScript support, WCAG 2.1 AA accessibility compliance, dark mode support, animation utilities with prefers-reduced-motion support, and complete Storybook integration. Includes design tokens, utility functions, and patterns for consistent UI development.',
  },
  {
    name: 'aareguru-mcp',
    role: 'Author & Maintainer',
    period: '2025–present',
    url: 'https://github.com/schlpbch/aareguru-mcp',
    tags: ['MCP', 'TypeScript', 'FastMCP', 'Prometheus', 'Open Source'],
    description:
      'Production-grade MCP server exposing live river conditions, temperature, flow rates, and forecasts for Swiss rivers via the aareguru.ch API. 12 FastMCP tool implementations, 365 automated tests, Prometheus metrics endpoint, and 10+ releases. The most complete public example of an operationally-hardened MCP server.',
  },
  {
    name: 'Open Sales and Distribution Model (OSDM)',
    role: 'Technical Lead & Product Owner',
    period: '2018–present',
    url: 'https://osdm.io',
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
      'Contributing to the official MCP standardization working group. Active in the transport WG (reviewing and proposing changes to the SSE and Streamable HTTP transport specs) and the governance WG (contributing to specification process and versioning policy). Also contributing to interoperability and schema design discussions for enterprise adoption patterns.',
  },
];
