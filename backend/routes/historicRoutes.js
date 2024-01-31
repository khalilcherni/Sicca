const express=require("express")
const router=express.Router()
const historicController = require("../Controllers/historicController")


router.get("/getAll",historicController.getAllHistoric)
router.get("/:name",historicController.getOneHistoric)
router.post("/add",historicController.addHistoric)
router.put("/update/:name",historicController.updateHistoric)
router.delete("/delete/:name",historicController.deleteHistoric)


module.exports=router
