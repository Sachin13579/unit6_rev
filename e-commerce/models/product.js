const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{ 
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    reveiws:{
        type:Number,
        required:true
    },
    Address:{
        type:Array,
        reuire:true
    }

},{
    versionKey:false
})

module.exports=mongoose.model("Product",productSchema);