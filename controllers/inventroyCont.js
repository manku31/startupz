const User = require("../models/Users");
const Store = require("../models/Stores");
const Category = require("../models/Category");
const Subcatageory = require("../models/Subcategory");

module.exports.addInventory = async function (req, res) {
  try {
    return res.render("inventory", {
      title: "Add Inventory",
    });
  } catch (err) {
    console.log("Error in showing Inventory Details ==> ", err);
    return res.redirect("back");
  }
};

module.exports.category = async function (req, res) {
  try {
    let subcatageory = await Subcatageory.find({ user: req.user.id }).populate(
      "category",
      "category"
    );

    const data = {};
    subcatageory.forEach((item) => {
      const category = item.category.category;
      if (!data[category]) {
        data[category] = [];
      }
      data[category].push(item.subcategory);
    });

    console.log(data);

    return res.render("inventory", {
      title: "Add inventory",
      data,
    });
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};

module.exports.getCategorys = async function (req, res) {
  try {
    let subcatageory = await Subcatageory.find({ user: req.user.id }).populate(
      "category",
      "category"
    );

    const data = {};
    subcatageory.forEach((item) => {
      const category = item.category.category;
      if (!data[category]) {
        data[category] = [];
      }
      data[category].push(item.subcategory);
    });

    console.log(data);

    return res.status(200).json({data});
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};
