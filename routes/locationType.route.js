const express = require("express")
const router = express.Router()
const controller = require("../controllers/locationType.controller")

router.get("/", controller.getLocationType)
router.post("/", controller.addLocationType)
router.delete("/:id", controller.deleteLocationType)
router.put("/:id", controller.editLocationType)

module.exports = app => app.use("/locationType", router)