const mongoose = require('mongoose')

const DB = process.env.DATABSE

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then((database) => {
  console.log('database is ready')
}).catch((e) => {console.log(e)})
