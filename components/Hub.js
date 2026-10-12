'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PILLARS } from '@/content/site';
import { track } from '@/lib/track';
const lines = (n) => n.split(' & ')[0].split(' ').reduce((a, w) => { const l = a[a.length - 1]; if (l && (l + ' ' + w).length < 12) a[a.length - 1] = l + ' ' + w; else a.push(w); return a; }, []);
export default function Hub() {
  const [sel, setSel] = useState('presence');
  const p = PILLARS.find((x) => x.id === sel);
  const pick = (id) => { setSel(id); track('pillar_select', { id }); };
  const lit = (q, z) => (q.id === sel && q.links.includes(z.id)) || (z.id === sel && z.links.includes(q.id));
  return (
    <div className="hub rv">
      <svg viewBox="0 0 520 480" role="group" aria-label="Five capabilities around one system">
        {PILLARS.flatMap((q) => PILLARS.filter((z) => z.id > q.id && q.links.includes(z.id)).map((z) => <line key={q.id + z.id} className={'sp' + (lit(q, z) ? ' on' : '')} x1={q.x} y1={q.y} x2={z.x} y2={z.y} />))}
        {PILLARS.map((q) => <line key={'c' + q.id} className={'sp' + (q.id === sel ? ' on' : '')} x1="260" y1="260" x2={q.x} y2={q.y} />)}
        <circle className="pulse" cx="260" cy="260" r="38" fill="var(--acc)" />
        <circle cx="260" cy="260" r="38" fill="var(--ink)" />
        <text x="260" y="264" textAnchor="middle" style={{ font: '700 12px Bricolage Grotesque', fill: 'var(--bg)' }}>Your system</text>
        {PILLARS.map((q) => { const L = lines(q.n); return (
          <g key={q.id} className="hn" role="button" tabIndex={0} aria-pressed={q.id === sel} aria-label={q.n} onClick={() => pick(q.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(q.id); } }}>
            <circle cx={q.x} cy={q.y} r="50" />
            {L.map((l, i) => <text key={l} x={q.x} y={q.y + 4 + (i - (L.length - 1) / 2) * 13}>{l}</text>)}
          </g>); })}
      </svg>
      <div className="panel" aria-live="polite">
        <h3>{p.n}</h3><p>{p.lead}</p>
        <ul className="tags">{p.items.slice(0, 6).map((i) => <li key={i}>{i}</li>)}</ul>
        <Link href="/what-we-do" className="btn o" style={{ padding: '8px 16px' }}>See all</Link>
      </div>
    </div>
  );
}
