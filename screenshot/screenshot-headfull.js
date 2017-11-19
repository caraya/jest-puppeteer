const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {

  const browser = await puppeteer.launch({
    headless: false, // launch headful mode
    slowMo: 250, // slow down puppeteer script so that it's easier to follow visually
  });
  const page = await browser.newPage();
  await page.emulate(devices['iPad Pro']);
  await page.goto('https://rivendellweb.net', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'headfull.png', fullPage: true });
  await browser.close();

})();
