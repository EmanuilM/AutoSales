const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

async function register(userData) { 
    const {email , phoneNumber , username , password , rePassword} = userData;
    const checkAllFields = Object.values(userData).every(y => y != '');
    if(!checkAllFields) { 
        throw({message:"All fields are required!"});
    }
    if(phoneNumber.length < 10) { 
        throw({message:"Phone number must be at least 10 characters long!"});
    }
    if(username.length < 4) { 
        throw({message:"Username must be at least 10 characters long!"});
    }
    if(password !== rePassword) { 
        throw({message:"Passwords do not match!"});
    }


    const isUserExist = await userModel.findOne({username : username.toLowerCase().trim()});
    if(isUserExist) { 
        throw({message : "This user already exist!"});
    }

    const user = new userModel({email , phoneNumber , username : username.toLowerCase().trim() , password : password.trim()});
    user.save();

    const token = jwt.sign({_id : user._id} , config.SECRET_WORD);
    return token;
}


async function login(userData) { 
    const {username , password} = userData;
    const checkAllFields = Object.values(userData).every(y => y != '');
    if(!checkAllFields) { 
        throw({message : "All fields are required!"});
    }
    const isUserExists = await userModel.findOne({ username: username.toLowerCase().trim() });
    if (!isUserExists) {
        throw ({message :'This user does not exists!'});
    }

    const isPasswordMatch = await bcrypt.compare(password.trim(), isUserExists.password.trim());
    if (!isPasswordMatch) {
        throw ({message :'Invalid Password!'});
    }

    const token = jwt.sign({_id : isUserExists._id} , config.SECRET_WORD);

    return token;
}

module.exports = { 
    register,
    login,
}