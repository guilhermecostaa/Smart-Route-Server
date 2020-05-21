const express = require("express")
const router = express.Router()
const controller = require("../controllers/startingPoints.controller")

router.get("/", controller.getStartingPoints)
router.post("/", controller.addStartingPoint)
router.delete("/:id", controller.deleteStartingPoint)
router.put("/:id", controller.editStartingPoint)

module.exports = app => app.use("/startingPoints", router)