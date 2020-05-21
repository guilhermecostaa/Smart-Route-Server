const express = require("express")
const router = express.Router()
const controller = require("../controllers/routes.controller")

router.get("/", controller.getRoutes)
router.post("/", controller.addRoute)
router.delete("/:id", controller.deleteRoute)
router.put("/:id", controller.editRoute)

module.exports = app => app.use("/routes", router)