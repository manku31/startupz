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
        type: String
    },
    openTime: {
        type : String,
        require: true
    },

    closeTime: {
        type : String,
        require: true
    },

    // whatever post we going to created is link with the user schema

    user : {
        // type is a refrance
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
},{
    timestamps: true
});

const Store = mongoose.model('Store', StoreInfoSchema);
module.exports = Store;