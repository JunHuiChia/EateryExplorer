const { categoryModel } = require('../models/categoryModel');
const listModel = require('../models/listModel');

async function getAllCategory() {
    return await categoryModel.find().populate('eatery').exec();
}

async function saveCategory(categoryData) {
    console.log("saveCategory", categoryData);

    const newCategory = new categoryModel({
        name: categoryData.name,
        eatery: categoryData.eatery,
    });

    const category = await newCategory.save();

    return await listModel.findByIdAndUpdate(
        categoryData.listId,
        { $push: { category: category._id } },
        { new: true, useFindAndModify: false },
    ).exec();
}


module.exports = {
    getAllCategory,
    saveCategory,
}