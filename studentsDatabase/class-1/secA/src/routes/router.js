const express = require('express')
const studentscontrole = require('../controlers/controler').studentsContrelr


const router = express.Router()


router.get('/', studentscontrole.get);

router.post('/', studentscontrole.add)

router.patch('/:id', studentscontrole.update)

router.get('/:id', studentscontrole.getById)

router.delete('/:id', studentscontrole.delete)

module.exports = router;