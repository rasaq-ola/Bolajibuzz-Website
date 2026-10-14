import Link from 'next/link';
import { NAV, PILLARS } from '@/content/site';
import WaLink from './WaLink';
import Socials from './Socials';

export default function Footer() {
  return (
    <footer className="ft"><div className="w">
      <div className="top"><Link href="/contact" className="big">Start a Conversation</Link></div>
      <div className="cols">
        <div>
          <strong style={{ font: "800 1.5rem 'Bricolage Grotesque'" }}>BolajiBuzz</strong>
          <p style={{ marginTop: 6, maxWidth: '30ch' }}>Clarity first. Structure before tactics. Technology with a purpose.</p>
        </div>
        <div><h3>Explore</h3><ul>{NAV.map((n) => <li key={n[0]}><Link href={n[0]}>{n[1]}</Link></li>)}<li><Link href="/contact">Contact</Link></li></ul></div>
        <div><h3>What we do</h3><ul>{PILLARS.map((p) => <li key={p.id}><Link href={'/what-we-do#' + p.id}>{p.n}</Link></li>)}</ul></div>
        <div>
          <h3>Talk to us</h3>
          <ul>
            <li><Link href="/contact">Start a Conversation</Link></li>
            <li><a href="mailto:Bolajibuzz@gmail.com">Bolajibuzz@gmail.com</a></li>
            <li><WaLink where="footer" className="ft-wa">Chat on WhatsApp</WaLink></li>
          </ul>
        </div>
      </div>
      <Socials />
      <div className="bot">
        <span>© {new Date().getFullYear()} BolajiBuzz. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </div></footer>
  );
}