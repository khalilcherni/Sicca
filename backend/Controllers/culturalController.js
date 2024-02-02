// culturalController.js
const cultural = require('../Models/culturalModel');

module.exports = {
  getAllCultural: function(req, res) {
    cultural.getAll(function(err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneCultural: function(req, res) {
    const culturalName = req.params.name; // Change from id to name
    cultural.getOneByName(culturalName, function(err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).send('Cultural place not found');
      else res.json(result);
    });
  },

  addCultural: function(req, res) {
    const culturalData = req.body;
    cultural.add(culturalData, function(err, result) {
      if (err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateCultural: function(req, res) {
    const culturalId = req.params.place_id; // Change from name to place_id
    const updateCultural = req.body;
    cultural.update(culturalId, updateCultural, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Cultural place updated successfully' });
        } else {
          res.status(404).json({ error: 'Cultural place not found' });
        }
      }
    });
  },

  deleteCultural: function(req, res) {
    const culturalId = req.params.place_id; // Change from name to place_id
    cultural.delete(culturalId, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Cultural place deleted successfully' });
        } else {
          res.status(404).json({ error: 'Cultural place not found' });
        }
      }
    });
  },
};