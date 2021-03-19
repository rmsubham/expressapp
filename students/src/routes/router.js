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

})


module.exports = router;