const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name :  String,
  gender : String,
  age : Number,
  phone: Number,

});

const userlist = new mongoose.model('userlist', usersSchema)
module.exports = userlist;