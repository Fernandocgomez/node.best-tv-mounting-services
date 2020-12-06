// Dependencies
const express = require("express");
const router = express.Router();

// Controller
const leadController = require("../controllers/lead");

// Routes
router.get("/", leadController.index);

module.exports = router;