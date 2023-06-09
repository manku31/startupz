const express = require("express");
const router = express.Router();
const passport = require("passport");

const dashboad = require("../controllers/dashboadCont");

router.get("/", passport.checkAuthentication, dashboad.dashboad);

router.use("/storeinfo", require("./storeInfo"));

router.use("/category", require("./category"));

router.use("/inventory", require("./inventory"));

module.exports = router; 
