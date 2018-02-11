const mongoose = require('mongoose'),
        timestamps = require('mongoose-timestamp');

const authorModel = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
        required: true,
    },
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
            index: true,
            required: false,
        }
    ]
});

authorModel.plugin(timestamps);

module.exports = mongoose.model('Author', authorModel);