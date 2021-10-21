const mongoose = require("mongoose");

var ideaScheme = new mongoose.Schema({
    title: String,
    img: {
        type: String,
        default: '/public/img/'
    },
    ideaImg: {
        type: String,
        default: '/public/img/'
    }
});

var Idea = mongoose.model("Idea", ideaScheme);

module.exports = Idea;