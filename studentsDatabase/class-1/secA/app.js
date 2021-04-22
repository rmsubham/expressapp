const dotenv = require('dotenv')
dotenv.config({path : ('./config.env')})
const express = require('express')
const app = express()
const PORT = process.env.PORT
require('./db/dbconfig')
const route = require('./src/routes/router')

app.use(express.json())
app.use('/one', route)



app.get('/class1', async (req, res) => {
   try{
       res.send(`get request hit from app`)
   }catch(e){console.log(e); }
});


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})


