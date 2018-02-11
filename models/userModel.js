const mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp');


const userModel = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
    },
    name: {
        first: {
            type: String,
            trim: true,
            required: true,
        },
        last: {
            type: String,
            trim: true,
            required: true,
        },
    },

});

userModel.plugin(timestamps);

module.exports = mongoose.model('User', userModel);