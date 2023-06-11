const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      require: true,
    },
    mrp: {
      type: Number,
      require: true,
    },
    sp: {
      type: Number,
      require: true,
    },
    qty: {
      type: Number,
      require: true,
    },
    productimg: {
      type: String,
    },
    subcategory: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    storeid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;
