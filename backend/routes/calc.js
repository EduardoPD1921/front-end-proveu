var express = require('express')
var router = express.Router()

const CalcController = require('../controllers/calcController')

router.post('/', CalcController.get_calc)

module.exports = router