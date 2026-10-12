import Link from 'next/link';
import Words from '@/components/Words';
import TLink from '@/components/TLink';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Cards from '@/components/Cards';
import Hub from '@/components/Hub';
import Process from '@/components/Process';
import Pic from '@/components/Pic';
import Begin from '@/components/Begin';
import { CASES } from '@/content/site';

export const metadata = { title: { absolute: 'BolajiBuzz | Clarity Before Execution' }, description: 'We look at your whole digital system first, then build what it needs.' };

export default function Home() {
  return (
    <>
      <div className="w"><section className="hero">
        <div>
          <h1><Words t="Clarity Before Execution" /></h1>
          <p style={{ fontSize: '1.2rem' }}>We look at your whole digital system first, then build what it needs.</p>
          <div className="row"><TLink id="hero" href="/contact" className="btn">Start a Conversation</TLink><Link href="/how-we-think" className="btn o">See How We Think</Link></div>
        </div>
        <Hero />
      </section></div>
      <Marquee />
      <section className="sec dark"><div className="w two">
        <div className="rv"><p className="tab">The problem</p><h2>More activity is not a better system.</h2></div>
        <div className="rv"><div className="chain">{['Website', 'Marketing', 'Leads', 'CRM', 'Automation', 'Analytics'].map((t) => <span key={t}>{t}</span>)}</div><p style={{ marginTop: 24 }}>We fix the system first.</p></div>
      </div></section>
      <section className="sec"><div className="w"><div className="rv"><p className="tab">How we think</p><h2>Six habits.</h2></div><Cards /></div></section>
      <div className="w rv" style={{ paddingBottom: 96 }}><Pic k="band" alt="Our workspace" r="21/8" /></div>
      <section className="sec dark"><div className="w"><div className="rv"><p className="tab">What we do</p><h2>Five parts, one system.</h2></div><Hub /></div></section>
      <section className="sec"><div className="w"><div className="rv"><p className="tab">The process</p><h2>From confusion to confidence.</h2></div><Process /></div></section>
      <section className="sec alt"><div className="w"><div className="rv"><p className="tab">The work</p><h2>Problems we solved.</h2></div>
        <div className="grid3">{CASES.map((c, i) => (
          <div className="rv" key={c.id} style={{ transitionDelay: i * 0.12 + 's' }}><Link href={'/work/' + c.id} className="cs"><Pic k={'work' + c.id} alt={c.title} /><h3>{c.title}</h3><span>{c.tag}</span></Link></div>
        ))}</div>
      </div></section>
      <Begin c="dark" />
    </>
  );
}
