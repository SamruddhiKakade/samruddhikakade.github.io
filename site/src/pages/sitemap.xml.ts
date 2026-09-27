import type { APIRoute } from 'astro';
import { sections } from '../data/site';
import { publishedItems } from '../data/items';

// Every page on the site, for search engines. The 404 page is left out.
export const GET: APIRoute = async ({ site }) => {
  const items = await publishedItems();
  const paths = ['/', '/overview/', ...sections.map((s) => s.href), ...items.map((i) => `/${i.data.section}/${i.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
