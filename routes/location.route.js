const express = require("express")
const router = express.Router()
const controller = require("../controllers/location.controller")

router.get("/", controller.getLocation)
router.post("/", controller.addLocation)
router.delete("/:id", controller.deleteLocation)
router.put("/:id", controller.editLocation)

module.exports = app => app.use("/location", router)