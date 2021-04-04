const mongoose = require('mongoose');







mongoose.connect('mongodb+srv://monu1:12345@cluster0.sjala.mongodb.net/empolio?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify: false
}).then(console.log('database connected')).catch((e) => {console.log('database connection faild')})