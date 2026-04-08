import fs from 'fs'
import path from 'path'
import { chromium } from 'playwright'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const logoPath = path.join(repoRoot, 'favicon.webp')
const outPath = path.join(repoRoot, 'social-share.png')

const logoBase64 = fs.readFileSync(logoPath).toString('base64')
const logoSrc = `data:image/webp;base64,${logoBase64}`

const html = `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <style>
    :root {
      --bg: #f4efe7;
      --panel: rgba(255, 255, 255, 0.72);
      --accent: #b8956a;
      --text: #5d4a35;
      --line: rgba(184, 149, 106, 0.22);
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: Georgia, "Times New Roman", serif;
      background:
        radial-gradient(circle at top left, rgba(184, 149, 106, 0.18), transparent 34%),
        radial-gradient(circle at bottom right, rgba(184, 149, 106, 0.12), transparent 30%),
        linear-gradient(135deg, #f8f5ef 0%, var(--bg) 100%);
      color: var(--text);
    }
    body {
      display: grid;
      place-items: center;
      padding: 42px;
    }
    .frame {
      width: 100%;
      height: 100%;
      border: 1px solid var(--line);
      background:
        linear-gradient(180deg, rgba(255,255,255,0.74), rgba(255,255,255,0.64)),
        rgba(255,255,255,0.52);
      box-shadow: 0 22px 80px rgba(93, 74, 53, 0.08);
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      align-items: center;
      padding: 54px 64px;
      position: relative;
      overflow: hidden;
    }
    .frame::before,
    .frame::after {
      content: "";
      position: absolute;
      border: 1px solid rgba(184, 149, 106, 0.16);
      border-radius: 999px;
    }
    .frame::before {
      width: 420px;
      height: 420px;
      right: -140px;
      top: -120px;
    }
    .frame::after {
      width: 280px;
      height: 280px;
      left: -100px;
      bottom: -110px;
    }
    .copy {
      position: relative;
      z-index: 1;
      padding-right: 24px;
    }
    .eyebrow {
      margin: 0 0 18px;
      font-family: "Segoe UI", Arial, sans-serif;
      font-size: 18px;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: var(--accent);
    }
    h1 {
      margin: 0 0 20px;
      font-size: 58px;
      line-height: 1.02;
      letter-spacing: -0.03em;
      max-width: 9ch;
    }
    p {
      margin: 0;
      max-width: 34ch;
      font-family: "Segoe UI", Arial, sans-serif;
      font-size: 24px;
      line-height: 1.45;
      color: rgba(93, 74, 53, 0.88);
    }
    .logo-wrap {
      position: relative;
      z-index: 1;
      display: grid;
      place-items: center;
      padding-left: 12px;
    }
    .logo-card {
      width: 100%;
      max-width: 420px;
      aspect-ratio: 1 / 1;
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(184, 149, 106, 0.24);
      box-shadow: 0 18px 48px rgba(93, 74, 53, 0.12);
      display: grid;
      place-items: center;
      padding: 36px;
    }
    .logo-card img {
      width: 100%;
      height: auto;
      display: block;
    }
  </style>
</head>
<body>
  <main class="frame">
    <section class="copy">
      <p class="eyebrow">P&amp;M Apartments</p>
      <h1>Wykończenie mieszkań pod klucz</h1>
      <p>Gotowe mieszkania i kompleksowe realizacje we Wrocławiu.</p>
    </section>
    <section class="logo-wrap">
      <div class="logo-card">
        <img src="${logoSrc}" alt="P&amp;M Apartments logo">
      </div>
    </section>
  </main>
</body>
</html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'load' })
await page.screenshot({ path: outPath, type: 'png' })
await browser.close()

console.log(`Generated ${path.basename(outPath)}`)
