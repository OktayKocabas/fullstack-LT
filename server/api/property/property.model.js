const { database } = require("../../db");

Property = {
  getAll: async () => {
    return await database();
  }
};

module.exports = Property;
