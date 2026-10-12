import Link from 'next/link';
import { notFound } from 'next/navigation';
import Shell from '@/components/Shell';
import TLink from '@/components/TLink';
import ArticleBody from '@/components/ArticleBody';
import { parseArticle } from '@/lib/article';
import { POSTS } from '@/content/site';

export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.summary || p.tag } : {};
}

export default function Page({ params }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const next = POSTS[POSTS.indexOf(p) + 1] || POSTS[0];
  const blocks = parseArticle(p.body);
  const toc = blocks.filter((b) => b.t === 'h2');
  return (
    <Shell t={p.title} lead={p.tag} hc="dark" bc="alt">
      <div className="w art-wrap">
        <aside className="toc" aria-label="In this article">
          <p className="toc-h">In this article</p>
          {toc.map((h) => <a key={h.id} href={'#' + h.id}>{h.text}</a>)}
        </aside>
        <div>
          {blocks.length ? <ArticleBody blocks={blocks} /> : <p><span className="ph">Placeholder: add this article in content/site.js (POSTS, body).</span></p>}
          <div className="art-cta rv">
            <h3>Want this applied to your business?</h3>
            <div className="row">
              <TLink id="article_cta" href="/contact" className="btn">Start a Conversation</TLink>
              <Link href={'/insights/' + next.slug} className="btn o">Next article</Link>
            </div>
          </div>
          <div className="row"><Link href="/insights" className="btn o">All insights</Link></div>
        </div>
      </div>
      <div style={{ height: 90 }} />
    </Shell>
  );
}