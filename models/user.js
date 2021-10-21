const mongoose = require("mongoose");


var listScheme = mongoose.Schema({
    model:String,
    speed:Number,
    KW:Number,
    oil:Number,
    temperature:String,
    travel:String,
    displacement:Number,
    normKW:Number,
    enOil:String,
    fuOil:Number,
    lube:Number,
    refrigerant:Number,
    suttle:Number,
})

var User = mongoose.model("list_1a1",listScheme);
var User2 = mongoose.model("list_1a2",listScheme);
var User3 = mongoose.model("list_2a1",listScheme);
var User4 = mongoose.model("list_2b1",listScheme);
var User5 = mongoose.model("list_2c1",listScheme);
var User6 = mongoose.model("list_2d1",listScheme);
var User7 = mongoose.model("list_3a1",listScheme);
var User8 = mongoose.model("list_3a2",listScheme);
var User9 = mongoose.model("list_3c1",listScheme);
var User10 = mongoose.model("list_3c2",listScheme);
var User11 = mongoose.model("list_3c3",listScheme);

module.exports = {User,User2,User3,User4,User5,User6,User7,User8,User9,User10,User11};