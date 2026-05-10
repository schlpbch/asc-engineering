export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Andreas has a rare combination of deep technical expertise and practical business acumen. His work on the Model Context Protocol has fundamentally shaped how we think about agent interoperability at scale.',
    author: 'Jane Doe',
    title: 'VP Engineering',
    company: 'Leading Tech Company',
  },
  {
    quote:
      'The Spec-Driven Development approach Andreas introduced transformed how our 25+ teams collaborate. What could have been chaos became a unified, predictable architecture across Java, Next.js, iOS, and SAP.',
    author: 'John Smith',
    title: 'CTO',
    company: 'Enterprise Services Inc.',
  },
  {
    quote:
      'Working with Andreas on formal verification of agentic systems was eye-opening. His process calculus background combined with hands-on AI experience is exactly what the field needs right now.',
    author: 'Dr. Emma Wilson',
    title: 'Research Director',
    company: 'Academic Research Lab',
  },
];
