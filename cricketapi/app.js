const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 6000
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


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});