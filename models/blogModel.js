const mongoose = require('mongoose'),
    timestamps = require('mongoose-timestamp');

const blogModel = new mongoose.Schema({

    title: {
        type: String
    },
    body: {
        type : String
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        index: true,
        required: true,
    },
    datePublished: {
        type : Date
    },
    category :{
        type : String
    }

});

blogModel.plugin(timestamps);
module.exports = mongoose.model('Blog', blogModel);

