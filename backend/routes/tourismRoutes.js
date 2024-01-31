const express=require("express")
const router=express.Router()
const tourismController = require("../Controllers/tourismController")


router.get("/getAll",tourismController.getAllTourism)
router.get("/:name",tourismController.getOneTourism)
router.post("/add",tourismController.addTourism)
router.put("/update/:name",tourismController.updateTourism)
router.delete("/delete/:name",tourismController.deleteTourism)


module.exports=router
