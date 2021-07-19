const userModel = require('../models/user');
const offerModel = require('../models/offersModel');

async function getCurrentUser(id) { 
   const offer = await offerModel.findById(id);
   const creatorDetails =  await userModel.findById(offer.creator);
   return { 
       email : creatorDetails.email,
       phoneNumber : creatorDetails.phoneNumber,
       username : creatorDetails.username,
   }
}

module.exports = { 
    getCurrentUser,
}