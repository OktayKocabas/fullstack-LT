const express = require("express");
const api = require("./api/api");

const app = express();

require("./middleware/app.middleware")(app);
require("./db");

app.use("/", api);

app.listen(5000, err => {
  console.log("Server Nodejs has started and Listening port 5000");
});

module.exports = app;
