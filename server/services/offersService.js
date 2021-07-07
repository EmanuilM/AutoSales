const offerModel = require('../models/offersModel');

async function createOffer(data) { 
    // const { brand , model ,  year , doors , engine , condition , description} = data; 
    console.log(data);
    const checkAllFields = Object.values(data).every(y => y != '');
    if(!checkAllFields) { 
        throw({message : "All fields are required!"});
    }
   
    const offer = new offerModel(data);
    offer.save();
}

async function getAllOffers() { 
    return await offerModel.find();
}

module.exports = {
    createOffer,
    getAllOffers,
}