const User = require("../models/Users");
const Store = require("../models/Stores");
const Category = require("../models/Category");
const Subcatageory = require("../models/Subcategory");
const Inventory = require("../models/Inventory");

// rendering the inventroy
module.exports.inventory = async function (req, res) {
  try {
    return res.render("inventory", {
      title: "Add Inventory",
    });
  } catch (err) {
    console.log("Error in showing Inventory Details ==> ", err);
    return res.redirect("back");
  }
};

// Api send user chategory and subcategory to ejs
module.exports.category = async function (req, res) {
  try {
    let subcatageory = await Subcatageory.find({ user: req.user.id }).populate(
      "category",
      "category"
    );

    // console.log(subcatageory);

    const data = {};
    subcatageory.forEach((item) => {
      const category = item.category.category;
      if (!data[category]) {
        data[category] = [];
      }
      data[category].push(item.subcategory);
    });

    // console.log(data);

    return res.render("inventory", {
      title: "Add inventory",
      data,
    });
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};

// Api send json data
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

    // console.log(data);

    return res.status(200).json({ data });
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};

// adding inventory to the mongoDB
module.exports.addInventory = async function (req, res) {
  try {
    let inventory = await Inventory.create({
      productname: req.body.productname,
      mrp: req.body.mrp,
      sp: req.body.sp,
      qty: req.body.qty,
      productimg: req.body.productimg,
      subcategory: req.body.subcategory,
      category: req.body.category,
      userid: req.user.id
    });

    return res.redirect("back");
  } catch (err) {
    console.log("Error in adding Inventory Details ==> ", err);
    return res.redirect("back");
  }
};
