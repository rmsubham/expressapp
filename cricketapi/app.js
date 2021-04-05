const dotenv = require('dotenv')
dotenv.config({path: './src/config.env' })
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT 
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
require('./src/db/conn')
const router = require('./src/routes/icc')



app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())



app.use('/icc',router)


app.get('/cricketapi', (req, res) => {
  res.send('this is app')
})


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});