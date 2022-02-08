const express = require("express");
const router = express.Router();
const controller = require("../controller/dog");

router.get("/", controller.rednerDog);

module.exports = router;
