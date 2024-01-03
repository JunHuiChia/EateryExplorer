const { listModel } = require('../models/listModel');

async function getAllList() {
    return await listModel.find().populate({ 
        path: 'category',
        populate: {
            path: 'eatery',
            model: 'Eatery'
        }
    }).exec();
}

async function saveList(listData) {
    const newList = new listModel({
        name: listData.name,
        category: listData.category,
    });

    const list = await newList.save();
    return list;
}


module.exports = {
    getAllList,
    saveList,
}