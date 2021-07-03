const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');

async function register(userData) { 
    const {email , phoneNumber , username , password , rePassword} = userData;
    const checkAllFields = Object.values(userData).every(y => y != '');
    if(!checkAllFields) { 
        throw({message : "All fields are required!"});
    }
    if(!username) { 
        throw({message : "Username is required!"});
    }
    if(!password) { 
        throw({message : "Password is required!"});
    }
    if(!rePassword) { 
        throw({message: "You must repeat your password!"});
    }
    if(password !== rePassword) { 
        throw({message : "Passowrd do not match!"});
    }
    if(email.length < 4) { 
        throw({message : "Email must be at least 4 characters long!"});
    }
    if(phoneNumber.length < 4) { 
        throw({message : "Phone number must be at least 10 characters long!"});
    }

    const isUserExist = await userModel.findOne({ username : username.toLowerCase().trim() , password : password.trim()});
    if(isUserExist) { 
        throw({message : "This user already exist!"});
    }

    const user = new userModel({email , phoneNumber , username : username.toLowerCase().trim() , password : password.trim()});
    return  user.save();
   
}


async function login(userData) { 
    const {username , password} = userData;
    if(username === '' && password === '') { 
        throw({message : "All fields are required!"});
    }
    if(!username) { 
        throw({message : "Username is required!"});
    }
    if(!password) { 
        throw({message : "Password is required!"});
    }

    const isUserExists = await userModel.findOne({ username: username.toLowerCase().trim() });
    if (!isUserExists) {
        throw ({message :'This user does not exists!'});
    }

    const isPasswordMatch = await bcrypt.compare(password.trim(), isUserExists.password.trim());
    if (!isPasswordMatch) {
        throw Error('Invalid Password!');
    }

    const token = jwt.sign({_id : isUserExists._id} , config.SECRET_WORD);

    return token;
}

module.exports = { 
    register,
    login,
}