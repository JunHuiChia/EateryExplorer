var express = require('express');
var router = express.Router();
const { eateryModel } = require('../models/eateryModel');

async function saveEatery(eateryData) {
    const newEatery = new eateryModel({
        name: eateryData.name,
        rating: eateryData.rating,
        price: eateryData.price,
        description: eateryData.description,
    });

    const eatery = await newEatery.save();
    return eatery;
}

/* GET users listing. */
router.get('/', async function getAllEatery (req, res) {
    const eatery = await eateryModel.find().exec();
    console.log(eatery);
    res.send(eatery);
});

router.post('/', async function addEatery (req, res) {
    const result = await saveEatery(req.body);
    console.log(result);
    res.send({ result: "success"});
});

module.exports = router;
