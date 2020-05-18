const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/user", userController.index);
// router.post("/new", userController.create)
// router.put("/:id", userController.update);
// router.get("/:id", userController.show);
// router.get("/:id/edit", userController.edit);
// router.delete("/:id", userController.destroy);

module.exports = router;