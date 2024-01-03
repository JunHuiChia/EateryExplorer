var express = require('express');
var router = express.Router();
const controllers = require('../controllers/eatery');

router.get('/', controllers.getAllEatery);
router.post('/', controllers.addEatery);

module.exports = router;
