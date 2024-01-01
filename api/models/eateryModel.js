const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eaterySchema = new Schema({
    name: String,
    rating: Number,
    price: String,
    description: String,
});

module.exports = mongoose.model('Eatery', eaterySchema);