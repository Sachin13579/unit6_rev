const mongoose=require("mongoose");


const entitySchemas=new mongoose.Schema({
    entityname:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

module.exports=mongoose.model("entity",entitySchemas);