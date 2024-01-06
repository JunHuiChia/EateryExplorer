var express = require('express');
var router = express.Router();
const controllers = require('../controllers/list');

/* GET all lists. */
router.get('/', controllers.getAllList);

/* POST Add list. */
router.post('/', controllers.createNewList);

module.exports = router;
