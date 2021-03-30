const { startBrowser } = require("./browser");
// const cherrio = require("cheerio");
startBrowser();

// async function scrapeData(url) {
//   const browser = await startBrowser();
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "networkidle0" });
//   await page.waitForSelector(".listResults");
// }

// // async function getBlogData(html) {
// //   const blogData = {};
// //   const $ = cherrio.load(html);
// // }
// scrapeData(
//   "https://www.linkedin.com/search/results/people/?currentCompany=%5B%221586%22%2C%2217411%22%2C%2212227%22%2C%2249318%22%2C%22167364%22%2C%2216551%22%2C%2214951%22%2C%222649984%22%2C%2246825%22%2C%22208137%22%2C%2234924%22%2C%2261712%22%2C%22451028%22%2C%2247157%22%2C%22111446%22%2C%2221433%22%2C%222382910%22%2C%2271099%22%2C%22860467%22%5D&geoUrn=%5B%22102095887%22%5D&origin=FACETED_SEARCH"
// );
