const User = require("../models/Users");
const Store = require("../models/Stores");

// Landing to Store details page
module.exports.storeInfo = function (req, res) {
  return res.render("storeInfo", {
    title: "Store Details",
  });
};

// Adding store info in mongoDB
module.exports.createStore = async function (req, res) {
  try {
    let store = await Store.create({
      address: req.body.address,
      gst: req.body.gst,
      logo: req.body.logo,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime,
    });

    return res.render("dashboad");
  } catch (err) {
    console.log("Error in Creating new Store, Error ==> ", err);
  }
};
