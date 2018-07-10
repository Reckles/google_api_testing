const express = require("express");
const logic = require("../logic/logic.js");
const router = express.Router();

router.get("/", logic.GetHomePage);
router.get("/places", logic.GetPlaces);

module.exports = router;
