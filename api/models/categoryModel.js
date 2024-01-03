const { eateryModel } = require('./eateryModel');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    eatery: [{type: Schema.Types.ObjectId, ref: 'Eatery'}],
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = {
    categoryModel,
    categorySchema,
}