const mongoose = require('mongoose')


const bolwerRanking = new mongoose.Schema({
  "Rank": {
          type : Number,
          unique : true,
          required : true
  },
  "Name":{
    type: String,
    required: true
  } ,
     "Country":{
       type: String,
       required: true
     },
  "Rating":{
    type: Number,
    required: true
  }
})


const iccBolwerRanking = mongoose.model("bolwerRanking" , bolwerRanking)


module.exports = iccBolwerRanking;