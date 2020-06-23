const express = require("express")
const router = express.Router()
const controller = require("../controllers/routes.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getRoutes)
router.post("/", auth, controller.addRoute)
router.delete("/:id", auth, controller.deleteRoute)
router.put("/:id", auth, controller.editRoute)

module.exports = app => app.use("/routes", router)