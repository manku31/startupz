const mongoose = require("mongoose");

const addSubCategorySchema = new mongoose.Schema(
  {
    subcategory: {
      type: String,
      require: true,
    },
    user: {
      // type is a refrance
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Categeory"
    },
  },
  {
    timestamps: true,
  }
);

const Subcatageory = mongoose.model("Subcatageory", addSubCategorySchema);
module.exports = Subcatageory;
