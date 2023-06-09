const mongoose = require('mongoose');

const addCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        require: true
    },

},{
    timestamps: true
});

const Categeory = mongoose.model('Categeory', addCategorySchema);
module.exports = Categeory;