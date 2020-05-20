const express = require("express");
const router = express.Router();
const checkingController = require("../controller/checkingController")

router.get("/checking", checkingController.index)
router.delete("/checking/:id", checkingController.delete)

module.exports = router
