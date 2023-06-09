const mongoose = require('mongoose');

const addSubCategorySchema = new mongoose.Schema({
    category: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    subcategory: {
        type: String,
        require: true
    },
    user : {
        // type is a refrance
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
},{
    timestamps: true
});

const Subcatageory = mongoose.model('Subcatageory', addSubCategorySchema);
module.exports = Subcatageory;