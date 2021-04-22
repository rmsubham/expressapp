const express = require('express')
const class2control = require('../controlers/controlers').class2control


const router = express.Router()

router.post('/adddata', class2control.add )

router.get('/getdata', class2control.get )

router.get('/getById/:id', class2control.getById )

router.patch('/updateData/:id', class2control.update )

router.delete('/delete/:id',class2control.delete)

module.exports = router;