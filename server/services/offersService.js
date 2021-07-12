const offerModel = require('../models/offersModel');

async function createOffer(data, userID) {
    const {
        brand,
        model,
        year,
        color,
        doors,
        power,
        mileage,
        populatedState,
        price,
        description,
        transmission,
        engineType,
        category, 
        imageIds,
        imageURLs
    } = data;
    const checkAllFields = Object.values(data).every(y => y != '');
    if (!checkAllFields) {
        throw ({ message: "All fields are required!" });
    }

    const offer = new offerModel({
        brand,
        model,
        year,
        color,
        doors,
        power,
        mileage,
        populatedState,
        price,
        description,
        transmission,
        engineType,
        category,
        imageIds,
        imageURLs,
        creator: userID
    });
   return offer.save();
}

async function getAllOffers() {
    return await offerModel.find();
}

module.exports = {
    createOffer,
    getAllOffers,
}