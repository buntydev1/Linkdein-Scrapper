const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;

  try {
    console.log("opening the browser.....");
    browser = await puppeteer.launch({
      headless: false,
      excetuablePath:
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    });
    const page = await browser.newPage();
    await page.goto(
      "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin/"
    );
    await page.click("#username");
    // modify mail account
    await page.keyboard.type("YOUR_MAIL");
    await page.click('[id="password"]');
    // modify password account
    await page.keyboard.type("YOUR_PASSWORD");
    await page.click('[type="submit"]');
    await page.goto(
      "https://www.linkedin.com/search/results/people/?currentCompany=%5B%221586%22%2C%2217411%22%2C%2212227%22%2C%2249318%22%2C%22167364%22%2C%2216551%22%2C%2214951%22%2C%222649984%22%2C%2246825%22%2C%22208137%22%2C%2234924%22%2C%2261712%22%2C%22451028%22%2C%2247157%22%2C%22111446%22%2C%2221433%22%2C%222382910%22%2C%2271099%22%2C%22860467%22%5D&geoUrn=%5B%22102095887%22%5D&origin=FACETED_SEARCH",
      {
        timeout: 0,
        waitUntil: "load",
      }
    );
  } catch (err) {
    console.log("Could not create a browser instance => :", err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
