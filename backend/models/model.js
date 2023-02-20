const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
  age: Number,
  city: String,
},{
    versionKey:false
});

const personschema=mongoose.Schema({
    title: String,
    body:String,
    device:String,
    no_if_comments:Number
},{
    versionKey:false
})
const followmodel = mongoose.model("follow",personschema)
const usermodel = mongoose.model("user",userSchema)

module.exports={usermodel,followmodel}