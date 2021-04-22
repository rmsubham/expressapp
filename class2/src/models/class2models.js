const mongoose = require('mongoose');

const schema = new mongoose.Schema({

   roll : {
     type : Number,
     requerd : true,
     unique : true
   },
  name: {
    type: String,
    requerd: true,
    unique: true
  },
  age: {
    type: Number,
    requerd: true,
  },
  gender: {
    type: String,
    requerd: true
  },
  class: {
    type: Number,
    requerd: true
  },
    sec : {
    type: String,
    requerd: true,
  },
  
})


exports.class2models = mongoose.model('schema', schema)