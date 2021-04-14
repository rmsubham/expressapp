const express = require('express');
const router = express.Router()
const iccBolwerRanking = require('../models/model')



router.get('/',async (req,res) => {
  try{
    console.log('get request hit ');
    const data = await iccBolwerRanking.find({}).sort({Rank : 1})
     res.status(200).send(data)
  }catch(e){
    console.log('get request having some request');
  }
});

router.post('/', async (req, res) => {
  console.log('post request hit');
  try{ 
    
    const insertdata1 = new iccBolwerRanking(req.body)
    console.log(req.body)
    console.log('post request hit')
    const data1 = await insertdata1.save();
    res.status(201).send(data1)
  }catch(e){
    console.log('post requesr having some error');
  }
})

router.patch('/:id', async  (req, res) => {
  try{
 const _id = req.params.id
console.log(_id)
 const update = await iccBolwerRanking.findByIdAndUpdate(_id,req.body)
 res.status(200).send('data updated')
  }catch(e){
    console.log(e);
  }
  

})


router.get('/:id', async (req, res) => {
  try{
  const _id = req.params.id
   const data = await iccBolwerRanking.findById(_id)
    res.status(200).send(data)

  }catch(e){
    console.log(e);
  }
})

router.delete('/:id', async (req, res) => {
  try{
  const _id = req.params.id
  const data = await iccBolwerRanking.findByIdAndDelete(_id)
  res.status(200).send("data deleted")
  }catch(e){
    console.log(e);
  }
})

module.exports = router;