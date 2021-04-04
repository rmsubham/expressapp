const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const router = require('../src/routes/router');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const { MongoClient } = require("mongodb");
dotenv.config({path : './config.env'})
require('./config.env')
require('./db/connect')
const PORT = process.env.PORT



app.use(express.json(bodyParser.json))
app.use('/empolio', router)



app.get('/', (req, res) => {
  console.log(' server get hit');
  res.send(' this is from app.js')
});


app.listen(PORT,() => {
  console.log(`server running ${PORT}`);
})