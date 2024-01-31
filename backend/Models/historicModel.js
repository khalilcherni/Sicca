// historicModel.js
const connection = require("../Database/index.js");

module.exports = {
  getAll: function(callback) {
    const sql = "SELECT * FROM `historic_places`";
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneByName: function(historicName, callback) {
    const sql = "SELECT * FROM `historic_places` WHERE name=?";
    connection.query(sql, [historicName], function(error, results) {
      callback(error, results[0]);
    });
  },

  update: function(historicName, updateHistoric, callback) {
    const {
      description,
      contact_info,
      image_url,
      location,
      year_established,
      historical_significance,
      architectural_style,
      entry_fee,
      opening_hours,
    } = updateHistoric;

    const sql = `
      UPDATE \`historic_places\` 
      SET 
        description=?,
        contact_info=?,
        image_url=?,
        location=?,
        year_established=?,
        historical_significance=?,
        architectural_style=?,
        entry_fee=?,
        opening_hours=?
      WHERE name=?
    `;
    
    connection.query(
      sql,
      [
        description,
        contact_info,
        image_url,
        location,
        year_established,
        historical_significance,
        architectural_style,
        entry_fee,
        opening_hours,
        historicName,
      ],
      function(error, results) {
        callback(error, results);
      }
    );
  },

  add: function(historicData, callback) {
    const sql = "INSERT INTO `historic_places` SET ?";
    connection.query(sql, historicData, function(error, results) {
      callback(error, results);
    });
  },

  delete: function(historicName, callback) {
    const sql = "DELETE FROM `historic_places` WHERE name=?";
    connection.query(sql, [historicName], function(error, results) {
      callback(error, results);
    });
  },
};
