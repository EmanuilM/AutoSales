const offerModel = require('../models/offersModel');
const userModel = require('../models/user');
const cloudinary = require("cloudinary").v2;

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
        condition,
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
        condition,
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

async function getDataById(id) {
    return await offerModel.findById(id);
}

async function getNext(offset , brand , model) {
    const query = {};
    if (brand) {
        query.brand = brand;
    }
    if (model) {
        query.model = model;
    }
    return await offerModel.find(query).skip(offset).limit(12);
}

async function edit(id, newData) {
    return await offerModel.findById(id).updateOne(newData);
}

async function deleteOffer(id, imageIDS) {
    await cloudinary.api.delete_resources(imageIDS);
    return await offerModel.deleteOne({ _id: id });

}

async function getLastOffers() {
    return await offerModel.find().sort(({ _id: -1 })).limit(3);
}

async function getCurrentUserOffers(userID) { 
    const user = await userModel.findOne({_id : userID});
    const offers = await offerModel.find({_id : user.offers});
    return offers;
}

async function advancedSearch() { 
    
}



module.exports = {
    createOffer,
    getAllOffers,
    getDataById,
    getNext,
    edit,
    deleteOffer,
    getLastOffers,
    getCurrentUserOffers,
    advancedSearch
}