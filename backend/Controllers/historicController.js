// historicController.js
const historic = require('../Models/historicModel');

module.exports = {
  getAllHistoric: function(req, res) {
    historic.getAll(function(err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneHistoric: function(req, res) {
    const historicName = req.params.name;
    historic.getOneByName(historicName, function(err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).send('Historic place not found');
      else res.json(result);
    });
  },

  addHistoric: function(req, res) {
    const historicData = req.body;
    historic.add(historicData, function(err, result) {
      if (err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateHistoric: function(req, res) {
    const historicId = req.params.place_id; // Change from name to place_id
    const updateHistoric = req.body;
    historic.update(historicId, updateHistoric, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Historic place updated successfully' });
        } else {
          res.status(404).json({ error: 'Historic place not found' });
        }
      }
    });
  },

  deleteHistoric: function(req, res) {
    const historicId = req.params.place_id; // Change from name to place_id
    historic.delete(historicId, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Historic place deleted successfully' });
        } else {
          res.status(404).json({ error: 'Historic place not found' });
        }
      }
    });
  },
};