const router = require("express").Router();

const propertyRoutes = require("./property/property.routes");

router.use("/property", propertyRoutes);

module.exports = router;
