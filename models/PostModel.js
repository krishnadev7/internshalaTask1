const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    },
    comments:[{
        text: String,
        userId: {type: String}
    }]
})

module.exports = Post = mongoose.model("Post", PostSchema);