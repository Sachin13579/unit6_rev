const router = require('express').Router();
router.get("/entitytest", (req, res) => {
  res.send("entity test succesfull")
})

// Post REQ

router.post("/userpost", (req, res) => {
    const entityname=req.body.entityname
 res.send("your entityname is"+" "+entityname);
})



module.exports = router;


