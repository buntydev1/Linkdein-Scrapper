var fs = require("fs");
var filtereDataEmployess = require("./input1.json");
// console.log("this is filteredDataEmployes", filtereDataEmployess);
var filtereDataIndians = require("./indianNamesNew.json");
// console.log("this is filteredDataEmployes", filtereDataIndians);

// const compareNames = () => {
//   filtereDataEmployess.filter();
// };
// compareNames();
// console.log("this is names", filtereDataEmployess[9].name);

const names = filtereDataIndians
  .map((obj) => obj.name)
  .map((n) => {
    if (typeof n === "string" || n instanceof String) {
      return n.split(" ");
    }
  })
  .flat();

// console.log("this is name", names);

const indianNames = filtereDataEmployess.filter(
  (empl) => {
    const emplArr = empl.name.split(" ");
    let decision = false;
    emplArr.forEach((emp) => {
      console.log(" this is emp", emp);
      if (names.includes(emp)) {
        // console.log("names", names);
        decision = true;
      }
    });
    return decision;
  }
  // names.includes(empl.name)
);
console.log(
  "this is in",
  indianNames.map((n) => n.name)
);
// const data = require("./employees.json");
// const newData = require("./indianNames.json");

// var jsonObject = newData.map(JSON.stringify);

// var uniqueSet = new Set(jsonObject);
// var uniqueArray = Array.from(uniqueSet);

// fs.writeFile("input3.json", uniqueArray, function (error) {
//   if (error) {
//     console.error("write error:  " + error.message);
//   } else {
//     console.log("Successful Write to ");
//   }
// });
