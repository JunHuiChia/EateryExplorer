const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eaterySchema = new Schema({
    name: String,
    rating: Number,
    price: String,
    description: String,
});

const eateryModel = mongoose.model('Eatery', eaterySchema);

module.exports = {
    eateryModel,
    eaterySchema,
}