'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/track';
// Page-view tracking + scroll-reveal for every element with class "rv".
export default function RouteEffects() {
  const path = usePathname();
  useEffect(() => {
    track('page_view', { path });
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
    const t = setTimeout(() => document.querySelectorAll('.rv').forEach((x) => io.observe(x)), 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [path]);
  return null;
}
