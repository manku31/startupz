const User = require("../models/Users");

// redirect to login page
module.exports.login = function (req, res) {
  // its restrick the user to signup page because he already sign up
  if (req.isAuthenticated()) {
    return res.redirect("/user/dashboad");
  }
  return res.render("login", {
    title: "Login",
  });
};

// redirect to Register Page
module.exports.register = function (req, res) {
  // its restrick the user to signup page because he already sign up
  if (req.isAuthenticated()) {
    return res.redirect("/user/dashboad");
  }
  return res.render("register", {
    title: "Register",
  });
};

// Create new user
module.exports.create = async function (req, res) {
  try {
    // checking password and confirm password are same or not
    if (req.body.password != req.body.confirm_password) {
      console.log("Passowrd and Confirm Password Does not Match");
      return res.redirect("back");
    }

    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      let user = await User.create({
        name: req.body.name,
        businessName: req.body.businessName,
        email: req.body.email,
        password: req.body.password,
      });

      return res.redirect("/user/login");
    } else {
      console.log("This Email is already Register");
      return res.redirect("back");
    }
  } catch (err) {
    console.log("Error in Creating new User, Error ==> ", err);
  }
};

// creating session
module.exports.createSession = function (req, res) {
  return res.redirect("dashboad");
};

module.exports.destroySession = function (req, res) {
  // this function is given by passport.js
  req.logout(function (err) {
    console.log(err);
  }); // pre define

  return res.redirect("/");
};
