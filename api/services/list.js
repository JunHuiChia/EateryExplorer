const listModel  = require('../models/listModel');

async function getAllList(userId) {
    console.log(userId)
    return await listModel.find({ owners: [userId]}).populate({ 
        path: 'category',
        populate: {
            path: 'eatery',
            model: 'Eatery'
        }
    }).exec();
}

async function createNewList(listData) {
    const newList = new listModel({
        name: listData.name,
        owners: [listData.userId],
        category: listData.category,
    });

    const list = await newList.save();
    return list;
}


module.exports = {
    getAllList,
    createNewList,
}