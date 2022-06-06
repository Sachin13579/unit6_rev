const express =require ("express")
const app = express()
const mongoose=require("mongoose")
const dotenv = require("dotenv")
const Drugs=require("./controllers/drug")
dotenv.config()

mongoose.connect( process.env.MONGOURL).then(()=> console.log("connected to db")).catch(err=>console.log(err))

app.use(express.json())
app.use("/drugs",Drugs)

app.listen(process.env.PORT||3000,()=>{
    console.log("I am running")
})
