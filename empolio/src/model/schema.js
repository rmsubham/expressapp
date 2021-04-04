const mongoose = require('mongoose')
const { Schema } = mongoose


const empolio = new  mongoose.Schema({
  id : mongoose.Types.ObjectId,
  name : String,
  age : Number,
  gender : String,
  section : String,
  salary : Number,
  
})

module.exports ={'empolio' : empolio}