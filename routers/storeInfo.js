const express = require("express");
const router = express.Router();
const passport = require("passport");

const storeInfo = require("../controllers/storeInfoCont");

router.get("/",storeInfo.storeInfo );

router.post("/creat-store", storeInfo.createStore);

module.exports = router;
