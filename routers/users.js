const express = require("express");
const router = express.Router();
const passport = require("passport");

const userDetail = require("../controllers/userCont");

router.get("/login", userDetail.login);

router.get("/register", userDetail.register);

router.post("/create", userDetail.create);

// use passport as a middleware to authenticate
router.post("/create-session", passport.authenticate(
    "local",        // which method use
    {failureRedirect : "/user/login"},
), userDetail.createSession);

router.get('/sign-out', userDetail.destroySession);

// login register page
router.use("/dashboad", require("./dashboad"));

module.exports = router;
