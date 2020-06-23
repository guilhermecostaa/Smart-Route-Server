const express = require("express")
const router = express.Router()
const controller = require("../controllers/routeType.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getRouteType)
router.post("/", auth, controller.addRouteType)
router.delete("/:id", auth, controller.deleteRouteType)
router.put("/:id", auth, controller.editRouteType)

module.exports = app => app.use("/routeType", router)