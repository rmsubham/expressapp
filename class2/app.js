const dotenv = require('dotenv');
const { Router } = require('express');
dotenv.config({path : './config.env'})
const express = require('express');
const app = express()
const PORT =  process.env.PORT
const router = require('./src/routes/router')



app.use(express.json())
app.use('/', router)

app.get('/', async(req, res) => {
  try{
    res.status(200).send({daat : " the get request  is from the app"})
  }catch(e){
    console.log(e);
  }
})

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
})
require('./src/connect')
