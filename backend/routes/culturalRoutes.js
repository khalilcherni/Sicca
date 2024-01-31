const express=require("express")
const router=express.Router()
const culturalController=require("../Controllers/culturalController")

router.get("/getAll",culturalController.getAllCultural)
router.get("/:name",culturalController.getOneCultural)
router.post("/add",culturalController.addCultural)
router.put("/update/:name",culturalController.updateCultural)
router.delete("/delete/:name",culturalController.deleteCultural)


module.exports=router
