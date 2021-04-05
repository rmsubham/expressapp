const express = require('express')
const router =  express.Router()
const iccranking = require('../models/crecket')


router.get('/', async (req, res) => {
  try{
   console.log( ' router get request hit');
   const data = await iccranking.find({}).sort({Rank : 1})
  res.send(data)
  }catch(e){
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  console.log('findById request hit');
try{
  const _id = req.params.id
  const data = await iccranking.findById(_id)
  res.status(200).send(data)

}catch(e){
  console.log(e);
}

})

router.post('/', async (req, res) => {
  console.log('this is router post request')
  console.log(req.body);
    try{
  const insertdata =  new  iccranking(req.body)
     const data = await insertdata.save()
  res.status(201).send(data)
    } catch(e) {
       console.log(e);
    }
})


router.delete('/:id', async (req,res) => {
  console.log('delete request is hit from routrer')
       try{
            const _id = req.params.id
            const data = await iccranking.findByIdAndDelete(_id)
            res.status(200).send('data deleted successfully')
       }catch(e){
         console.log(console.error())
         
       }
})



router.patch('/:id', async (req,res) => {
  console.log('this is a patch request hit from the routr');
  try{
     const _id = req.params.id
  const data = await iccranking.findByIdAndUpdate(_id,req.body)
   res.status(201).send('data up to date')
  } catch(e){
  console.log(e);
  }
})




module.exports = router ;