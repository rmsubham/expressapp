const express = require('express');
const router = express.Router();
const data = require('../students/data')


router.get('/', (req,res) => {
  console.log('this is form router');
  res.send(data);
});
router.get('/:id',(req, res) => {
  console.log('this route will get students detales with id');
let id = req.params.id;
let dataid ={};
        for(let i =0; i < data.students.length; i++){
          if(data.students[i].id == id){
            dataid = data.students[i]
          }
        }
        res.send(dataid);

});
router.post('/', (req, res) => {
  console.log("This route is for posting data its a post request");
  let riciveddata = req.body;
  data.students.push(riciveddata);
  res.send({message : 'data inserted', status : 200})

});
router.put('/:id', (req,res) => {
  let id = req.params.id
  let riciveddata = req.body
  for(let i =0 ; i < data.students.length; i++){
    if(data.students[i].id == id){
        data.students[i] = riciveddata
    }
  }
  res.send({message : ' data is changed', status : 200})
});
router.delete('/:id', ( req, res) => {
  let id = req.params.id;
  let index ;
  for(let i = 0 ; i < data.students.length; i++){
    if(data.students[i] == id ){
      index = i;
      data.students.splice(index, 1)
    }

  }
  res.send({message : "data deleted", status : 200})
})
module.exports = router;