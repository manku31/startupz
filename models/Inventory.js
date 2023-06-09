const mongoose = require("mongoose");

const addInventorySchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Inventory", addInventorySchema);
module.exports = Inventory;
