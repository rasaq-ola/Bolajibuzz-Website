import Words from './Words';
import Begin from './Begin';
// Inner-page wrapper: coloured header band + content + closing band. hc/bc: 'dark' (purple) or 'alt' (orange).
export default function Shell({ t, lead, hc = 'dark', bc = 'alt', children }) {
  return (
    <>
      <div className={'pgh ' + hc}><div className="w"><h1 tabIndex={-1}><Words t={t} />{''}</h1>{lead && <p>{lead}</p>}</div></div>
      {children}
      <Begin c={bc} />
    </>
  );
}
