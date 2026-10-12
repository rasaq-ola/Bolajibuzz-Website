import Link from 'next/link';
import Words from '@/components/Words';
import TLink from '@/components/TLink';
import Pic from '@/components/Pic';
import Tilt from '@/components/Tilt';
import Begin from '@/components/Begin';
import { FOUNDER } from '@/content/site';

export const metadata = { title: 'About', description: 'A boutique digital strategy partner that thinks in systems.' };

const IDEAS = [
  { t: 'Clarity first', d: 'We start by understanding the real problem, not by choosing a tool.' },
  { t: 'Structure before tactics', d: 'Campaigns and automation only work when the system underneath them makes sense.' },
  { t: 'Technology with a purpose', d: 'We use technology because it solves a business problem, not because it is fashionable.' },
];
const DISCIPLINES = ['Business', 'Technology', 'Systems', 'Design', 'Marketing', 'Automation'];
const PHRASES = ['Clarity first', 'Structure before tactics', 'Technology with a purpose'];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <div className="w">
        <section className="ab-hero">
          <div>
            <p className="tab">About BolajiBuzz</p>
            <h1><Words t="A small team that thinks in systems." /></h1>
            <p className="ab-lead">BolajiBuzz is a boutique digital strategy partner. We look at the whole digital picture first, then build what a business actually needs.</p>
            <div className="row">
              <TLink id="about_hero" href="/contact" className="btn">Start a Conversation</TLink>
              <Link href="/work" className="btn o">See the work</Link>
            </div>
          </div>
          <div className="ab-visual">
            <Tilt>
              <div className="ab-frame">
                <Pic k="about" alt={FOUNDER.name + ', ' + FOUNDER.role} r="4/5" />
                <span className="ab-chip c1">Strategy</span>
                <span className="ab-chip c2">Systems</span>
                <span className="ab-chip c3">Technology</span>
              </div>
            </Tilt>
            <div className="ab-name"><strong>{FOUNDER.name}</strong><span>{FOUNDER.role}</span></div>
          </div>
        </section>
      </div>

      {/* 2. SCROLLING BAND */}
      <div className="mq ab-mq" aria-hidden="true"><div>
        {[...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES].map((p, i) => <span key={i}>{p}<i /></span>)}
      </div></div>

      {/* 3. PHILOSOPHY (purple) */}
      <section className="sec dark"><div className="w rv">
        <p className="tab">Our philosophy</p>
        <p className="ab-quote">We do not add more digital activity to a broken system. <mark>We fix the system first.</mark></p>
      </div></section>

      {/* 4. HOW WE WORK (cream) */}
      <section className="sec"><div className="w">
        <div className="rv"><p className="tab">How we work</p><h2>Three ideas behind everything we do.</h2></div>
        <div className="grid3">
          {IDEAS.map((p, i) => (
            <div className="rv" key={p.t} style={{ transitionDelay: i * 0.12 + 's' }}>
              <article className="ab-card"><span className="ab-num">0{i + 1}</span><h3>{p.t}</h3><p>{p.d}</p></article>
            </div>
          ))}
        </div>
        <div className="rv" style={{ marginTop: 56 }}>
          <h3>One team across six disciplines.</h3>
          <ul className="tags ab-tags">{DISCIPLINES.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
      </div></section>

      {/* 5. THE STORY (orange) */}
      <section className="sec alt"><div className="w two">
        <div className="rv"><p className="tab">The story</p><h2>The people behind the thinking.</h2></div>
        <div className="rv">
          {FOUNDER.story.length
            ? FOUNDER.story.map((p, i) => <p key={i}>{p}</p>)
            : <p><span className="ph">Placeholder: add your founder story in content/site.js (FOUNDER.story).</span></p>}
          <ul className="tags">{['Calm and direct', 'Practical over trendy', 'Built for the long term'].map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="row">
            <TLink id="about_story" href="/contact" className="btn">Start a Conversation</TLink>
            <Link href="/how-we-think" className="btn o">See How We Think</Link>
          </div>
        </div>
      </div></section>

      {/* 6. CLOSING BAND (purple) */}
      <Begin c="dark" />
    </>
  );
}