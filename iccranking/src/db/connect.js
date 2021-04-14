const mongoose = require('mongoose')

const DB = process.env.DATABASE

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology:true,
//useFindAndModify:true
}).then((database) => {
  console.log('data base is ready to use ');
}).catch((e) => {
  console.log('keep watching for error or some code is missing database not conncated');
});