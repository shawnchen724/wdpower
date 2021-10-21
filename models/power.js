const mongoose=require('mongoose');
const developSchema=new mongoose.Schema({
    num:{
        type:String
    },
    title:{
        type:String
    },
    content:[String],
    img:{
        type:[String]
    },
    footer:{
        type:String
    }
});
const Develop=mongoose.model('Develop',developSchema);
module.exports=Develop;