const userModel = require('../models/user');

async function getCurrentUser(id) { 
    return await userModel.findById(id);
}

module.exports = { 
    getCurrentUser,
}