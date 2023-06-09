const express = require("express");
const router = express.Router();
const passport = require("passport");

const addCategory = require("../controllers/categoryCont");

router.get("/", passport.checkAuthentication, addCategory.category);

router.post(
  "/addCategory",
  passport.checkAuthentication,
  addCategory.addCategory
);

// router.get("/destroy", storeInfo.destroy);
module.exports = router;
