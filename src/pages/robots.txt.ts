import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /
Disallow: /404

Sitemap: https://asc.engineering/sitemap.xml

# Crawl delay (in seconds)
Crawl-delay: 1

# Specific rules for common bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
