import { STEPS } from '@/content/site';
export default function Process() {
  return (
    <ol className="steps rv">
      {STEPS.map((s, i) => <li key={s[0]} style={{ '--i': i }}><h3>{s[0]}</h3><p>{s[1]}</p></li>)}
    </ol>
  );
}
