const express = require('express')
const router = express.Router();
const userlist = require('../models/users')


router.get('/a', (req, res) => {
  console.log('the get request is hit')
   res.send(' this is get request from routes')
});

router.post('/', async (req,res) => {
  console.log('post request hit')
 try{
   const adding = new userlist(req.body)
   console.log(req.body)
 const insert = await  adding.save();
   res.status(201).send('data saved')
 }catch(e){
res.send(e)
 }
});

router.get('/', async (req, res) => {
  console.log('get request hit 2')
  try {
    const alluser = await userlist.find({}).sort({age : 1})
    res.send(alluser)
  } catch (e) {
    res.send(e)
  }
});
router.delete('/:id', async (req, res) => {
  console.log('delete request hit 2')
  try {
    const _id = req.params.id
    const alluser = await userlist.findByIdAndDelete(_id)
    res.send(alluser)
  } catch (e) {
    res.send(e)
  }
});

router.patch('/:id', async (req, res) => {
  console.log('patch request hit')
  try{
    const _id = req.params.id
    const data = await userlist.findByIdAndUpdate(_id,req.body)
    res.send(data)

  } catch(e){
      res.status(500).send(e)
  }
})

router.get('/:id', async (req, res) => {

  try{
            const _id = req.params.id
            const getuserid = await userlist.findById(_id)
            res.send(getuserid)
  }catch(e){
    console.log(e);
    res.send(404)
  }
          })
module.exports = router;