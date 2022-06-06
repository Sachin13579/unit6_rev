const express=require("express");
const router=express.Router();
const drugs=require("../models/entity")

router.get("/",async(req,res)=>{

    try{
        const entity=await drugs.find().lean().exec();
        res.status(200).send({entity});
    }catch(err){
        res.json({message:err});
    }
})

module.exports=router;