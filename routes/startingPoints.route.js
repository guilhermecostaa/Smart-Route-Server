const express = require("express")
const router = express.Router()
const controller = require("../controllers/startingPoints.controller")
const auth = require("../middleware/auth.middleware")

router.get("/", auth, controller.getStartingPoints)
router.post("/", auth, controller.addStartingPoint)
router.delete("/:id", auth, controller.deleteStartingPoint)
router.put("/:id", auth, controller.editStartingPoint)

module.exports = app => app.use("/startingPoints", router)