import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const routes = [
  '/',
  '/about',
  '/work',
  '/academia',
  '/blog',
  '/speaking',
  '/contact',
  '/testimonials',
  '/hobbies',
  '/impressum',
  '/privacy',
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const blogRoutes = posts.map((post) => `/blog/${post.id}`);

  const allRoutes = [...routes, ...blogRoutes];
  const baseUrl = 'https://asc.engineering';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map((route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
