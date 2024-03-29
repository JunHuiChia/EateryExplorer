const { eateryModel } = require('../models/eateryModel');
const { categoryModel } = require('../models/categoryModel');

async function getAllEatery() {
    return await eateryModel.find().exec();
}

async function saveEatery(eateryData) {
    const newEatery = new eateryModel({
        name: eateryData.name,
        rating: eateryData.rating,
        price: eateryData.price,
        description: eateryData.description,
    });

    const eatery = await newEatery.save();

    return await categoryModel.findByIdAndUpdate(
        eateryData.categoryId,
        { $push: { eatery: eatery._id } },
        { new: true, useFindAndModify: false },
    ).exec();
}

async function deleteEatery(eateryId) {
    try {
        return await eateryModel.findByIdAndDelete(eateryId).exec();
    } catch (error) {
        console.log("Error:", error);
    }
}

module.exports = {
    getAllEatery,
    saveEatery,
    deleteEatery,
}