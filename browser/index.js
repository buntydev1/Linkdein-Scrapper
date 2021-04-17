const puppeteer = require("puppeteer");
var fs = require("fs");
async function startBrowser() {
  let browser;

  try {
    console.log("opening the browser.....");
    browser = await puppeteer.launch({
      headless: false,
      // excetuablePath:
      //   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    });
    const page = await browser.newPage();
    // console.log("type of page", page);
    await page.goto("https://www.linkedin.com");
    // await page.waitFor(3000);
    await page.click("#session_key");

    await page.keyboard.type("");
    await page.click('[id="session_password"]');

    await page.keyboard.type("");
    await page.click('[type="submit"]');

    await page.waitFor(3000);

    await page.goto(
      "https://www.linkedin.com/search/results/people/?currentCompany=%5B%221586%22%2C%2217411%22%2C%2212227%22%2C%2249318%22%2C%22167364%22%2C%2216551%22%2C%2214951%22%2C%222649984%22%2C%2246825%22%2C%22208137%22%2C%2234924%22%2C%2261712%22%2C%22451028%22%2C%2247157%22%2C%22111446%22%2C%2221433%22%2C%222382910%22%2C%2271099%22%2C%22860467%22%5D&geoUrn=%5B%22102095887%22%5D&origin=FACETED_SEARCH&page=17",
      {
        timeout: 0,
        waitUntil: "load",
      }
    );
    await page.waitForSelector("ul.reusable-search__entity-results-list");

    // const names = await page.$$eval(
    //   "li.reusable-search__result-container",
    //   (options) => options.map((option) => option.innerText)
    // );
    const names = await page.$$eval(
      "li.reusable-search__result-container",
      (options) =>
        options.map((option) => {
          return (obj = {
            name: option.querySelector(".entity-result__title-text > a ")
              .innerText,
            designation: option.querySelector(
              ".entity-result__item > div.entity-result__content > div > div > div:nth-child(2) > div.entity-result__primary-subtitle"
            ).innerText,
            location: option.querySelector(
              ".entity-result__item > div.entity-result__content > div > div >  div:nth-child(2) > div.entity-result__secondary-subtitle"
            ).innerText,
            profileURL: option.querySelector(
              "div.entity-result__content > div > div > div> span > div > span > span > a"
            ).href,
          });
        })
    );

    console.log("this is option", names);

    const JSONOBJECT = JSON.stringify(names);
    console.log("this is object", JSONOBJECT);

    fs.writeFile("myjsonfile.json", JSONOBJECT, function (err) {
      if (err) throw err;
      console.log("complete");
    });
  } catch (err) {
    console.log("Could not create a browser instance => :", err);
  }
  return browser;
}

module.exports = {
  startBrowser,
};
