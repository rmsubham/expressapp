const mongoose = require('mongoose')



const   dataway = new mongoose.Schema({

     name : {
       type : String,
       required : true
     },
     memberID : {
       type : Number,
      unique : true,
      required : true
     },
  workerGroup : {
    type: String,
    required: true
  },

  perDaySallry : {
    type: Number,
    required: true
  },

  monthlySallry : {
    type: Number,
    unique: true,
    required: true
  },
  weekOf : {
    type : String,
    required : true
  },
  address : {
    type : String,
    required : true
  },
  phone : {
    type : Number,
    required : true
  }
});
exports.teaMembers = mongoose.model('dataway', dataway)