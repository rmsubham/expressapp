const mongoose = require('mongoose');
 
const DB = process.env.DATABSE

mongoose.connect( DB,{
useNewUrlParser : true,
useCreateIndex : true,
useUnifiedTopology : true,
useFindAndModify : false
}).then(() => {console.log('database connection successfull')
}).catch((e) => {console.log('database connection failed')})