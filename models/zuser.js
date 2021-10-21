const mongoose = require("mongoose");

var userScheme = new mongoose.Schema({
  title: {
    type: String
  },
  img: {
    type: String,
  },
 href: {
    type: String,
  },
  back:{
    type:String,
  }
});
var User = mongoose.model("User", userScheme);
module.exports = User;
