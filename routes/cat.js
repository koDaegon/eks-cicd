const express = require("express");
const router = express.Router();
const controller = require("../controller/cat");

router.get("/", controller.rednerCat);

module.exports = router;
