const { eateryModel } = require('../models/eateryModel');

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
    return eatery;
}


module.exports = {
    getAllEatery,
    saveEatery,
}