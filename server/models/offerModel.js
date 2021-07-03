const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const offerSchema = new mongoose.Schema({
  brand : { 
      type:String,
      required : true,
  },
   model : { 
      type:String,
      required : true,
  },
   year : { 
      type:String,
      required : true,
  },
   doors : { 
      type:String,
      required : true,
  },
   engine : { 
      type:String,
      required : true,
  },
   condition : { 
      type:String,
      required : true,
  },
   description : { 
      type:String,
      required : true,
  },
  creator : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
    }
})




module.exports = mongoose.model('offer' , offerSchema);