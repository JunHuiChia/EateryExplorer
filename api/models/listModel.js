var { categoryModel } = require('./categoryModel');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    category: [{type: Schema.Types.ObjectId, ref: 'Category'}],
});

module.exports = mongoose.model('List', listSchema);