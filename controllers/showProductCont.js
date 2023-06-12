const Inventory = require("../models/Inventory");
const Store = require("../models/Stores");

module.exports.showproducts = async (req, res) => {
  try {
    // console.log(req.params.id);

    const store = await Store.findOne({ user: req.params.id }).populate(
      "user",
      "name businessName email"
    );
    // console.log(store);

    const products = await Inventory.find({ userid: req.params.id });
    // console.log(products);

    return res.render("showProduct", {
      title: "Product",
      products: products,
      store: store,
    });
  } catch (error) {
    console.log(`error in fetching the products form inventory ${error}`);
    return;
  }
};

module.exports.showProductsAjax = async (req, res) => {
  try {
    // console.log(req.params.id + " " + req.params.search);
    const search = req.params.search;
    const regex = new RegExp(search, "i"); // Create a regular expression with 'i' flag for case-insensitive search

    const products = await Inventory.find({
      storeid: req.params.id,
      productname: search, // Use the $in operator to match productName with the regex
    });

    // console.log(products);
    if (req.xhr) {
      return res.status(200).json({
        data: products,
      });
    }
  } catch (error) {
    console.log(`error in fetching the products form inventory ${error}`);
    return;
  }
 
};
