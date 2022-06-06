const express =require ("express")
const { connect } = require("http2")
const app = express()
const mongoose=require("mongoose")
const dotenv = require("dotenv")
const entityroute=require("./routes/product")
dotenv.config()
mongoose.connect( process.env.MONGOURL).then(()=> console.log("connected to db")).catch(err=>console.log(err))

app.use(express.json())
app.use("/entities",entityroute)

app.listen(process.env.PORT||3000,()=>{
    console.log("I am running")
})
