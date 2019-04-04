const fs = require("fs");
const readline = require("readline");
let filePath = `${__dirname}/data.txt`;
let property = [];
let maxValue = 0;
(async () => {
  const data = [];

  function streamPromise() {
    let rl = readline.createInterface({
      input: fs.createReadStream(filePath)
    });

    return new Promise((resolve, reject) => {
      rl.on("line", line => {
        const lineValues = line.trim().split(" ");
        const price = parseInt(lineValues[2], 10);
        maxValue = maxValue > price ? maxValue : price;
        const obj = {
          xCoordinate: lineValues[0],
          yCoordinate: lineValues[1],
          price: price
        };
        data.push(obj);
      });

      rl.on("close", () => {
        resolve(data);
      });
    });
  }

  property = await streamPromise();
})();

exports.database = async () => {
  return { property, maxValue };
};
