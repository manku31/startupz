const User = require("../models/Users");
const Store = require("../models/Stores");
const upload = require("../config/multer");
const path = require("path");
const { findById } = require("../models/Users");

// Landing to Store details page
module.exports.storeInfo = async function (req, res) {
  try {
    let user = await User.findById(req.user.id).populate("store");

    // let storedetails = await Store.findOne({ user: req.user.id });
    // if (storedetails != null) {

    //   const logoimg = path.join(
    //     __dirname, "../assets/image/" + storedetails.logo);
    //   return res.render("storeInfo", {
    //     title: "Store Details",
    //     user,
    //     logo: logoimg,
    //   });
    // }

    return res.render("storeInfo", {
      title: "Store Details",
      user,
    });
  } catch (err) {
    console.log("Error in showing Store Details ==> ", err);
    return res.redirect("back");
  }
};

// Adding store info in mongoDB
module.exports.createStore = async function (req, res) {
  try {
    let store = await Store.create({
      address: req.body.address,
      logo: req.file.filename,
      gst: req.body.gst,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime,
      user: req.user._id,
    });

    let user = await User.findById(req.user._id);

    if (user) {
      user.store = store._id;
      user.save();
    }

    return res.redirect("back");
  } catch (err) {
    console.log("Error in Creating new Store, Error ==> ", err);
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let store = await Store.findById(req.user.store._id);
    store.deleteOne({
      _id: req.user.store._id,
    });

    return res.redirect("back");
  } catch (err) {
    console.log("Error in deleteing Store Info ==> ", err);
    return res.redirect("back");
  }
};
