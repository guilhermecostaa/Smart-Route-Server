const express = require("express")
const router = express.Router()
const controller = require("../controllers/transportType.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getTransportType)
router.post("/", auth, controller.addTransportType)
router.delete("/:id", auth, controller.deleteTransportType)
router.put("/:id", auth, controller.editTransportType)

module.exports = app => app.use("/transportType", router)