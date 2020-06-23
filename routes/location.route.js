const express = require("express")
const router = express.Router()
const controller = require("../controllers/location.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getLocation)
router.post("/", auth, controller.addLocation)
router.delete("/:id", auth, controller.deleteLocation)
router.put("/:id", auth, controller.editLocation)

module.exports = app => app.use("/location", router)