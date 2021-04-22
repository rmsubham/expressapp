const mongoose =require('mongoose');

const DB = process.env.DATABASE


mongoose.connect(DB,{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}).then(() => {console.log(`the database is ready to use`)
}).catch(() => {console.log(`error in connecting to the data base`)})