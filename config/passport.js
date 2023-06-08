const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/Users");

//authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      // passReqToCallback : true
    },

    async function (email, password, done) {
      try {
        // Finding a user and establish the identity
        const user = await User.findOne({ email: email });

        if (!user || user.password != password) {
          console.log("Error, Invalid Username/Password");
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        console.log("Error in passport ==> Error : ", err);
        return;
      }
    }
  )
);

//Serializing the user to decide which key is to kept in the cookies ==> encrypting the deta which show in browser application
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserializinf the user from the key in the cookies ==> dencrypting the deta and send to the browser to know who he is
passport.deserializeUser(async function (id, done) {
  const user = await User.findById(id);
  return done(null, user);
});

//Check if user is authenticated
passport.checkAuthentication = function (req, res, next) {
  //if user is signing in, then pass on the request to next function(controller's action)
  if (req.isAuthenticated()) {
    return next();
  }

  //if user is not signing in
  return res.redirect("/user/login");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    //req.user contains the current signed in user from the session cookie and we are just sending this to locals for the views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
