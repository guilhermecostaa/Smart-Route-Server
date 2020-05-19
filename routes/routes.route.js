const express = require("express")
const router = express.Router()
const controller = require("../controllers/routes.controller")

router.get("/", controller.getRoutes)
router.post("/", controller.addRoute)

module.exports = app => app.use("/routes", router)