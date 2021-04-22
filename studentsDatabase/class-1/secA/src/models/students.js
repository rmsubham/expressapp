const mongoose = require('mongoose');


const Schema = new  mongoose.Schema({

  roll: {
      type : Number,
      requerd : true,
    unique : true
  },
  name: {
    type : String,
     requierd : true,
  },

   age: {
    type: Number,
    requerd: true,
  },
   gender : {
    type: String,
    requerd: true,
  },
  class : {
    type: Number,
    default : 1
  },
  sec : {
    type: String,
    requerd: true,
  },
  attendence : {
    type: [Number],
    requerd: true,
  },
  date : { 
    type: Date, 
    default: Date.now },
});

exports.studentsOne = mongoose.model('schema' , Schema)