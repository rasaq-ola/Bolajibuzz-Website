export default function ArticleBody({ blocks }) {
  return (
    <div className="article">
      {blocks.map((b, i) => {
        if (b.t === 'h2') return <h2 key={i} id={b.id} className="rv">{b.text}</h2>;
        if (b.t === 'h3') return <h3 key={i} className="rv a3"><span>{String(b.n).padStart(2, '0')}</span>{b.text}</h3>;
        if (b.t === 'ul') return (
          <ul key={i} className="rv">
            {b.items.map((x, j) => {
              const m = x.match(/^([^:.]{2,40}):\s+(.*)$/);
              return <li key={j}>{m ? <><strong>{m[1]}:</strong> {m[2]}</> : x}</li>;
            })}
          </ul>
        );
        if (b.t === 'ol') return <ol key={i} className="rv">{b.items.map((x, j) => <li key={j}>{x}</li>)}</ol>;
        return <p key={i} className={'rv' + (b.lead ? ' lead' : b.text.length <= 70 ? ' pull' : '')}>{b.text}</p>;
      })}
    </div>
  );
}