const userModel = require('../models/user');
const offerModel = require('../models/offersModel');
const bcrypt = require('bcrypt');

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

 
async function editUserProfile(data, id) { 
   const user = await userModel.findById(id);
   if(!data.username || !data.email || !data.phoneNumber ) { 
    throw({message : "All filds are required!"});

   }
   if(!data.confirmPassword) { 
    throw({message : "You must to enter your password!"});
   }
   const isValidPassword = await bcrypt.compare(data.confirmPassword , user.password)
   if(!isValidPassword) { 
       throw({message : "Wrong password! Please try again"});
   }
  return {
       username : data.username.trim(),
       email : data.email.trim(),
       phoneNumber : data.phoneNumber.trim(),
   }
 
}

module.exports = { 
    getCreatorData,
    getCurrentUserData,
    editUserProfile,
}