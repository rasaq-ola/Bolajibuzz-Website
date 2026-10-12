'use client';
import { WA_NUMBER, WA_TEXT } from '@/content/site';
import { track } from '@/lib/track';
export default function WaLink({ where, children, ...p }) {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;
  return <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { where })} {...p}>{children}</a>;
}
