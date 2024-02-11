var express = require('express');
var router = express.Router();
const controllers = require('../controllers/eatery');

/* GET Get all eatery. */
router.get('/', controllers.getAllEatery);
/* POST Add eatery. */
router.post('/', controllers.addEatery);
/* DELETE Delete eatery. */
router.delete('/:id', controllers.deleteEatery);

module.exports = router;
