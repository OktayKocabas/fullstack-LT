const Property = require("./property.model");

exports.getAll = async (req, res, next) => {
  try {
    const properties = await Property.getAll();

    res.json(properties);
  } catch (err) {
    next(err);
  }
};
