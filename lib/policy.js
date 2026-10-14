// Turns the pasted policy text into structured blocks.
export function parsePolicy(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const out = [];
  let started = false;
  for (const l of lines) {
    if (/^end of privacy policy/i.test(l)) break;
    let m;
    if ((m = l.match(/^(\d{1,2})\.\s+(.+)$/))) { started = true; out.push({ t: 'h2', n: m[1], text: m[2], id: 's' + m[1] }); continue; }
    if (!started) continue;
    if ((m = l.match(/^(\d{1,2}\.\d{1,2})\s+(.+)$/))) { out.push({ t: 'h3', text: m[1] + ' ' + m[2] }); continue; }
    if (/^[*•-]\s+/.test(l)) {
      const x = l.replace(/^[*•-]\s+/, '');
      const last = out[out.length - 1];
      if (last && last.t === 'ul') last.items.push(x); else out.push({ t: 'ul', items: [x] });
      continue;
    }
    if (/^how to /i.test(l) && l.length < 50) { out.push({ t: 'h3', text: l }); continue; }
    out.push({ t: 'p', text: l });
  }
  return out;
}