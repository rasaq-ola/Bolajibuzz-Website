import Shell from '@/components/Shell';
import Cards from '@/components/Cards';
import Process from '@/components/Process';
export const metadata = { title: 'How We Think', description: 'Six habits behind every BolajiBuzz project: structure before tactics, technology with a purpose.' };
export default function Page() {
  return (
    <Shell t="Structure before tactics." lead="Six habits behind every project." hc="dark" bc="dark">
      <section className="sec" style={{ paddingTop: 0 }}><div className="w"><Cards /></div></section>
      <section className="sec alt"><div className="w"><div className="rv"><p className="tab">The process</p></div><Process /></div></section>
    </Shell>
  );
}
