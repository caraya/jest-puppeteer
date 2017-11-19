import faker from "faker";
import puppeteer from "puppeteer";

const APP = "https://www.change-this-to-your-website.com/contact-form.html";

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80
  });
  page = await browser.newPage();
  await page.emulate(['iPad Pro']);
});

afterAll(() => {
  browser.close();
});

describe("Contact form", () => {
  test("lead can submit a contact request", async () => {
    await page.waitForSelector("[]");
    await page.click("input[name=name]");
    await page.type("input[name=name]", lead.name);
    await page.click("input[name=email]");
    await page.type("input[name=email]", lead.email);
    await page.click("input[name=tel]");
    await page.type("input[name=tel]", lead.phone);
    await page.click("textarea[name=message]");
    await page.type("textarea[name=message]", lead.message);
    await page.click("input[type=checkbox]");
    await page.click("button[type=submit]");
  }, 16000);
});
