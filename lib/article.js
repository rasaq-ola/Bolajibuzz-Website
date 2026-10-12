// Turns the plain text in POSTS[].body into structured blocks.
export function parseArticle(body) {
  const text = Array.isArray(body) ? body.join('\n\n') : body || '';
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const isBullet = (l) => /^[*•-]\s+/.test(l);
  const isNum = (l) => /^\d+[.)]\s+/.test(l);
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const isHead = (l) => {
    if (l.length > 90 || l.split(/\s+/).length > 14) return false;
    if (/[.:;,]$/.test(l)) return false;
    if (l.endsWith('?')) return l.length <= 75;
    return true;
  };
  const out = [];
  let i = 0, sec = 0, first = true;
  while (i < lines.length) {
    const l = lines[i];
    if (/^suggested internal links/i.test(l)) break; // editor notes are not shown
    if (isBullet(l)) {
      const items = [];
      while (i < lines.length && isBullet(lines[i])) { items.push(lines[i].replace(/^[*•-]\s+/, '')); i++; }
      out.push({ t: 'ul', items });
      continue;
    }
    if (isNum(l)) {
      const run = [];
      while (i < lines.length && isNum(lines[i])) { run.push(lines[i].replace(/^\d+[.)]\s+/, '')); i++; }
      if (run.length === 1) { sec++; out.push({ t: 'h3', n: sec, text: run[0] }); }
      else out.push({ t: 'ol', items: run });
      continue;
    }
    if (isHead(l)) { sec = 0; out.push({ t: 'h2', text: l, id: slug(l) }); i++; continue; }
    out.push({ t: 'p', text: l, lead: first });
    first = false;
    i++;
  }
  return out;
}