const { fetchMyIP } = require("./iss_promised.js");
const { fetchCoordsByIP } = require("./iss_promised.js");
const { fetchISSFlyOverTimes } = require("./iss_promised.js");
const { nextISSTimesForMyLocation } = require("./iss_promised.js");

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then(passTimes => {
    printPassTimes(passTimes);
  })
  .catch(error => {
    console.log("It didn't work: ", error.message);
  });
