var express = require('express');
var router = express.Router();
const { categoryModel } = require('../models/categoryModel');

async function saveCategory(categoryData) {
    console.log(categoryData.items);
    const newCategory = new categoryModel({
        name: categoryData.name,
        eatery: categoryData.eatery,
    });

    const category = await newCategory.save();
    return category;
}

/* GET Category. */
router.get('/', async function (req, res) {
    const category = await categoryModel.find().populate('eatery').exec();
    console.log(category);
    res.send(category);
});

/* POST Category. */
router.post('/', async function (req, res) {
    const result = await saveCategory(req.body);
    console.log(result);
    res.send({ result: "success"});
});

module.exports = router;
