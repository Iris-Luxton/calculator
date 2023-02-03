const express = require("express");
const router = express.Router();
const controller = require ("./controller");

// define routes
router.post("/add", controller.add);
router.post("/sub", controller.sub);
router.post("/mul", controller.mul);
router.post("/div", controller.div);

module.exports = router;