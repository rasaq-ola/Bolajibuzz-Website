import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
const TO = 'Bolajibuzz@gmail.com'; // where enquiries are delivered

export async function POST(req) {
  const d = await req.json();
  if (!d.email || !d.biz) return Response.json({ ok: false }, { status: 400 });

  const { GMAIL_USER, GMAIL_APP_PASSWORD, LEAD_WEBHOOK_URL } = process.env;
  const rows = [
    ['Business', d.biz], ['Trying to improve', d.goal], ['What feels broken', d.broken],
    ['Already tried', d.tried], ['Help needed', d.help], ['Timeline', d.time], ['Email', d.email],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v || '-'}`).join('\n\n');

  try {
    // Optional: also forward to n8n or a CRM if LEAD_WEBHOOK_URL is set. A failure here does not block the email.
    if (LEAD_WEBHOOK_URL) {
      await fetch(LEAD_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) }).catch(() => {});
    }
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error('Email not configured: set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');
      return Response.json({ ok: false }, { status: 500 });
    }
    const transport = nodemailer.createTransport({ service: 'gmail', auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD } });
    await transport.sendMail({
      from: `BolajiBuzz Website <${GMAIL_USER}>`,
      to: TO,
      replyTo: d.email, // pressing Reply answers the client directly
      subject: `New enquiry from ${d.email}`,
      text,
    });
    return Response.json({ ok: true });
  } catch (e) {
    console.error('Lead email failed:', e);
    return Response.json({ ok: false }, { status: 500 });
  }
}