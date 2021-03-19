const express = require('express');
const bodyParser = require("body-parser")
const router = require('./src/routes/router')
const app = express();
const port = process.env.port || 7000


app.use(express.json(bodyParser.json))
app.use('/', router)

app.get('/',(req, res) => {
   console.log('this is a app server');
   res.send(`hi this is not a route`)
});

app.listen(port,(err) => {
  if(err){
    console.log(` err to listen to the server`);
  }
  console.log(`server is running on port ${port}`);
})