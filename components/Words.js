export default function Words({ t }) {
  return t.split(' ').map((w, i) => (
    <span key={i}><span className="wd"><span style={{ animationDelay: i * 0.09 + 's' }}>{w}</span></span>{' '}</span>
  ));
}
