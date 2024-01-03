var express = require('express');
var router = express.Router();
const controllers = require('../controllers/category');

/* GET Get All Category. */
router.get('/', controllers.getAllCategory);

/* POST Add Category. */
router.post('/', controllers.addCategory);

module.exports = router;
