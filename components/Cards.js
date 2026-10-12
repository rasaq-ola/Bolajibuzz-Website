'use client';
import { useState } from 'react';
import { PRINCIPLES } from '@/content/site';
import { track } from '@/lib/track';
export default function Cards() {
  const [on, setOn] = useState(-1);
  return (
    <div className="cards">
      {PRINCIPLES.map((p, i) => (
        <div className="rv" key={p[0]} style={{ transitionDelay: i * 0.08 + 's' }}>
          <button className={'fc' + (on === i ? ' on' : '')} onClick={() => { setOn(on === i ? -1 : i); track('principle_flip', { id: p[0] }); }}>
            <span className="fi">
              <span className="ff"><span className="n">{i + 1}</span><span><span className="w2">{p[0]}</span><span className="sb">{p[1]}</span></span><span className="hint">Hover or tap</span></span>
              <span className="fb"><span className="bt">{p[2]}</span><span className="bp">{p[3]}</span></span>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
