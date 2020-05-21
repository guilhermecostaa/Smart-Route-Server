const express = require("express")
const router = express.Router()
const controller = require("../controllers/transportType.controller")

router.get("/", controller.getTransportType)
router.post("/", controller.addTransportType)
router.delete("/:id", controller.deleteTransportType)
router.put("/:id", controller.editTransportType)

module.exports = app => app.use("/transportType", router)