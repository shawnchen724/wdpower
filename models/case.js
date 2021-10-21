const mongoose = require("mongoose");

var caseScheme = new mongoose.Schema({
    title: String,
    img: {
        type: String,
        default: '/public/img/'
    },
    content: String,
    img1: {
        type: String,
        default: '/public/img/'
    },
    img2: {
        type: String,
        default: '/public/img/'
    },
    img3: {
        type: String,
        default: '/public/img/'
    }

});

var Case = mongoose.model("Case", caseScheme);

module.exports = Case;