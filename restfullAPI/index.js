const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser');

const app = express();
const port =process.env.PORT || 5000
require('./db/conn')
const router = require('../restfullAPI/routes/router')
const userlist = require('./models/users')
app.use(express.json(bodyParser.json))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use('/users', router)











app.listen( port, () => {
   console.log(`server is running on port ${port}`)
})