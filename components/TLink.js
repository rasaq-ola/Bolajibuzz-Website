'use client';
import Link from 'next/link';
import { track } from '@/lib/track';
export default function TLink({ id, ...p }) {
  return <Link {...p} onClick={() => track('cta_click', { id })} />;
}
