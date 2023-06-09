const express = require("express");
const router = express.Router();

const landingPage = require("../controllers/landingPageCont");

router.get("/", landingPage.home);

module.exports = router;

