// const { startBrowser } = require("./browser");
// startBrowser();
var fs = require("fs");

const data = require("./employees.json");
const newData = require("./indianNames.json");

var jsonObject = newData.map(JSON.stringify);

var uniqueSet = new Set(jsonObject);
var uniqueArray = Array.from(uniqueSet);

fs.writeFile("input2.json", uniqueArray, function (error) {
  if (error) {
    console.error("write error:  " + error.message);
  } else {
    console.log("Successful Write to ");
  }
});
