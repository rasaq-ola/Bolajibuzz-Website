'use client';
import { useState } from 'react';
import { PILLARS } from '@/content/site';
import { track } from '@/lib/track';
const Q = [['biz', 'What does your business do?'], ['goal', 'What are you trying to improve?'], ['broken', 'What feels broken?'], ['tried', 'What have you tried?']];
export default function ContactForm() {
  const [state, setState] = useState('idle');
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setState('sending');
    try {
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error();
      track('lead_submit', { help: data.help, time: data.time });
      setState('done');
    } catch { setState('error'); }
  }
  if (state === 'done') return <div className="ok" role="status"><h3>Received.</h3><p style={{ margin: 0 }}>We will reply soon.</p></div>;
  return (
    <form onSubmit={submit}>
      {Q.map((q) => <div key={q[0]}><label htmlFor={q[0]}>{q[1]}</label><textarea id={q[0]} name={q[0]} rows={2} required={q[0] === 'biz'} /></div>)}
      <label htmlFor="help">What help do you need?</label>
      <select id="help" name="help"><option>Not sure yet</option>{PILLARS.map((p) => <option key={p.id}>{p.n}</option>)}</select>
      <label htmlFor="time">Timeline</label>
      <select id="time" name="time"><option>Flexible</option><option>Within 1 month</option><option>1 to 3 months</option><option>3+ months</option></select>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoComplete="email" />
      <div className="row"><button className="btn" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send'}</button></div>
      {state === 'error' && <p role="alert">Something went wrong. Please try again or use WhatsApp.</p>}
    </form>
  );
}
