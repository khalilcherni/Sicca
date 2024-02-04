// tourismRoutes.js
const express = require("express");
const router = express.Router();
const tourismController = require("../Controllers/tourismController");

router.get("/getAll", tourismController.getAllTourism);
router.get("/:name", tourismController.getOneTourism);
router.post("/add", tourismController.addTourism);
router.put("/update/:place_id", tourismController.updateTourism);
router.delete("/delete/:place_id", tourismController.deleteTourism);

module.exports = router;
