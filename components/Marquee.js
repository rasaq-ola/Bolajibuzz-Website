import Link from 'next/link';
const W = ['Website', 'SEO', 'Digital Marketing', 'CRM', 'AI Automation', 'Analytics', 'AI', 'Strategy'];
export default function Marquee() {
  return (
    <div className="mq" aria-label="Capabilities"><div>
      {[...W, ...W].map((x, i) => <Link key={i} href="/what-we-do" tabIndex={-1}>{x}</Link>)}
    </div></div>
  );
}
