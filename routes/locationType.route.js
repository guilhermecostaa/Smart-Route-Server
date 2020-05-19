const express = require("express")
const router = express.Router()
const controller = require("../controllers/location.controller")

router.get("/", controller.getLocationType)
router.post("/", controller.addLocationType)

module.exports = app => app.use("/locationType", router)