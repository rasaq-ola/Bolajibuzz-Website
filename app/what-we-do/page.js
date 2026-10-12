import Shell from '@/components/Shell';
import Hub from '@/components/Hub';
import { PILLARS } from '@/content/site';
export const metadata = { title: 'What We Do', description: 'Digital presence, visibility, demand generation, business systems and strategy, as one connected system.' };
const BANDS = ['', ' alt', ' dark'];
export default function Page() {
  return (
    <Shell t="What we build and manage." lead="Five parts of one system." hc="alt" bc="alt">
      <div className="w" style={{ paddingBottom: 70 }}><Hub /></div>
      {PILLARS.map((p, i) => (
        <section key={p.id} id={p.id} className={'sec' + BANDS[(i + 2) % 3]}><div className="w two">
          <div className="rv"><p className="tab">{p.n}</p><h2>{p.lead}</h2></div>
          <div className="rv"><ul className="tags">{p.items.map((t) => <li key={t}>{t}</li>)}</ul></div>
        </div></section>
      ))}
    </Shell>
  );
}
