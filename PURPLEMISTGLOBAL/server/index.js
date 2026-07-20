import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const {
  RESEND_API_KEY,
  TO_EMAIL,
  FROM_EMAIL = 'Purplemist Global <onboarding@resend.dev>',
  FRONTEND_URL = 'http://localhost:3000',
  PORT = 5000,
} = process.env;

if (!RESEND_API_KEY) {
  console.warn(
    '[warn] RESEND_API_KEY is not set. Copy server/.env.example to server/.env and add your key, or requests to /api/enquiries will fail.',
  );
}
if (!TO_EMAIL) {
  console.warn(
    '[warn] TO_EMAIL is not set. This is the inbox that receives new enquiries — set it in server/.env.',
  );
}

const resend = new Resend(RESEND_API_KEY);

const app = express();
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/enquiries', async (req, res) => {
  const { fullName, email, phone, company, subject, message } = req.body || {};

  // Basic server-side validation — never trust the client
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'fullName, email and message are required.' });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  if (!RESEND_API_KEY || !TO_EMAIL) {
    return res.status(500).json({ error: 'Email sending is not configured on the server yet.' });
  }

  const escape = (value = '') =>
    String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const notificationHtml = `
    <h2>New enquiry from ${escape(fullName)}</h2>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Phone:</strong> ${escape(phone) || '—'}</p>
    <p><strong>Company:</strong> ${escape(company) || '—'}</p>
    <p><strong>Subject:</strong> ${escape(subject) || '—'}</p>
    <p><strong>Message:</strong></p>
    <p>${escape(message).replace(/\n/g, '<br/>')}</p>
  `;

  try {
    // 1. Notify the business inbox
    // NOTE: the Resend SDK resolves with { data, error } rather than throwing
    // on API-level failures (bad key, unverified domain, etc.), so both cases
    // must be checked explicitly.
    const { error: sendError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New enquiry: ${subject || 'Website contact form'}`,
      html: notificationHtml,
    });

    if (sendError) {
      console.error('Resend rejected the enquiry email:', sendError);
      return res.status(502).json({ error: 'Failed to send enquiry. Please try again shortly.' });
    }

    // 2. Send the enquirer an acknowledgement (best-effort — don't fail the request if this errors)
    const { error: ackError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'We received your enquiry — Purplemist Global',
      html: `
        <p>Hi ${escape(fullName)},</p>
        <p>Thanks for reaching out to Purplemist Global. We've received your enquiry and a member of our team will respond within 24 business hours.</p>
        <p>— Purplemist Global</p>
      `,
    });
    if (ackError) {
      console.error('Acknowledgement email failed (enquiry was still recorded):', ackError);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send enquiry email:', error);
    return res.status(502).json({ error: 'Failed to send enquiry. Please try again shortly.' });
  }
});

app.listen(PORT, () => {
  console.log(`Purplemist backend listening on http://localhost:${PORT}`);
});
