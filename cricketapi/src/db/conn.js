const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://monu1:12345@cluster0.sjala.mongodb.net/cricket?retryWrites=true&w=majority',{
useNewUrlParser : true,
useCreateIndex : true,
useUnifiedTopology : true,
useFindAndModify : false
}).then( () => {console.log('database connection successfull')
}).catch((e) => {console.log('database connection failed')})