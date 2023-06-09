const mongoose = require('mongoose');

const addCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        require: true
    },

},{
    timestamps: true
});

const Catageory = mongoose.model('Catageory', addCategorySchema);
module.exports = Catageory;