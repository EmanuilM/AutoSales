const mongoose = require('mongoose');


const offerSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    power: {
        type: String,
        required: true,
    },
    mileage: {
        type: String,
        required: true,
    },
    populatedState: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    doors: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    engineType: {
        type: String,
        required: true,
    },
    categoty: {
        type: String,
        required: true,
    },
    imageIds : [],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
})




module.exports = mongoose.model('offers', offerSchema);