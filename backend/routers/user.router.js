
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const userrouter = express.Router()
const {usermodel} = require("../models/model")


userrouter.use(express.json())

userrouter.post("/register",async(req,res)=>{

      const {name, email,gender, password, age, city} =req.body


      try{
          bcrypt.hash(password, 4, async(err, hash) =>{
              // Store hash in your password DB.
              if(err){
                  res.send({"mes":"some err"})
                }else{
                    const user = new usermodel({name, email,gender, password:hash, age, city})
                    
                    await user.save()
                    res.send("registration done")
                }
            });
            
        }catch(err){
            res.send({"mes":"some err","err":err.message})
        }
    
})

userrouter.post("/login",async(req,res)=>{
        try{
            let user = await usermodel.findOne({email:req.body.email})
            let token = jwt.sign({userid:user._id},process.env.secretKEY,{expiresIn:"3h"})
            res.send({name:user.name,token:token})
        }catch(err){
            res.send({"mes":"some err","err":err.message})
        }
})




module.exports ={userrouter}

