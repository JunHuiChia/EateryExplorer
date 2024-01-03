var express = require('express');
var router = express.Router();
const listModel = require('../models/listModel');

async function saveList(listData) {
    const newList = new listModel({
        name: listData.name,
        category: listData.category,
    });

    const list = await newList.save();
    return list;
}

/* GET users listing. */
router.get('/', async function (req, res) {
    const list = await listModel.find().populate({ 
        path: 'category',
        populate: {
            path: 'eatery',
            model: 'Eatery'
        }
    }).exec();
    console.log(list);
    res.send(list);
});

router.post('/', async function (req, res) {
    const result = await saveList(req.body);
    console.log(result);
    res.send({ result: "success"});
});

module.exports = router;
