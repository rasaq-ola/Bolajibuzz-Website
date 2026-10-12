import TLink from './TLink';
export default function Begin({ c = 'dark' }) {
  return (
    <section className={'sec ' + c}><div className="w rv">
      <TLink id="begin" href="/contact" className="big">Tell us what you are trying to fix.</TLink>
    </div></section>
  );
}
