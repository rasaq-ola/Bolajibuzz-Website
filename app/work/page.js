import Link from 'next/link';
import Shell from '@/components/Shell';
import Pic from '@/components/Pic';
import { CASES } from '@/content/site';
export const metadata = { title: 'Work', description: 'Projects told as business problems: what was wrong, what we found, what we built.' };
export default function Page() {
  return (
    <Shell t="Work, told as problems." hc="dark" bc="alt">
      <div className="w"><div className="grid3">{CASES.map((c, i) => (
        <div className="rv" key={c.id} style={{ transitionDelay: i * 0.12 + 's' }}><Link href={'/work/' + c.id} className="cs"><Pic k={'work' + c.id} alt={c.title} /><h3>{c.title}</h3><span>{c.tag}</span></Link></div>
      ))}</div></div>
      <div style={{ height: 90 }} />
    </Shell>
  );
}
