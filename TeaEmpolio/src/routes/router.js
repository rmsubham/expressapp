const express = require('express')
const controlemp = require('../controler/contoroler').controlemp

const router  = express.Router()


router.post('/', controlemp.add)

router.get('/', controlemp.getEmp)

router.delete('/', controlemp.deleteemp)

router.patch('/', controlemp.updateemp)


module.exports = router