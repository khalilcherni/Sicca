// historicRoutes.js
const express = require("express");
const router = express.Router();
const historicController = require("../Controllers/historicController");

router.get("/getAll", historicController.getAllHistoric);
router.get("/:place_id", historicController.getOneHistoric);
router.post("/add", historicController.addHistoric);
router.put("/update/:place_id", historicController.updateHistoric);
router.delete("/delete/:place_id", historicController.deleteHistoric);

module.exports = router;
