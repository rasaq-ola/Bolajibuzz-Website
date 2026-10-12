import Link from 'next/link';
import Shell from '@/components/Shell';
import { POSTS } from '@/content/site';
export const metadata = { title: 'Insights', description: 'Practical, opinionated thinking on web, SEO, AEO, automation and digital strategy.' };
export default function Page() {
  return (
    <Shell t="Opinions worth reading." hc="alt" bc="dark">
      <div className="w">{POSTS.map((p) => <div className="rv" key={p.slug}><Link href={'/insights/' + p.slug} className="post"><h3>{p.title}</h3><span>{p.tag}</span></Link></div>)}</div>
      <div style={{ height: 90 }} />
    </Shell>
  );
}
