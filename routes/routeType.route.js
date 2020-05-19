const express = require("express")
const router = express.Router()
const controller = require("../controllers/routeType.controller")

router.get("/", controller.getRouteType)
router.post("/", controller.addRouteType)


module.exports = app => app.use("/routeType", router)