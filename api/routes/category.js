var express = require('express');
var router = express.Router();
const controllers = require('../controllers/category');

/* GET Get All Category. */
router.get('/getAll', controllers.getAllCategory);

/* GET Get Category By CategoryId. */
router.get('/', controllers.getCategoryByCategoryId);

/* POST Add Category. */
router.post('/', controllers.addCategory);

module.exports = router;
