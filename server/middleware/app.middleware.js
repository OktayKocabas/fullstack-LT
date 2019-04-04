const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors());
  app.use(methodOverride());
};