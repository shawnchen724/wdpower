const mongoose = require("mongoose");

var newsScheme = new mongoose.Schema({
    title: String,
    img: {
        type: String,
        default: '/public/img/'
    },
    content: String,
    author: String,
    time: String,
    click: Number,
    wrapper: String
});

var News = mongoose.model("News", newsScheme);

module.exports = News;