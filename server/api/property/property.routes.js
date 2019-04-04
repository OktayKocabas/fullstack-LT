const router = require("express").Router();
const controller = require("./property.controller");

router.route("/").get(controller.getAll);

module.exports = router;
