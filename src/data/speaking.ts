export interface Talk {
  title: string;
  event: string;
  year: number;
  location: string;
  topics: string[];
}

export const talks: Talk[] = [
  {
    title:
      'The Convergence of SGD and MCP: A New Paradigm for Agentic Interoperability',
    event: 'arXiv Preprint',
    year: 2026,
    location: 'Online',
    topics: ['AI Agents', 'MCP', 'LLMs'],
  },
  {
    title:
      'Formal Semantics for Agentic Tool Protocols: A Process Calculus Approach',
    event: 'arXiv Preprint',
    year: 2026,
    location: 'Online',
    topics: ['Formal Methods', 'Agents', 'Protocols'],
  },
  {
    title: 'Spec-Driven Development: Scaling AI Across Enterprise Tech Stacks',
    event: 'Internal SBB AI/ML Summit',
    year: 2025,
    location: 'Bern, Switzerland',
    topics: ['Architecture', 'AI', 'Scaling'],
  },
];

export const speakingTopics: string[] = [
  'LLM Agentic Ecosystems & the Model Context Protocol',
  'Spec-Driven Development for Enterprise AI',
  'Formal Verification of Distributed Systems',
  'Schema-Driven Architecture & Interoperability',
  'Scaling Machine Learning in Production',
  'Open Standards for AI Tool Protocols',
];
