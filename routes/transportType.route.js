const express = require("express")
const router = express.Router()
const controller = require("../controllers/transportType.controller")

router.get("/", controller.getTransportType)
router.post("/", controller.addTransportType)


module.exports = app => app.use("/transportType", router)