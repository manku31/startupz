const express = require("express");
const router = express.Router();

const productCont = require("../controllers/showProductCont");

router.get("/showproduct/:id", productCont.showproducts);

router.get("/showProduct/:id/:search", productCont.showProductsAjax);

module.exports = router;
