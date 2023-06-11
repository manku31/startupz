const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require("../config/multer");

const addInventory = require("../controllers/inventroyCont");

router.post("/", passport.checkAuthentication, addInventory.inventory);

// sending the data
router.get("/", passport.checkAuthentication, addInventory.category);

// sending data in json
router.get("/ajax", passport.checkAuthentication, addInventory.getCategorys);

router.post(
  "/addinventory",
  upload.single("file"),
  passport.checkAuthentication,
  addInventory.addInventory
);

// router.post("/addCategory",passport.checkAuthentication, addCategory.addCategory);

// router.get("/destroy", storeInfo.destroy);
module.exports = router;
