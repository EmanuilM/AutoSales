const offerModel = require('../models/offerModel');

async function createCarOffer(data) { 
    const { brand , model ,  year , doors , engine , condition , description} = data; 
    const checkAllFields = Object.values(data).every(y => y != '');
    if(!checkAllFields) { 
        throw({message : "All fields are required!"});
    }
    if(brand === '') { 
        throw({message : "Brand field is required!"});
    }
    if(model === '') { 
        throw({message : "Model field is required!"});
    }
     if(year === '') { 
        throw({message : "Year field is required!"});
    }
     if(doors === '') { 
        throw({message : "Doors field is required!"});
    }
     if(engine === '') { 
        throw({message : "Engine field is required!"});
    }
    if(condition === '') { 
        throw({message : "Condition field is required!"});
    }
     if(description === '') { 
        throw({message : "Description field is required!"});
    }
    const offerDetails = new offerModel(data);
    offerDetails.save();
}

async function getAllOffers() { 
    return await offerModel.find();
}

module.exports = {
    createCarOffer,
    getAllOffers,
}