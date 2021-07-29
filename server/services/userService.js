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
    const userDetails = await userModel.findById(id);
    return { 
        email : userDetails.email,
        username : userDetails.username,
        phoneNumber : userDetails.phoneNumber,
        offers : userDetails.offers,
        id : userDetails._id
    }
}

module.exports = { 
    getCreatorData,
    getCurrentUserData,
}