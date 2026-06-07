const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Hover the "Ready Apps" nav item to open the dropdown
  const navItem = await page.locator('.nav-item', { hasText: 'Ready Apps' }).first();
  await navItem.hover();
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/ready-apps-dropdown.png' });

  // Move mouse away, screenshot the floating WhatsApp button
  await page.mouse.move(10, 10);
  await page.waitForTimeout(300);
  await page.screenshot({ path: '/tmp/wa-float.png', clip: { x: 1100, y: 600, width: 340, height: 300 } });

  // Scroll to footer for WhatsApp link
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(400);
  const footContact = await page.locator('.foot-contact').first();
  await footContact.screenshot({ path: '/tmp/footer-wa.png' });

  await browser.close();
  console.log('done');
})();
