import Shell from '@/components/Shell';
import { parsePolicy } from '@/lib/policy';
import { PRIVACY, PRIVACY_EFFECTIVE, PRIVACY_UPDATED } from '@/content/privacy';

export const metadata = { title: 'Privacy Policy', description: 'How BolajiBuzz collects, uses, shares and protects personal information.' };

// Makes web addresses and email addresses clickable.
const linkify = (s) =>
  s.split(/(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.]+)/g).map((x, i) => {
    if (/^https?:\/\//.test(x)) {
      const u = x.replace(/[.,;]+$/, '');
      return <span key={i}><a href={u} target="_blank" rel="noopener noreferrer">{u}</a>{x.slice(u.length)}</span>;
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(x)) {
      const e = x.replace(/\.$/, '');
      return <span key={i}><a href={'mailto:' + e}>{e}</a>{x.slice(e.length)}</span>;
    }
    return x;
  });

// Bolds a leading label such as "Consent:" or "Website:".
const para = (text) => {
  const m = text.match(/^([A-Z][A-Za-z ]{2,40}):\s+(.*)$/);
  return m ? <><strong>{m[1]}:</strong> {linkify(m[2])}</> : linkify(text);
};

export default function Page() {
  const blocks = parsePolicy(PRIVACY);
  const toc = blocks.filter((b) => b.t === 'h2');
  return (
    <Shell t="Privacy Policy" lead={`Effective ${PRIVACY_EFFECTIVE}. Last updated ${PRIVACY_UPDATED}.`} hc="dark" bc="alt">
      <div className="w art-wrap">
        <aside className="toc" aria-label="In this policy">
          <p className="toc-h">In this policy</p>
          {toc.map((h) => <a key={h.id} href={'#' + h.id}>{h.n}. {h.text}</a>)}
        </aside>
        <div>
          {blocks.length ? (
            <div className="article">
              {blocks.map((b, i) => {
                if (b.t === 'h2') return <h2 key={i} id={b.id} className="rv">{b.n}. {b.text}</h2>;
                if (b.t === 'h3') return <h3 key={i} className="rv sub">{b.text}</h3>;
                if (b.t === 'ul') return <ul key={i} className="rv">{b.items.map((x, j) => <li key={j}>{linkify(x)}</li>)}</ul>;
                return <p key={i} className="rv">{para(b.text)}</p>;
              })}
            </div>
          ) : <p><span className="ph">Paste your policy text into content/privacy.js.</span></p>}
        </div>
      </div>
      <div style={{ height: 90 }} />
    </Shell>
  );
}