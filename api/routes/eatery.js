var express = require('express');
var router = express.Router();
const eateryModel = require('../models/eateryModel');

async function saveEatery() {
    const newEatery = new eateryModel({
        name: 'test',
        rating: 2,
        price: "$$",
        description: "This is a test eatery",
    });

    const eatery = await newEatery.save();
    return eatery;
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const eatery = await eateryModel.find().exec();
    console.log(eatery);
    res.send(eatery);
});

module.exports = router;
