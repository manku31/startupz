const express = require("express");
const router = express.Router();

const landingPage = require("../controllers/landingPageCont");

router.get("/", landingPage.home);

router.use("/product", require("../routers/showproduct"));

module.exports = router;

