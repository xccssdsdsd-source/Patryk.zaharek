const RESEND_API_KEY = 're_eRDZ4aTD_PKitKXGFb3P84GnokihN7inV'
const FROM_ADDRESS = 'P&M Apartments <kontakt@pm-apartments.pl>'
const NOTIFY_TO = 'kontakt@pm-apartments.pl'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json', ...corsHeaders }
})

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]))

const isEmail = (s) => typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

const clientHtml = (firstName) => `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>P&amp;M Apartments</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f0f;font-family:Arial,sans-serif;color:#ffffff;-webkit-font-smoothing:antialiased;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0f0f0f;padding:40px 20px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#1a1a1a;border:1px solid rgba(201,169,110,0.2);border-radius:4px;overflow:hidden;">
<tr><td style="padding:0;">
<img src="https://pm-apartments.pl/social-share.png" alt="P&amp;M Apartments" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;outline:none;text-decoration:none;">
</td></tr>
<tr><td style="padding:40px 40px 24px 40px;text-align:center;border-bottom:1px solid rgba(201,169,110,0.18);">
<div style="font-family:Georgia,serif;font-size:28px;letter-spacing:0.12em;color:#C9A96E;text-transform:uppercase;">P&amp;M Apartments</div>
<div style="height:1px;width:60px;background-color:#C9A96E;margin:18px auto 0 auto;"></div>
</td></tr>
<tr><td style="padding:48px 40px 16px 40px;">
<h1 style="margin:0 0 24px 0;font-family:Georgia,serif;font-size:26px;font-weight:normal;letter-spacing:-0.01em;color:#ffffff;line-height:1.3;">Dziękujemy, ${escapeHtml(firstName)}.</h1>
<p style="margin:0 0 20px 0;font-family:Arial,sans-serif;font-size:15px;line-height:1.8;color:#ffffff;opacity:0.85;">Otrzymaliśmy Twoją wiadomość i bardzo dziękujemy za kontakt z P&amp;M Apartments.</p>
<p style="margin:0 0 20px 0;font-family:Arial,sans-serif;font-size:15px;line-height:1.8;color:#ffffff;opacity:0.85;">Zespół P&amp;M Apartments odezwie się do Ciebie w najbliższym czasie, aby omówić szczegóły Twojego zapytania.</p>
<p style="margin:0;font-family:Georgia,serif;font-style:italic;font-size:15px;line-height:1.8;color:#C9A96E;">Z wyrazami szacunku,<br>Zespół P&amp;M Apartments</p>
</td></tr>
<tr><td style="padding:24px 40px 48px 40px;text-align:center;">
<div style="height:1px;width:60px;background-color:rgba(201,169,110,0.4);margin:0 auto 32px auto;"></div>
<p style="margin:0 0 20px 0;font-family:Georgia,serif;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;color:#C9A96E;">Śledź nas</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
<tr>
<td style="padding:0 6px;"><a href="https://www.instagram.com/patryk_zacharek/" style="display:inline-block;background-color:#C9A96E;color:#1a1a1a;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;padding:14px 28px;border-radius:2px;">Instagram</a></td>
<td style="padding:0 6px;"><a href="https://www.facebook.com/pm.patrykzacharek/" style="display:inline-block;background-color:#C9A96E;color:#1a1a1a;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;padding:14px 28px;border-radius:2px;">Facebook</a></td>
</tr>
</table>
</td></tr>
<tr><td style="padding:24px 40px 40px 40px;text-align:center;border-top:1px solid rgba(201,169,110,0.18);background-color:#141414;">
<p style="margin:0;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.08em;color:#ffffff;opacity:0.55;line-height:1.7;">P&amp;M Apartments &nbsp;|&nbsp; Wrocław &nbsp;|&nbsp; <a href="mailto:kontakt@pm-apartments.pl" style="color:#C9A96E;text-decoration:none;">kontakt@pm-apartments.pl</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`

const notifyHtml = (name, email, message) => `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:Arial,sans-serif;color:#2c2c2c;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid #e5e5e5;">
<tr><td style="padding:28px 32px;border-bottom:2px solid #C9A96E;">
<h2 style="margin:0;font-family:Georgia,serif;font-size:20px;color:#1a1a1a;">Nowa wiadomość z formularza</h2>
</td></tr>
<tr><td style="padding:28px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:13px;color:#888;width:120px;">Imię i nazwisko</td><td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:14px;color:#1a1a1a;">${escapeHtml(name)}</td></tr>
<tr><td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:13px;color:#888;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eeeeee;font-size:14px;color:#1a1a1a;"><a href="mailto:${escapeHtml(email)}" style="color:#1a1a1a;">${escapeHtml(email)}</a></td></tr>
<tr><td style="padding:16px 0 6px 0;font-size:13px;color:#888;" colspan="2">Wiadomość</td></tr>
<tr><td colspan="2" style="padding:10px 16px;background-color:#fafafa;border-left:3px solid #C9A96E;font-size:14px;line-height:1.7;color:#1a1a1a;white-space:pre-wrap;">${escapeHtml(message)}</td></tr>
</table>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`

const sendEmail = (payload) => fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})

export const onRequestOptions = () => new Response(null, { status: 204, headers: corsHeaders })

export const onRequestPost = async ({ request }) => {
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Nieprawidłowe dane.' }, 400)
  }

  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return json({ error: 'Wszystkie pola są wymagane.' }, 400)
  }
  if (!isEmail(email)) {
    return json({ error: 'Nieprawidłowy adres email.' }, 400)
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return json({ error: 'Wiadomość jest zbyt długa.' }, 400)
  }

  const firstName = name.split(/\s+/)[0]

  try {
    const notify = await sendEmail({
      from: FROM_ADDRESS,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `Nowa wiadomość z formularza – ${name}`,
      html: notifyHtml(name, email, message)
    })
    if (!notify.ok) {
      return json({ error: 'Nie udało się wysłać wiadomości.' }, 502)
    }

    await sendEmail({
      from: FROM_ADDRESS,
      to: [email],
      subject: 'Dziękujemy za wiadomość – P&M Apartments',
      html: clientHtml(firstName)
    })

    return json({ success: true })
  } catch {
    return json({ error: 'Błąd serwera. Spróbuj ponownie później.' }, 500)
  }
}

export const onRequest = ({ request }) => {
  if (request.method === 'OPTIONS') return onRequestOptions()
  if (request.method === 'POST') return onRequestPost({ request })
  return json({ error: 'Method not allowed.' }, 405)
}
