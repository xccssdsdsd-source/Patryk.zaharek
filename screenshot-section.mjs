import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const screenshotDir = path.join(process.cwd(), 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const selector = process.argv[3] || 'body';
const label = process.argv[4] || 'section';

const browser = await chromium.launch({
  executablePath: 'C:/Users/kajet/AppData/Local/ms-playwright/chromium-1208/chrome-win64/chrome.exe',
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(600);

// Scroll page to trigger observers
const pageHeight = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < pageHeight; y += 600) {
  await page.evaluate(pos => window.scrollTo(0, pos), y);
  await page.waitForTimeout(80);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(400);

let n = 1;
const filename = () => `screenshot-${n}-${label}.png`;
while (fs.existsSync(path.join(screenshotDir, filename()))) n++;
const outPath = path.join(screenshotDir, filename());

const el = await page.$(selector);
if (el) {
  await el.screenshot({ path: outPath });
  console.log(`Saved: temporary screenshots/${filename()}`);
} else {
  console.log('Element not found:', selector);
}
await browser.close();
