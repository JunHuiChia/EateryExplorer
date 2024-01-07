const listModel  = require('../models/listModel');

async function getAllList(params) {
    console.log(params)
    if (params.userId) {
        return await getAllListByUserId(params.userId);
    } else if (params.listId) {
        return await getListByListId(params.listId);
    }

    return "Failed to fetch list";
}

async function getAllListByUserId(userId) {
    return await listModel.find({ owners: [userId]}).populate('category').exec();
}

async function getListByListId(listId) {
    return await listModel.findById(listId).populate({ 
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