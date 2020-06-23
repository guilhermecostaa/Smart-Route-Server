const express = require("express")
const router = express.Router()
const controller = require("../controllers/locationType.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getLocationType)
router.post("/", auth, controller.addLocationType)
router.delete("/:id", auth, controller.deleteLocationType)
router.put("/:id", auth, controller.editLocationType)

module.exports = app => app.use("/locationType", router)