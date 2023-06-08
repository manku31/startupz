const express = require("express");
const router = express.Router();
const passport = require("passport");

const dashboad = require("../controllers/dashboadCont");

router.get("/", passport.checkAuthentication, dashboad.dashboad);

router.use("/storeinfo", require("./storeInfo"));

module.exports = router;
