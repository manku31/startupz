const Store = require("../models/Stores");
const User = require("../models/Users");

module.exports.home = async function (req, res) {
  try {
    const store = await Store.find({})
    .populate("user", "name businessName email");

    return res.render("landingPage", {
      title: "Home",
      store,
    });
  } catch (error) {
    console.log("Error in showing Store Details in landing page ==> ", err);
    return res.redirect("back");
  }
};
