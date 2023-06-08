const express = require("express");
const router = express.Router();
const passport = require("passport");

const storeInfo = require("../controllers/storeInfoCont");

router.get("/",passport.checkAuthentication, storeInfo.storeInfo );

router.post("/creat-store",passport.checkAuthentication, storeInfo.createStore);

router.get("/destroy", storeInfo.destroy);
module.exports = router;
