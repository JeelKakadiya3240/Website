// Vercel Serverless Function — POST /api/contact
// Receives the contact form and sends an email via the Resend REST API.
// The RESEND_API_KEY is read from Vercel env vars and NEVER exposed to the browser.

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    var body = req.body;
    if (!body || typeof body === 'string') {
      try { body = JSON.parse(body || '{}'); } catch (e) { body = {}; }
    }

    var name = String(body.name || '').trim();
    var email = String(body.email || '').trim();
    var message = String(body.message || '').trim();

    // Honeypot: bots fill this hidden field. Pretend success, send nothing.
    if (body.company) { res.status(200).json({ ok: true }); return; }

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Please fill in all fields.' });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      res.status(400).json({ error: 'Please enter a valid email.' });
      return;
    }
    if (message.length > 5000) {
      res.status(400).json({ error: 'Message is too long.' });
      return;
    }

    var apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Email service is not configured yet.' });
      return;
    }

    var to = process.env.CONTACT_TO || 'jkakadi1@asu.edu';
    var from = process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>';

    var resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: from,
        to: [to],
        reply_to: email,
        subject: 'New portfolio message from ' + name,
        text: 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message,
        html:
          '<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:15px;color:#111">' +
          '<p><strong>Name:</strong> ' + esc(name) + '</p>' +
          '<p><strong>Email:</strong> ' + esc(email) + '</p>' +
          '<p style="white-space:pre-wrap;margin-top:16px">' + esc(message) + '</p>' +
          '</div>'
      })
    });

    if (!resp.ok) {
      var errText = await resp.text().catch(function () { return ''; });
      console.error('Resend error', resp.status, errText);
      res.status(502).json({ error: 'Could not send your message. Please email me directly.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact handler error', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
