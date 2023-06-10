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
