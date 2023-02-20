const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
require("dotenv").config()

const cnnection = mongoose.connect(process.env.mongoURL)

module.exports ={cnnection}

