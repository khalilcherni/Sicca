// tourismModel.js
const connection = require("../Database/index");

module.exports = {
  getAll: function(callback) {
    const sql = "SELECT * FROM `tourism_places`";
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneByName: function(tourismName, callback) {
    const sql = "SELECT * FROM `tourism_places` WHERE name=?";
    connection.query(sql, [tourismName], function(error, results) {
      callback(error, results[0]);
    });
  },

  update: function(tourismId, updateTourism, callback) {
    const {
      description,
      contact_info,
      image_url,
      location,
      tourism_category,
      activities,
      entry_fee,
      opening_hours,
    } = updateTourism;

    const sql = `
      UPDATE \`tourism_places\` 
      SET 
        description=?,
        contact_info=?,
        image_url=?,
        location=?,
        tourism_category=?,
        activities=?,
        entry_fee=?,
        opening_hours=?
      WHERE place_id=?
    `;
    
    connection.query(
      sql,
      [
        description,
        contact_info,
        image_url,
        location,
        tourism_category,
        activities,
        entry_fee,
        opening_hours,
        tourismId,
      ],
      function(error, results) {
        callback(error, results);
      }
    );
  },
  add: function(tourismData, callback) {
    const sql = "INSERT INTO `tourism_places` SET ?";
    connection.query(sql, tourismData, function(error, results) {
      callback(error, results);
    });
  },

  delete: function(tourismId, callback) {
    const sql = "DELETE FROM `tourism_places` WHERE place_id=?";
    connection.query(sql, [tourismId], function(error, results) {
      callback(error, results);
    });
  },
};