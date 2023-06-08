const mongoose = require('mongoose');

const StoreInfoSchema = new mongoose.Schema({
    address: {
        type: String,
        require: true
    },
    gst: {
        type: String,
        require: true
    },
    logo: {
        type: String,
    },
    openTime: {
        type : String,
    },

    closeTime: {
        type : String,
    }
},{
    timestamps: true
});

const Stores = mongoose.model('Stores', StoreInfoSchema);
module.exports = Stores;