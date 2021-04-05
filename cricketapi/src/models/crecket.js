const mongoose = require('mongoose');

const criketers = new mongoose.Schema({
    "Rank": {
      type : Number,
      required : true,
      unique : true

    },
    "Name": {
      type : String,
      required : true
    },
    "Country": {
      type : String,
      
    },
    "Rating": {
      type : Number,
      required : true
    },
    event : {
      type  : String,
      default : "icc"
    }
})

const iccranking = mongoose.model("criketers", criketers)

module.exports = iccranking ;