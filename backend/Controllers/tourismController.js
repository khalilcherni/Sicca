// tourismController.js
const tourism = require('../Models/tourismModel');

module.exports = {
  getAllTourism: function(req, res) {
    tourism.getAll(function(err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneTourism: function(req, res) {
    const tourismName = req.params.name;
    tourism.getOneByName(tourismName, function(err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).send('Tourism place not found');
      else res.json(result);
    });
  },

  addTourism: function(req, res) {
    const tourismData = req.body;
    tourism.add(tourismData, function(err, result) {
      if (err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateTourism: function(req, res) {
    const tourismName = req.params.name;
    const updateTourism = req.body;
    tourism.update(tourismName, updateTourism, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Tourism place updated successfully' });
        } else {
          res.status(404).json({ error: 'Tourism place not found' });
        }
      }
    });
  },

  deleteTourism: function(req, res) {
    const tourismName = req.params.name;
    tourism.delete(tourismName, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Tourism place deleted successfully' });
        } else {
          res.status(404).json({ error: 'Tourism place not found' });
        }
      }
    });
  },
};
