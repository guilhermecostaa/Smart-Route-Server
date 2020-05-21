const express = require("express")
const router = express.Router()
const controller = require("../controllers/routeType.controller")

router.get("/", controller.getRouteType)
router.post("/", controller.addRouteType)
router.delete("/:id", controller.deleteRouteType)
router.put("/:id", controller.editRouteType)

module.exports = app => app.use("/routeType", router)