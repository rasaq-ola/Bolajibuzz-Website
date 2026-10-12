import Link from 'next/link';
import { notFound } from 'next/navigation';
import Shell from '@/components/Shell';
import Pic from '@/components/Pic';
import { CASES } from '@/content/site';

const PARTS = [
  ['problem', 'The problem'],
  ['diagnosis', 'The diagnosis'],
  ['intervention', 'The intervention'],
  ['system', 'The system'],
  ['outcome', 'The outcome'],
];

export const generateStaticParams = () => CASES.map((c) => ({ id: c.id }));
export function generateMetadata({ params }) {
  const c = CASES.find((x) => x.id === params.id);
  return c ? { title: c.title, description: c.details?.problem || c.tag } : {};
}

export default function Page({ params }) {
  const c = CASES.find((x) => x.id === params.id);
  if (!c) notFound();
  const next = CASES[CASES.indexOf(c) + 1] || CASES[0];
  return (
    <Shell t={c.title} lead={c.tag} hc="alt" bc="dark">
      <div className="w two">
        <div className="rv"><Pic k={'work' + c.id} alt={c.title} /></div>
        <div className="rv">
          <dl>
            {PARTS.map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{c.details?.[key] || <span className="ph">Placeholder, add real details</span>}</dd>
              </div>
            ))}
          </dl>
          <div className="row">
            {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn">Visit the site</a>}
            <Link href="/work" className="btn o">All work</Link>
            <Link href={'/work/' + next.id} className="btn o">Next case</Link>
          </div>
        </div>
      </div>
      <div style={{ height: 90 }} />
    </Shell>
  );
}