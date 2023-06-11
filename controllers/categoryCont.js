const User = require("../models/Users");
const Store = require("../models/Stores");
const Category = require("../models/Category");
const Subcatageory = require("../models/Subcategory");

module.exports.category = async function (req, res) {
  try {
    let subcatageory = await Subcatageory.find({ user: req.user.id }).populate(
      "category",
      "category"
    );

    return res.render("category", {
      title: "Add Category",
      subcatageory,
    });
  } catch (err) {
    console.log("Error in showing Category Details ==> ", err);
    return res.redirect("back");
  }
};

// Adding store info in mongoDB
module.exports.addCategory = async function (req, res) {
  try {
    let category = await Category.findOne({ category: req.body.category });
    let subCatageory = await Subcatageory.findOne({
      user : req.user.id,
      subcategory: req.body.subcategory,
    });

    if (!category) {
      category = await Category.create({
        category: req.body.category,
      });
    }

    if (subCatageory) {
      console.log("This is already present");
      return res.redirect("back");
    }

    let obj = {
      category: category.id,
      subcategory: req.body.subcategory,
      user: req.user.id,
    };

    let subcategeory = await Subcatageory.create(obj);

    let user = await User.findById(req.user._id);

    if (user) {
      user.subcategeory = subcategeory._id;
      user.save();
    }
    // Subcatageory.save();

    return res.redirect("back");
  } catch (err) {
    console.log("Error in Creating new Store, Error ==> ", err);
  }
};
