const express=require("express");
const router=express.Router();
const drugs=require("../models/entity")

router.get("/",async(req,res)=>{

    try{
        const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 10; 
      
      const skip = (page - 1) * pagesize; 
      if(req.query.filter || req.query.sort){
        const filter = req.query.filter;
        const sort = req.query.sort;
        const s = { [sort] : -1 };
        const f = {"Company_Name":filter};
        var entity = await drugs.find(f).sort(s).skip(skip) 
            .limit(pagesize) 
            .lean()
            .exec();
    }
    else{
        var entity = await drugs.find().skip(skip) 
        .limit(pagesize) 
        .lean()
        .exec();
    }
            
            
            
            const totalPages = Math.ceil((await drugs.find().countDocuments()) / pagesize)


       
        res.status(200).send({entity,totalPages});
    }catch(err){
        res.json({message:err});
    }
})

module.exports=router;