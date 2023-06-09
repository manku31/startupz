const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require("../config/multer");

const storeInfo = require("../controllers/storeInfoCont");

router.get("/",passport.checkAuthentication, storeInfo.storeInfo );

router.post("/creat-store", upload.single('file'), passport.checkAuthentication, storeInfo.createStore);

// router.post("/creat-store", upload.single('file'), storeInfo.createStore);



router.get("/destroy", storeInfo.destroy);
module.exports = router;
