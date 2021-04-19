// const { startBrowser } = require("./browser");
// startBrowser();
var fs = require("fs");

const data = require("./employees.json");

// var uniqueValue = new Set(data);

// var newdata = {};
// newdata.table = [];
// for (i = 0; i < uniqueValue.length; i++) {
//   newdata.table.push(uniqueValue);
// }
jsonObject = data.map(JSON.stringify);

uniqueSet = new Set(jsonObject);
uniqueArray = Array.from(uniqueSet);

fs.writeFile("input1.json", uniqueArray, function (error) {
  if (error) {
    console.error("write error:  " + error.message);
  } else {
    console.log("Successful Write to ");
  }
});
