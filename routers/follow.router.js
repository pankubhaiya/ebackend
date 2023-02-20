
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const followrouter = express.Router()
const {followmodel} = require("../models/model")


followrouter.use(express.json())

followrouter.post("/add",async(req,res)=>{
    try{
        const newdata = new followmodel(req.body)
        await newdata.save()
        res.send("add succesfully")
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})


followrouter.get("/comment",async(req,res)=>{
    try{
        const newdata = await followmodel.find()
          res.send(newdata)
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})

followrouter.patch("/update/:id",async(req,res)=>{
    try{

        const newdata = followmodel.findByIdAndUpdate({_id:req.params.id},req.body)
          res.send({"mes":"update done"})
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})

followrouter.delete("/delete/:id",async(req,res)=>{
    try{

        const newdata = followmodel.findByIdAndDelete({_id:req.params.id})
          res.send({"mes":"delete done"})
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})

module.exports={followrouter}
