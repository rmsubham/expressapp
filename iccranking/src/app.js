const  dotenv = require('dotenv')
dotenv.config({path : '../src/config.env'})
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const { urlencoded }= require('body-parser')
const PORT = process.env.PORT
require('./db/connect')
const router = require('../src/routes/router')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use('/', router)



app.use('/', (req, res) => {
       res.send('this is from app.js')
});

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
})






