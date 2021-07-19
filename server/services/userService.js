const userModel = require('../models/user');
const offerModel = require('../models/offersModel');

async function getCreatorData(id) { 
   const offer = await offerModel.findById(id);
   const creatorDetails =  await userModel.findById(offer.creator);
   return { 
       email : creatorDetails.email,
       phoneNumber : creatorDetails.phoneNumber,
       username : creatorDetails.username,
       id : creatorDetails._id,
   }
}

async function getCurrentUserData(id) { 
    return await userModel.findById(id);
}

module.exports = { 
    getCreatorData,
    getCurrentUserData,
}