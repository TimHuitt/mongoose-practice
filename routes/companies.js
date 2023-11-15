const express = require('express');
const router = express.Router();
const companiesCtrl = require('../controllers/companies')


router.get('/', companiesCtrl.index)
// router.get('/details', companiesCtrl.show)
router.get('/new', companiesCtrl.new)
router.post('/', companiesCtrl.create)

module.exports = router;
