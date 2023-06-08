const express = require("express");
const router = express.Router();

// landing Page
router.use("/", require("./landingPage"));

// login register page
router.use("/user", require("./users"));


module.exports = router;
