const { startBrowser } = require("./browser");
const cherrio = require("cheerio");
startBrowser();

// async function scrapeData(url) {
//   console.log("this is scrapeData", scrapeData);
//   const browser = await startBrowser();
//   // const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "networkidle0" });
//   console.log("before ");
//   await page.waitForSelector(".search-results-container");
//   console.log("after");
//   // console.log("this is", typeof waitForSelector);
//   const content = await page.content();
//   await getNameData(content);
//   console.log("this is content", content);
//   await browser.close();
// }

async function getNameData(html) {
  const nameData = {};
  const $ = cherrio.load(html);
  $(".entity-result").each((i, element) => {
    console.log(
      $(element)
        .waitForSelector(
          "div.entity-result__content entity-result__divider span.entity-result__title-text"
        )
        .find("span")
        .text()
    );
  });
}
// scrapeData(
//   "https://www.linkedin.com/search/results/people/?currentCompany=%5B%221586%22%2C%2217411%22%2C%2212227%22%2C%2249318%22%2C%22167364%22%2C%2216551%22%2C%2214951%22%2C%222649984%22%2C%2246825%22%2C%22208137%22%2C%2234924%22%2C%2261712%22%2C%22451028%22%2C%2247157%22%2C%22111446%22%2C%2221433%22%2C%222382910%22%2C%2271099%22%2C%22860467%22%5D&geoUrn=%5B%22102095887%22%5D&origin=FACETED_SEARCH"
// );
