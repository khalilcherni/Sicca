// culturalRoutes.js
const express = require("express");
const router = express.Router();
const culturalController = require("../Controllers/culturalController");

router.get("/getAll", culturalController.getAllCultural);
router.get("/:place_id", culturalController.getOneCultural);
router.post("/add", culturalController.addCultural);
router.put("/update/:place_id", culturalController.updateCultural);
router.delete("/delete/:place_id", culturalController.deleteCultural);

module.exports = router;
