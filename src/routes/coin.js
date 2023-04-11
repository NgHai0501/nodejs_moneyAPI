const express = require('express')
const router = express.Router()

const addController = require('../app/controllers/coinController')

router.get('/create', addController.create)
router.post('/store', addController.store)
router.get('/:id/update', addController.update);
router.put('/:id', addController.editsave);
router.delete('/:id', addController.delete);




module.exports = router