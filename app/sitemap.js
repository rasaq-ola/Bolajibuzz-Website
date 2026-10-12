import { SITE_URL, CASES, POSTS } from '@/content/site';
export default function sitemap() {
  const base = ['', '/how-we-think', '/what-we-do', '/work', '/insights', '/about', '/contact'];
  return [...base, ...CASES.map((c) => '/work/' + c.id), ...POSTS.map((p) => '/insights/' + p.slug)].map((p) => ({ url: SITE_URL + p, lastModified: new Date() }));
}
