const mongoose=require("mongoose");


const entitySchemas=new mongoose.Schema({
    drug:{
        type:String,
        required:true
    },
    Expiry:{
        type:Date,
        required:true
    },
    Company_name:{
        type:String,
        required:true
    },
    Prices:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        required:true
    }

},{
    timestamps:false
});

module.exports=mongoose.model("drugs",entitySchemas);