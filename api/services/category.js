const { categoryModel } = require('../models/categoryModel');

async function getAllCategory() {
    return await categoryModel.find().populate('eatery').exec();
}

async function saveCategory(categoryData) {
    console.log(categoryData.items);
    const newCategory = new categoryModel({
        name: categoryData.name,
        eatery: categoryData.eatery,
    });

    const category = await newCategory.save();
    return category;
}


module.exports = {
    getAllCategory,
    saveCategory,
}