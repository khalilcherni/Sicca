const connection = require("../Database");

module.exports = {
  getAll: function(callback) {
    const sql = "SELECT * FROM `cultural_places`";
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneByName: function(PlaceName, callback) {
    const sql = "SELECT * FROM `cultural_places` WHERE name=?";
    connection.query(sql, [PlaceName], function(error, results) {
      callback(error, results[0]);
    });
  },

  update: function(PlaceName, updateCultural, callback) {
    const {
      description,
      contact_info,
      image_url,
      location,
      cultural_category,
    } = updateCultural;

    const sql =
      "UPDATE `cultural_places` SET description=?, contact_info=?, image_url=?, location=?, cultural_category=? WHERE name=?";
    
    connection.query(
      sql,
      [description, contact_info, image_url, location, cultural_category, PlaceName],
      function(error, results) {
        callback(error, results);
      }
    );
  },

  add: function(culturalData, callback) {
    const sql = "INSERT INTO `cultural_places` SET ?";
    connection.query(sql, culturalData, function(error, results) {
      callback(error, results);
    });
  },

  delete: function(PlaceName, callback) {
    const sql = "DELETE FROM `cultural_places` WHERE name=?";
    connection.query(sql, [PlaceName], function(error, results) {
      callback(error, results);
    });
  },
};
