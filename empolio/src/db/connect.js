const mongoose = require('mongoose')
const DB = process.env.DATABASE

const option = {
  useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false
}




const client = mongoose.connect(() => { DB,{option}}
).then(() => {console.log('data base conceted')
}).catch((e) => {console.log('server error')})


const db = (client)
