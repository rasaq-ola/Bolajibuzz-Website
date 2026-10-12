'use client';
import { useEffect, useState } from 'react';
import { track } from '@/lib/track';
const NODES = ['Website', 'SEO', 'Ads', 'CRM', 'Forms', 'Email', 'Analytics', 'Booking', 'Leads', 'Reports', 'Social', 'Workflow'];
const SC = [[20, 30], [300, 10], [170, 150], [500, 40], [60, 220], [380, 170], [250, 300], [470, 260], [30, 350], [330, 380], [520, 360], [150, 60]];
export default function Hero() {
  const [o, setO] = useState(false);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setO(true); return; }
    const t = setTimeout(() => setO(true), 2200);
    return () => clearTimeout(t);
  }, []);
  const pos = (i) => (o ? [28 + (i % 4) * 145, 50 + Math.floor(i / 4) * 110] : SC[i]);
  return (
    <div className="stage">
      <svg className={o ? 'ord' : ''} viewBox="0 0 640 430" role="img" aria-label={o ? 'Digital parts arranged into one connected system' : 'Digital parts scattered and disconnected'}>
        {[0, 1, 2].map((r) => <line key={'r' + r} className="ln" x1="100" x2="540" y1={75 + r * 110} y2={75 + r * 110} />)}
        {[0, 1, 2, 3].map((c) => <line key={'c' + c} className="ln" y1="75" y2="295" x1={100 + c * 145} x2={100 + c * 145} />)}
        {NODES.map((t, i) => { const [x, y] = pos(i); return (
          <g key={t} className="nd" style={{ transform: `translate(${x}px,${y}px)` }}>
            <g className="fl" style={{ animationDelay: -i * 0.37 + 's' }}><rect width="120" height="50" rx="3" /><text x="60" y="30" textAnchor="middle">{t}</text></g>
          </g>); })}
      </svg>
      <div className={'crumb' + (o ? ' ok-s' : '')}>
        <span>{o ? <b>Connected.</b> : <b>Disconnected.</b>}</span>
        <button className="btn o" style={{ padding: '6px 14px' }} onClick={() => { setO(!o); track('hero_toggle', { state: !o }); }}>{o ? 'Scatter' : 'Bring order'}</button>
      </div>
    </div>
  );
}
