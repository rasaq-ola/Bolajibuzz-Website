'use client';
import { useEffect, useRef } from 'react';
import { IMG } from '@/content/site';
const ph = (k) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#D6CBE8"/><g stroke="#602E9E" stroke-width="2" fill="none"><path d="M0 560L260 260L420 420L560 300L800 540"/><circle cx="620" cy="140" r="52"/></g><text x="400" y="580" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#602E9E">Replace IMG.${k}</text></svg>`);
export default function Pic({ k, alt = '', r = '4/3' }) {
  const ref = useRef(null);
  useEffect(() => { const i = ref.current; if (i && i.complete && i.naturalWidth === 0) i.src = ph(k); }, [k]);
  return (
    <figure className="pic" style={{ '--r': r }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={IMG[k]} alt={alt} loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ph(k); }} />
    </figure>
  );
}
