import { chromium } from 'playwright';
import fs from 'fs';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({width:1440, height:900});
await page.goto('http://localhost:3000', {waitUntil:'networkidle', timeout:30000});
await page.evaluate(() => {
  document.querySelectorAll('.aos').forEach(el => el.classList.add('visible'));
  document.querySelectorAll('*').forEach(el => { if(getComputedStyle(el).position === 'fixed') el.style.display = 'none'; });
});
await page.waitForTimeout(300);
const buf = await page.locator('#oferty').screenshot();
fs.writeFileSync('temporary screenshots/screenshot-nr.png', buf);
await browser.close();
console.log('done');
