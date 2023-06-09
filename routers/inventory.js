const express = require("express");
const router = express.Router();
const passport = require("passport");

const addInventory = require("../controllers/inventroyCont");

router.post("/",passport.checkAuthentication, addInventory.addInventory );

router.get("/",passport.checkAuthentication, addInventory.category );

router.get("/ajax",passport.checkAuthentication, addInventory.getCategorys );



// router.post("/addCategory",passport.checkAuthentication, addCategory.addCategory);

// router.get("/destroy", storeInfo.destroy);
module.exports = router;
