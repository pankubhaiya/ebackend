const express = require("express")
require("dotenv").config()
const {cnnection} = require("./config/db")
const {userrouter} = require("./routers/user.router")
const {followrouter} = require("./routers/follow.router")
const {validator,tokenverify} = require("./meddleware/meddle")

const app  = express()

app.use(express.json())



app.get("/",(req,res)=>{
      res.send("home page")
})
app.use("/user/login",validator)
app.use("/user",userrouter)
app.use(tokenverify)
app.use("/follow",followrouter)



app.listen(process.env.port,async()=>{
         
      try{
         await cnnection
         console.log("mogo is connect to db")
      }catch(err){
         console.log("some err")  
      }

      console.log(`server is running at prot ${process.env.port}`)
})


