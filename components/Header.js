'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/content/site';
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [pg, setPg] = useState(0);
  useEffect(() => {
    let y = 0;
    const f = () => { setHide(scrollY > y && scrollY > 200); y = scrollY; setPg((scrollY / Math.max(1, document.body.scrollHeight - innerHeight)) * 100); };
    addEventListener('scroll', f, { passive: true });
    return () => removeEventListener('scroll', f);
  }, []);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className={hide && !open ? 'hide' : ''}>
      <div className="w">
        <nav className={open ? 'open' : ''} aria-label="Primary">
          <Link href="/" className="logo">Bolaji<i>Buzz</i></Link>
          <button className="burger" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
          {NAV.map((n) => <Link key={n[0]} href={n[0]} className="l m" aria-current={path.startsWith(n[0]) ? 'page' : undefined}>{n[1]}</Link>)}
          <Link href="/contact" className="btn m" style={{ padding: '9px 16px' }}>Start a Conversation</Link>
        </nav>
      </div>
      <div id="bar" style={{ width: pg + '%' }} />
    </header>
  );
}
