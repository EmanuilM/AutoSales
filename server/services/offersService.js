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

async function getNext(offset) { 
    return await offerModel.find().skip(offset).limit(12);
}

async function edit(id , newData) { 
  return await offerModel.findById(id).updateOne(newData);
}

async function simpleSearch(brand,model) { 
   if(brand === 'Any' && model === 'Any') { 
       return await offerModel.find();
   }else if(brand !== 'Any' && model === 'Any'){
       return await offerModel.find({brand});
   }
}

module.exports = {
    createOffer,
    getAllOffers,
    getDataById,
    getNext,
    edit,
    simpleSearch,
}