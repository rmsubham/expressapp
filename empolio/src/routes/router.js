const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = require('../model/schema');


router.get('/',(req, res) => {
  console.log('get request');
  res.send(`this is from routes get request 01`)
});

router.post('/', (req,res) => {
  console.log(req.body);
  const empolio = new tarastaf(req.body)
  empolio.save()
  res.send(`this is from post routes`)
})



module.exports = router;